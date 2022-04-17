<template>
	<view class="main">
		<!-- 头部用户信息栏 -->
		<view class="user_info">
			<view class="top">
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
			
			<!-- 会员消费栏 -->
			<view class="vip">
				<view class="vip_top">
					<view class="vip_left">
						<view class="toutiao toutiao-vip5 vip_icon"></view>
						<view class="type">
							{{this.userInfo.type}}
						</view>
					</view>
					<view class="right">
						{{this.userInfo.grade_inf}}
					</view>
					
				</view>
				<view class="progress">
					<view class="progress_top">
						<view class="line"></view>
					</view>
					<view class="text">
						<view class="text_box" v-for="(item,index) in numList" :key="index">
							<view class="text_top"></view>
							<view class="text_center">
								{{item.name}}
							</view>
							<view class="text_bottom">
								{{item.type}}
							</view>
						</view>
						
					</view>
				</view>
			</view>
		</view>
		
		<!-- 优惠卷，积分栏 -->
		<view class="coupon">
			<view class="coupon_inf"  @click="gotoCoupon">
				<view class="number">
					{{this.coupon.coupon}}
				</view>
				<view class="name">
					优惠券
				</view>
			</view>
			<view class="coupon_inf">
				<view class="number">
					{{this.coupon.coupon}}
				</view>
				<view class="name">
					有效积分
				</view>
			</view>
		</view>
		<!-- 我的订单栏 -->
		<view class="order">
			<view class="top">
				<view class="top_left">
					我的订单
				</view>
				<view class="top_right">
					<view class="text">
						查看全部
					</view>
					<u-icon name="arrow-right"  size="18"></u-icon>
				</view>
			</view>
			
			<view class="icon_item">
				<view class="icon_lists">
					<view class="toutiao toutiao-yinhangka u-icon__img"></view>
					<view class="text">待付款</view>
				</view>
				<view class="icon_lists">
					<view class="toutiao toutiao-huoche u-icon__img"></view>
					<view class="text">代发货</view>
				</view>
				<view class="icon_lists">
					<view class="toutiao toutiao-daishouhuo u-icon__img"></view>
					<view class="text">待收货</view>
				</view>
				<view class="icon_lists">
					<view class="toutiao toutiao-tuihuoshouhou u-icon__img"></view>
					<view class="text">退货/售后</view>
				</view>
			</view>
		</view>
		<!-- 活动栏 -->
		<view class="activity ">
			
			<view class="icon_lists" @click="gotoCoupon">
				<view class="toutiao toutiao-youhuiquan u-icon__img" style="color: red;"></view>
				<view class="text">优惠券</view>
			</view>
			<view class="icon_lists">
				<view class="toutiao toutiao-choujiang1 u-icon__img" ></view>
				<view class="text">抽奖</view>
			</view>
			<view class="icon_lists">
				<view class="toutiao toutiao-qiandao u-icon__img"></view>
				<view class="text">签到</view>
			</view>
			<view class="icon_lists">
				<view class="toutiao toutiao-kefu u-icon__img"></view>
				<view class="text">客服</view>
			</view>
			<view class="icon_lists">
				<view class="toutiao toutiao-youhuiquan u-icon__img" style="color: red;"></view>
				<view class="text">优惠券</view>
			</view>
			<view class="icon_lists">
				<view class="toutiao toutiao-choujiang1 u-icon__img" ></view>
				<view class="text">抽奖</view>
			</view>
			<view class="icon_lists">
				<view class="toutiao toutiao-qiandao u-icon__img"></view>
				<view class="text">签到</view>
			</view>
			<view class="icon_lists">
				<view class="toutiao toutiao-kefu u-icon__img"></view>
				<view class="text">客服</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coupon:{
					coupon:'0',
					integral:'0'
				},
				numList: [
					{
						name:0,
						type:'普卡'		
					}, 
					{
						name:1500,
						type:'金卡'
					},
					{
						name:6000,
						type:'黑卡'
					},
					{
						name:10000,
						type:'钻石'
					}
				
				],
				userInfo:{
					pic:'http://xiaoyuaichitang.xyz/view.php/3539b65aa04b21b96b6124357cf75877.jpg',
					nickname:'小雨',
					time: '2023-4-11过期',
					type:'普通会员',
					grade:'0',
					grade_inf:'再消费1500元即可升级'
				},
				icon: [
					{
						name: 'vip',
						src:'../../static/icon/vip5.png'
					}
				]
			};
		}
		,methods:{
			gotoCoupon() {
				uni.navigateTo({
					url:'components/coupon/coupon'
				})
			}
		}
	}
</script>

<style lang="scss">

uni-page-body{
	height: 100%;
}
.main{
	background-color: #F2F2F2;
	width: 100%;
	height: 100%;
	.user_info{
		background-color: #FFF;
		width: 100%;
		height: 430rpx;
		overflow: hidden;
		border-bottom: 8rpx solid #FFD6A2;
		.top{
			padding: 40rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.left{
			display: flex;
			width: 70%;
			height: 100rpx;
			.user_right{
				margin-left: 40rpx;
				.nick_name{
					font-size: 35rpx;
				}
				.time{
					margin-top: 5rpx;
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
		margin: 40rpx 20rpx;
		padding: 30rpx 20rpx;
		width: 96%;
		height: 220rpx;
		border-radius: 20rpx;
		background-color: #3A3C44;
		color: #fff;
		flex-direction: column;
		.vip_top{
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 50rpx;
			.vip_left{
				display: flex;
			}
			.type{
				line-height: 50rpx;
				font-size: 32rpx;
				color: #F9C786;
			}
			.right{
				line-height: 50rpx;
				font-size: 16rpx;
				color: #BFBFBF;
			}
		}
		.progress{
			margin-top:10rpx ;
			padding-left: 40rpx;
			color: #000000;
			width: 100%;
			height: 80rpx;
			color: #BFBFBF;
			.progress_top{
				display: flex;
				justify-content: center;
				.line{
					
					width: 84%;
					margin-top: 16rpx;
					height: 4rpx;
					background-color: #fff;
				}
				
			}
			.text{
				width: 100%;
				height: 60rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.text_box{
					width: 100rpx;
					height: 100rpx;
					font-size: 12rpx;
					display: flex;
					text-align: center;
					flex-direction: column;
					align-items: center;
					&:first-child{
						color: #F9C786;
						.text_top{
							background-color:#F9C786 ;
						}
					}
					.text_top{
						margin-top: -6rpx;
						width: 10rpx;
						height: 10rpx;
						border-radius: 10rpx;
						background-color: #fff;
					}
				}
			}
		}
		
	}
	.vip_icon{
		color: #F9C786;
		font-size: 60rpx;
	}
	.coupon{
		height: 120rpx;
		margin-top: 14rpx;
		background-color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		.coupon_inf{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	.order{
		height: 250rpx;
		margin-top: 14rpx;
		background-color: #fff;
		.top{
			width: 100%;
			height: 20rpx;
			padding-top: 34rpx;
			display: flex;
			justify-content: space-between;
			.top_left{
				margin-left: 40rpx;
				font-size: 28rpx;
			}
			.top_right{
				padding-top: 20rpx;
				margin-right: 20rpx;
				display: flex;
				align-items: center;
				color: #BFBFBF;
				font-size: 24rpx;
				
			}
		}
		.icon_item{
			margin-top: 40rpx;
			display: flex;
			.icon_lists{
				width: 200rpx;
				height: 90rpx;
				text-align: center;
				line-height: 90rpx;
				font-size: 18rpx;
				.u-icon__img{
					margin-top: 20rpx;
					font-size: 50rpx;
				}
				.text{
					margin-top: -30rpx;
					.text_box{
						height: 100rpx;
						width: 100rpx;
						background-color: skyblue;
					}
				}
			}
		}
	}
	.activity{
		margin-top: 14rpx;
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 40rpx;
		.icon_lists{
			margin-top: 40rpx;
			margin-left: 30rpx;
			width: 150rpx;
			height: 90rpx;
			display: flex;
			align-items: center;
			flex-direction: column;
			font-size: 18rpx;
			.u-icon__img{
				font-size: 50rpx;
			}
			.text{
				text-align: center;
				margin-top: 20rpx;
			}
		}
	}
	
}
</style>
