<template>
  <section class="top-section">
    <div class="container d-flex">
      <div class="col-xl-6 col-md-6 col-sm-12 top-section__info">
        <div class="text-wrapper" id="#trigger2" ref="trigger2" >
          <h1 v-html="staticData.header"></h1>
          <p>{{staticData.description}}</p>
          <div class="btn-wrapper">
            <button class="btn btn--clear" @click="openRegister">
              {{staticData.registerBtnText}}
              <img src="img/right-arrow.svg" class="btn_arrow" alt="">
            </button>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-6 col-sm-12 form-wrapper">
        <SignForm @openRegister="openRegister" :texts="staticData.signFormTexts"/>
      </div>
    </div>
  </section>
</template>

<script>
import SignForm from '@/components/SignForm/SignForm.vue'

export default {
  props: ['staticData'],
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
