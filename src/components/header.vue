<template>
  <nav>
    <ul>
      <li><router-link to="/Vue-ToDoList/" exact>To Do List For Eric</router-link></li>
      <li><router-link to="/Vue-ToDoList/add" exact>Let Eric Do Something</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
    height: 50px;
    vertical-align: center;
}
li{
    display: inline-block;
    margin: 0 10px;
    margin-top: 10px;
    font-size: 26px;
    font-family: 'Mali', cursive;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: skyblue;
    padding: 14px 0;
    margin-bottom: 40px;
    height: 50px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>
