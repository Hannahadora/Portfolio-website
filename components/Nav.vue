<template>
  <div class="nav flex items-center justify-between">
    <div>
      <p class="text-[#000] text-2xl">Hannah Chiamaka Ejimofor</p>
      <img src="" alt="" />
    </div>

    <ul class="flex items-center space-x-6">
      <li class=""><nuxt-link to="/">About</nuxt-link></li>
      <li class=""><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
      <li class=""><nuxt-link to="/contact">Contact</nuxt-link></li>
      <li class=""><nuxt-link to="/resume">Resume</nuxt-link></li>
    </ul>
  </div>
</template>

<style scoped>
.nav > .ul {
  font-size: 18px;
  font-weight: bold;
}
a.nuxt-link-active {
  border-bottom: 3px solid #b10234;
  color: #b10234;
  font-weight: bold;
}
</style>