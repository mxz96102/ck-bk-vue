<template lang="pug">
.input-check
  .form-group
    .checkbox(v-for="op in options")
      label
        input(type="checkbox",value="{{$index}}",name="{{name}}")
        i.helper
        | {{op}}
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    'title':String,
    'options':{coerce: function (val) {
      return val.split(';') ;// 将 JSON 字符串转换为对象
    }},
    'name':String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
