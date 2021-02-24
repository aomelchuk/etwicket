<template>
  <section class="have-question">
    <div class="container d-flex">
      <div class="col-md-6 col-sm-12 have-question__info">
        <h2>Have a questions?</h2>
        <p>
          Feel free to contact us! Send your request and we will contact you as soon as posible.
        </p>
      </div>
      <div class="col-md-6 col-sm-12">
        <RequestForm/>
      </div>
      <div class="question-img-shadow">
        <img src="img/have-question.png" alt="">
        <img class="img-shadow" src="img/have-question-shadow.jpg" alt="">
      </div>
    </div>


  </section>
</template>

<script>
import SignForm from '@/components/RequestForm/RequestForm.vue'

export default {
  components: {
    SignForm
  }
}
</script>

<style lang="scss" src="./have-questions.scss"></style>
