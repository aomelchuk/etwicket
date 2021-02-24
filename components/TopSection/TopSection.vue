<template>
  <section class="top-section">
    <div class="container d-flex">
      <div class="col-xl-6 col-md-6 col-sm-12 top-section__info">
        <div class="text-wrapper">
          <h1>Simplifying <br> your business trip</h1>
          <p>
            We make it simple to launch in the cloud and scale up as you grow – with an intuitive control panel, predictable pricing, team accounts, and more.
          </p>
          <div class="btn-wrapper">
            <button class="btn btn--clear" @click="openRegister">
              Register
              <img src="img/right-arrow.svg" class="btn_arrow" alt="">
            </button>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-6 col-sm-12 form-wrapper">
        <SignForm @openRegister="openRegister"/>
      </div>
    </div>
  </section>
</template>

<script>
import SignForm from '@/components/SignForm/SignForm.vue'

export default {
  methods: {
    openRegister() {
      this.$emit('openRegister')
    }
  },
  components: {
    SignForm
  }
}
</script>

<style lang="scss" src="./top-section.scss"></style>
