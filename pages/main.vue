<template>
  <div>
    <TopSection/>
    <AboutUs/>
    <ContentAreas/>
    <Summarize/>
    <HaveQuestion/>
  </div>
</template>

<script>
import TopSection from '@/components/TopSection/TopSection'
import AboutUs from '@/components/AboutUs/AboutUs'
import ContentAreas from '@/components/ContentAreas/ContentAreas'
import Summarize from '@/components/Summarize/Summarize'
import HaveQuestion from '@/components/HaveQuestion/HaveQuestion'

export default {
  components: {
    TopSection,
    AboutUs,
    ContentAreas,
    Summarize,
    HaveQuestion
  }
}
</script>
