<template>
  <div id='add-list'>
    <h1>Add a To Do List</h1>
    <form v-if="!submitted">
      <label>To Do List Title:</label>
      <input type="text" v-model.lazy="list.title" required />
      <label>To do List Content:</label>
      <textarea v-model.lazy="list.content"></textarea>
      <div id="checkboxes">
        <label>Academy</label>
        <input type="checkbox" value="academy" v-model="list.categories"/>
        <label>Project</label>
        <input type="checkbox" value="project" v-model="list.categories"/>
        <label>Living</label>
        <input type="checkbox" value="living" v-model="list.categories"/>
        <label>Others</label>
        <input type="checkbox" value="others" v-model="list.categories"/>
      </div>
      <label>Author:</label>
      <select v-model="list.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <button class="add-post" v-on:click.prevent="post">Add the list</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for Submitting</h3>
    </div>
    <div id="preview">
      <h3>Preview list</h3>
      <p>To Do List title: {{ list.title }}</p>
      <p>To Do content:</p>
      <p>{{list.content}}</p>
      <p>List Categories:</p>
      <ul>
        <li v-for="category in list.categories">{{ category }}</li>
      </ul>
      <p>List author: {{list.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {
        title: '',
        content: '',
        categories:[],
        author:'',
      },
      authors: ['Eric Ma'],
      submitted: false
    }
  },
  methods: {
    post: function() {
      this.$http.post('https://eric-to-do-list.firebaseio.com/lists.json',this.list
    ).then(function(data) {
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style>
#add-list *{
  box-sizing: border-box;
}
#add-list {
  margin: 20px auto;
  max-width: 800px;
  font-family: 'Mali', cursive;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type='text'], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
form{
  font-size: 20px;
}

select {
  width: 150px !important;
  height: 35px;
}

.add-post {
  height: 35px;
  font-size: 20px;
  background-color: skyblue;
  font-family: 'Mali', cursive;
  border-width: 3px;
  border-radius: 3px;
}
#preview {
  font-size: 20px;
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes {
  /* align-items: center; */
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
}
#checkboxes input {
  display: inline-block;
  width: 5%;
  height: 30px;
  align-items: left;
  /* font-size: 18px; */
}
#checkboxes label {
  display: inline-block;
  text-align: center;
  width: 15%;
  height: 30px;
  /* margin-top: 10px; */
  /* margin-bottom: 10px; */
}
</style>
