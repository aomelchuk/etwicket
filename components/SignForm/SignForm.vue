<template>
  <div class="register-form-wrapper">
    <h2>{{texts.header}}</h2>
    <form
      class="register-form d-flex flex-column"
    >
      <e-input :placeholder="texts.placeholdersUsername"></e-input>
      <e-input :placeholder="texts.placeholderPassword"></e-input>

      <button class="btn btn--big sign-btn">
        {{texts.signBtn}}
      </button>
      <div class="sign-link-wrapper text-center">{{texts.haveAcc}} <a href="#" @click.prevent="openRegister" class="sign-link">{{texts.signUp}}</a> </div>
    </form>
  </div>
</template>


<script>
export default {
  props: ['texts'],
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
