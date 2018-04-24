<template>
    <section class="introduce-item">
            <div class="item-img"><img src="/static/imgs/i1.png" /></div> 
            <div class="item-text">
                <p>阿里云</p>
                <p>金牌服务商</p>
            </div>
    </section>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="scss">
    .introduce-item{
        display: flex;
        .item-img{
            margin: 0.06rem 0.04rem 0 0; 
            img{
                width: 0.19rem;
                height: 0.25rem;
            }
        }
        .item-text{
            font-size: 0.12rem;
            line-height: 0.18rem;
        }
    }
</style>