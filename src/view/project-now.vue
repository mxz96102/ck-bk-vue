<template lang='jade'>
div.project-now
  table
    thead
      tr
        th 上传时间
        th 名字
        th 最近修改人
        th 修改时间
        th 点击查看
        th 操作
    tbody
      tr(v-for="one in allMsg")
        th {{one.submit_time}}
        th {{one.name}}
        th {{one.uploader}}
        th {{one.alter_time}}
        th
          button.delete() 删除
          button.rebuild() 添加至精华
          button.change() 修改
</template>

<script>
  export default {
    created(){
      var __this=this;
      formKit.get('/project',{},function (data) {
        __this.allMsg=data;
      });
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
