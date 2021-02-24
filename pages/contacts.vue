<template>
  <div class="page contact-page">
    <Top
      :header="'Contact us'"
      :description="'We are here to answer any questions you may have regarding our products and services.'"
      :bg="'img/contact-bg.png'"
    />
    <ContactCards/>
    <Map/>

    <HaveQuestion/>
  </div>
</template>

<script>
  import Top from '@/components/Top/Top'
  import ContactCards from '@/components/ContactCards/ContactCards'
  import Map from '@/components/Map/Map'
  import HaveQuestion from '@/components/HaveQuestion/HaveQuestion'

  export default {
    components: {
      Top,
      ContactCards,
      HaveQuestion
    }
  }
</script>
