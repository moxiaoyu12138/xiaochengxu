<template>
	
	<!-- 优惠券页面 -->
	<view class="coupon">
		<view class="top">
			<view class="text">
				领取优惠券
			</view>
			<view class="close toutiao toutiao-guanbi" @click="onClose"></view>
		</view>
		<view class="coupon_main">
			<view class="top_text">
				每位用户可以领取4张不同的优惠券
			</view>
			<view class="coupon_box">
				<coupon-list></coupon-list>
			</view>
		</view>
	</view>
</template>

<script>
	import CouponList from '../coupon-list/coupon-list.vue'
	export default {
		name:"coupon",
		components:{
			CouponList
		},
		data() {
			return {
				
			};
		},
		methods:{
			onClose() {
				this.$emit('couponClose',false);
			}
		}
	}
</script>

<style lang="scss">
.coupon{
	background-color: #fff;
	display: flex;
	flex-direction: column;
	.top{
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		height: 130rpx;
		font-size: 38rpx;
		background-color: #fff;
		.text{
			margin-left: 80rpx;
			width: 100%;
			text-align: center;
			z-index: 9999;
		}
		.close{
			margin-right: 50rpx;
		}
	}
	.main{
		margin-top: 90rpx;
		padding: 30rpx 30rpx;
		background-color: #F5F5F5;
		.top_text{
			margin-top: 134rpx;
			font-size: 22rpx;
		}
		.coupon_box{
			width: 100%;
			background-color: #fff ;
		}
	}
}
</style>
