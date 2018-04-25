<template>
    <header>
        <div class="header-left">
            <h1>
                <a @click.stop='goIndex'>
                    <span>奇点云</span>
                </a>
            </h1>
        </div> 
        <div class="header-right" @click='dropDown'></div>
    </header>
</template>

<script>
export default{
    methods: {
        dropDown(){
            this.$emit('isDrop');
        },
        goIndex(){
            this.$router.push('/');
        }
    }
}
</script>

<style scoped lang="scss">
    header{
        height: 0.44rem;
        display: flex;
        background-color: #071819;
        justify-content: space-between;
        .header-left{
            h1{
                margin: 0.12rem 0 0 0.115rem;
                a{
                    display: block;
                    width: 0.8rem;
                    height: 0.19rem;
                    background: url('/static/imgs/logo.jpg') no-repeat center center;
                    background-size: 0.8rem 0.19rem;
                    span{
                        float: left;
                        height: 0.19rem;
                        font-size: 0.16rem;
                        line-height: 0.19rem;
                        display: none;
                    }
                } 
            }
        }
        .header-right{
            width: 0.55rem;
            background: url('/static/imgs/menu.jpg') no-repeat 0.28rem center;
            background-size: 0.15rem 0.1rem;
        }
    }
</style>