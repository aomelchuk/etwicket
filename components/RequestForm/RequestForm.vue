<template>
  <div class="register-form-wrapper">
    <h2>Send your request</h2>
    <form
      class="register-form d-flex flex-column"
    >
      <input
        placeholder="Enter your name"
        class="register-form_input"
        >
      <input
        placeholder="Enter your phone number"
        class="register-form_input"
        type="text">
      <input
        placeholder="Enter your email"
        class="register-form_input"
        type="text">
      <input
        placeholder="Enter your company's name"
        class="register-form_input"
        type="text">

      <button class="btn btn--big sign-btn">
        Sign in
      </button>
    </form>
  </div>
</template>

<style lang="scss" src="./request-form.scss"></style>
