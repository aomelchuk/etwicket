<template>
  <section class="content-areas" id="trigger3">
    <div class="img-box--right show" id="contentAreaBg" >
      <img src="img/content-areas.png" class="content-areas__bgi" ref="contentAreaImg"  @load="onLoad" alt=""/>
    </div>
    <div class="container d-flex">
      <div class="col-lg-4 col-md-6 col-7 content-areas__info">
        <div class="show" id="contentAreaText" ref="contentAreaText">
          <div>
            <h2 v-html="staticData.header"></h2>
            <p>
              {{staticData.bodyText}}
            </p>
            <button class="btn btn--big">
              {{staticData.exploreBtn}}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">

      <div class="services services--desktop" ref="services">
        <div class="service" v-for="service in staticData.services" :key="service.header">
          <img :src="service.icon" alt="">
          <h3>{{service.header}}</h3>
          <p>
            {{service.description}}
          </p>
          <a :href="service.href" class="service-hover">
            <div class="service-hover__text">{{service.readMore}} <img src="img/right-arrow.svg" alt=""></div>
          </a>
        </div>
      </div>
      <div class="services services--mobile">
        <client-only>
          <agile :options="carouselOptions">
            <div class="slide" v-for="service in staticData.services" :key="service.header">
              <div class="service">
                <img :src="service.icon" alt="">
                <h3>{{service.header}}</h3>
                <p>
                  {{service.description}}
                </p>
                <a :href="service.href" class="service-hover">
                  <div class="service-hover__text">{{service.readMore}} <img src="img/right-arrow.svg" alt=""></div>
                </a>
              </div>
            </div>
          </agile>
        </client-only>
      </div>
    </div>
  </section>
</template>

<style lang="scss" src="./content-areas.scss"></style>

<script>
import animation from '@/mixins/animation.js'

export default {
  mixins: [animation],
  props: ['staticData'],
  data() {
    return {
      carouselOptions: {
        centerMode: true,
        navButtons: false,
      }
    }
  },
  mounted() {
    if (!this.isMobile) {
      const contentAreaTextWidth = this.$refs.contentAreaText.clientWidth
      this.$refs.contentAreaText.children[0].style.width = contentAreaTextWidth+'px'

      const animationSettings = {
        duration: 500,
        offset: 100,
        triggerHook: 0.9,
        triggerElement: '#trigger3',
        reverse: false
      }

      // Declare Scene
      const scene5 = this.$scrollmagic.scene(animationSettings)
        .setTween(
          TweenMax.fromTo('#contentAreaText', 1, {css:{width:0}}, {css:{width:'100%'}})
        )

      this.$refs.services.children.forEach((service, index) => {
        let scene7 = this.$scrollmagic.scene({
          duration: 500,
          triggerHook: 0.5 - index*0.09,
          triggerElement: '#trigger3',
          reverse: false
        })
          .setTween(
            TweenMax.to(service, 1, {css: {transform: "translateY(0)"}})
          )
        this.animations.push(scene7)
    })


      this.animations.push(scene5)
    }
    this.addScenes()
  },
  methods: {
    onLoad() {
      if (!this.isMobile) {
        const contentAreaImg = this.$refs.contentAreaImg
        console.log('contentAreaImg ', contentAreaImg.width)
        const scene6 = this.$scrollmagic.scene({
          duration: 500,
          offset: 100,
          triggerHook: 0.5,
          triggerElement: '#trigger3',
          reverse: false
        })
          .setTween(
            TweenMax.fromTo('#contentAreaBg', 1,
              {css:{width: 0, right: contentAreaImg.width }},
              {css:{right: 0, width: contentAreaImg.width}})
          )

        this.animations.push(scene6)
      }
      this.addScenes()
    }
  }
}
</script>
