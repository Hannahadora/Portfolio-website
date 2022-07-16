<template>
  <div class="">
    <div class="bg-[#d1cfd0] h-auto px-24">
      <nav-bar class="py-8" />
      <div class="flex items-end justify-between">
        <div class="pb-80">
          <h1 class="page-title text-[#b10234]">About</h1>
          <p class="page-intro">A bit about myself ...</p>
        </div>
        <div>
          <img class="h-[700px]" src="~~/assets/images/me-avatar.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/nav";
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
</style>
