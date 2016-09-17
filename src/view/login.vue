<template lang='jade'>
div.login
  form
    .form-group
      input(type="input" name="user" required)
      label.control-label(for="input") 用户名
      i.bar
    .form-group
      input(type="password" name="passwd" required)
      label.control-label(for="input") 密码
      i.bar
  .button-container
    button.button.loginButton(type="button"): span 登陆

</template>

<script>
  import inputText from '../components/input-text'

export default {
  data () {
    return {

    }
  },
  components:{
    inputText
  },
  ready () {
    var __this=this;
    document.getElementsByClassName('loginButton')[0].onclick=()=>{
      let form=document.getElementsByTagName('form')[0];
      var user=form.user.value,passwd=form.passwd.value;
      $.ajax('/api/v1/project',{
        data:{
          student_number: user ,
          password: passwd ,
          key: ""
        },
        method:"POST"
        ,
        success:(data)=>{
          __this.$cookie.set('token',data.auth);
      },
        }
      )
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
