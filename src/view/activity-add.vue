<template lang='jade'>
div.activity-add
  form
    input-text(title="活动名称" name="name")
    input-text(title="开始时间" name="start_time")
    h3 封面图片
    input-image-3
    h3 报名二维码
    input-image-4
    input-text(title="活动简介" name="introduction")
    editor(:content="content" ,:auto-height="true")
    .button-container
      button.button(type="button"): span 提交
</template>

<script>
  import inputText from '../components/input-text'
  import inputSelect from '../components/input-select'
  import inputCheck from '../components/input-check'
  import inputImage from '../components/input-image-3'
  import inputImage2 from '../components/input-image-4'
  export default {
    data () {
      return {
      }
    },
    components: {
      inputText,
      inputSelect,
      inputCheck,
      inputImage,
      inputImage2
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
