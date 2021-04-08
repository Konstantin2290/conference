<template>
    <BaseLayout>
        <template v-slot:header>
            <MainHeader/>
        </template>
        <template v-slot:content>
            <div class="my-content">
                <h1>Best for your corporate <br>communication</h1>
                <b-button class="button" href="/themes">LET'S START</b-button>
            </div>
        </template>
        <template v-slot:footer>
            <MainFooter/>
        </template>
    </BaseLayout>
</template>

<script>
    import BaseLayout from "../../layouts/BaseLayout";
    import MainHeader from "../../layouts/MainHeader";
    import MainFooter from "../../layouts/MainFooter";
    export default {
        name: "Home",
        components: {
            BaseLayout,
            MainHeader,
            MainFooter,
        }
    }
</script>

<style scoped lang="scss">
    .my-content {
        margin: auto;
        background-image: url(../../assets/images/fon.jpg);
        background-size: cover;
        height: 100%;
        text-align: center;
        padding-top: 8%;
        h1{
            color: rgb(255, 255, 255);
            font-weight: bold;
            font-size: 10vh;
            text-shadow: 6px 4px 3px  rgb(48, 48, 48);
            margin-bottom: 5%;
            @media screen and (max-width: 500px){
                font-size: 2rem;
                padding-left: 1rem;
                padding-right: 1rem;
            }
        }
        .button {
                background-color: rgb(255, 255, 0);
                font-size: 6vh;
                font-weight:bold;
                margin-right: 2%;
                padding: 15px 25px;
                color: rgb(48, 48, 48);
                border: none;
                border-radius:10px;
                box-shadow: 30px 37px 22px -9px  rgb(48, 48, 48);
                transform: skew(-15deg);
                transition: all 0.5s ease-out;
            }
        .button:hover {
            position: relative;
            transform: scale(1.2);
        }
        }          

</style>