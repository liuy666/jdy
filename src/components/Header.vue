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
import './Hearder.scss'
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
<style scoped>

</style>