<template>
    <div class="my-content">
        <div class="container">
            <div class="content">
                <h1>404</h1>
                <h2>Sory,</h2>
                <h2>Page not found...</h2>
            </div>
            <div class="content">
                <img src="../assets/images/not_found.jpg" alt="Image" class="card-img">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped lang="scss">
.my-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .content {
        text-align: center;
        h1{
            color: rgb(73, 73, 73);
            font-weight: bold;
            font-size: 10vh;
            text-shadow: 6px 4px 3px  rgb(189, 189, 189);
            padding-top:3%;
        }
        h2 {
            color: rgb(0, 0, 0);
            font-size: 8vh;
            text-shadow: 6px 4px 3px  rgb(189, 189, 189);
        }
        img {
                width: 30%;
        }
    }
    
}

</style>