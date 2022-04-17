<template>
	<view class="coupon">
		<view class="nav_coupon">
			<view :class="['overdue',active === index ?'active' : '']"
				v-for="(item,index) in coupon" :key="index"
				@click="onCoupon(index)"
				>
				{{item.title}}({{item.number}})
			</view>
			
		</view>
		<u-empty text="没有找到优惠券" mode="coupon" class="empty"></u-empty>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active:0,
				coupon: [
					{
						id:0,
						name:'use_no',
						title:'未使用',
						number:0
					},
					{
						id:1,
						name:'use',
						title:'已使用',
						number:0
						
					},
					{
						id:2,
						name:'overdue',
						title:'已过期',
						number:0
					}
				]
			};
		},
		methods:{
			onCoupon(id) {
				this.active = id
			}
		}
	}
</script>

<style lang="scss">
.coupon{
	margin-top: 46rpx;
	width: 100%;
	height: 100%;
	.nav_coupon{
		display: flex;
		justify-content: space-around;
	}
	.use_no,
	.use,
	.overdue{
		height: 100rpx;
		line-height: 100rpx;
	}
	.active{
		border-bottom: 1rpx solid #F8C02F;
	}
	.empty{
		margin-top: 100rpx !important;
	}
}
</style>
