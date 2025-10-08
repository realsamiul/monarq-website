<template>
  <!-- Logo -->
  <NuxtLink to="/" aria-current="page" class="logo" :class="{'is-current': isHome, 'is-active': true}" data-v-1932cced>
    <!-- M0NARQ Logo SVG - Placeholder for now, will add actual logo -->
    <svg viewBox="0 0 64 66" fill="none" xmlns="http://www.w3.org/2000/svg" class="brandmark" data-v-1932cced>
      <!-- Using simplified logo for now -->
      <circle cx="32" cy="33" r="25" stroke="currentColor" stroke-width="2"/>
      <text x="32" y="38" font-family="Arial" font-size="20" text-anchor="middle" fill="currentColor">M0</text>
    </svg>
    <div class="wordmark" data-v-1932cced>
      <span class="wordmark-text" style="font-family: 'TWKLausanne', sans-serif; font-weight: 400; font-size: 14px;">M0NARQ</span>
    </div>
    <span class="name" data-v-1932cced>M0NARQ</span>
  </NuxtLink>

  <!-- Menu Button -->
  <button 
    type="button" 
    :aria-label="menuOpen ? 'close menu' : 'open menu'"
    class="menu-button" 
    data-v-649bbaab
    :aria-pressed="menuOpen"
    @click="toggleMenu"
  >
    <div class="label" data-v-649bbaab>
      <div class="label-item" data-v-649bbaab>Menu</div>
      <div class="label-item" data-v-649bbaab>Close</div>
    </div>
    <div class="icon" data-v-649bbaab>
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-close" data-v-649bbaab>
        <line x1="13.788" y1="1.28816" x2="1.06011" y2="14.0161" stroke="currentColor" stroke-width="1.2" data-v-649bbaab></line>
        <line x1="1.06049" y1="1.43963" x2="13.7884" y2="14.1675" stroke="currentColor" stroke-width="1.2" data-v-649bbaab></line>
      </svg>
      <svg viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-burger" data-v-649bbaab>
        <line x1="18" y1="0.6" y2="0.6" stroke="currentColor" stroke-width="1.2" data-v-649bbaab></line>
        <line x1="18" y1="5.7167" y2="5.7167" stroke="currentColor" stroke-width="1.2" data-v-649bbaab></line>
        <line x1="18" y1="10.8334" y2="10.8334" stroke="currentColor" stroke-width="1.2" data-v-649bbaab></line>
      </svg>
    </div>
  </button>

  <!-- Top Navigation -->
  <nav class="nav" data-v-ee146a3a>
    <ul class="nav-list" data-v-ee146a3a>
      <li class="nav-item" data-v-ee146a3a>
        <NuxtLink to="/work" class="nav-link" data-v-ee146a3a>Work</NuxtLink>
      </li>
      <li class="nav-item" data-v-ee146a3a>
        <NuxtLink to="/data-studio" class="nav-link" data-v-ee146a3a>Studio</NuxtLink>
      </li>
      <li class="nav-item" data-v-ee146a3a>
        <NuxtLink to="/news" class="nav-link" data-v-ee146a3a>News</NuxtLink>
      </li>
      <li class="nav-item" data-v-ee146a3a>
        <NuxtLink to="/contact" class="nav-link" data-v-ee146a3a>Contact</NuxtLink>
      </li>
    </ul>
    <div class="current" data-v-ee146a3a>
      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" data-v-ee146a3a>
        <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-ee146a3a></path>
      </svg>
    </div>
  </nav>

  <!-- Cursor -->
  <div class="cursor" data-v-2a120e06>
    <div class="inner" data-v-2a120e06></div>
  </div>

  <!-- Full Menu Overlay -->
  <nav data-v-919f03a6 class="menu">
    <div data-v-919f03a6 class="wrapper">
      <div data-v-919f03a6 class="container">
        <!-- Menu Images -->
        <ul data-v-919f03a6 class="images">
          <li data-v-919f03a6 class="image-item">
            <img 
              data-v-919f03a6
              src="/images/work-hyperion-lpg.jpg"
              width="1228" 
              height="1736" 
              alt="M0NARQ Demo" 
              loading="lazy"
              class="image"
            />
          </li>
          <li data-v-919f03a6 class="image-item">
            <img 
              data-v-919f03a6
              src="/images/menu-contact-1.jpg"
              width="1228" 
              height="1736" 
              alt="M0NARQ Team" 
              loading="lazy"
              class="image"
            />
          </li>
          <li data-v-919f03a6 class="image-item">
            <img 
              data-v-919f03a6
              src="/images/methodology-img-2.jpg"
              width="1228" 
              height="1736" 
              alt="M0NARQ Insights" 
              loading="lazy"
              class="image"
            />
          </li>
          <li data-v-919f03a6 class="image-item">
            <img 
              data-v-919f03a6
              src="/images/methodology-img-1.jpg"
              width="1228" 
              height="1736" 
              alt="M0NARQ Contact" 
              loading="lazy"
              class="image"
            />
          </li>
        </ul>

        <!-- Main Menu Links -->
        <ul data-v-919f03a6 class="main">
          <li data-v-919f03a6 class="main-link">
            <NuxtLink data-v-919f03a6 to="/work" class="main-line">Work</NuxtLink>
          </li>
          <li data-v-919f03a6 class="main-link">
            <NuxtLink data-v-919f03a6 to="/data-studio" class="main-line">Studio</NuxtLink>
          </li>
          <li data-v-919f03a6 class="main-link">
            <NuxtLink data-v-919f03a6 to="/news" class="main-line">News</NuxtLink>
          </li>
          <li data-v-919f03a6 class="main-link">
            <NuxtLink data-v-919f03a6 to="/contact" class="main-line">Contact</NuxtLink>
          </li>
          <div data-v-919f03a6 class="current">
            <svg data-v-919f03a6 viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-star">
              <path data-v-919f03a6 d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
            </svg>
          </div>
        </ul>

        <!-- Hiring Link -->
        <a data-v-5152decb data-v-919f03a6 href="mailto:info@m0narq.ai" target="_blank" class="link">
          <div data-v-5152decb class="wrap">
            <div data-v-5152decb class="circle">
              <div data-v-5152decb class="circle-fill"></div>
              <svg data-v-5152decb viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" class="circle-outline">
                <circle data-v-5152decb cx="25" cy="25" r="23"></circle>
              </svg>
              <div data-v-5152decb class="circle-icon">
                <svg data-v-5152decb viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-arrow">
                  <path data-v-5152decb d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <div data-v-5152decb class="label">
              Get in Touch
              <div data-v-5152decb class="border"></div>
            </div>
          </div>
        </a>

        <!-- Social Links -->
        <ul data-v-919f03a6 class="social">
          <li data-v-919f03a6 class="social-link">
            <a data-v-919f03a6 href="https://www.linkedin.com/company/m0narq" target="_blank" rel="noreferrer" class="link-item">LinkedIn</a>
          </li>
          <li data-v-919f03a6 class="social-link">
            <a data-v-919f03a6 href="https://twitter.com/m0narq" target="_blank" rel="noreferrer" class="link-item">Twitter</a>
          </li>
          <li data-v-919f03a6 class="social-link">
            <a data-v-919f03a6 href="https://github.com/m0narq" target="_blank" rel="noreferrer" class="link-item">GitHub</a>
          </li>
        </ul>

        <!-- Sub Links -->
        <ul data-v-919f03a6 class="sub">
          <li data-v-919f03a6 class="sub-link">
            <button data-v-919f03a6 class="link-item is-reel" @click="playReel">Play Reel</button>
          </li>
          <li data-v-919f03a6 class="sub-link">
            <NuxtLink data-v-919f03a6 to="/about" class="link-item">About Us</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()
const menuOpen = ref(false)

const isHome = computed(() => route.path === '/')

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const playReel = () => {
  // Will implement showreel modal later
  console.log('Play reel clicked')
}
</script>
