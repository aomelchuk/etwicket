<template>
  <v-app>
    <Header/>
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
  components: {
    Header,
    Footer
  }
}
</script>
