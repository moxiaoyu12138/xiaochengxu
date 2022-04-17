<template>
	<view>
		<view class="goos_list">
			<view class="shop">
				<view class="left">
					<view class="s_show" @click="onGoosShow()">
						
					</view>
					<view class="shop_info">
						<u-icon  
						size="40" 
						name=""  
						class="s_show_icon" 
						v-if="this.gootList.shop.show"
						></u-icon>
						<view class="shop_info_name">
							{{this.gootList.shop.name}}
						</view>
						<u-icon  size="30" name=""  class="s_show_icon"></u-icon>
					</view>
				</view>
				<view class="shop_button">
					清空
				</view>
			</view>
			<CommodityCard :goosListTwo="this.goosListTwo"></CommodityCard>
			<u-popup v-model="isShow" mode="bottom" width="500rpx" height="500px" >
				<size :comSize="comSize" v-on:show="closeSize"></size>
			</u-popup>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"goot-list",
		props:{
			goosListTwo: {
				type: Array,
				required:true
			},
			comSize:{
				type:Object,
				required:true
			}
		},
		data() {
			return {
				isShow: false,
				gootList:''
			};
		},
		created() {
			this.initialization() 
		},
		methods:{
			initialization() {
				this.gootList = this.goosListTwo
				console.log(this.gootList.shop.show)
			}
		}
	}
</script>

<style lang="scss">
	.goos_list{
		margin-top: 30rpx;
		padding: 40rpx;
		width: 100%;
		background-color: #ffffff;
		margin-bottom: 200rpx;
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
					// font-weight: 500;
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
				.goods_inf{
					.goods_inf_pic{
					// width: 100px;
					// height: 100px;
					}
				}
			}
			.goos_caras_list{
				width: 100%;
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
						.size_button{
							width: 120rpx;
							height: 50rpx;
							font-size: 12rpx;
							border-radius: 10rpx;
							background-color: #F5F5F5;
							display: flex;
							justify-content: space-evenly;
							align-items: center;
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
	
</style>
