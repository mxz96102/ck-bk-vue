<template lang="pug">
  div.app
    div.nav
    div.main
      ul.menu
        li.menu-first 项目秀
          ul
            li.menu-se
              a(v-link="{name:'project-add'}") 添加项目
            li.menu-se
              a(v-link="{name:'project-now'}") 当前项目
            li.menu-se
              a(v-link="{name:'project-del'}") 已删除项目
        li.menu-first 创客秀
          ul
            li.menu-se
              a(v-link="{name:'show-add'}") 添加项目
            li.menu-se
              a 当前项目
            li.menu-se
              a 已删除项目
        li.menu-first 日常活动
          ul
            li.menu-se
              a(v-link="{name:'activity-add'}") 添加项目
            li.menu-se
              a 当前项目
            li.menu-se
              a 已删除项目
        li.menu-first 创客教育
          ul
            li.menu-se
              a(v-link="{name:'edu-add'}") 添加项目
            li.menu-se
              a 当前项目
            li.menu-se
              a 已删除项目
        li.menu-first 首页管理
          ul
            li.menu-se
              a 管理banner
            li.menu-se
              a 管理精选项目
            li.menu-se
              a 管理精选创客
        li.menu-first 系统管理
          ul
            li.menu-se
              a 添加管理员
      router-view.router
</template>

<script>
  import Cropper from './directives/Cropper'

export default {
  directives: {
    Cropper
  },
  data () {
    return {
      cropOptions: {
        viewMode: 0,
        zoomable: false
      },
      token:'',
    }
  }
}
</script>

<style lang="scss">

html {
  width: 100vw;
  min-width: 990px;
}

*{
  list-style: none;
  margin: 0;
  padding:0;
  font-family: "Microsoft YaHei",Arial,Helvetica,sans-serifsans-serif;
}

a{
  text-decoration: none;
  color: #090f52;
  cursor: pointer;
}

body {
  width: 100vw;
  min-width: 990px;
  background: #F1FAEE;
}

  .nav{
    height: 100px;
    width: 100%;
    background: #A8DADC;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .main{
    width: 90vw;
    min-width: 980px;
    min-height: 780px;
    height:auto;
    margin:45px auto 0 auto;
    background:  linear-gradient(0deg,#F1FAEE,rgba(255,255,255,0.77));
    border-radius: 10px;
    position: relative;
    z-index: 3;
    .menu{
      float: left;
      width: 120px;
      height: 600px;
      box-sizing: border-box;
      padding: 0 0 0 20px;
      margin: 55px 0 0 0;
      border-right: 2px dashed rgba(69,123,157,0.5);
      .menu-first{
        font-size: 15px;
        margin: 20px 0 0 0;
        li{
          font-size: 12px;
          margin: 5px 0 0 10px;
        }
      }
    }
  }
  .router{
    width: 85%;
    float: left;
    padding:5px 0 0 20px;
  }

</style>
