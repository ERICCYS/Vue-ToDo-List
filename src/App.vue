<template>
  <div>
    <!-- <add-list></add-list> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue';
import addList from './components/addList.vue';
import showLists from './components/showLists.vue';
import singleList from './components/singleList.vue';
export default {
  components: {
    'app-header' : header,
    'add-list' : addList,
    'show-list': showLists,
    'single-list': singleList
  },
  data () {
    return {

    }
  },

}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
