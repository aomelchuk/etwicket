<template>
  <footer class="footer">
    <div class="container d-flex flex-column">
      <div class="d-flex footer__row">
        <nav class="top-menu top-menu--footer">
          <template v-for="menuItem in staticData.menu">
            <li :class="{'submenu-link': menuItem.submenu}">
              <a :href="menuItem.href">
                {{menuItem.label}}
              </a>
              <img src="img/arr-down-white.svg" alt="" v-if="menuItem.submenu">

              <ul class="submenu" v-if="menuItem.submenu">
                <li v-for="subItem in menuItem.submenu">
                  <a :href="subItem.href">{{subItem.label}}</a>
                </li>
              </ul>
            </li>
          </template>
        </nav>
      </div>
      <hr>
      <div class="d-flex footer__row contact-wrapper">
        <div class="contacts">
          <div class="contact-item">
            <div class="contact-item__icon">
              <img src="img/icons/location.svg" alt="">
            </div>

          <span v-html="staticData.address"></span>
          </div>
          <div class="contact-item">
            <div class="contact-item__icon">
              <img src="img/icons/email.svg" alt="">
            </div>
            <a :href="`mailto:${staticData.email}`">{{staticData.email}}</a>
          </div>
          <div class="contact-item">
            <div class="contact-item__icon">
              <img src="img/icons/phone.svg" alt="">
            </div>
            <a :href="`tel:${staticData.phone}`">{{staticData.phone}}</a>
          </div>
        </div>


        <div class="socials socials--desktop">
          <a href="#" class="socials__icon">
            <img src="img/icons/fb.svg" alt="">
          </a>
          <a href="#" class="socials__icon">
            <img src="img/icons/instagram.svg" alt="">
          </a>
        </div>
      </div>
      <hr class="hr-mobile">
      <div class="footer__row socials__mobile-wrap">
        <div class="socials socials--mobile">
          <a :href="staticData.socials.fb" class="socials__icon">
            <img src="img/icons/fb.svg" alt="">
          </a>
          <a :href="staticData.socials.ig" class="socials__icon">
            <img src="img/icons/instagram.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container d-flex copyright__container">
        <div>
          © {{staticData.copyright}}.
           <span class="lang">
             English
             <img src="img/arr-down-white.svg" alt="">
             <ul class="submenu">
               <li v-for="locale in availableLocales" :key="locale.code">
                 <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
               </li>
             </ul>
           </span>
        </div>
        <div class="copyright__text">{{staticData.signature}}</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" src="./footer.scss"></style>

<script>
export default {
  data() {
    return {
      staticData: null
    }
  },
  fetch() {
    this.staticData = {
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
      ],
      address: '73-81 Bucuresti-Ploiesti Road,<br>Building 4C, 4st Floor',
      email: 'office@etwicket.com',
      phone: '+4 (031) 860-49-89',
      socials: {
        fb:'#',
        ig: '#'
      },
      copyright: '2020 ETWICKET by ETWICKET',
      signature: 'Enjoy the lowes price and wide-range functionality.'
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  }
}
</script>
