<template>
  <div class="modal fade show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-if="login">
            Логин
          </h5>
          <h5 class="modal-title" v-if="!login">
            Регистрация
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
          ref="modalBody"
        >
          <div class="login" v-if="login">
            <form action="" class="form-login">
              <label for="login" class="form-label align-self-start">Логин</label>
              <input class="form-control mb-3" type="text" id="login">
              <label for="login-pass" class="form-label align-self-start">Пароль</label>
              <input class="form-control mb-3" type="password" id="login-pass">
              <div class="modal-footer">
                <button
                        type="button"
                        class="btn btn-secondary"
                        @click="closeLogin"
                >
                  Отмена
                </button>
                <button class="btn local-success" type="submit">Логин</button>
              </div>
            </form>
          </div>
          <div class="register" v-if="!login">
            <form action="" class="form-register">
              <label for="register-login" class="form-label align-self-start">Логин</label>
              <input class="form-control mb-2" type="text" id="register-login">
              <label for="register-pass" class="form-label align-self-start">Пароль</label>
              <input class="form-control mb-2" type="password" id="register-pass">
              <label for="register-repass" class="form-label align-self-start">Повторите Пароль</label>
              <input class="form-control mb-2" type="password" id="register-repass">
              <div class="modal-footer">
                <button
                        type="button"
                        class="btn btn-secondary"
                        @click="closeLogin"
                >
                  Отмена
                </button>
                <button class="btn local-success" type="submit">Регистрация</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      login: false
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  computed: {

  },
  methods: {
    closeLogin() {
      this.$emit('close')
    },
    onBodyScroll() {
      const modalBody = this.$refs.modalBody
      if (modalBody.clientHeight + modalBody.scrollTop >= modalBody.scrollHeight) {
        this.isRulesReaded = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
