<template>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-[#000] font-light font-serif text-2xl">Hannah Chiamaka Ejimofor</p>
      <img src="" alt="" />
    </div>

    <ul class="text-[#000] flex items-center space-x-6">
      <li class=""><nuxt-link to="/">About</nuxt-link></li>
      <li class=""><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
      <li class=""><nuxt-link to="/contact">Contact</nuxt-link></li>
      <li class=""><nuxt-link to="/resume">Resume</nuxt-link></li>
    </ul>
  </div>
</template>

<style scoped>
a.nuxt-link-active {
  border-bottom: 3px solid #b10234;
  color: #b10234;
  font-weight: bold;
}
</style>