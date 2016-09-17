<template lang='jade'>
div.project-add
  form
    input-text(title="姓名" name="name")
    input-text(title="院系年级" name="info")
    h3 封面图片
    input-image-2
    input-text(title="联系方式" name="contact")
    input-text(title="主要项目"  name="experience")
    input-text(title="创客简介")
    editor(:content="content" ,:auto-height="true")
    .button-container
      button.button(type="button"): span 提交
</template>

<script>
  import inputText from '../components/input-text'
  import inputSelect from '../components/input-select'
  import inputCheck from '../components/input-check'
  import inputImage from '../components/input-image-2'
  export default {
    data () {
      return {
      }
    },
    components: {
      inputText,
      inputSelect,
      inputCheck,
      inputImage
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
