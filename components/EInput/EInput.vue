<template>
  <div class="e-input" :class="{'focus': focused, 'e-error': error, 'e-input--small': small}" v-click-outside="unfocuse">
    <input
      ref="input"
      v-bind="$attrs"
      v-bind:value="value"
      @focus="focused = true"
      @keydown="error = false"
    />
    <div v-if="error" class="e-input__icon-wrap">
      <img src="img/attention-icon.svg" height="20" width="20" alt="">
      <div class="e-tooltip">This field is required.</div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    valid: {
      default: true
    },
    small: {
      default: false
    }
  },
  data() {
    return {
      focused: false,
      error: false
    }
  },
  watch: {
    valid(newVal) {
      if (newVal) {
        this.error = false
      } else {
        this.error = true
      }
    }
  },
  methods: {
    unfocuse() {
      this.focused = false
    }
  }
}
</script>

<style lang="scss" src="./e-input.scss" scoped></style>
