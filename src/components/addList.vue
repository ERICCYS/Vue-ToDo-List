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
      <button v-on:click.prevent="post">Add the list</button>
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
  max-width: 500px;
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
  font-size: 16px;
}

select {
  width: 150px !important;
}

#preview {
  font-size: 16px;
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display: inline-block;;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
