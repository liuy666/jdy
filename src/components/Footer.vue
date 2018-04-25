<template>
    <footer>
        <ul id="footer-menu" class="menu" >
            <li class="menu-item">
                <div class="title" @click="handleDrop">产品<span id="rotate"></span></div>         
                <ul class="subMenu">
                    <li class="sub">奇点云信</li>
                    <li class="sub">奇点热点</li>
                    <li class="sub">奇点魔镜</li>
                    <li class="sub">奇点客流</li>
                </ul>            
            </li>
            <li class="menu-item">
                <div class="title" @click="handleDrop">解决方案<span id="rotate"></span></div>         
                <ul class="subMenu">
                    <li class="sub">新零售解决方案</li>
                    <li class="sub">云端小镇解决方案</li>
                </ul>            
            </li>
            <li class="menu-item">
                <div class="title" @click="handleDrop">加入我们<span id="rotate"></span></div>         
                <ul class="subMenu">
                    <li class="sub">职位描述</li>
                </ul>            
            </li>    
        </ul>
        <div class="footer-phone">
            <a href="tel:057128121848">客服电话：0571 - 2812 1848</a>
        </div> 
        <div class="footer-address">
            <p class="address-logo"><img src="/static/imgs/logo.png" /></p> 
            <p class="address">杭州市余杭区仓前街道仓兴街1号38幢</p> 
            <p class="address">business@startdt.com</p> 
            <p class="address">&copy;2016-2017 StartDT.com版权所有</p>  
            <p class="address">ICP证：浙ICP备17004958号</p>
        </div>
    </footer>
</template>

<script>
    export default{
        data(){
            return {
                show : true
            }
        },
        methods: {
            handleDrop(e){
                Array.from(document.getElementById("footer-menu").children).forEach( curr => {
                    curr.children[1].style.display = "none";
                });
                if(this.show){
                    e.currentTarget.children[0].style.transform = "rotate(-90deg)";
                    e.currentTarget.nextElementSibling.style.display = "block";
                }else{
                    e.currentTarget.children[0].style.transform = "rotate(90deg)";
                    e.currentTarget.nextElementSibling.style.display = "none";
                }
                // 现在没点一次切换show  应该判断何时不切换
                this.show = !this.show;
            }
        }
    }
</script>
<style scoped lang="scss">
    footer{
        /* height: 3.46rem;*/
        background: radial-gradient(circle at 50% 100%,#0b4b51,#041b1d);
        color: #fff;
        padding: 0.2rem;
        .menu{
            overflow: hidden;
            .menu-item{                             
                .title{
                    font-size: 0.14rem;
                    height: 0.31rem;
                    line-height: 0.31rem;
                    border-bottom: 0.01rem solid #3b676b;
                    position: relative;
                    #rotate{
                        position: absolute;
                        right: 0.175rem;
                        transform: rotate(90deg);
                        transition: transform .5s linear;
                        &::after{
                            content: ">";
                            font-family: monospace;      
                        }                                                
                    }      
                }
                .subMenu{
                    padding-top: 0.05rem;
                    margin-bottom: 0.05rem;                   
                    transition: display 1s linear;
                    display: none;
                    .sub{
                        font-size: 0.12rem;
                        line-height: 0.22rem;
                    }
                }
            }           
        }
        .footer-phone{
            width: 3.335rem;
            height: 0.35rem;
            margin: 0.17rem auto 0;
            border: 0.01rem solid #fff;
            text-align: center;
            line-height: 0.35rem;
            a{
                color: #fff;
                font-size: 0.14rem;
            }            
        }
        .footer-address{
            .address-logo{
                height: 0.19rem;
                margin: 0.4rem 0 0.12rem;
                img{
                    height: 0.19rem;
                }
            }
            .address{
                font-size: 0.1rem;
                line-height: 0.22rem;
            }
        }
    }    
</style>