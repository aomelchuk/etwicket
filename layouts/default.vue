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
  methods: {
    openRegister() {
      this.$store.dispatch('changeRegisterPopup', true)
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
