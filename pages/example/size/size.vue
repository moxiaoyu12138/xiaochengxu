<template>
	<u-popup v-model="show2" 
	mode="bottom" width="500rpx" 
	height="300px" class="mian" 
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
							<u-icon name="close" size="20px" @click="show = false"></u-icon>
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
</template>

<script>
	name: 'SizePopup'
	export default {
		props:{
			show2:{
				type:Boolean,
				required:true
			}
		},
		data() {
			return {
				show: true,
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
						pic:'http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg'
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
					}
				]
			}
		},
			
		created() {
			this.onLog()
		},
		methods: {
			onLog(){
				this.$emit(this.show2 = !this.show2)
				console.log(this.show2)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
.mian{
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
</style>
