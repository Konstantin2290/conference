<template>
    <BaseLayout>
        <template v-slot:header>
            <MainHeader/>
        </template>
        <template v-slot:content>
            <div class="my-content">
                <div class="container">
                    <!-- Тема -->
                    <b-card class="card_theme">
                        <b-row>
                        <b-col md="2">
                            <img src="../../assets/images/avatar_from_theme.png" alt="Image" class="card-img">
                        </b-col>
                        <b-col md="10">
                            <b-card-text>
                                Bacon ipsum dolor amet picanha swine chuck kielbasa short ribs ball tip. Capicola tail cow meatball filet mignon flank alcatra.
                            </b-card-text>
                                <b-card-text class="added_text">
                                    Added 06.03.2021 by 
                                    <a href="#" class="added_UserLink">Administrator</a>
                                </b-card-text>
                        </b-col>
                        </b-row>
                    </b-card>
                    
                
                </div>

                <div class="container">
<!-- Первое Сообщение пользователей -->
                    <b-card class="card_message">
                        <b-row>
                            <b-col md="2" class="user">
                                <b-row>
                                    <b-col cols="6"><img src="../../assets/images/avatar_from_theme.png" alt="Image" class="card-img"></b-col>
                                    <b-col cols="6">User132</b-col>
                                </b-row>
                            </b-col>
                            <b-col md="10">
                                <b-card-text>
                                    Chicken t-bone spare ribs beef ribs chuck capicola sausage tenderloin. Cow pork belly doner shank pancetta leberkas. Picanha turducken pancetta, shankle turkey ham hock jerky capicola doner boudin alcatra. Pork belly pastrami tri-tip tongue.
                                </b-card-text>
                                <b-card-text class="added_text">     
                                    Added 06.03.2021 by 
                                    <a href="#" class="added_UserLink">User132</a>
                                </b-card-text>
                            </b-col>
                        </b-row>
                    </b-card>

                <!-- Второе Сообщение пользователей -->
                    <b-card class="card_message">
                        <b-row>
                            <b-col md="2" class="user">
                                <b-row>
                                    <b-col cols="6"><img src="../../assets/images/avatar_from_theme.png" alt="Image" class="card-img"></b-col>
                                    <b-col cols="6">User785</b-col>
                                </b-row>
                            </b-col>
                            <b-col md="10">
                                <b-card-text>
                                    Venison chicken rump sausage frankfurter tongue pork belly doner short loin chislic meatloaf sirloin strip steak turducken shank. Turducken tongue jerky landjaeger chicken cow tri-tip pork loin alcatra, biltong brisket buffalo burgdoggen salami. Shoulder short loin sausage pancetta. Filet mignon bresaola hamburger corned beef tongue flank picanha turducken ribeye ham hock tri-tip capicola. Rump shoulder doner bresaola. Beef ribs filet mignon pancetta shank salami ham hock boudin corned beef ham brisket chislic burgdoggen. Ribeye alcatra doner, meatloaf shankle sausage burgdoggen venison biltong turkey.                                </b-card-text>
                                <b-card-text class="added_text">     
                                    Added 06.03.2021 by 
                                    <a href="#" class="added_UserLink">User785</a>
                                </b-card-text>
                            </b-col>
                        </b-row>
                    </b-card>

                    <div>
 <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table" class="pagination"></b-pagination>
                    </div>
                       

                    
                </div>
                <div class="container">
                <!-- Ввод текста -->
                <b-card class="card_message_send">
                        <b-row>
                            <b-col md="2" class="user">
                                <b-row>
                                    <b-col cols="6"><img src="../../assets/images/avatar_from_theme.png" alt="Image" class="card-img"></b-col>
                                    <b-col cols="6">User785</b-col>
                                </b-row>
                            </b-col>
                            <b-col md="10">
                                <b-form-textarea id="textarea-auto-height" placeholder="Auto height textarea" rows="3" max-rows="8" class="text_area"></b-form-textarea>
                                <b-card-text class="added_text">   
                                    <b-button class="button_send">Send</b-button>
                                </b-card-text>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
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
        name: "Theme",
        data() {
            return {
                perPage: 3,
                currentPage: 1,
                items: [
                    { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
                    { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
                    { id: 3, first_name: 'Barney', last_name: 'Rubble' },
                    { id: 4, first_name: 'Betty', last_name: 'Rubble' },
                    { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
                    { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
                    { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
                    { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
                    { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
                ]
            }
        },
        computed: {
            rows() {
                return this.items.length
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
    width: 100%;
	height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    .container {
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        padding: 15px 5px;
        margin-bottom: 2%;
        display: flex;
        flex-direction: column;
        // Главная тема
        .card_theme{
            background-color: rgba(240, 240, 240, 0.6);
            margin: 10px;
            border-radius: 10px;
            .added_text {
                text-align: right;
            }
        }
        // Сообщение пользователей
        .card_message {
            background-color: rgba(240, 240, 240, 0.6);
            margin: 10px;
            border-radius: 10px;
            .user {
                border-right:  2px solid rgb(208,212,215);
                display: flex;
                justify-content: space-between;
                .card-img {
                    width: 100%;
                    border-radius: 50%;
                }
            }
            .added_text {
                text-align: right;
            }
        }

        // Пагинация
        .pagination {
            margin-right: 10px;
            float: right;
        }
        // Отправка сообщений
        .card_message_send {
            background-color: rgba(240, 240, 240, 0.6);
            margin: 10px;
            border-radius: 10px;
            .user {
                border-right:  2px solid rgb(208,212,215);
                display: flex;
                justify-content: space-between;
                .card-img {
                    width: 100%;
                    border-radius: 50%;
                }
            }
            .text_area {
                margin-bottom: 5px;
            }
            .added_text {
                text-align: right;
                .button_send {
                    background-color:  rgb(22,188,153);
                    padding: 5px 25px;
                    border: none;
                }
                .button_send:hover {
                    background-color:  rgb(17, 117, 95);
                }
            }
        }
    }
}

</style>