<template>
  <form class="register-form d-flex flex-column">
    <h2>
      Sign up to Etwicket
    </h2>
    <e-input :placeholder="'Email'" :small="true" type="email"></e-input>
    <e-input :placeholder="'Password'" :small="true" type="password"></e-input>

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

    <button class="btn">
      Sign up
    </button>
    <div class="sign-link-wrapper text-center" v-if="false">
      Already have an account? <a href="#">Sign in</a>
    </div>
  </form>
</template>

<style lang="scss" src="./register-form.scss"></style>
