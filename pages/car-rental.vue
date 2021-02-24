<template>
  <div class="page">
    <Top
      :header="'Cars Rental'"
      :description="'Get access to 500 quality international and local suppliers.'"
      :bg="'img/car-rental-bg.png'"
    />
    <WhyChooseCar/>

    <HaveQuestion/>
  </div>
</template>

<script>
import Top from '@/components/Top/Top'
import WhyChooseCar from '@/components/WhyChooseCar/WhyChooseCar'

import HaveQuestion from '@/components/HaveQuestion/HaveQuestion'

export default {
  components: {
    Top,
    WhyChooseCar,
    HaveQuestion
  }
}
</script>
