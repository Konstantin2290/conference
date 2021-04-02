<template>
    <form action="" class="form-login" @submit.prevent="logIn()">
        <label for="login" class="form-label align-self-start">Логин</label>
        <input
                class="form-control mb-3"
                type="text"
                id="login"
                v-model.trim="login"
                @blur="$v.login.$touch()"
                :class="{'is-invalid': $v.login.$error}"
        >
        <div class="invalid-feedback" v-if="!$v.login.required">
            Пожалуйста, укажите логин
        </div>
        <div class="invalid-feedback" v-if="!$v.login.minLength">
            Не менее {{$v.login.$params.minLength.min}} символов
        </div>
        <div class="invalid-feedback" v-if="!$v.login.maxLength">
            Не более {{$v.login.$params.maxLength.max}} символов
        </div>
        <label for="login-pass" class="form-label align-self-start">Пароль</label>
        <input
                class="form-control mb-3"
                type="password"
                id="login-pass"
                v-model="pass"
                @blur="$v.pass.$touch()"
                :class="{'is-invalid': $v.pass.$error}"
        >
        <div class="invalid-feedback" v-if="!$v.pass.required">
            Пожалуйста, укажите пароль
        </div>
        <div class="invalid-feedback" v-if="!$v.pass.minLength">
            Не менее {{$v.pass.$params.minLength.min}} символов
        </div>
        <div class="invalid-feedback" v-if="!$v.pass.maxLength">
            Не более {{$v.pass.$params.maxLength.max}} символов
        </div>
        <div class="invalid-feedback" v-if="!$v.pass.valid">
            Строчные,заглавные латинские буквы, спецсимволы и цифры
        </div>
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
    import { required, minLength, maxLength} from 'vuelidate/lib/validators'
    export default {
        name: "Login",
        data() {
            return {
                login: '',
                pass: ''
            }
        },
        validations: {
            login: {
                required: required,
                minLength: minLength(5),
                maxLength: maxLength(25)
            },
            pass: {
                required: required,
                minLength: minLength(5),
                maxLength: maxLength(25),
                valid: function(value) {
                    const containsUppercase = /[A-Z]/.test(value);
                    const containsLowercase = /[a-z]/.test(value);
                    const containsNumber = /[0-9]/.test(value);
                    const containsSpecial = /[#?!@$%^&*-]/.test(value);
                    return containsUppercase && containsLowercase && containsNumber && containsSpecial
                }
            },
        },
        methods: {
            close() {
                this.$emit('closeLogin')
            },
            logIn() {
                this.$v.login.$touch();
                this.$v.pass.$touch();
                if(!this.$v.login.$error){
                    if(!this.$v.pass.$error){
                        this.$emit('closeLogin');
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>