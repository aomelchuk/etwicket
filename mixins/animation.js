export default {
  data() {
    return {
      animations: []
    }
  },
  computed: {
    isMobile() {
      console.log('window.innerWidth ', window.innerWidth)
      return window.innerWidth <= 767
    }
  },
  watch: {
    isMobile(newVal) {
      console.log('newVal ', newVal)
      if (!newVal) {
        this.$scrollmagic.addScene(this.animations)
      } else {
        if (this.$scrollmagic) this.$scrollmagic.destroy()
        this.$scrollmagic = null

      }
    }
  },
  methods: {
    addScenes() {
      if (!this.isMobile) {
        this.$scrollmagic.addScene(this.animations)
      } else {
        if (this.$scrollmagic) this.$scrollmagic.destroy()
        this.$scrollmagic = null
      }
    }
  }
}
