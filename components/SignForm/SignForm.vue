<template>
  <div class="register-form-wrapper">
    <h2>Sign in to your account</h2>
    <form
      class="register-form d-flex flex-column"
    >
      <input
        placeholder="Enter your ID"
        class="register-form_input register-form_input--first"
        >
      <input
        placeholder="Enter your Username"
        class="register-form_input"
        type="text">
      <input
        placeholder="Enter your Password"
        class="register-form_input"
        type="text">
      <a href="#" class="forgot-pass">Forgot password?</a>

      <button class="btn btn--big sign-btn">
        Sign in
      </button>
      <div class="sign-link-wrapper text-center">Don’t have an account? <a href="#" class="sign-link">Sign up</a> </div>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" src="./sign-form.scss"></style>
