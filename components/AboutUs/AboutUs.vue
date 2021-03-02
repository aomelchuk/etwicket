<template>
  <section class="d-flex about-us" id="trigger2">
    <div class="container d-flex">
      <div class="col-md-6 col-sm-12 first-img">
        <div class="img-shadow-wrapper">
          <div class="show" id="aboutImg">
            <img src="img/about-us-1.png" alt="">
          </div>
          <img src="img/transparent_rect.png" class="img-shadow" alt="">
        </div>
      </div>
      <div class="col-md-6 col-sm-12 about-us__info">
        <div class="show" id="aboutUsText">
          <div>
            <h2>
              About us
            </h2>
            <p>
              Want to make your travel business more efficient and increase your online booking revenue? Want a user-friendly software that works for your business? Our innovative, fast, and reliable B2B booking engine grants you immediate access to the best B2B offers from a vast range of worldwide suppliers, anytime, anywhere.
              <br><br>
              We’re constantly adding new products, improving features and updating our database so that our partners always have access to new and relevant offers. Our portfolio includes 500,000 hotels, 900 airlines, 500 quality international and local car rental suppliers, and 20,000 transfer pick-up points in 194 countries, all ready to improve your website’s offering.
            </p>
            <button class="btn btn--big">
              Read more
            </button>
          </div>
        </div>
        <div id="aboutBottom" class="show">
          <img src="img/about-us-2.png" class="about-us__img--bottom" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="./about-us.scss"></style>

<script>
import { TweenMax } from 'gsap'
export default {
  mounted() {
    const animationSettings = {
      duration: 500,
      offset: 100,
      triggerHook: 0.9,
      triggerElement: '#trigger2',
      reverse: false
    }
    // Declare Scene
    const scene2 = this.$scrollmagic.scene(animationSettings)
      .setTween(
        TweenMax.fromTo('#aboutUsText', 1, {css:{width:0}}, {css:{width:'100%'}})
      )
    const scene3 = this.$scrollmagic.scene(animationSettings)
      .setTween(
        TweenMax.fromTo('#aboutImg', 1, {css:{width:0}}, {css:{width:'100%'}})
      )

    const scene4 = this.$scrollmagic.scene(animationSettings)
      .addIndicators({ name: '2 (duration: 300)' })
      .setTween(
        TweenMax.fromTo('#aboutBottom', 1,
          {css:{width:0, height:aboutBottom.height}},
          {css:{width:'100%', height:aboutBottom.height}}
        )
      )

    // Add Scene to controller
    this.$scrollmagic.addScene(scene2)
    this.$scrollmagic.addScene(scene3)
    this.$scrollmagic.addScene(scene4)
  }
}
</script>
