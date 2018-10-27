<template>
  <div id="single-list">
    <h1>{{list.title}}</h1>
    <article>{{list.content}}</article>
    <p>Author: {{list.author}}</p>
    <ul>
      <li v-for="category in list.categories">
        {{category}}
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  data(){
    return{
      id: this.$route.params.id,
      list:{}
    }
  },
  created(){
    this.$http.get('https://eric-to-do-list.firebaseio.com/lists/' + this.id + '.json').then(function(data){
      // console.log(data);
      return data.json()

    }).then(function(data){
      this.list = data;
    });
  }
}
</script>

<style>
#single-list{
    max-width: 800px;
    margin-left: 300px;
    align-items: center;
    font-family: 'Mali', cursive;
}
</style>
