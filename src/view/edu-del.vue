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
          button.delete(v-on:click="deleteIt({{one.id}}) 删除
          button.rebuild(v-on:click="rebuildIt({{one.id}}) 恢复
</template>

<script>
  export default {
    data () {var msg;
      formKit.get('/edu',{},function (data) {
        msg=data;
      });
      return {
        allMsg:msg
      }
    },
    methods:{
      deleteIt:(num)=>{
        formKit.delete('/edu/'+num,{});
        return false;
      },
      rebuildIt:(num)=>{
        formKit.patch('/edu/'+num,{});
        return false;
      }
    }
  }
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
