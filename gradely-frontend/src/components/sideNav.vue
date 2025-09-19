<template>
  <div class="drawer lg:drawer-open">

    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-0">
        <div class=" flex justify-between items-center w-full pr-5">
          <a href="/" class="">
            <img src="/src/assets/images/logo/GradelyLogo.png" class="w-[150px]  mb-2" alt="">
          </a>

          <label for="my-drawer-2" aria-label="close sidebar" class="md:hidden">
            <i class="text-[23px] fa-solid fa-xmark"></i>
          </label>
        </div>

        <!-- Sidebar content here -->
        <SideBarElements v-for="linkItem in linkItems" :key="linkItem.id" :LinkItem="linkItem.linkName"
          :icon="linkItem.icon" :to="linkItem.href" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import SideBarElements from './sideBarElements.vue';

const { linkItems } = defineProps([
  'linkItems'
])
</script>

<style lang="scss" scoped></style>