<template>
	<view class="u-numberbox">
		<u-number-box v-model="value" @change="valChange"></u-number-box>
	</view>
</template>

<script>
	export default {
		name:"NumberBox",
		data() {
			return {
				value: 0
			};
		},
		methods:{
			valChange(e) {
				console.log('当前值为: ' + e.value)
			}
		}
	}
</script>

<style lang="scss">

</style>
