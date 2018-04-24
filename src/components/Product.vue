<template>
    <section class="item">
        <div class="item-img"><img src="/static/imgs/plist1.png" /></div> 
        <div class="item-text">
            <p class="title">奇点云信</p> 
            <p class="subTitle">定向人群投放，实时数据反馈，优化投放转化</p>
        </div>
    </section>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="scss">
    .item{
        display: flex;
        .item-img{
            margin: 0.11rem 0.15rem 0 0.12rem;
            img{
                width: 0.4rem;
                height: 0.3rem;
            }
        }
        .item-text{
            line-height: 0.23rem;
            margin-top: 0.13rem;
            .title{
                font-size: 0.15rem;
                color: #333;
            }
            .subTitle{
                font-size: 0.13rem;
                color: #666;
            }
        }
    }
</style>