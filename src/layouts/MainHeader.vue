<template>
    <header>
        <div class="header-wrap">
            <a class="logo" href="/">
                <img :src=" require('../assets/images/logo_2.png')" alt="CompanyLogo">
                <h1>company<span>Forum</span></h1>
            </a>
            <button class="btn-hamburger" type="button" @click="showSub">
                <b-icon-justify class="h2" style="color: rgb(22,188,153)"></b-icon-justify>
            </button>
            <div class="header-submenu" :class="opened ? 'hidden': ''">
                <form class="" action="">
                    <input type="text">
                    <button type="submit">Search</button>
                </form>
                <a class="btn-login" href="#" @click.prevent="openLogin">User</a>
            </div>
        </div>
        <login
        v-if="isLoginOpen"
        @close="isLoginOpen = false"
        />

    </header>
</template>

<script>
import Login from "../components/LoginModal"
    export default {
        name: "MainHeader",
        components: {
        Login
        },
        data() {
            return {
                opened: true,
                width: 0,
                isLoginOpen: false,
                user: false
            }
        },
        methods: {
            showSub() {
                this.opened = !this.opened;
            },
            displayByWidth() {                
                this.width = document.documentElement.clientWidth;
                if(this.width<601){
                    this.opened = true;
                }
            },
            widthEventHandler() {
                this.displayByWidth();
            },
            openLogin() {
                if(this.user){
                    this.$router.push({path: "/account"})
                }else{
                    this.isLoginOpen = true;
                }
            }

        },
        created() {
            window.addEventListener("resize", this.widthEventHandler);
            this.displayByWidth();
        },
        destroyed() {
            window.removeEventListener("resize", this.widthEventHandler);
        }

    }
</script>

<style scoped lang="scss">

</style>