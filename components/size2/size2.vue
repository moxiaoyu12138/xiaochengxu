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
								<u-icon name="close" size="20px" @click="onClose()"></u-icon>
							</view>
						</view>
						<view class="size">
							<view class="size_info">
								{{this.comSize.size}}
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
						<view class="title" >
							尺码
						</view>
						<view class="color-box">
						
						<view :class="['color-item_none',item.Select ? 'color-item' :'']" v-for="(item,index) in size" :key="index" @click="onSize(index)">
							{{item.name}}
						</view>
						</view>
					</view>
				<view class="number">
					<view class="left">
						购买数量
					</view>
					<view class="right">
						<u-number-box class="number_right" @change="valChange" v-model="numberValue">1</u-number-box>
					</view>
				</view>
				<view class="u-button">
					<view class="confirm" @click="onClose">
						确认
					</view>
				</view>
	</view>
</template>



<script>
	export default {
		name:"size2",
		props:{
			comSize: {
				type:Object,
				required:false
			}
		},
		data() {
			return {
				numberValue:0, // 进步器值
				active:0,
				size:[
					{
						name:"S",
						Select:true,
						id:0
					},
					{
						name:"M",
						Select:false,
						id:1
					},
					{
						name:"L",
						Select:false,
						id:2
					},
					{
						name:"XL",
						Select:false,
						id:3
					},
					{
						name:"2XL",
						Select:false,
						id:4
					},
					{
						name:"3XL",
						Select:false,
						id:5
					}
				],
				color: [
					{
						name:'默认',
						Select:false
					}
				],
			};
		},
		created() {
			this.onLog()
		},
		methods:{
			onLog() {
				
			},
			onClose() {
				this.$emit("show",false)
			},
			// 尺码点击
			onSize(index) {
				// const name = this.size[index].name
				this.$emit('sizeChenge','默认，' + this.size[index].name)
				this.size[index].Select = !this.size[index].Select
				for(var i=0;i<this.size.length;i++){
					if(i!=index){
						this.size[i].Select = false
					}
				}
				
			},
			valChange() {
				this.$emit("chenge",this.numberValue)
			}
		}
	}
</script>

<style lang="scss">
.size{
	
	height:520rpx;
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
					height: 20rpx;
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
				padding-top: 20rpx;
				.color-item{
					width: 140rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
					font-size: 30rpx;
					border: 1rpx solid #F8C02F;
					color: #F8C02F;
					margin: 10rpx 20rpx;
					
				}
				.color-item_none{
					width: 140rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
					font-size: 30rpx;
					border: 1rpx solid #CCCCCC;
					margin: 10rpx 20rpx;
				}
				
			}
			
		}
		.popup_size{
			height: 210rpx;
			background-color: #fff;
		}
		.number{
			position: fixed;
			bottom: 140rpx;
			width: 100%;
			height: 80rpx;
			background-color: #fff;
			border-bottom: 1rpx solid #F5F5F5;
			display: flex;
			justify-content: space-between;
			align-items: center;
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
