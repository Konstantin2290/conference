<template>
    <BaseLayout>
        <template v-slot:header>
            <MainHeader/>
        </template>
        <template v-slot:content>
            <div class="my-content">
                <b-container>
                    <b-row>
                        <b-col cols="2"></b-col>
                        <b-col cols="8">
                            <!-- Ввод новой темы -->
                            <b-form-input v-model="text" placeholder="Enter new theme" class="input_theme"></b-form-input>

                            <!-- Основные темы -->
                            
                            <b-card class="card">
                                <b-row>
                                <b-col md="2">
                                    <img src="../../assets/images/avatar_from_theme.png" alt="Image" class="card-img">
                                </b-col>
                                <b-col md="10">
                                        <a href="#" class="card-link">Bacon ipsum dolor amet picanha swine chuck kielbasa short ribs ball tip. Capicola tail cow meatball filet mignon flank alcatra. </a>
                                        <b-card-text class="added_text">
                                            Added 06.03.2021 by 
                                            <a href="#" class="added_UserLink">Administrator</a>
                                        </b-card-text>
                                </b-col>
                                </b-row>
                            </b-card>

                            <b-card class="card">
                                <b-row>
                                <b-col md="2">
                                    <img src="../../assets/images/avatar_from_theme.png" alt="Image" class="card-img">
                                </b-col>
                                <b-col md="10">
                                        <a href="#" class="card-link">Meatball corned beef landjaeger ribeye spare ribs pork sirloin.</a>
                                        <b-card-text class="added_text">
                                            Added 12.03.2021 by 
                                            <a href="#" class="added_UserLink">Administrator</a>
                                        </b-card-text>
                                </b-col>
                                </b-row>
                            </b-card>
                            <b-card class="card">
                                <b-row>
                                <b-col md="2">
                                    <img src="../../assets/images/avatar_from_theme.png" alt="Image" class="card-img">
                                </b-col>
                                <b-col md="10">
                                        <a href="#" class="card-link">Andouille doner capicola, pancetta pig picanha ribeye short loin tongue chislic leberkas. Pork loin biltong jowl short ribs.</a>
                                        <b-card-text class="added_text">
                                            Added 20.03.2021 by 
                                            <a href="#" class="added_UserLink">Administrator</a>
                                        </b-card-text>
                                </b-col>
                                </b-row>
                            </b-card>
                            
                            
                            
                        </b-col>
                        <b-col cols="2"></b-col>
                    </b-row>
                </b-container>
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
        name: "AllThemes",
        data() {
            return {
                text: ''
            }
        },
        components: {
            BaseLayout,
            MainHeader,
            MainFooter
        }
    }
</script>

<style scoped lang="scss">
    .my-content {
        background-image: url(../../assets/images/fon_2.jpg);
        background-size: cover;
        background-attachment: fixed;
        height: 100vh;
        padding-top: 5%;
        padding-bottom: 25%;
        
        .input_theme {
            margin-bottom: 5%;
        }
        .card {
            background-color: rgba(241,241,241,0.8);
            padding: 0;
            border-radius: 0;
            .card-img {
                border-radius: 50%;
            }
            .card-link {
                color: rgb(54, 54, 54);
            }
            .card-link:hover {
                 text-decoration: underline;
            }
            .added_UserLink {
                text-decoration: underline;
                color: rgb(54, 54, 54);
            }
            .added_UserLink:hover {
                color: rgb(68, 186, 250);
            }
            .added_text {
                color: rgb(122, 122, 122);
            }
        }
        
        
    }
    

</style>