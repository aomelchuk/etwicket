<template>
  <header>
    <div class="container d-flex justify-space-between align-center">
      <a href="/" class="logo-wrapper">
        <img src="img/logo.svg" alt="Etwicket">
      </a>
      <nav class="top-menu top-menu--desktop">
        <li>
          <a href="#">About</a>
        </li>
        <li class="submenu-link">
          <a href="#">
            Services
          </a>
          <img src="img/arrow-down.svg" alt="">

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

      <button class="btn sign-btn--desktop">
        Sign up
      </button>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <div class="menu__box">
          <nav class="top-menu top-menu--mobile">
            <li>
              <a href="#">About</a>
            </li>
            <li class="submenu-link">
              <a href="#">
                Services
              </a>
              <img src="img/arrow-down.svg" alt="">

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
          <div class="hamburger-menu__btns">
            <button class="btn btn--outlined">
              Sign in
            </button>
            <button class="btn">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" src="./header.scss"></style>

