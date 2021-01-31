<template>
    <BaseLayout>
        <template v-slot:header>
            <MainHeader/>
        </template>
        <template v-slot:content>
            <div>Home</div>
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
            MainFooter
        }
    }
</script>

<style scoped>

</style>