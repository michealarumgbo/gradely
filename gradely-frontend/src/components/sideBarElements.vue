<template>
    <li>
        <router-link :to="to"
            class="flex items-center group text-gray-500 text-[16px] hover:text-white hover:bg-[#09193e] mb-[6px] h-[40px] px-2 rounded-md"
            active-class="bg-[#09193e] text-white">
            <i :class="icon" class="group-hover:text-white mr-2"></i>
            {{ LinkItem }}
        </router-link>
    </li>
</template>

<script setup>
const { to, LinkItem, icon } = defineProps([
    'to', 'LinkItem', 'icon'
])
</script>

<style lang="scss" scoped></style>