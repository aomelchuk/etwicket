<template>
  <div class="page">
    <Top
      :header="'Flight Reservations'"
      :description="'900+ Airlines worldwide.'"
      :bg="'img/fly-reservation-bg.png'"
    />
    <WhyChooseFlight/>

    <HaveQuestion/>
  </div>
</template>

<script>
import Top from '@/components/Top/Top'
import WhyChooseFlight from '@/components/WhyChooseFlight/WhyChooseFlight'

import HaveQuestion from '@/components/HaveQuestion/HaveQuestion'

export default {
  components: {
    Top,
    WhyChooseFlight,
    HaveQuestion
  }
}
</script>
