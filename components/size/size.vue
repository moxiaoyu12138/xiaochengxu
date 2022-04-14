<template>
	<view class="size" >
		
			<view class="hidden">
				
			</view>
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
							<view class="close">
								<u-icon name="close" size="20px" @click="onClose"></u-icon>
							</view>
						</view>
						<view class="size">
							<view class="size_info">
								{{this.comSize.size}} ,
								{{this.comSize.number}}
								件
							</view>
						</view>
						
					</view>
				</view>
				<view class="color">
					<view class="title">
						颜色
					</view>
					<view class="color-box">
						<view class="color-item"  v-for="(item,index) in color" :key="index">
							{{item.name}}
						</view>
					</view>
				</view>
					<view class="color popup_size">
						<view class="title">
							尺码
						</view>
						<view class="color-box">
							<view class="color-item" v-for="(item,index) in size" :key="index">
								{{item.name}}
							</view>
						</view>
					</view>
				<view class="number">
					<view class="left">
						购买数量
					</view>
					<view class="right">
						<u-number-box class="number_right">{{this.comSize.number}}</u-number-box>
					</view>
				</view>
				<view class="u-button">
					<view class="confirm" >
						确认
					</view>
				</view>
	</view>
</template>

<script>
	export default {
		name:"size",
		props:{
			comSize:{
				type:Object,
				required:true
			}
		},
		data() {
			return {
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
			};
		},
		created() {
			this.onLog()
		},
		methods:{
			onLog() {
				console.log(this.comSize)
			},
			onClose() {
				this.$emit("show",false)
			}
		}
	}
</script>

<style lang="scss">
.size{
	
	height:600rpx;

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
					font-size: 28rpx;
					// background-color: #fff;
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
					// font-weight: 600;
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
			.right{
				.number_right{
					background-color: #fff;
				}
			}
		}
		.u-button{
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 140rpx;
			background-color:#fff;
			padding: 20rpx 30rpx;
			.confirm{
				
				// width: 96%;
				text-align: center;
				line-height: 90rpx;
				font-size: 36rpx;
				height: 90rpx;
				background-color: #F8C02F;
			}
		}
		
	
}
</style>
