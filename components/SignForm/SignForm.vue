<template>
  <div class="register-form-wrapper">
    <h2>Sign in to your account</h2>
    <form
      class="register-form d-flex flex-column"
    >
      <e-input :placeholder="'Enter your Username without ID'"></e-input>
      <e-input :placeholder="'Enter your Password'"></e-input>

      <button class="btn btn--big sign-btn">
        Sign in
      </button>
      <div class="sign-link-wrapper text-center">Don’t have an account? <a href="#" @click.prevent="openRegister" class="sign-link">Sign up</a> </div>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    openRegister() {
      this.$emit('openRegister')
    }
  }
}
</script>

<style lang="scss" src="./sign-form.scss"></style>
