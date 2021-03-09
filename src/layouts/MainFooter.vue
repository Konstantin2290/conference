<template>
    <footer>
       <div>
            <b-nav align="center">
                <b-nav-item>Administration</b-nav-item>
                <b-nav-item>Use conditions</b-nav-item>
                <b-nav-item>For press</b-nav-item>
                <b-nav-item>Rules</b-nav-item>
            </b-nav>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>

<style scoped lang="scss">
    footer {
            background-color: rgb(56,57,59);
            //position: fixed;
            bottom:0;  
            a {
                color: rgba(255,255,255,0.6);
                transition: all 1s ease-out;
            }
            a:hover {
            color: rgb(22,188,153);
            }
        }
    
</style>