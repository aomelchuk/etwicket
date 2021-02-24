<template>
  <div class="page">
    <Top
      :header="'About us'"
      :description="'ETWICKET is an online B2B travel booking platform designed to be able to make hotel, flight, car rental, and transfer reservations around the world.'"
      :bg="'img/about-top-bg.png'"
    />
    <ExpandBusiness/>
    <HaveQuestion/>
  </div>
</template>

<script>
import Top from '@/components/Top/Top'
import HaveQuestion from '@/components/HaveQuestion/HaveQuestion'
import ExpandBusiness from '@/components/ExpandBusiness/ExpandBusiness'

export default {
  components: {
    Top,
    HaveQuestion,
    ExpandBusiness
  }
}
</script>
