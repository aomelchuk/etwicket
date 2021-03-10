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
        //this.animations.forEach(scene => scene.progress(1))
        this.$scrollmagic.destroy()
        this.$scrollmagic = null
        console.log('2this.$scrollmagic ', this.$scrollmagic)
      }
    }
  },
  methods: {
    addScenes() {
      if (!this.isMobile) {
        this.$scrollmagic.addScene(this.animations)
      } else {
        this.$scrollmagic.destroy()
        this.$scrollmagic = null
        console.log('1this.$scrollmagic ', this.$scrollmagic)
      }
    }
  }
}
