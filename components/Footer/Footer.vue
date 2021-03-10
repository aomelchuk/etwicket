<template>
  <footer class="footer">
    <div class="container d-flex flex-column">
      <div class="d-flex footer__row">
        <nav class="top-menu top-menu--footer">
          <li>
            <a href="#">About</a>
          </li>
          <li class="submenu-link">
            <span>
              Services
            </span>
            <img src="img/arr-down-white.svg" alt>
            <ul class="submenu">
              <li><a href="#">Cars Rental</a></li>
              <li><a href="#">Flight Reservations</a></li>
              <li><a href="#">Hotel Reservations</a></li>
              <li><a href="#">White label</a></li>
              <li><a href="#">XMLOut APIs</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              Why contact with us?
            </a>
          </li>
          <li>
            <a href="#">
              Contacts
            </a>
          </li>
        </nav>
      </div>
      <hr>
      <div class="d-flex footer__row contact-wrapper">
        <div class="contacts">
          <div class="contact-item">
            <div class="contact-item__icon">
              <img src="img/icons/location.svg" alt="">
            </div>

          <span>
            73-81 Bucuresti-Ploiesti Road,<br>
            Building 4C, 4st Floor
          </span>
          </div>
          <div class="contact-item">
            <div class="contact-item__icon">
              <img src="img/icons/email.svg" alt="">
            </div>
            <a href="#">office@etwicket.com</a>
          </div>
          <div class="contact-item">
            <div class="contact-item__icon">
              <img src="img/icons/phone.svg" alt="">
            </div>
            <a href="#">+4 (031) 860-49-89</a>
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
          <a href="#" class="socials__icon">
            <img src="img/icons/fb.svg" alt="">
          </a>
          <a href="#" class="socials__icon">
            <img src="img/icons/instagram.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container d-flex copyright__container">
        <div>
          © 2020 ETWICKET by ETWICKET.
           <span class="lang">
             English
             <img src="img/arr-down-white.svg" alt="">
             <ul class="submenu">
               <li><a href="#">Russian</a></li>
               <li><a href="#">German</a></li>
               <li><a href="#">English</a></li>
             </ul>
           </span>
        </div>
        <div class="copyright__text">Enjoy the lowes price and wide-range functionality.</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" src="./footer.scss"></style>
