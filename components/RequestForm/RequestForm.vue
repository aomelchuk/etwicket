<template>
  <div class="register-form-wrapper" id="reqForm">
    <h2>{{texts.header}}</h2>
    <form
      class="register-form d-flex flex-column"
    >
      <e-input
        :placeholder="texts.placeholders.name"
        class="register-form_input"
        ></e-input>
      <e-input
        :placeholder="texts.placeholders.phone"
        class="register-form_input"
        type="text"></e-input>
      <e-input
        :placeholder="texts.placeholders.email"
        class="register-form_input"
        type="text"></e-input>
      <e-input
        :placeholder="texts.placeholders.companyName"
        class="register-form_input"
        type="text"></e-input>

      <button class="btn btn--big sign-btn">
        {{texts.sendBtn}}
      </button>
    </form>
  </div>
</template>

<style lang="scss" src="./request-form.scss"></style>


<script>
import animation from '@/mixins/animation.js'

export default {
  mixins: [animation],
  props: ['texts'],
  mounted() {
    if (!this.isMobile) {
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
    }
    this.addScenes()
  }
}
</script>
