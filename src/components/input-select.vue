<template lang="pug">
.input-select
		.form-group
			select(name="{{name}}")
				option(value="0") 是
				option(value="1") 否
			label.control-label(for="select") {{title}}
			i.bar
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    'title':String,
    "name":String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
