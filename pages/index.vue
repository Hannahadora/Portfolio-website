<template>
  <div class="">
    <div class="bg-[#3d76fb26] h-[100vh] px-24">
      <!-- <nav-bar class="py-8" /> -->
      <intro class="mx-auto w-[20%] c-centered" />
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/nav";
import Intro from "@/components/Intro.vue"
</script>

<style scoped>
.page-title {
  font-size: 100px;
  font-style: italic;
  font-weight: medium;
  font-family: cheltanham;
}

.page-intro {
  border-top: 1px solid #b10234;
  border-bottom: 1px solid #b10234;
  color: #b10234;
  font-style: italic;
  font-family: cheltanham;
  font-size: 48px;
}

.c-centered {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
</style>
