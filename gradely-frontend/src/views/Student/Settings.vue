<template>
    <div class="flex  w-full h-[100vh] bg-gray-200">
        <div class="w-[0.0001%]  h-full md:w-auto ">
            <SideNav :linkItems="linkItems" />
        </div>
        <!-- Main Content -->
        <div class="h-full w-full md:w-full">
            <TopNav />
            Sup


        </div>
    </div>
</template>

<script setup>
import SideNav from '../../components/sideNav.vue';
import TopNav from '../../components/topNav.vue';


const linkItems = [
    {
        id: 1,
        linkName: 'Dashboard',
        href: '/student/dashboard',
        icon: 'fa-solid fa-gauge',
    },
    {
        id: 2,
        linkName: 'Transcript',
        href: '/student/transcript',
        icon: 'fa-solid fa-certificate',
    },
    {
        id: 1,
        linkName: 'Settings',
        href: '/student/settings',
        icon: 'fa-solid fa-gear',
    },
]

</script>

<style scoped></style>