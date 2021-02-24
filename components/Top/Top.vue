<template>
  <section class="top">
    <div class="header-box"></div>
    <div class="container">
      <div class="row">
        <div class="col-9 col-md-6 top__info">
          <div class="text-wrapper">
            <h1>{{header}}</h1>
            <p>
              {{description}}
            </p>
            <div class="btn-wrapper">
              <button class="btn btn--clear">
                Join us
                <img src="img/right-arrow.svg" class="btn_arrow" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <img :src="bg" class="top__bg" alt="">
  </section>
</template>

<style lang="scss" src="./top.scss"></style>

<script>
export default {
  props: ['header', 'description', 'bg']
}
</script>
