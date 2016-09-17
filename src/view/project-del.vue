<template lang='jade'>
div.project-del
  table
    thead
      tr
        th 名字
        th 最近修改人
        th 修改时间
        th 操作
    tbody
      tr(v-for="one in allMsg")
        th {{one.name}}
        th {{one.uploader}}
        th {{one.alter_time}}
        th
          button.delete(v-on:click="deleteIt({{one.id}})") 删除
          button.rebuild(v-on:click="rebuildIt({{one.id}})") 恢复
</template>

<script>
  export default {
    data () {
      var msg;
      formKit.get('/project',{},function (data) {
        msg=data;
      });
      return {
        allMsg:msg,
      }
    },
    methods:{
      deleteIt:(num)=>{
        formKit.delete('/project/'+num,{});
        return false;
      },
      rebuildIt:(num)=>{
        formKit.patch('/project/'+num,{});
        return false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  table{
    width: 400px;
    tr{
      width: 100%;
      height:30px;
      font: 25px normal black ;
    }
  }

</style>
