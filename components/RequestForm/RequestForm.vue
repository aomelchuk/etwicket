<template>
  <div class="register-form-wrapper" id="reqForm">
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


<script>
import animation from '@/mixins/animation.js'

export default {
  mixins: [animation],
  mounted() {
    const animationSettings = {
      duration: 300,
      offset: 0,
      triggerHook: .5,
      triggerElement: '#reqForm',
      reverse: false
    }

    const scene35 = this.$scrollmagic.scene(animationSettings)
      .setTween(
        TweenMax.fromTo('#reqForm', 1, {css:{opacity:0}}, {css:{opacity: 1}})
      )
    this.animations.push(scene35)
    this.addScenes()
  }
}
</script>
