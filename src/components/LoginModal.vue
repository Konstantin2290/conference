<template>
  <div class="modal fade show" ref="modal-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <a href="" class="form-selector" @click="setLogin" :class="login ? 'active': ''">Логин</a>
            <a href="" class="form-selector" @click="setRegister" :class="!login ? 'active': ''">Регистрация</a>
          </h5>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="closeLogin"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div
          class="modal-body"
        >
          <div class="login" v-if="login">
            <Login @closeLogin="closeLogin"/>
          </div>
          <div class="register" v-if="!login">
            <Register @closeLogin="closeLogin"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Login from '../components/Login'
import Register from '../components/Register'
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    Login,
    Register
  },
  data() {
    return {
      login: true,
    }
  },
  methods: {
    closeLogin() {
      this.$emit('close')
    },
    setLogin(e) {
      e.preventDefault();
      this.login = true;
    },
    setRegister(e) {
      e.preventDefault();
      this.login = false;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
