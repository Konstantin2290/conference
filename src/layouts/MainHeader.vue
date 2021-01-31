<template>
    <header>
        <div>
        <b-navbar toggleable="lg" type="my-header">
            <b-navbar-brand href="#">
                <img class="header-logo" src="../assets/images/logo_2.png" alt="">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>


                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
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
    .navbar-my-header {
        background-color: black;
    }
    .navbar-brand {
        
        min-width: 40px;
        max-width: 60px;
        img {
            width:100%;
        }
    }
</style>