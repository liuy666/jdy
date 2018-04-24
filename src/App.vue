<template>
    <div id="app">
        <Header @isDrop='handleDrop' />
        <main>
            <router-view/>
        </main>
        <Footer/>
        <div class="mask" v-show='isDrop' @click='handleGoto'>
            <section>                
                <div @click='handleToggle'>
                    技术
                    <transition name="rotate">
                        <span class="bottom" v-if='!isShow'></span>
                        <span class="top" v-else></span>
                    </transition>
                </div>                
                <transition name="slide">
                   <ul class="top-ul" v-show='isShow'>
                        <li><router-link to="/face" href="#">人脸识别</router-link></li>
                        <li><router-link to="/people" href="#">行人检测</router-link></li>
                    </ul> 
                </transition>                
            </section>
            <ul class="bottom-ul">
                <li><router-link to="/product" href="#">产品</router-link></li>
                <li><router-link to="/about" href="#">关于我们</router-link></li>
                <li><router-link to="/join" href="#">加入我们</router-link></li>
            </ul> 
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    name: 'App',
    data(){
        return {
            isShow : false,
            isDrop : false,
        }
    },
    components : {
        Header,
        Footer,
    },
    methods: {
        handleToggle(){
            this.isShow = !this.isShow;
            // DOM操作~~
            // if(this.isShow)
            //     document.getElementById('rotate').style.transform = 'rotate(-90deg)';
            // else
            //     document.getElementById('rotate').style.transform = 'rotate(90deg)';
        },
        handleDrop(){
            this.isDrop = !this.isDrop;
        },
        handleGoto(e){
            // console.log(e.target.tagName)
            if(e.target.tagName === 'A' || e.target.tagName === "LI"){
                this.isDrop = !this.isDrop;
                this.isShow = false;
            }
        }
    }
}
</script>

<style scoped lang="scss">
    #app{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 3.75rem;
        height: 100%;
        background-color: #e8e8e8;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        main{
            flex: 1;
            overflow: auto;
        }
        /* 模态框 */
        .mask{
            height: 100%;
            background-color: #071819;
            position: absolute;
            width: 100%;
            top: 0.44rem;
            font-size: 0.11rem;
            section{
                color: #ccc;
                div{
                    height: 0.31rem;
                    line-height: 0.31rem;
                    border-bottom: 0.01rem solid #484a4a;
                    padding: 0 0.18rem 0 0.2rem;
                    position: relative;
                    span{
                        position: absolute;
                        right: 0.175rem;                                                
                    } 
                    .bottom{
                        transform: rotate(90deg);
                        transition: transform .5s linear;
                        &::after{
                            content: ">";
                            font-family: monospace;      
                        }
                    }
                    .top {
                        transform: rotate(-90deg);
                        transition: transform .5s linear;
                        &::after{
                            content: "<";
                            font-family: monospace;      
                        }
                    }       
                }
                .top-ul{
                    overflow: hidden;
                    li{                        
                        border-bottom: 0.01rem solid #484a4a;
                        padding: 0 0.18rem 0 0.2rem;
                        background-color: #323838;
                        a{
                            color: #ccc;
                            display: block;
                            height: 0.31rem;
                            line-height: 0.31rem;
                        }
                    }
                }
            }
            .bottom-ul li{
                border-bottom: 0.01rem solid #484a4a;
                padding: 0 0.18rem 0 0.2rem;
                a{
                    display: block;
                    color: #ccc;
                    height: 0.31rem;
                    line-height: 0.31rem;
                }
            }  
        }
    }
    .slide-enter-active, .slide-leave-active {
        transition: height .2s linear;
    }
    .slide-enter, .slide-leave-to {
        height: 0rem;
    }
    .slide-enter-to, .slide-leave {
        height: 0.64rem;
    }
</style>