<template>
    <form action="" class="form-register" @submit.prevent="register()">
        <label for="register-login" class="form-label align-self-start">Логин</label>
        <input
                class="form-control mb-2"
                type="text"
                id="register-login"
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
        <label for="register-pass" class="form-label align-self-start">Пароль</label>
        <input
                class="form-control mb-2"
                type="password"
                id="register-pass"
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
        <label for="register-repass" class="form-label align-self-start">Повторите Пароль</label>
        <input
                class="form-control mb-2"
                type="password"
                id="register-repass"
                v-model="repass"
                @blur="$v.repass.$touch()"
                :class="{'is-invalid': $v.repass.$error}"
        >
        <div class="invalid-feedback" v-if="!$v.repass.sameAs">
            Пароли не совпадают
        </div>
        <label for="email" class="form-label align-self-start">E-mail</label>
        <input
                class="form-control mb-2"
                type="email"
                id="email"
                v-model.trim="email"
                @blur="$v.email.$touch()"
                :class="{'is-invalid': $v.email.$error}"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">
            Пожалуйста, укажите email
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
            Пожалуйста, укажите корректный email
        </div>
        <div class="modal-footer">
            <button
                    type="button"
                    class="btn btn-secondary"
                    @click="close"
            >
                Отмена
            </button>
            <button class="btn local-success" type="submit" >Регистрация</button>
        </div>
    </form>
</template>

<script>
import { required, email, minLength, maxLength, sameAs} from 'vuelidate/lib/validators'
export default {
    name: "Register",
    data() {
        return {
            email: '',
            login: '',
            pass: '',
            repass: ''
        }
    },
    validations: {
        email: {
            required: required,
            email: email
        },
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
        repass: {
            sameAs: sameAs("pass")
        }
    },
    methods:{
        register() {
            this.$v.email.$touch();
            this.$v.login.$touch();
            this.$v.pass.$touch();
            this.$v.repass.$touch();
            if(!this.$v.login.$error){
                if(!this.$v.pass.$error){
                    if(!this.$v.repass.$error){
                        if(!this.$v.email.$error){
                            this.$emit('closeLogin');
                            alert('Вы успешно зарегистрировались!');
                        }
                    }
                }
            }
        },
        close() {
            this.$emit('closeLogin')
        },
    }
}
</script>

<style scoped>

</style>