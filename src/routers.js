import addList from './components/addList.vue';
import showLists from './components/showLists.vue';
import singleList from './components/singleList.vue';

export default[
  {path: '/Vue-ToDoList/', component: showLists},
  {path: '/Vue-ToDoList/add', component: addList},
  {path:'/Vue-ToDoList/list/:id',component: singleList}
]
