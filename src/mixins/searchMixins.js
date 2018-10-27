// This file store the commonly used codes.
export default{
  computed:{
    filteredLists: function(){
      return this.lists.filter((list) => {
        return list.title.match(this.search);
      });
    }
  }
}
