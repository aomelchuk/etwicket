<template>
  <v-app>
    <Header @openRegister="openRegister"/>
    <nuxt/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default {
  data () {
    return {

    }
  },
  methods: {
    openRegister() {
      console.log('click')
      console.log('this.$store.state.popupRegisterOpen ', this.$store.state.popupRegisterOpen)
      this.$store.dispatch('changeRegisterPopup', true)
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
