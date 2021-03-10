<template>
  <section class="content-areas" id="trigger3">
    <div class="img-box--right show" id="contentAreaBg" >
      <img src="img/content-areas.png" class="content-areas__bgi" ref="contentAreaImg"  @load="onLoad" alt=""/>
    </div>
    <div class="container d-flex">
      <div class="col-lg-4 col-md-6 col-7 content-areas__info">
        <div class="show" id="contentAreaText" ref="contentAreaText">
          <div>
            <h2>
              Our <br class="mobile-br"> content areas
            </h2>
            <p>
              We have both wide range of content and flexible picing.
            </p>
            <button class="btn btn--big">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">

      <div class="services services--desktop" ref="services">
        <div class="service">
          <img src="img/service/car.svg" alt="">
          <h3>Cars Rental</h3>
          <p>
            Access to a global car rental portfolio of over 500 quality international and local suppliers
          </p>
          <a href="#" class="service-hover">
            <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
          </a>
        </div>
        <div class="service">
          <img src="img/service/flight.svg" alt="">
          <h3>Flight Reservations</h3>
          <p>
            We offer the cheapest international and domestic ticket prices, which you can book online or after ariving
          </p>
          <a href="#" class="service-hover">
            <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
          </a>
        </div>
        <div class="service">
          <img src="img/service/hotel.svg" alt="">
          <h3>Hotel Reservations</h3>
          <p>
            Over 500,000 hotels in 90,000 destinations with detailed descriptions and up-to-date info
          </p>
          <a href="#" class="service-hover">
            <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
          </a>
        </div>
        <div class="service">
          <img src="img/service/transfers.svg" alt="">
          <h3>Transfers</h3>
          <p>
            20,000 Pick-up Points
            in 194 countries with all types of services, including shared, private standard
            & private luxury
          </p>
          <a href="#" class="service-hover">
            <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
          </a>
        </div>
        <div class="service">
          <img src="img/service/label.svg" alt="">
          <h3>White label</h3>
          <p>
            Integrating ETWICKET into your own website is not only easy and seamless but it also allows you to display
            your own brand and logo.
          </p>
          <a href="#" class="service-hover">
            <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
          </a>
        </div>
        <div class="service">
          <img src="img/service/xml.svg" alt="">
          <h3>XMLOut APIs</h3>
          <p>
            Our Hotels API grants you access to all
            of our products, powering your existing website to improve sales and customer service
          </p>
          <a href="#" class="service-hover">
            <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
          </a>
        </div>
      </div>
      <div class="services services--mobile">
        <client-only>
          <agile :options="carouselOptions">
            <div class="slide">
              <div class="service">
                <img src="img/service/car.svg" alt>
                <h3>Cars Rental</h3>
                <p>
                  Access to a global car rental portfolio of over 500 quality international and
                  local suppliers
                </p>
                <a href="#" class="service-hover">
                  <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
                </a>
              </div>
            </div>
            <div class="slide">
              <div class="service">
                <img src="img/service/flight.svg" alt>
                <h3>Flight Reservations</h3>
                <p>
                  We offer the cheapest international and domestic ticket prices, which you can
                  book online or after ariving
                </p>
                <a href="#" class="service-hover">
                  <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
                </a>
              </div>
            </div>
            <div class="slide">
              <div class="service">
                <img src="img/service/hotel.svg" alt>
                <h3>Hotel Reservations</h3>
                <p>
                  Over 500,000 hotels in 90,000 destinations with detailed descriptions and
                  up-to-date info
                </p>
                <a href="#" class="service-hover">
                  <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
                </a>
              </div>
            </div>
            <div class="slide">
              <div class="service">
                <img src="img/service/transfers.svg" alt>
                <h3>Transfers</h3>
                <p>
                  20,000 Pick-up Points
                  in 194 countries with all types of services, including shared, private standard
                  &amp; private luxury
                </p>
                <a href="#" class="service-hover">
                  <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
                </a>
              </div>
            </div>
            <div class="slide">
              <div class="service">
                <img src="img/service/label.svg" alt>
                <h3>White label</h3>
                <p>
                  Integrating ETWICKET into your own website is not only easy and seamless but it
                  also allows you to display
                  your own brand and logo.
                </p>
                <a href="#" class="service-hover">
                  <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
                </a>
              </div>
            </div>
            <div class="slide">
              <div class="service">
                <img src="img/service/xml.svg" alt>
                <h3>XMLOut APIs</h3>
                <p>
                  Our Hotels API grants you access to all
                  of our products, powering your existing website to improve sales and customer
                  service
                </p>
                <a href="#" class="service-hover">
                  <div class="service-hover__text">Read more <img src="img/right-arrow.svg" alt=""></div>
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
