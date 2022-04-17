<template>
	<view class="share">
		<view class="buttom_list">
			<view class="buttom_wx">
				<view class="toutiao toutiao-weixin1 buttom_icon">
					
				</view>
				<view class="buttom_wx_text">
					微信好友
				</view>
			</view>
			<view class="buttom_wx buttom_poster">
				<view class="toutiao toutiao-haibao buttom_icon"></view>
				<view class="buttom_wx_text">
					生成海报
				</view>
			</view>
		</view>
		<view class="onClock" @click="onClosePoster">
			取消
		</view>
	</view>
</template>

<script>
	export default {
		name:"share",
		data() {
			return {
				
			};
		},
		methods:{
			onClosePoster() {
				console.log('123')
				this.$emit('ClosePoster',false)
			}
		}
	}
</script>

<style lang="scss">
.share{
	width: 100%;
	height: 100%;
	background-color: #FFFFFF;
	display: flex;
	flex-direction: column;
	.buttom_list{
		width: 100%;
		padding-top: 70rpx;
		display: flex;
		.buttom_icon{
			width: 80rpx;
			height: 80rpx;
			border-radius: 80rpx;
			background-color: #46BB36;
			font-size: 50rpx;
			display: flex;
			flex-direction: row;
			align-content: center;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
		}
		.buttom_wx{
			width: 414rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.buttom_poster{
			.buttom_icon{
				background-color: #F9A340 ;
			}
		}
	}
	.onClock{
		margin: 50rpx auto 0;
		width: 90%;
		height: 100rpx;
		border-radius: 10rpx;
		background-color: #F5F5F5;
		text-align: center;
		line-height: 100rpx;
		font-size: 34rpx;
	}
}
</style>
