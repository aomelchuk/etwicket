<template>
  <section class="summarize" id="summarizeTrigger1">
    <div class="img-box--left show" id="SummarizeBg">
      <img  src="img/summarize.jpg" alt="">
    </div>
    <div class="container summarize__info">
      <div class="col-md-6 col-9">
        <div class="show" id="summarizeText" ref="summarizeText">
          <div>
            <h2 v-html="staticData.header"></h2>
            <p>
              {{staticData.description}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="#summarizeTrigger2">
      <div class="digits show" id="digits" ref="digits">
        <template v-for="(digit, index) in staticData.digits">
          <div class="digits__item" :key="index">
            <h3>{{digit.number}}</h3>
            <div class="digits__text">{{digit.text}}</div>
          </div>
          <div class="vl" v-if="index < staticData.digits.length - 1"></div>
        </template>
      </div>
      <div class="right-white-block" id="rwb" ref="rwb"></div>
    </div>

  </section>
</template>

<style lang="scss" src="./summarize.scss"></style>

<script>
import animation from '@/mixins/animation.js'

export default {
  mixins: [animation],
  props: ['staticData'],
  mounted() {
    if (!this.isMobile) {
      const summarizeTextWidth = this.$refs.summarizeText.clientWidth
      this.$refs.summarizeText.children[0].style.width = summarizeTextWidth+'px'

      const animationSettings = {
        duration: 500,
        offset: 100,
        triggerHook: 0.9,
        triggerElement: '#summarizeTrigger1',
        reverse: false
      }

      const scene2 = this.$scrollmagic.scene(animationSettings)
        .setTween(
          TweenMax.fromTo('#SummarizeBg', 1, {css:{width:0}}, {css:{width:'76%'}})
        )

      const scene3 = this.$scrollmagic.scene(animationSettings)
        .setTween(
          TweenMax.fromTo('#summarizeText', 1, {css:{width:0}}, {css:{width:'100%'}})
        )
      const digitsWidth = this.$refs.digits.clientWidth
      const rwbWidth =  this.$refs.rwb.clientWidth
      const scene44 = this.$scrollmagic.scene({
        duration: 500,
        offset: 100,
        triggerHook: 0.5,
        triggerElement: '#summarizeTrigger1',
        reverse: false
      })
        .setTween(
          TweenMax.fromTo('#digits', 1,
            {css:{width:0}},
            {css:{width: '100%'}})
        )

      const scene6 = this.$scrollmagic.scene({
        duration: 500,
        offset: 100,
        triggerHook: 0.5,
        triggerElement: '#summarizeTrigger1',
        reverse: false
      })
        .setTween(
          TweenMax.fromTo('#rwb', 1,
            {css:{width:0, right: '100%'}}, {css:{width: rwbWidth, right: '-50%'}})
        )

      this.animations.push(scene2)
      this.animations.push(scene3)
      this.animations.push(scene44)
      this.animations.push(scene6)
    }
    this.addScenes()
  }
}
</script>

