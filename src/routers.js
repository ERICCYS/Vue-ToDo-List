import addList from './components/addList.vue';
import showLists from './components/showLists.vue';
import singleList from './components/singleList.vue';

export default[
  {path: '/', component: showLists},
  {path: '/add', component: addList},
  {path:'/list/:id',component: singleList}
]
