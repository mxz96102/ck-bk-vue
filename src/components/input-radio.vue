<template lang="pug">
.input-text
		.form-radio
			.radio
				label(v-for="op in options")
					input(type="radio" name="radio" checked)
					i.helper {{op}}
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
  props: ['title','options'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
