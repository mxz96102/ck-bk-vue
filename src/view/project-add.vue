<template lang='jade'>
div.project-add
  form
    input-text(title="项目名" name="name")
    h3 封面图片
    input-image
    input-text(title="负责人姓名" name="manager_name")
    input-text(title="负责人院系年级" name="manager_info")
    input-text(title="联系邮箱" name="email")
    input-text(title="指导老师" name="instructor")
    input-text(title="项目简介"  name="introduction")
    input-select(title="是否需要资金" name="is_need_money")
    input-select(title="是否需要团队伙伴" name="is_need_partner")
    input-select(title="是否需要场地和设备" name="is_need_equipment")
    h3 标签
    input-check(title="标签",options="无人机;机器人;3D打印;互联网;智能硬件;生物医学;人文科学;其他",name="labels")
    editor(:content="content" ,:auto-height="true")
    .button-container
      button.button(type="button" v-on:click="submit"): span 提交
</template>

<script>
  import inputText from '../components/input-text'
  import inputSelect from '../components/input-select'
  import inputCheck from '../components/input-check'
  import inputImage from '../components/input-image'
  export default {
    data () {
      return {

      }
    }
    ,
  ready(){

  },
    methods:{
      submit:()=>{
        var form=formKit.getFormData();
        var check=document.getElementsByName('labels');
        var labels=[];
        for(var i=0;i<check.length;i++){
          if(check.checked==true){
            labels.push(check.value)
          }
        }
        form.labels=labels;
        form.detail=$('.vue-html5-editor .content').html();
        form.image=document.getElementsByClassName('uploaded-img')[0].src;
        console.log(form);
        formKit.post('/project',form);
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
<style lang="scss" >
  .custom-icon {
    background-size: 100% 100%;
    display: inline-block;
  }
  .custom-icon.text {
    background-image: url(../custom-icons/text.png);
  }
  .custom-icon.font {
    background-image: url(../custom-icons/font.png);
  }
  .custom-icon.align {
    background-image: url(../custom-icons/align.png);
  }
  .custom-icon.list {
    background-image: url(../custom-icons/list.png);
  }
  .custom-icon.color {
    background-image: url(../custom-icons/color.gif);
  }
  .custom-icon.eraser {
    background-image: url(../custom-icons/eraser.gif);
  }
  .custom-icon.full-screen {
    background-image: url(../custom-icons/full-screen.gif);
  }
  .custom-icon.hr {
    background-image: url(../custom-icons/hr.gif);
  }
  .custom-icon.image {
    background-image: url(../custom-icons/image.gif);
  }
  .custom-icon.link {
    background-image: url(../custom-icons/link.gif);
  }
  .custom-icon.table {
    background-image: url(../custom-icons/table.gif);
  }
  .custom-icon.undo {
    background-image: url(../custom-icons/undo.gif);
  }
  .custom-icon.unlink {
    background-image: url(../custom-icons/unlink.gif);
  }
  .custom-icon.info {
    background-image: url(../custom-icons/info.png);
  }

  form>h3{
    font-size: 0.6rem;
    color: gray;
    top: -0.75rem;
    left: 0;
    margin: 0 0 5px 0;
    font-weight: normal;
  }

  .vue-html5-editor{
    width: 800px;
    height:300px;

    .content{
      font-size: 16px !important;
      text-indent: 2em;
      div{
        font-size: 16px !important;
      }
      h1{
        font-size: 18px !important;
        text-indent:0;
      }
      h2{
        font-size: 16px !important;
        text-indent:0;
      }
    }
  }
</style>
