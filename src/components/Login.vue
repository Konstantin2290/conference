<template>
    <form action="" class="form-login" @submit.prevent="logIn()">
        <label for="login" class="form-label align-self-start">Логин</label>
        <input class="form-control mb-3" type="text" id="login">
        <label for="login-pass" class="form-label align-self-start">Пароль</label>
        <input class="form-control mb-3" type="password" id="login-pass">
        <div class="modal-footer">
            <button
                    type="button"
                    class="btn btn-secondary"
                    @click="close"
            >
                Отмена
            </button>
            <button class="btn local-success" type="submit">Логин</button>
        </div>
    </form>
</template>

<script>
    // import { required, email} from 'vuelidate/lib/validators'
    export default {
        name: "Login",
        data() {
            return {
                email: '',
            }
        },
        // validations: {
        //     email: {
        //         required: required,
        //         email: email
        //     }
        // },
        methods: {
            close() {
                this.$emit('closeLogin')
            },
            logIn() {
                console.log('login')
            }
        }
    }
</script>

<style scoped>

</style>