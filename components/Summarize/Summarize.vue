<template>
  <section class="summarize" id="summarizeTrigger1">
    <div class="img-box--left show" id="SummarizeBg">
      <img  src="img/summarize.jpg" alt="">
    </div>
    <div class="container summarize__info">
      <div class="col-md-6 col-9">
        <div class="show" id="summarizeText" ref="summarizeText">
          <div>
            <h2>
              Let's summarize <br class="summarize__br">
              how good we are
            </h2>
            <p>
              Over the years we have done many things that we are proud of. This motivates us to continue looking for new challenges in order to improve our services.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="#summarizeTrigger2">
      <div class="digits show" id="digits" ref="digits">
        <div class="digits__item">
          <h3>900</h3>
          <div class="digits__text">Airlines to any destination</div>
        </div>
        <div class="vl"></div>
        <div class="digits__item">
          <h3>500</h3>
          <div class="digits__text">International and local car services</div>
        </div>
        <div class="vl"></div>
        <div class="digits__item">
          <h3>1.5m</h3>
          <div class="digits__text">Hotels in 90.000 destinations</div>
        </div>
        <div class="vl"></div>
        <div class="digits__item">
          <h3>20k</h3>
          <div class="digits__text">Pick-up points in 194 countries</div>
        </div>
      </div>
      <div class="right-white-block" id="rwb" ref="rwb"></div>
    </div>

  </section>
</template>

<style lang="scss" src="./summarize.scss"></style>

<script>
export default {
  mounted() {
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

    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene3)
    this.$scrollmagic.addScene(scene44)
    this.$scrollmagic.addScene(scene6)
  }
}
</script>

