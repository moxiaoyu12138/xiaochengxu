<template>
	<view class="main">
		<!-- 顶部轮播图 -->
		<view class="wrap" >
			<u-swiper :list="list" mode="rect"  class="content"></u-swiper>
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
			<view class="right" @click="onShare">
				<view class="toutiao toutiao-fenxiang2 goods_inf_icon">
					
				</view>
			</view>
		</view>
		
		<!-- 服务 -->
		<view class="server">
			<view class="server_coupon" @click="onCoupon" >
				<view class="server_coupon_left">
					<text class="server_text">领券</text>
				</view>
				<view class="server_coupon_right">
					<view class="coupon" 
					v-for="(item,index) in serverCoupon" :key="index">
						{{item.name}}
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
				<u-popup v-model="couponShow" mode="bottom"  height="520px">
					<!-- 优惠券组件 -->
					<coupon @couponClose="couponClose"></coupon>
				</u-popup>
			<view class="server_coupon" @click="show = true">
				<view class="server_coupon_left">
					<span class="server_text">已选</span>
				</view>
				<view class="server_coupon_right">
					<view class="u-size-default">
						{{this.goos_inf.name}}
					</view>
					<view class="u-size-default">
						{{this.goos_inf.size}},
					</view>
					<view class="u-size-default">
						{{this.goos_inf.number2}}件
					</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="server_coupon">
				<view class="server_coupon_left">
					<span class="server_text">服务说明</span>
				</view>
				<view class="server_coupon_right">
					<view class="server_coupon_right_text" 
					v-for="(item ,index) in ServiceesDcription" :key="index">
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
			<view class="details_img" v-for="(item,index) in list" :key="index">
				<image :src="item.image" class="details_img_i"></image>
			</view>
		</view>
		<view class="buttom">
			<view class="shop">
				<u-icon  size="40" :name="this.img[0].src" @click="gotoUser"></u-icon>
				<view class="text">
					个人中心
				</view>
			</view>
			<view class="uicon-shopping-cart" @click="onCart(1)">
				<u-badge type="error" :count="this.schoppingCart" class="goosnum"></u-badge>
				<u-icon  size="40" :name="this.img[1].src"></u-icon>
				<view class="text" >
					购物车
				</view>
			</view>
			<view class="uicon-shopping-cart-button">
				加入购物车
			</view>
		</view>
		<!-- 尺寸插件 -->
		<u-popup 
		v-model="show" 
		mode="bottom" 
		width="500rpx" height="520px" >
		<size2 :comSize="comSize" v-on:show="closeSize" v-on:sizeChenge="sizeChenge"></size2>
		</u-popup>
		<!-- // 分享按钮弹出组件 -->
		<u-popup
			v-model="shareShow" 
			mode="bottom" 
			width="500rpx" height="200px" >
				<share v-on:ClosePoster="ClosePoster"></share>
		</u-popup>
		
	</view>
</template>

<script>
	import coupon from '../../components/coupon/coupon.vue'
	import size2 from '../../components/size2/size2.vue'
	import share from '../../components/share/share.vue'
	export default {
		components:{
			coupon,
			size2,
			share
		},
		data() {
			return {
				shareShow:false,
				couponShow:false,
				show:false,
				comSize:'',
				schoppingCart:'2',
			
				list: [
						{
							image: 'http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg',
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
						price:'849',
						size:'默认，M',
						price: '599',
						number2: '1',
						shop:'滔博佛山禅城王府井AD',
						discount:'true',
						discount_price:'299',
						show: 'false',
						pic:'http://xiaoyuaichitang.xyz/view.php/24f361fc442a9ede877464da1d319fe9.jpg'
					},
				img: [
					{
						name: '店铺',
						src:'http://xiaoyuaichitang.xyz/view.php/a1be79edcd412a464397f6b8868a7cd1.png'
					},
					{
						name: '购物车',
						src: 'http://xiaoyuaichitang.xyz/view.php/340024d653ce9b06c602c8a5e23a1296.png'
					},
					{	
						name: '分享',
						src:'http://xiaoyuaichitang.xyz/view.php/5b992882db442f3e9295eec5834dc6ae.png'
					}
				],
				
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
				},
				goosListTwo: {
					shop:{
						id:'0',
						name:'滔博佛山禅城王府井AD',
						show:false,
						goosListInfo: [
							{
								id:'0',
								title: '阿迪达斯MIC ROSE CREW 男士休闲圆领卫衣',
								size:'默认;M',
								price: '599',
								number: '1',
								discount:true,
								discount_price:'699',
								show: false,
								pic:'http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg'
							},
							{
								id:'0',
								title: '阿迪达斯MIC ROSE CREW 男士休闲圆领卫衣',
								size:'默认;M',
								price: '599',
								number: '1',
								discount_price:'699',
								discount:true,
								show: false,
								pic:'http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg'
							},
							{
								id:'0',
								title: '阿迪达斯MIC ROSE CREW 男士休闲圆领卫衣',
								size:'默认;M',
								price: '599',
								number: '1',
								discount:true,
								discount_price:'699',
								show: false,
								pic:'http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg'
							},
						]
					}
				},
			}
		},
		computed: {
			
		},
		created() {
			this.onSize()
		},
		
		methods: {
			onCart() {

				// 跳转到购物车
				uni.navigateTo({
					url: '../../pages/example/goosCar'
				})
			},
			// 领取优惠券
			onCoupon() {
				this.couponShow = !this.couponShow
			},
			couponClose(data) {
				this.onCoupon()
			},
			onSize() {
				this.comSize = this.goos_inf
			},
			closeSize(e) {
				this.show = e
			},
			onShare() {
				this.shareShow = !this.shareShow
			},
			gotoUser() {
				uni.navigateTo({
					url: '../../pages/user/user'
				})
			},
			// 改变尺寸
			sizeChenge(sizeName) {
				this.goos_inf.size =   sizeName
			},
			// 改变进步器的值
			chenge(num) {
				this.goos_inf.number = num
				console.log(num)
			},
			ClosePoster(data) {
				this.shareShow = data
			}
		}
	}
</script>

<style>
	
</style>

<style lang="scss" scoped>
	uni-page-body{
		height: 100%;
	}
	.u-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}
	.main{
		background-color:#F5F5F5 ;
		// height: 1430rpx;
		height: 100%;
		position: relative;
		.buttom{
			position: fixed;
			bottom: 0;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-evenly;
			align-items: center;
			background-color: #fff;
			height: 100rpx;
			width: 100%;
			.shop{
				display: flex;
				flex-direction: column;
				align-items: center;
				.icon{
					uni-img{
						width: 20rpx;
						height: 20rpx;
					}
					height: 50rpx;
				}
			}
			.goosnum{
				top: 0 !important;
				right: 0 !important;
			}
			.uicon-shopping-cart{
				position: relative;
				font-size: 12rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				.icon{
					uni-img{
						width: 20rpx;
						height: 20rpx;
					}
					height: 50rpx;
				}
				
			}
			.uicon-shopping-cart-button{
				width: 70%;
				height: 70rpx;
				line-height: 70rpx;
				text-align: center;
				background-color: #F8C02F;
			}
		}
	}
	.wrap {
		height: 500rpx;
		}
	.content{
		height: 740rpx;
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
		margin-top: 240rpx;
		height: 330rpx;
		background-color: #FFFFFF;
		padding: 50rpx 10rpx 10rpx 30rpx;
		display: flex;
		justify-content: space-between;
		.left{
			padding-left: 10rpx;
			width: 550rpx;
			height: 220rpx;
			// background-color: #fff;
			.title{
				line-height: 50rpx;
				font-size: 36rpx;
				font-weight: 600;
			}
			.goods_inf_number{
				margin-top: 50rpx;
				font-size: 24rpx;
				color: #8C8C8C;
			}
			.goods_inf_price{
				margin-top: 26rpx;
				font-size: 40rpx;
				color: #CF5948;
			}
		}
		.right{
			margin-top: 20rpx;
			width: 100rpx;
			height: 100rpx;
			.goods_inf_icon{
				text-align: center;
				font-size: 40rpx;
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
		.server_coupon{
			display: flex;
			justify-content: space-between;
			padding: 0 40rpx;
			width: 100%;
			height: 100rpx;
			background-color: #fff;
			line-height: 100rpx;
			border-bottom: 1rpx solid #EFEFEF;
			.server_coupon_left{
				font-weight: 500;
				.server_text{
					// background-color: pink;
					font-weight: 600;
				}
			}
			.u-size-default{
				margin-right: 10rpx;
			}
			.server_coupon_right{
				display: flex;
				align-items: center;
				.coupon{
					margin-right: 20rpx;
					padding-left: 10rpx;
					padding-right: 10rpx;
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
			.details_img_i{
				width: 100%;
				height: 100%;
			}
		}
	}
	
</style>
