<template>
	<view class="main">
		<view class="coupon_list" v-for="(item,index) in couponList" :key="index">
			<view class="coupon_list_top">
				<view class="coupon_list_inf">
					<view class="coupon_price">
						<view class="coupon_num">
							<view class="toutiao toutiao-renminbi" style="margin-top: 10rpx;">
								
							</view>
							{{item.price}}
						</view>
						<view class="fullMinus">
							满{{item.fullMinus}}可用
						</view>
					</view>
					<view class="coupon_inf">
						<view class="coupon_inf_name">
							{{item.name}}
						</view>
						<view class="coupon_inf_time">
							{{item.time}}
						</view>
					</view>
				</view>
				<view class="coupon_existence" v-if="item.existence" @click="onCpupon(index)">
					立即抢券
				</view>
				<view class="coupon_existence_false" v-else @click="onCpupon(index)">
					已抢光
				</view>
			</view>
			
			<!-- 使用规则隐藏 -->
			<view class="bottom" @click="item.ruleShow = false" v-if="item.ruleShow">
				<view class="rule_top">
					<view class="bottom_rule" >
						优惠券使用规则
					</view>
					<view class="toutiao toutiao-xiangxia"></view>
				</view>
			</view>
			<!-- 使用规则显示 -->
			<view class="bottom" @click="item.ruleShow = true" v-else>
				<view class="rule_top">
					<view class="bottom_rule">
						优惠券使用规则
					</view>
					<view class="toutiao toutiao-xiangshang" style="font-size: 20rpx; color: #CECECE;"></view>
				</view>
				<view class="rule_bottom" v-for="(item,index) in rule" :key="index">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="coupon_no_more">
			没有更多了
		</view>
	</view>
	
</template>

<script>
	export default {
		name:"CouponList",
		data() {
			return {
				show:true,
				rule:[
					{
						text:'1.此券为滔搏运动会员专属优惠券，限领券会员本人使用;'
					},
					{
						text:'2.此券仅可在滔搏斯凯奇旗舰店（SXXDO1）使用；'
					},
					{
						text:'3.此券可与门店活动叠加使用，但不与其他优惠券叠加使用;'
					},
					{
						text:'4.会员购物满指定金额可用，每笔订单仅限使用1张，券不兑、不换、不找零；'
					},
					{
						text:'5.此券一经使用不可退回，如遇退货，优惠券将不返还;'
					},
					{
						text:'6.此券限定在4月11日-4月30日使用;'
					},
					{
						text:'7.特定商品（限量款、珍藏款等）不参与活动，具体详询工作人员。'
					}
				],
				couponList: [
					{
						id: '0',
						name:'斯凯奇开业专属满减券',
						price:'120',
						fullMinus:'1200',
						time:'2022-04-11至2022-04-30',
						existence:false,
						ruleShow:true,
						rule:[
							{
								text:'1.此券为滔搏运动会员专属优惠券，限领券会员本人使用;'
							},
							{
								text:'2.此券仅可在滔搏斯凯奇旗舰店（SXXDO1）使用；'
							},
							{
								text:'3.此券可与门店活动叠加使用，但不与其他优惠券叠加使用;'
							},
							{
								text:'4.会员购物满指定金额可用，每笔订单仅限使用1张，券不兑、不换、不找零；'
							},
							{
								text:'5.此券一经使用不可退回，如遇退货，优惠券将不返还;'
							},
							{
								text:'6.此券限定在4月11日-4月30日使用;'
							},
							{
								text:'7.特定商品（限量款、珍藏款等）不参与活动，具体详询工作人员。'
							}
						]
					},
					{
						id: '1',
						name:'斯凯奇开业专属满减卷',
						price:'90',
						fullMinus:'900',
						time:'2022-04-11至2022-04-30',
						existence:true,
						ruleShow:true,
						rule:`	1.此券为滔搏运动会员专属优惠券，限领券会员本人使用;
								2.此券仅可在滔搏斯凯奇旗舰店（SXXDO1）使用；
								3.此券可与门店活动叠加使用，但不与其他优惠券叠加使用;
								4.会员购物满指定金额可用，每笔订单仅限使用1张，券不兑、不
								换、不找零；
								5.此券一经使用不可退回，如遇退货，优惠券将不返还;
								6.此券限定在4月11日-4月30日使用;
								7.特定商品（限量款、珍藏款等）不参与活动，具体详询工作人员。`
					},
					{
						id: '2',
						name:'斯凯奇开业专属满减卷',
						price:'10',
						fullMinus:'100',
						time:'2022-04-11至2022-04-30',
						existence:true,
						ruleShow:true,
						rule:`	1.此券为滔搏运动会员专属优惠券，限领券会员本人使用;
								2.此券仅可在滔搏斯凯奇旗舰店（SXXDO1）使用；
								3.此券可与门店活动叠加使用，但不与其他优惠券叠加使用;
								4.会员购物满指定金额可用，每笔订单仅限使用1张，券不兑、不
								换、不找零；
								5.此券一经使用不可退回，如遇退货，优惠券将不返还;
								6.此券限定在4月11日-4月30日使用;
								7.特定商品（限量款、珍藏款等）不参与活动，具体详询工作人员。`
					},
					{
						id: '3',
						name:'斯凯奇开业专属满减卷',
						price:'900',
						fullMinus:'9000',
						time:'2022-04-11至2022-04-30',
						existence:false,
						ruleShow:true,
						rule:`	1.此券为滔搏运动会员专属优惠券，限领券会员本人使用;
								2.此券仅可在滔搏斯凯奇旗舰店（SXXDO1）使用；
								3.此券可与门店活动叠加使用，但不与其他优惠券叠加使用;
								4.会员购物满指定金额可用，每笔订单仅限使用1张，券不兑、不
								换、不找零；
								5.此券一经使用不可退回，如遇退货，优惠券将不返还;
								6.此券限定在4月11日-4月30日使用;
								7.特定商品（限量款、珍藏款等）不参与活动，具体详询工作人员。`
					}
				]
			};
		},
		methods:{
			onCpupon(index) {
				const data = this.couponList[index]
				if(data.existence !== true) {
					uni.showToast({
						title: '优惠券已被抢光，试试其他的吧' ,
						duration: 2000
					});
				} else {
					uni.showToast({
						title: '以抢到满'+data.fullMinus+'减'+data.price +'的优惠券' ,
						duration: 2000
					});
				}
			}
		}
	}
</script>

<style lang="scss">
.coupon_list{
	margin-top: 20rpx;
	width: 100%;
	background-color: #fff;
	.coupon_list_top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 146rpx;
		border-bottom: 1rpx solid #F0F0F0;
		.coupon_list_inf{
			margin-top: 20rpx;
			display: flex;
			width: 76%;
			color: #C4C4C4;
			.coupon_price{
				margin-top: 20rpx;
				width: 160rpx;
				height: 80rpx;
				border-right: 1rpx solid #F0F0F0;
				text-align: center;
				.coupon_num{
					display: flex;
					justify-content: center;
					font-size: 38rpx;
					color: #BFBFBF;
				}
				.fullMinus{
					text-align: center;
					color: #D9D9D9;
					font-size: 20rpx;
				}
			}
			.coupon_inf{
				margin-top: 20rpx;
				margin-left: 38rpx;
				width: 310rpx;
				height: 80rpx;
				.coupon_inf_name{
					font-size: 30rpx;
				}
				.coupon_inf_time{
					margin-top: 10rpx;
					font-size: 20rpx;
				}
			}
		}
		.coupon_existence{
			text-align: center;
			line-height: 146rpx;
			width: 146rpx;
			height: 146rpx;
			background-color: #F8C02F;
		}
		.coupon_existence_false{
			text-align: center;
			line-height: 146rpx;
			width: 146rpx;
			height: 146rpx;
			background-color: #D9D9D9;
			color: #BFBFBF;
		}
	}
	.bottom{
		width: 100%;
		.rule_top{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 80rpx;
			.bottom_rule{
				font-size: 26rpx;
				color: #AAAAAA;
			}
		}
		.rule_bottom{
			margin-top: -10rpx;
			width: 100%;
			background-color: #fff ;
			padding: 0 40rpx;
			font-size: 26rpx;
			color: #AAA;
		}
	}
	
	
}
.coupon_no_more{
		// background-color: pink;
		margin-top: 20rpx;
		width: 100%;
		text-align: center;
		color: #AAAAAA;
		margin-bottom: 50rpx;
	}
</style>
