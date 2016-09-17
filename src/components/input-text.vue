<template lang="pug">
.input-text
		.form-group
			input(type="text",name="{{name}}",value="{{value}}"  required)
			label.control-label(for="input") {{title}}
			i.bar
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  props: ['title',"name","value"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
