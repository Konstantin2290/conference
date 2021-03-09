<template>
    <header>
        
                
            
        <div>
            <b-navbar toggleable="lg" type="my-header">
                <b-navbar-brand href="#">
                    <img class="header-logo" src="../assets/images/logo_2.png" alt="">
                    company<strong>Forum</strong>
                </b-navbar-brand>
                
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-toggle target="navbar-toggle-collapse">
                        <template #default="{ expanded }">
                            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                            <b-icon v-else icon="chevron-bar-down"></b-icon>
                        </template>
                    </b-navbar-toggle>

                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0 submit" type="submit">Search</b-button>
                        </b-nav-form>
                    </b-navbar-nav>

                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                            <template #button-content>
                                <span class="user">User</span>
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                 </b-collapse>
                <!-- <b-collapse id="nav-collapse" is-nav> 
                    
                    <b-nav-form class="ml-auto">
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search" style="min-width:300px;"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0 submit">Search</b-button>
                    </b-nav-form>  
                    
                    <b-navbar-nav class="ml-auto">
                        
                        <b-nav-item href="#">Reg</b-nav-item>
                        <b-nav-item href="#">Sign In</b-nav-item>
                    </b-navbar-nav>
                </b-collapse> -->
            </b-navbar>
        </div>
    </header>
</template>

<script>
    export default {
        name: "MainHeader"
    }
</script>

<style scoped lang="scss">

    .navbar {
        //position: fixed;
        padding-left: 15%;
        padding-right: 15%;
         
    }
    .navbar-my-header {
        background-color: rgb(56,57,59);
        width: 100%;
        margin: auto;
    }
    .navbar-brand {
        color: rgb(22,188,153);// rgb(142, 156, 168);
        min-width: 40px;
        max-width: 60px;
        img {
            width:70%;
        }
    }
    .submit {
       background-color: rgb(22,188,153);
       border-color: rgb(22,188,153);
       transition: all 0.2s ease-out;
    }
    .submit:hover {
        background-color: rgba(22,188,153,0.8);
        border-color: rgb(22,188,153);
        transform: scale(1.1);
    }

    //что за хуйня
     span {
       
        
        color:rgba(255, 255, 255,0.7) !important;
            }
    
    
    
    
    // .navbar-nav  {
    //     a {
    //         color:rgba(255, 255, 255,0.7);
    //         transition: all 1s ease-out;
    //     } 
    //     a:hover {
    //         color: rgb(22,188,153);
    //     }
        
    
     
    
    
</style>