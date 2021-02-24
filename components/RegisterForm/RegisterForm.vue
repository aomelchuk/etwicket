<template>
  <form class="register-form d-flex flex-column">
    <h2>
      Sign up to Etwicket
    </h2>
    <input placeholder="First name"
           class="register-form_input">
    <input placeholder="Last name"
           type="text"
           class="register-form_input">
    <input placeholder="Company name"
           type="text"
           class="register-form_input">
    <input placeholder="Head Office Location" type="text"
           class="register-form_input">
    <input placeholder="Job Titile"
           class="register-form_input">
    <input placeholder="Email"
           type="text"
           class="register-form_input">
    <input placeholder="Phone numbr"
           type="text"
           class="register-form_input">

    <div class="user-agreement mt-2">
      <input type="checkbox" id="registration_form_agreeTerms"
             name="registration_form[agreeTerms]"
             class="custom-checkbox"
             required
             value="1">
      <label class="form-check-label" for="terms">
                                                        <span>
                                                            I carefully read, understood and completely agree
                                                        with <a href="/services/11">Privacy policy</a> and
                                                        <a href="/services/12">Terms of use</a>.
                                                        </span>
      </label>
    </div>

    <button class="btn btn--big sign-btn">
      Sign up
    </button>
    <div class="sign-link-wrapper text-center">
      Already have an account? <a href="#">Sign in</a>
    </div>
  </form>
</template>

<style lang="scss" src="./register-form.scss"></style>
