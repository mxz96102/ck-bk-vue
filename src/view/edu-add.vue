<template lang='jade'>
div.edu-add
  form
    input-text(title="名称" name="name")
    input-text(title="主讲人" name="info")
    input-text(title="创客简介")
    .video-list
      input(type="text").video-info
      input(type="text").video-info
      input(type="text").video-info
      a(v-on:click="addList") 添加
    table
      tr
        td {{one.number}}
        td {{one.url}}
        td {{one.name}}
    .button-container
      button.button(type="button"): span 提交
</template>

<script>
  import inputText from '../components/input-text'
  import inputSelect from '../components/input-select'
  import inputCheck from '../components/input-check'
  import inputImage from '../components/input-image'

  var __this=this;

  export default {
    data () {
      return {
        vlist:{number:"序号",name:"名字",url:"地址"}
      }
    },
    components: {
      inputText,
      inputSelect,
      inputCheck,
      inputImage
    },
    methods:{
      addList:()=>{
        var list=document.getElementsByClassName('video-info');
        console.log(data());
        data.vlist.push({number:list[0].value,name:list[1].value,url:list[2].value});
        return false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
