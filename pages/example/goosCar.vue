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
					<view class="s_show" @click="onGoosShow()">
						<u-icon  
						size="30" 
						name="checkbox-mark"  
						class="s_show_icon_one" 
						v-if="this.goosListTwo.shop.show"
						> </u-icon>
					</view>
					<view class="shop_info">
						<u-icon  
						size="40" 
						:name="this.icon[1].src"  
						class="s_show_icon" 
						></u-icon>
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
				<view class="goos_caras_list" v-for="(item,index) in goosListTwo.shop.goosListInfo" :key="index">
					<view class="icon"
					@click="onGooSList(index)"
					>
						<u-icon  
						size="30" 
						name="checkbox-mark"  
						class="s_show_icon_one" 
						v-if="item.show"
						> </u-icon>
					</view>
					<view class="goods_inf">
						<view class="goods_inf_pic">
							<img class="goods_inf_pic_img" :src="item.pic" />
						</view>
						<view class="goos_right" >
							<view class="title" >
								{{item.title}}
							</view>
							<view class="botton-item">
								<view class="size_button" @click="sizeShow()">
									{{item.size}}
									<u-icon  size="10" name="arrow-down"  class="s_show_icon"></u-icon>
								</view>
								<view class="size_button" @click="promotion()">
									换促销
									<u-icon  size="10" name="arrow-down"  class="s_show_icon"></u-icon>
								</view>
								<!-- 促销弹窗 -->
								<u-popup v-model="Promotion" mode="bottom" width="500rpx" height="574rpx" >
									<promotion :comSize="comSize" v-on:show="closeSize" class="size_button_promotion" style="background-color: #fff;"></promotion>
								</u-popup>
							</view>
							<view class="size_buttom">
								<view class="price" style="color: #C53622;">
									<u-icon  size="30" name="rmb" color="#C53622"  class="s_show_icon"></u-icon>
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
			<u-popup v-model="isShow" mode="bottom" width="500rpx" height="520px" >
				<size :comSize="comSize" v-on:show="closeSize"></size>
			</u-popup>
		</view>
		
		<view class="buttom">
			<view class="u-button">
				<view class="all_btn"
				@click="onTopAll">
					<u-icon
						size="40" 
						color="#F8C02F" 
						name="checkbox-mark" 
						 class="buttom_icon" v-if="this.goosListTwo.shop.show">
					</u-icon>
				</view>
				
				<view class="text" >
					全选
				</view>
			</view>
			<view class="right">
				<view class="price">
					合计： 
					<u-icon name="rmb" class="rmb"></u-icon>
					<view class="text">
						{{this.allPrice}}
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
	import CommodityCard from '../../components/commodity-card/commodity-card.vue'
	import Size from '../../components/size/size.vue'
	import gootList from '../../components/goot-list/goot-list.vue'
	import promotion from '../../components/promotion/promotion.vue'
	export default {
		components:{
			Size,
			CommodityCard,
			gootList,
			promotion
		},
		data() {
			return {
				allPrice:'1797',
				Promotion:false,
				comSize:[
					
					{
						id:'0',
						title: '阿迪达斯MIC ROSE CREW 男士休闲圆领卫衣',
						size:'默认;M',
						price: '599',
						number: '1',
						shop:'滔博佛山禅城王府井AD',
						discount:'true',
						discount_price:'299',
						show: 'false',
						pic:'http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg'
					},
				],
				isShow:false,
				goosNum:0,
				
				size:[
					{
						name:"S"
					},
					{
						name:"M"
					},
					{
						name:"L"
					},
					{
						name:"XL"
					},
					{
						name:"2XL"
					},
					{
						name:"3XL"
					}
				],
				color: [
					{
						name:'默认'
					},
					{
						name:'红色'
					}
				],
				show:{
						top:true,
						goos:true,
						goosList: false,
						sizeChose: false,
						all:true
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
						discount_price:'299',
						show: 'false',
						pic:'http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg'
					},
				],
				goos_inf:
					{
						title:'ash adidasx epic Emanuel x麦当劳全美高中明星赛篮球运动服',
						number: 'HI5589',
						price:'849',
						size:'默认，M',
						price: '599',
						number: '1',
						shop:'滔博佛山禅城王府井AD',
						discount:'true',
						discount_price:'299',
						show: 'false',
						pic:'http://xiaoyuaichitang.xyz/view.php/24f361fc442a9ede877464da1d319fe9.jpg'
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
			};
		},
		created() {
			// 启动页面开始传递组件值
			this.toSize()
		},
		methods:{
			
			// 关闭上方提示按钮
			onTopShow() {
				this.show.top = !this.show.top
			},
			
			// 第二个商店
			onGoosShow() {
				this.goosListTwo.shop.show = !this.goosListTwo.shop.show
				console.log(this.goosListTwo.shop.goosListInfo.length)
				for (var i= 0 ; i<=this.goosListTwo.shop.goosListInfo.length ;i++) {
					this.goosListTwo.shop.goosListInfo[i].show = this.goosListTwo.shop.show
				}
			},
			// 根据id关闭商品选中
			onGooSList(index) { 
				this.goosListTwo.shop.goosListInfo[index].show = !this.goosListTwo.shop.goosListInfo[index].show
				// 循环判断是否全部选中,如果全部选中则选中商店的按钮
				var j = 0 
				for(var i = 0; i<this.goosListTwo.shop.goosListInfo.length;i++) {
					if(this.goosListTwo.shop.goosListInfo[i].show == true) {
						j++
						if(j == this.goosListTwo.shop.goosListInfo.length) {
							this.goosListTwo.shop.show = true
						} 
					}
					// 若有一个没选中，则取消商店的选中
					if(this.goosListTwo.shop.goosListInfo[i].show == false) {
						this.goosListTwo.shop.show = false
					}
				}
			},

				
			
			// 全部选中关闭
			onTopAll() {
				this.onGoosShow()
			},
			// 打开，关闭尺寸选择
			sizeShow () {
				this.isShow = true
			},
			closeSize() {
				this.isShow = false
				this.Promotion = false
				console.log('123')
			},
			// 定义组件传值
			toSize(){
				this.comSize = this.gootList[0]
			},
			promotion() {
				this.Promotion = !this.Promotion
			}
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
			padding-left: 10rpx;
			width: 92%;
			font-size: 13px;
			color: #D4A02D;
		}
	}
	.goos_list{
		margin-top: 30rpx;
		padding: 40rpx;
		width: 100%;
		background-color: #ffffff;
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
					background-color: #404040 !important;
					justify-content: center;
				}
				width: 80%;
				display: flex;
				.s_show{
					width: 48rpx;
					height: 48rpx;
					text-align: center;
					line-height: 48rpx;
					border-radius: 48rpx;
					border: 1rpx solid #ccc;
				}
				.shop_info{
					display: flex;
					align-items: center;
					margin-top: 5rpx;
					margin-left: 30rpx;
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
			margin-top: 30rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			.goos_caras_list{
				width: 100%;
				height: 260rpx;
				display: flex;
				align-items: center;
				.icon{
					width: 48rpx;
					height: 48rpx;
					border: 1rpx solid #CDCDCD;
					border-radius: 48rpx;
					text-align: center;
					line-height: 48rpx;
					color: #F8C034;
					.s_show_icon_one{
						height: 100%;
						width: 100%;
						border-radius: 50rpx;
						text-align: center;
						justify-content: center;
						line-height: 50rpx;
						background-color:#404040;
					}
				}
				.goods_inf{
					width: 90%;
					height: 240rpx;
					margin-bottom: 10rpx;
					display: flex;
					.goods_inf_pic{
						margin-left: 30rpx;
						margin-right: 20rpx;
						width: 240rpx;
						height: 200rpx;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.goos_right{
						width: 500rpx;
						height: 100%;
						display: flex;
						flex-direction: column;
						.title{
							font-weight: 500;
							color: #888888;
							margin-bottom: 20rpx;
						}
						.botton-item{
							width: 100%;
							display: flex;
							justify-content: space-between;
							.size_button_promotion{
								margin-top: 66rpx;
								height: 574rpx !important;
								background-color: pink ;
								position: fixed;
								width: 100%;
							}
						}
						.size_button{
							width: 120rpx;
							height: 50rpx;
							font-size: 12rpx;
							border-radius: 10rpx;
							background-color: #F5F5F5;
							display: flex;
							justify-content: space-evenly;
							align-items: center;
							.size_button_promotion{
								width: 100rpx;
								height: 200rpx;
								background-color: pink;
							}
						}
						.size_buttom{
							margin-top: 20rpx;
							display: flex;
							width: 100%;
							justify-content: space-between;
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
			.all_btn{
				width: 50rpx;
				height: 50rpx;
				border:1rpx solid #ccc;
				border-radius: 50rpx;
			}
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
		.title{
			color: #8C8C8C;
		}
		background: transparent;
		.hidden{
			width: 100%;
			height: 100rpx;
			background: transparent;
		}
		.top{
			position: relative;
			height: 260rpx;
			display: flex;
			background-color: #fff;
			.img{
				position: absolute;
				top: -60rpx;
				left: 20rpx;
				z-index: 1;
				width: 240rpx;
				height: 240rpx;
				background-color: skyblue;
				.pic{
					width: 240rpx;
					height: 240rpx;
				}
			}
			.right{
				margin-left: 330rpx;
				margin-top: 50rpx;
				width: 100%;
				.price{
					margin-bottom: 20rpx;
					font-size: 40rpx;
					display: flex;
					justify-content: space-between;
					display: flex;
					color:#C53622;
					.left{
						display: flex;
					}
					.close{
						margin-right: 20rpx;
						color: #545454;
					}
				}
				.size{
					font-size: 28rpx;
					background-color: #fff;
					.size_info{
						font-size: #A4A4A4;
					}
				}
			}
		}
		.color{
			padding-left: 20rpx;
			height: 160rpx;
			background-color: #fff;
			.color-box{
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				width: 100%;
				height: 100%;
				.color-item{
					width: 140rpx;
					height: 80rpx;
					text-align: center;
					line-height: 80rpx;
					font-size: 30rpx;
					border: 1rpx solid #F8C02F;
					margin: 20rpx;
				}
			}
			
		}
		.popup_size{
			height: 300rpx;
			background-color: #fff;
			margin-bottom: 200rpx;
		}
		.number{
			position: fixed;
			bottom: 140rpx;
			width: 100%;
			height: 70rpx;
			background-color: #fff;
			border-bottom: 1rpx solid #F5F5F5;
			display: flex;
			justify-content: space-between;
			padding: 20rpx ;
		}
		.u-button{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 140rpx;
			background-color:#fff;
			padding: 20rpx 30rpx;
			.confirm{
				
				text-align: center;
				line-height: 90rpx;
				font-size: 36rpx;
				height: 90rpx;
				background-color: #F8C02F;
			}
		}
		
	}
	
}
</style>
