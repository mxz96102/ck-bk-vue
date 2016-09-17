<template lang='jade'>
div.project-del
  table
    thead
      tr
        th 序号
        th 添加人
        th 操作
    tbody
      tr(v-for="one in allMsg")
        th {{one.name}}
        th {{one.uploader}}
        th
          button.delete() 删除
          button.up() 上移
          button.down() 下移
</template>

<script>
  export default {
    data () {
      return {
        allMsg:[{name:"aaa",uploader:"mmm",alter_time:"2015-14-1"},{name:"aaa",uploader:"mmm",alter_time:"2015-14-1"},{name:"aaa",uploader:"mmm",alter_time:"2015-14-1"},{name:"aaa",uploader:"mmm",alter_time:"2015-14-1"}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
