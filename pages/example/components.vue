<template>
	<view class="main">
		<!-- 顶部轮播图 -->
		<view class="wrap" >
			<u-swiper :list="list" mode="rect"  class="content" ></u-swiper>
		</view>
		<!-- // 商品信息 -->
		<view class="goods_inf">
			<view class="left">
				<view class="title">
					{{this.goos_inf.title}}
				</view>
				<view class="goods_inf_number">
					货号：{{this.goos_inf.number}}
				</view>
				<view class="goods_inf_price">
					<u-icon name="rmb"></u-icon>
					{{this.goos_inf.price}}
				</view>
			</view>
		</view>
		
		<!-- 服务 -->
		<view class="server">
			<view class="server_coupon">
				<view class="server_coupon_left">
					<text>领券</text>
				</view>
				<view class="server_coupon_right">
					<view class="coupon" v-for="item in serverCoupon">
						{{item.name}}
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="server_coupon">
				<view class="server_coupon_left">
					<span>已选</span>
				</view>
				<view class="server_coupon_right">
					<view class="u-size-default">
						{{this.size.name}},
					</view>
					<view class="u-size-default">
						{{this.size.size}},
					</view>
					<view class="u-size-default">
						{{this.size.number}}件
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="server_coupon">
				<view class="server_coupon_left">
					<span>服务说明</span>
				</view>
				<view class="server_coupon_right">
					<view class="server_coupon_right_text" v-for="item in ServiceesDcription">
						{{item.name}}
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="map">
			<view class="map_left">
				<u-icon name="home-fill"></u-icon>
				<view class="name">
					{{this.map.name}}
				</view>
			</view>
			<view class="map_right">
				<view class="text">
					进店逛逛
				</view>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="details">
			<view class="details_top">
				细节展示
			</view>
			<view class="details_img" v-for="item in list" >
				<image :src="item.image" class="details_img_i"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
						{
							image: 'http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg',
							id: '1'
						},
						{
							image: 'http://xiaoyuaichitang.xyz/view.php/4e6cf49d000c069349e9060c0855b3da.jpg',
						},
						{
							image: 'http://xiaoyuaichitang.xyz/view.php/9c78577a2374303823ce7e7232d14c7c.jpg',
						},
						{
							image: 'http://xiaoyuaichitang.xyz/view.php/cc3bf0144f3369f7b97d7b73828ae4fb.jpg',
						},
						{
							image: 'http://xiaoyuaichitang.xyz/view.php/0983c28f8b84fbb0fd942f9b914318bd.jpg',
						},
						{
							image: 'http://xiaoyuaichitang.xyz/view.php/24f361fc442a9ede877464da1d319fe9.jpg',
						}
					],
				goos_inf:
					{
						title:'ash adidasx epic Emanuel x麦当劳全美高中明星赛篮球运动服',
						number: 'HI5589',
						price:'849'
					},
				size:
					{
						name:'默认尺码',
						size: 'XS码',
						number:'1'
					},	
				serverCoupon:[
					{
						name: '满1200减120元'
					},
					{
						name: '满900减90元'
					},
					{
						name: '满600减60元'
					},
				],
				ServiceesDcription:[
					{
						name: '免责说明·'
					},
					{
						name: '退还承诺·'
					},
					{
						name: '运费政策·'
					},
					{
						name: '价格说明'
					}
				],
				map:{
					name:'滔博西安赛格Adidas'
				}
			}
		},
		computed: {
			
		},
		
		methods: {
			
		}
	}
</script>

<style>
	
</style>

<style lang="scss" scoped>
	
	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}
	.main{
		background-color:#F5F5F5 ;
		height: 1430rpx;
	}
	.wrap {
		height: 500rpx;
		}
	.content{
		height: 500rpx;
		img{
			height: 500rpx;
		}
	}
	.content :nth-child(1){
		height: 100% !important;
	}
	.u-swiper-indicator{
		width: 60rpx;
	}
	
	.u-indicator-item-rect[data-v-a5b2d580]{
		width: 60rpx;
	}
	
	// 商品详情
	.goods_inf{
		height: 240rpx;
		background-color: #FFFFFF;
		padding: 30rpx 10rpx 10rpx 20rpx;
		.left{
			padding-left: 10rpx;
			width: 550rpx;
			height: 220rpx;
			// background-color: #fff;
			.title{
				line-height: 50rpx;
				font-size: 30rpx;
				font-weight: 600;
			}
			.goods_inf_number{
				margin-top: 10rpx;
				font-size: 18rpx;
				color: #8C8C8C;
			}
			.goods_inf_price{
				margin-top: 20rpx;
				color: #C53622;
			}
		}
		
	}
	.server{
		margin-top: 20rpx;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: flex-start;
		height: 300rpx;
		background-color: pink;
		.server_coupon{
			display: flex;
			justify-content: space-between;
			padding: 0 40rpx;
			width: 100%;
			height: 100rpx;
			background-color: #fff;
			line-height: 100rpx;
			border-bottom: 1rpx solid #EFEFEF;
			.u-size-default{
				margin-right: 10rpx;
			}
			.server_coupon_right{
				display: flex;
				align-items: center;
				.coupon{
					margin-right: 10rpx;
					height: 40rpx;
					line-height: 40rpx;
					font-size: 10rpx;
					border: 1rpx solid #F8C02F;
					color: #F8C02F;
				}
				.server_coupon_right_text{
					font-size: 10rpx;
				}
			}
			
		}
		
	}
	.map{
		display: flex;
		justify-content: space-between;
		margin-top: 10rpx;
		padding: 20rpx;
		height: 100rpx;
		line-height: 60rpx;
		background-color: #fff;
		.map_left{
			display: flex;
			.name{
				margin-left: 20rpx;
				font-size: 30rpx;
				font-weight: 600;
			}
		}
		.map_right{
			display: flex;
			.text{
				margin-right: 10rpx;
			}
		}
	}
	.details{
		margin-bottom: 500rpx;
		.details_top{
			margin-top: 10rpx;
			padding: 30rpx;
			background-color: #fff;
			font-weight: 600;
			font-size: 35rpx;
		}
		.details_img{
			height: 800rpx;
			background-color: pink;
			.details_img_i{
				width: 100%;
				height: 100%;
			}
		}
	}
	
</style>
