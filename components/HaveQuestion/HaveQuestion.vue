<template>
  <section class="have-question" id="haveQuestionTrigger">
    <div class="container d-flex">
      <div class="col-md-6 col-sm-12 have-question__info">
        <div class="show" id="questionText" ref="questionText">
          <div>
            <h2>Have a questions?</h2>
            <p>
              Feel free to contact us! Send your request and we will contact you as soon as posible.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <RequestForm/>
      </div>
      <div class="question-img-shadow">
        <div class="show" id="requestImg">
          <img src="img/have-question.png" alt="">
        </div>
        <img class="img-shadow show" id="requestImgShadow" src="img/have-question-shadow.jpg" alt="">
      </div>
    </div>


  </section>
</template>

<script>
import SignForm from '@/components/RequestForm/RequestForm.vue'
import animation from '@/mixins/animation.js'

export default {
  mixins: [animation],
  mounted() {
    if (!this.isMobile) {
      const questionTextWidth = this.$refs.questionText.clientWidth
      this.$refs.questionText.children[0].style.width = questionTextWidth+'px'

      const animationSettings = {
        duration: 500,
        offset: 100,
        triggerHook: 0.9,
        triggerElement: '#haveQuestionTrigger',
        reverse: false
      }

      const scene34 = this.$scrollmagic.scene(animationSettings)
        .setTween(
          TweenMax.fromTo('#questionText', 1, {css:{width:0}}, {css:{width:'100%'}})
        )



      const scene36 = this.$scrollmagic.scene(animationSettings)
        .setTween(
          TweenMax.fromTo('#requestImg', 1, {css:{width:0}}, {css:{width: '100%'}})
        )
      const scene37 = this.$scrollmagic.scene(animationSettings)
        .setTween(
          TweenMax.fromTo('#requestImgShadow', 1, {css:{width:0}}, {css:{width: '100%'}})
        )


      this.animations.push(scene34)
      this.animations.push(scene36)
      this.animations.push(scene37)
    }

    this.addScenes()
  },
  components: {
    SignForm
  }
}
</script>

<style lang="scss" src="./have-questions.scss"></style>
