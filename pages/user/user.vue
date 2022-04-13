<template>
	<view class="main">
		<view class="user_info">
			<view class="left">
				<img :src="this.userInfo.pic" class="img">
				<view class="user_right">
					<view class="nick_name">
						{{this.userInfo.nickname}}
					</view>
					<view class="time">
						{{this.userInfo.time}}
					</view>
				</view>
			</view>
			
			<view class="right">
				<u-icon name="arrow-right"  size="28"></u-icon>
			</view>
		</view>
		
		<view class="vip">
			<view class="toutiao toutiao-vip5 vip_icon"></view>
			<view class="type">
				{{this.userInfo.type}}
			</view>
			<view class="">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{
					pic:'http://xiaoyuaichitang.xyz/view.php/3539b65aa04b21b96b6124357cf75877.jpg',
					nickname:'小雨',
					time: '2023-4-11过期',
					type:'普通会员'
				},
				icon: [
					{
						name: 'vip',
						src:'../../static/icon/vip5.png'
					}
				]
			};
		}
	}
</script>

<style lang="scss">

uni-page-body{
	height: 100%;
}
.main{
	width: 100%;
	height: 100%;
	.user_info{
		padding: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 300rpx;
		.left{
			display: flex;
			width: 70%;
			height: 100rpx;
			.user_right{
				margin-left: 40rpx;
				.nick_name{
					font-size: 40rpx;
				}
				.time{
					margin-top: 20rpx;
					color: #959595;
					font-size: 20rpx;
				}
			}
			.img{
				width: 100rpx;
				height: 100rpx;
				border-radius: 100rpx;
			}
		}
		
	}
	.vip{
		display: flex;
		margin-left: 15rpx;
		padding: 30rpx;
		width: 96%;
		height: 260rpx;
		border-radius: 20rpx;
		background-color: #3A3C44;
		color: #fff;
		.type{
			line-height: 50rpx;
			font-size: 35rpx;
			color: #F9C786;
		}
		
	}
	.vip_icon{
		color: #F9C786;
		font-size: 60rpx;
	}
}
</style>
