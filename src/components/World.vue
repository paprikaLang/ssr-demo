<template>
  <h2>Route world params id: {{ id }}</h2>
</template>
<script>
export default {
	name: 'hello',
	data() {
		return {
			id: this.$route.params.id
		}
	}
}
</script>
<style lang='css' scoped></style>