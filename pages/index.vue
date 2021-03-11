<template>
  <div>
    <TopSection @openRegister="openRegisterPopup" :static-data="indexTexts.topSection" />
    <AboutUs :static-data="indexTexts.aboutUs"/>
    <ContentAreas :static-data="indexTexts.contentAreas"/>
    <Summarize :static-data="indexTexts.summarize"/>
    <HaveQuestion :static-data="indexTexts.haveQuestion"/>
    <div class="popup-wrapper" v-if="registerPopup">
        <input type="checkbox" class="popup-checkbox" id="popupCheckboxOne">
        <div class="popup">
          <div class="popup-content">
            <span class="popup-closer" @click="closeRegisterPopup">
              <img src="/img/close-icon.svg" alt="">
            </span>
            <RegisterForm/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import TopSection from '@/components/TopSection/TopSection'
import AboutUs from '@/components/AboutUs/AboutUs'
import ContentAreas from '@/components/ContentAreas/ContentAreas'
import Summarize from '@/components/Summarize/Summarize'
import HaveQuestion from '@/components/HaveQuestion/HaveQuestion'
import RegisterForm from '@/components/RegisterForm/RegisterForm'

export default {
  props:['register'],
  fetch() {
    this.indexTexts = {
      topSection: {
        header: 'Simplifying <br> your business trip',
        description: 'We make it simple to launch in the cloud and scale up as you grow – with an intuitive control panel, predictable pricing, team accounts, and more.',
        registerBtnText: 'Register',
        signFormTexts: {
          header: 'Sign in to your account',
          placeholdersUsername: 'Enter your Username without ID',
          placeholderPassword: 'Enter your Password',
          signBtn: 'Sign in',
          haveAcc: 'Don’t have an account?',
          signUp: 'Sign up'
        }
      },
      aboutUs: {
        header: 'About us',
        bodyText: 'Want to make your travel business more efficient and increase your online booking revenue? Want a user-friendly software that works for your business? Our innovative, fast, and reliable B2B booking engine grants you immediate access to the best B2B offers from a vast range of worldwide suppliers, anytime, anywhere. <br><br>We\’re constantly adding new products, improving features and updating our database so that our partners always have access to new and relevant offers. Our portfolio includes 500,000 hotels, 900 airlines, 500 quality international and local car rental suppliers, and 20,000 transfer pick-up points in 194 countries, all ready to improve your website\’s offering.',
        readMore: 'Read more'
      },
      contentAreas: {
        header: 'Our <br class="mobile-br"> content areas',
        bodyText: 'We have both wide range of content and flexible picing.',
        exploreBtn: 'Explore',
        services: [
          {
            header: 'Cars Rental',
            description: 'Access to a global car rental portfolio of over 500 quality international and local suppliers',
            readMore: 'Read more',
            href:'#',
            icon:'img/service/car.svg'
          },
          {
            header: 'Flight Reservations',
            description: 'We offer the cheapest international and domestic ticket prices, which you can book online or after ariving',
            readMore: 'Read more',
            href:'#',
            icon:'img/service/flight.svg'
          },
          {
            header: 'Hotel Reservations',
            description: 'Over 500,000 hotels in 90,000 destinations with detailed descriptions and up-to-date info',
            readMore: 'Read more',
            href:'#',
            icon:'img/service/hotel.svg'
          },
          {
            header: 'Transfers',
            description: '20,000 Pick-up Points in 194 countries with all types of services, including shared, private standard & private luxury',
            readMore: 'Read more',
            href:'#',
            icon:'img/service/transfers.svg'
          },
          {
            header: 'White label',
            description: 'Integrating ETWICKET into your own website is not only easy and seamless but it also allows you to display your own brand and logo.',
            readMore: 'Read more',
            href:'#',
            icon:'img/service/label.svg'
          },
          {
            header: 'XMLOut APIs',
            description: 'Our Hotels API grants you access to all of our products, powering your existing website to improve sales and customer service',
            readMore: 'Read more',
            href:'#',
            icon:'img/service/xml.svg'
          }
        ]
      },
      summarize: {
        header: 'Let\'s summarize <br class="summarize__br"> how good we are',
        description: 'Over the years we have done many things that we are proud of. This motivates us to continue looking for new challenges in order to improve our services.',
        digits: [
          {
            number: '900',
            text: 'Airlines to any destination'
          },
          {
            number: '500',
            text: 'International and local car services'
          },
          {
            number: '1.5m',
            text: 'Hotels in 90.000 destinations'
          },
          {
            number: '20k',
            text: 'Pick-up points in 194 countries'
          }
        ]
      },
      haveQuestion: {
        header: 'Have a questions?',
        description: 'Feel free to contact us! Send your request and we will contact you as soon as posible.',
        requestForm: {
          header: 'Send your request',
          placeholders: {
            name: 'Enter your name',
            phone: 'Enter your phone number',
            email: 'Enter your email',
            companyName: 'Enter your company\'s name'
          },
          sendBtn: 'Send'
        }
      }
    }
  },
  data() {
    return {
      indexTexts: null
    }
  },
  methods: {
    openRegisterPopup() {
      this.$store.dispatch('changeRegisterPopup', true)
    },
    closeRegisterPopup() {
      this.$store.dispatch('changeRegisterPopup', false)
    }
  },
  computed: {
    registerPopup() {
      return this.$store.state.popupRegisterOpen
    }
  },
  components: {
    TopSection,
    AboutUs,
    ContentAreas,
    Summarize,
    HaveQuestion,
    RegisterForm
  }
}
</script>
