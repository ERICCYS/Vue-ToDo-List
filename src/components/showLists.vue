<template>
  <div v-theme:column="'wide'" id='show-lists'>
    <h1>All to do lists for Eric</h1>
    <input class="search" type='text' v-model='search' placeholder="Search for a to do list..."/>
    <div v-for="list in filteredLists" class="single-list">
      <router-link v-bind:to="'/list/' + list.id">
        <h2 v-rainbow>{{list.title | to-uppercase}}</h2>
      </router-link>
      <article>
        {{list.content | sinppet}}
      </article>
    </div>
  </div>
</template>

<script>
import searchMixins from '../mixins/searchMixins';
export default {
  data () {
    return {
      lists:[],
      search: ''
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://eric-to-do-list.firebaseio.com/lists.json').then(function(data){
        return data.json();
      }).then(function(data){
        var listArray = [];
        for (let key in data){
          console.log(key);
          console.log(data[key]);
          data[key].id = key; //Assign an id to the every piece of data.
          listArray.push(data[key]);
        }
        console.log(listArray);
        this.lists = listArray;
      })

  },
  computed: {

  },
  filters:{
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el,binding,vnode) {
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixins]
}
</script>
<style>
#show-lists{
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Mali', cursive;
  /* margin: 0 auto will make the output centrallize on the page */
}
input{
  width: 100%;
  height: 25px;
  font-family:  'Mali', cursive;
  font-size: 20px;
}
.single-list{
  padding: 20px;
  margin:  20px 0;
  box-sizing: border-box;
  background: #eee;
}
.single-list h2{
  margin-top:10px;
  font-size: 30px;
}
.single-list article{
  margin-top:10px;
  font-size: 20px;
}
</style>
