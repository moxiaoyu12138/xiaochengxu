<template>
	<view class="poromtion">
			<view class="top" >
				<view class="img">
					<img :src="this.comSize.pic" class="pic" />
				</view>
				<view class="right">
					<view class="price">
						<view class="left">
							<u-icon name="rmb" size="28"></u-icon>
							<view class="price_p">
								{{this.comSize.price}}
							</view>
						</view>
						<view class="close" @click="onClose">
							<u-icon name="close" size="20px" ></u-icon>
						</view>
					</view>
					<view class="size">
						<view class="size_info" style="color:#8C8C8C ;">
							{{this.comSize.size}}, &nbsp;
							{{this.comSize.number}}
							件
						</view>
					</view>
					
				</view>
			</view>
			<view class="pro_inf">
				<view class="pro_inf_list">
					<view class="text_one">
						修改促销活动
					</view>
					<view class="text_two">
						满折
					</view>
					<view class="text_three">
						<view class="text_three_item">
							享品牌价9折
						</view>
						<view class="text_three_icon" @click="onCancel">
							<view class="text_three_icon_item toutiao toutiao-duihao" v-if="poromtion">
							</view>
						</view>
					</view>
				</view>
				<view class="pro_inf_buttom">
					<view class="pro_inf_buttom_no" @click="onCloseNo">
						不参加活动
					</view>
					<view class="pro_inf_buttom_yes" @click="onCloseYes">
						确认
					</view>
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		name:"promotion",
		props:{
			comSize:{
				type:Object,
				required:true
			}
		},
		data() {
			return {
				poromtion:false
			};
		},
		methods: {
			onClose() {
				this.$emit("show",false)
				uni.showToast({
					title:'成功',
					icon:'none'
				})
			},
			onCancel() {
				this.poromtion = !this.poromtion
			},
			onCloseNo() {
				this.$emit("show",false)
			},
			onCloseYes() {
				this.$emit("show",false)
			}
		}
	}
</script>

<style lang="scss">
		.top{
			position: relative;
			top: 0;
			height: 200rpx;
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
					width: 100%;
					height: 100%;
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
					height: 20rpx;
					font-size: 28rpx;
					// background-color: #fff;
					.size_info{
						font-size: #A4A4A4;
					}
				}
			}
		}
		
		.pro_inf{
			padding: 0 20rpx;
			width: 100%;
			height: 100%;
			.pro_inf_list{
				width: 100%;
				height: 180rpx;
				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				align-content: center;
				justify-content: space-around;
				border-bottom: 1rpx solid #DDDDDD;
				font-size: 26rpx;
				.text_one{
					font-size: 28rpx;
				}
				.text_two{
					width: 70rpx;
					height: 40rpx;
					background-color: #F6F2EE;
					text-align: center;
					line-height: 40rpx;
					color: #A88357;
				}
				.text_three{
					width: 100%;
					height: 50rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.text_three_icon {
						width: 50rpx;
						height: 50rpx;
						border-radius: 50rpx;
						border: 1rpx solid #D8D8D8;
					}
					.text_three_icon_item{
						width: 100%;
						height: 100%;
						border-radius: 50rpx ;
						text-align: center;
						line-height: 50rpx;
						background-color: #404040;
						font-size: 40rpx !important;
						color: #F2BC2F;
					}
				}
			}
			.pro_inf_buttom{
				position: fixed;
				width: 100%;
				bottom: 0;
				height: 100rpx;
				display: flex;
				.pro_inf_buttom_no,
				.pro_inf_buttom_yes{
					width: 350rpx;
					height: 80rpx;
					margin-right: 10rpx;
					text-align: center;
					line-height: 80rpx;
				}
				.pro_inf_buttom_no{
					border: 1rpx solid #DDDDDD;
				}
				.pro_inf_buttom_yes{
					background-color: #F8C02F;
				}
			}
		}
</style>
