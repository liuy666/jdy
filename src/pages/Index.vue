<template>
    <section class="index">
        <section class="top">
            <div class="banner">
                <img src="/static/imgs/banner.png">
            </div> 
            <p class="index-title">聚焦人工智能&nbsp;&nbsp;洞察未来科技</p> 
            <p class="index-subTitle">大规模数据分析、全数据生命周期处理、数据深度<br/>挖掘与可视化计算智能、感知智能、认知智能</p>
        </section>
        <ul class="server">
            <li><Server /></li>
            <li><Server /></li>
            <li><Server /></li>
            <li><Server /></li>
        </ul>
        <section class="product-describe">
            <p class="title">业务数据化、数据业务化</p> 
            <p class="subTitle">用户标签、人流统计、趋势舆情、企业全息画像，奇点云<br> 助您飞跃发展</p>
            <ul class="product-list">
                <li><Product /></li>
                <li><Product /></li>
                <li><Product /></li>
                <li><Product /></li>
            </ul>
        </section>
        <section class="swiper-item">
            <p class="item-title">行业解决方案</p> 
            <p class="item-subTitle">新零售解决方案</p> 
            <p class="item-img"><img src="" /></p> 
            <p class="item-describe">为行业客户提供高质量低成本的网络、计算、存储、大数据等基础资源,助力O2O客户走进互联网的“场景时代”，并结合大数据能力帮助电商企业快速搭建平台、应对业务高并发，剖析秒杀、视频直播等场景。</p> 
            <a href="tel:057128121848" class="item-button">联系我们了解更多</a>
        </section>
    </section>
</template>
<script>
    import Server from '@/components/Server'
    import Product from '@/components/Product'
    export default{
        components: {
            Server,
            Product,
        }
    }
</script>

<style scoped lang="scss">
    .index{
        .top{
            text-align: center;
            background: radial-gradient(closest-corner circle at 50% 75%,#041b1d,#072e31);
            overflow: hidden;
            .banner{
                width: 2.09rem;
                height: 1.315rem;
                margin: 0.13rem auto 0.25rem;
                img{
                    height: 1.315rem;
                }
            }
            .index-title{
                height: 0.3rem;
                font-size: 0.24rem;
                line-height: 0.3rem;
                margin-bottom: 0.15rem;
                color: #e2f8fb;
            }
            .index-subTitle{
                line-height: 0.175rem;
                font-size: 0.13rem;
                margin-bottom: 0.675rem;
                color: #a8c6c8;
            }
        }
        .server{
            display: flex;
            justify-content: space-around;
            background: #073438;
            li{
                box-sizing: border-box;
                padding: 0.1rem 0;
                color: #d7fcff;
            }
        }
        .product-describe{
            background: #f7f7f7;
            overflow: hidden;
            .title{
                text-align: center;
                font-size: 0.19rem;
                line-height: 0.3rem;
                margin-top: 0.4rem;
            }
            .subTitle{
                text-align: center;
                font-size: 0.13rem;
                line-height: 0.18rem;
            }
            .product-list{
                width: 3.35rem;
                margin: 0.4rem auto 0.28rem;
                overflow: hidden;
                li{
                    border: 0.005rem solid #eee;
                    background: #fff;
                    margin-bottom: 0.12rem;
                    height: 0.85rem;
                }
            }
        }
        .swiper-item{
            height: 4.0rem;
            text-align: center;
            color: #fff;
            background: url('/static/imgs/big.png') no-repeat center center;
            background-size: auto 4.0rem;
            overflow: hidden;
            .item-title{
                font-size: 0.18rem;
                color: #e1f8fa;
                margin: 0.29rem 0 0.325rem;
            }
            .item-subTitle{
                font-size: 0.14rem;
                color: #e1f8fa;
            }
            .item-describe{
                font-size: 0.13rem;
                line-height: 0.16rem;
            }
        }
    }
    
</style>