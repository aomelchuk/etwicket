<template>
  <header>
    <div class="container d-flex justify-space-between align-center">
      <a href="/" class="logo-wrapper">
        <img :src="staticData.logoUrl" alt="Etwicket">
      </a>
      <nav class="top-menu top-menu--desktop">
        <template v-for="menuItem in staticData.menu">
          <li :class="{'submenu-link': menuItem.submenu}">
            <a :href="menuItem.href">
              {{menuItem.label}}
            </a>
            <img src="img/arrow-down.svg" alt="" v-if="menuItem.submenu">

            <ul class="submenu" v-if="menuItem.submenu">
              <li v-for="subItem in menuItem.submenu">
                <a :href="subItem.href">{{subItem.label}}</a>
              </li>
            </ul>
          </li>
        </template>
      </nav>

      <button class="btn sign-btn--desktop" @click="openRegister">
        Sign up
      </button>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <div class="menu__box">
          <nav class="top-menu top-menu--mobile">
            <template v-for="menuItem in staticData.menu">
              <li :class="{'submenu-link': menuItem.submenu}">
                <a :href="menuItem.href">
                  {{menuItem.label}}
                </a>
                <img src="img/arrow-down.svg" alt="" v-if="menuItem.submenu">

                <ul class="submenu" v-if="menuItem.submenu">
                  <li v-for="subItem in menuItem.submenu">
                    <a :href="subItem.href">{{subItem.label}}</a>
                  </li>
                </ul>
              </li>
            </template>
          </nav>
          <div class="hamburger-menu__btns">
            <button class="btn btn--outlined">
              Sign in
            </button>
            <button class="btn" @click="openRegister">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" src="./header.scss"></style>

<script>
export default {
  data() {
    return {
      staticData: null
    }
  },
  fetch() {
    this.staticData = {
      logoUrl: 'img/logo.svg',
      menu: [
        {
          label:'About',
          href: '/about'
        },
        {
          label:'Services',
          href: '#',
          submenu: [
            {label: 'Cars Rental', href: '#'},
            {label: 'Flight Reservations', href: '#'},
            {label: 'Hotel Reservations', href: '#'},
            {label: 'White label', href: '#'},
            {label: 'XMLOut APIs', href: '#'}
          ]
        },
        {
          label:'Why contact with us?',
          href: '/why-contact'
        },
        {
          label:'Contacts',
          href: '/contacts'
        },
      ]
    }
  },
  methods: {
    openRegister() {
      this.$emit('openRegister')
    }
  },
}
</script>

