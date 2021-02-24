<template>
  <div>
    <TopSection @openRegister="openRegisterPopup"/>
    <AboutUs/>
    <ContentAreas/>
    <Summarize/>
    <HaveQuestion/>
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
  data() {
    return {
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
