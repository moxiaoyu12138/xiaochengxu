<template>
	<view class="main">
			<!-- 头部提示 -->
		<view class="tips" v-if="this.show.top">
			<view class="tipe_text">
				{{this.text[0].text}}
			</view>
			<u-icon  size="20" :name="this.icon[0].src" @click="onTopShow"></u-icon>
		</view>
		<!-- 商品列表 -->
		<view class="goos_list">
			<view class="shop">
				<view class="left">
					<view class="s_show" >
						<u-icon  size="30" name="checkbox-mark"  class="s_show_icon_one" v-if="this.show.goos"> </u-icon>
					</view>
					<view class="shop_info">
						<u-icon  size="40" :name="this.icon[1].src"  class="s_show_icon" ></u-icon>
						<view class="shop_info_name">
							{{this.gootList[0].shop}}
						</view>
						<u-icon  size="30" :name="this.icon[9].src"  class="s_show_icon"></u-icon>
					</view>
				</view>
				<view class="shop_button">
					清空
				</view>
			</view>
			<view class="goods_caras" >
				<view class="goos_caras_list" v-for="(item,index) in gootList" :key="index">
					<view class="icon">
						<u-icon  size="30" name="checkbox-mark"  class="s_show_icon_one" > </u-icon>
					</view>
					<view class="goods_inf">
						<view class="goods_inf_pic">
							<img src="http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg"></img>
						</view>
						<view class="goos_right" >
							<view class="title" >
								{{item.title}}
							</view>
							<view class="size_button" @click="sizeShow()">
								{{item.size}}
								<u-icon  size="10" name="arrow-down"  class="s_show_icon"></u-icon>
							</view>
							<view class="size_buttom">
								<view class="price">
									<u-icon  size="40" name="rmb" color="#C53622"  class="s_show_icon"></u-icon>
									{{item.price}}
									<view class="discount" v-if="item.discount">
										<u-icon  size="20" name="rmb" color="#8C8C8C"  class="s_show_icon"></u-icon>
										<s style="color: #8C8C8C;">{{item.discount_price}}</s>
									</view>
								</view>
								<view class="number">
									<u-number-box>{{item.number}}</u-number-box>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<u-popup v-model="isShow"
			mode="bottom" width="500rpx" 
			height="300px" class="popup" 
			@close="onLog()">
				<view class="hidden">
					
				</view>
					<view class="top" >
						<!-- <u-image width="30%" height="120px" :src="this.gootList[0].pic" mode="aspectFit" class="pic"></u-image> -->
						<view class="img">
							<img :src="this.gootList[0].pic" class="pic"/>
						</view>
						<view class="right">
							<view class="price">
								<view class="left">
									<u-icon name="rmb" size="28"></u-icon>
									<view class="price_p">
										{{this.gootList[0].price}}
									</view>
								</view>
								<view class="close">
									<u-icon name="close" size="20px" @click="isshow"></u-icon>
								</view>
							</view>
							<view class="size">
								<view class="size_info">
									{{this.gootList[0].size}},
									{{this.gootList[0].number}}件
								</view>
							</view>
							
						</view>
					</view>
					<view class="color-box">
						color-box
					</view>
					<view class="size">
						size
					</view>
					<view class="number">
						number
					</view>
					<view class="u-button">
						确认
					</view>
				</u-popup>
		</view>
		<view class="buttom">
			<view class="u-button">
				<u-icon  size="40" color="#F8C02F" name="checkbox-mark" @click="onTopShow" class="buttom_icon"></u-icon>
				<view class="text">
					全选
				</view>
			</view>
			<view class="right">
				<view class="price">
					合计： 
					<u-icon name="rmb" class="rmb"></u-icon>
					<view class="text">
						599
					</view>
				</view>
				<view class="goshopping">
					去结算(1)
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import SizePopup from './size/size'
	export default {
		  components: {
		      SizePopup
		    },
		
		data() {
			return {
				isShow:false,
				show:{
						top:true,
						goos:false,
						sizeChose: false
					},
				icon:[
					{	
						name: '关闭',
						src:'http://xiaoyuaichitang.xyz/view.php/c71f453f3e7c58aececd5b03d3ffaf21.png'
					},
					{
						id: '0',
						name: '店铺',
						src:'http://xiaoyuaichitang.xyz/view.php/a1be79edcd412a464397f6b8868a7cd1.png'
					},
					{
						id:'1',
						name: '购物车',
						src: 'http://xiaoyuaichitang.xyz/view.php/340024d653ce9b06c602c8a5e23a1296.png'
					},
					{	
						id:'2',
						name: '分享',
						src:'http://xiaoyuaichitang.xyz/view.php/5b992882db442f3e9295eec5834dc6ae.png'
					},
					{
						id:'3',
						name: '对号',
						src:'../../static/icon/duihao.png'
					},
					
					{
						id:'4',
						name: '加号',
						src:'../../static/icon/jian.png'
					},
					{
						id:'5',
						name: '减号',
						src:'../../static/icon/jian.png'
					},
					{
						id:'6',
						name: '人民币',
						src:'../../static/icon/renminbi.png'
					},
					{
						id:'7',
						name: '向下',
						src:'../../static/icon/xioangxia.png'
					},
					{
						id:'8',
						name: '向右',
						src:'../../static/icon/xiangyoujiantou.png'
					}
				],
				text:[
					{
						text:"商品销售价格会根据所选活动发生变化，具体以提交订单展示金额为准"
					}
				],
				gootList: [
					
					{
						id:'0',
						title: '阿迪达斯MIC ROSE CREW 男士休闲圆领卫衣',
						size:'默认;M',
						price: '599',
						number: '1',
						shop:'滔博佛山禅城王府井AD',
						discount:'true',
						discount_price:'299'
					},
					{
						id:'0',
						title: '阿迪达斯MIC ROSE CREW 男士休闲圆领卫衣',
						size:'默认;M',
						price: '599',
						number: '1',
						shop:'滔博佛山禅城王府井AD',
						discount:'true',
						discount_price:'299'
					},
					
					
				],
				imgList: 'http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg'
			};
		},
		methods:{
			onTopShow() {
				this.show[0].top = false
			},
			sizeShow() {
				this.isShow = true
				console.log(this.show.sizeChose);
			},
			
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
	background-color: #F5F6F9;
	.tips{
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		width: 100%;
		height: 100rpx;
		background-color: #FFFDF0;
		.tipe_text{
			width: 90%;
			font-size: 12rpx;
			color: #D4A02D;
		}
	}
	.goos_list{
		margin-top: 20rpx;
		padding: 40rpx;
		width: 100%;
		background-color: #ffffff;
		// margin-bottom: 150rpx;
		.shop{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 60rpx;
			.left{
				.s_show_icon{
					color: #F8C02F;
				}
				.s_show_icon_one{
					width: 100%;
					height: 100%;
					border-radius: 50rpx;
					color: #F8C02F;
					background-color: #404040;
					justify-content: center;
				}
				width: 80%;
				display: flex;
				.s_show{
					width: 50rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
					border-radius: 30rpx;
					border: 1rpx solid #ccc;
				}
				.shop_info{
					display: flex;
					align-items: center;
					margin-top: 5rpx;
					margin-left: 30rpx;
					font-weight: 550;
					font-size: 30rpx;
					.shop_info_name{
						margin-left: 10rpx;
					}
				}
			}
			.shop_button{
				padding-right: 30rpx;
			}
		}
		.goods_caras{
			margin-top: 20rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			margin-bottom: 25rpx;
			.goos_caras_list{
				width: 100%;
				display: flex;
				align-items: center;
				.icon{
					width: 50rpx;
					height: 50rpx;
					background-color:#404040;
					border-radius: 50rpx;
					text-align: center;
					line-height: 50rpx;
					color: #F8C034;
				}
				.goods_inf{
					padding: 30rpx;
					width: 90%;
					height: 300rpx;
					margin-bottom: 10rpx;
					display: flex;
					.goods_inf_pic{
						margin-right: 20rpx;
						width: 300rpx;
						height: 240rpx;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.goos_right{
						width: 100%;
						height: 100%;
						display: flex;
						flex-direction: column;
						.title{
							font-weight: 500;
							color: #888888;
							margin-bottom: 20rpx;
						}
						.size_button{
							width: 150rpx;
							height: 50rpx;
							border-radius: 10rpx;
							display: flex;
							justify-content: space-between;
						}
						.size_buttom{
							display: flex;
							align-items: center;
							justify-content: space-between;
							width: 100%;
							height: 100rpx;
						}
					}
				}
			}
		}
	}
	.buttom{
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 0 20rpx 20rpx;
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		border-top: 1rpx solid #ccc;
		.u-button{
			display: flex;
			align-items: center;
			.buttom_icon{
				text-align: center;
				background-color: #404040;
				border-radius: 50rpx;
				width: 50rpx;
				height: 50rpx;
				justify-content: center;
			}
			.text{
				margin-left: 20rpx;
			}
		}
		
		.right{
			display: flex;
			align-items: center;
			.price{
				display: flex;
				align-items: center;
			}
			.text{
				font-size: 40rpx;
				color: #C53622;
			}
			.rmb{
				color: #C53622;
			}
			.goshopping{
				margin-left: 20rpx;
				width: 300rpx;
				height: 100rpx;
				background-color: #F8C02F;
				text-align: center;
				line-height: 100rpx;
				font-size: 30rpx;
			}
		}
		
	}
	.popup{
		background: transparent;
		.hidden{
			width: 100%;
			height: 100rpx;
			background: transparent;
		
		
		}
		.top{
			position: relative;
			height: 160rpx;
			display: flex;
			background-color: #fff;
			.img{
				position: absolute;
				top: -60rpx;
				left: 20rpx;
				z-index: 1;
				width: 200rpx;
				height: 200rpx;
				background-color: skyblue;
				.pic{
					width: 200rpx;
					height: 200rpx;
				}
			}
			.right{
				margin-left: 280rpx;
				margin-top: 50rpx;
				width: 100%;
				.price{
					
					display: flex;
					justify-content: space-between;
					display: flex;
					color:#C53622;
					.left{
						display: flex;
					}
					.close{
						color: #000000;
					}
				}
				.size{
					background-color: #fff;
					
				}
			}
		}
		.color-box{
			height: 140rpx;
			background-color: skyblue;
		}
		.size{
			background-color: pink;
		}
		.number{
			height: 50rpx;
			background-color: skyblue;
			border-bottom: 1rpx solid #F5F5F5;
		}
		.u-button{
			height: 140rpx;
			background-color: pink;
		}
		
	}
	
}
</style>
