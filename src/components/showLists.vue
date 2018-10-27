<template>
  <div v-theme:column="'wide'" id='show-lists'>
    <h1>All to do lists</h1>
    <input type='text' v-model='search' placeholder="Search"/>
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
  /* margin: 0 auto will make the output centrallize on the page */
}
.single-list{
  padding: 20px;
  margin:  20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
