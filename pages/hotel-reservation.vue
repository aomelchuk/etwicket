<template>
  <div class="page">
    <Top
      :header="'Hotel Reservations'"
      :description="'Over 500,000 hotels in 90,000 destinations.'"
      :bg="'img/hotel-reservation-bg.png'"
    />
    <WhyChooseHotel/>

    <HaveQuestion/>
  </div>
</template>

<script>
  import Top from '@/components/Top/Top'
  import WhyChooseHotel from '@/components/WhyChooseHotel/WhyChooseHotel'
  import HaveQuestion from '@/components/HaveQuestion/HaveQuestion'

  export default {
    components: {
      Top,
      WhyChooseHotel,
      HaveQuestion
    }
  }
</script>
