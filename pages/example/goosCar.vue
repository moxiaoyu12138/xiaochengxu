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
			<view class="goods_caras">
				<view class="icon">
					<u-icon  size="30" name="checkbox-mark"  class="s_show_icon_one" v-if="this.show.goos"> </u-icon>
					
				</view>
				<view class="u-info">
					123
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:{
						top:true,
						goos:true
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
						id:'1',
						title: '阿迪达斯MIC ROSE CREW 男士休闲圆领卫衣',
						size:'M',
						price: '599',
						number: '1',
						shop:'滔博佛山禅城王府井AD'
					}
				]
			};
		},
		methods:{
			onTopShow() {
				this.show[0].top = false
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
			width: 90%;
			font-size: 12rpx;
			color: #D4A02D;
		}
	}
	.goos_list{
		margin-top: 20rpx;
		padding: 40rpx;
		width: 100%;
		height: 400rpx;
		background-color: #fff;
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
			align-items: center;
			width: 100%;
			height: 240rpx;
			background-color: #fff;
			.icon{
				width: 50rpx;
				height: 50rpx;
				.s_show_icon_one{
					width: 100%;
					height: 100%;
					border-radius: 50rpx;
					justify-content: center;
					color: #F8C02F;
					background-color: #404040;
				}
			}
			.u-info{
				width: 90%;
				height: 95%;
				margin-left: 30rpx;
				background-color: pink;
			}
		}
	}
	
}
</style>
