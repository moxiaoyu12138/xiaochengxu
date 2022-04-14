<template>
	<view>
		<view class="goods_caras" >
			<view class="goos_caras_list" v-for="(item,index) in gootList" :key="index">
				<view class="icon"
				@click="onGootSListShow(index)"
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
						<img class="goods_inf_pic_img" src="http://xiaoyuaichitang.xyz/view.php/884ece8fe0651f1f453719e36be90c8c.jpg"></img>
					</view>
					<view class="goos_right" >
						<view class="title" >
							{{item.title}}
						</view>
						<view class="size_button" @click="sizeShow(index)">
							{{item.size}}
							<u-icon  size="10" name="arrow-down"  class="s_show_icon"></u-icon>
						</view>
						<view class="size_buttom">
							<view class="price">
								<u-icon  size="36" name="rmb" color="#C53622"  class="s_show_icon"></u-icon>
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
	</view>
</template>

<script>
	export default {
		name:"CommodityCard",
		props:{
			goosListTwo: {
				type:Object,
				required:true
			}
		
		},
		created() {
			this.onGootList()
		},
		data() {
			return {
				gootList:''
			};
		},
		methods:{
			// 初始化列表
			onGootList(index) {
				this.gootList = this.goosListTwo.shop.goosListInfo
			},
				// 控制显示与隐藏
			onGootSListShow(index) {
				this.gootList[index].show = !this.gootList[index].show
			}
		}
	}
</script>

<style lang="scss">
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
	
</style>
