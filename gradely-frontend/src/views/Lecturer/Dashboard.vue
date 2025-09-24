<template>
    <div class="flex  w-full h-[100vh] bg-gray-200">
        <div class="w-[0.0001%]  h-full md:w-auto ">
            <SideNav :linkItems="linkItems" />

        </div>
        <!-- Main Content -->
        <div class="h-full w-full flex flex-col items-center md:w-full">
            <TopNav user="lecturer" />

            <div class="bg-white min-h-[85%] w-[94%] mt-[10px] px-[20px] rounded-md py-[30px]">
                <h1 class="text-[22px] font-[500]">My Dashboard</h1>

            </div>


        </div>
    </div>
</template>

<script setup>
import SideNav from '../../components/sideNav.vue';
import TopNav from '../../components/topNav.vue';
import { uselecturerLinkItemsStore } from '../../stores/lecturerLinkItems';

const { linkItems } = uselecturerLinkItemsStore();





</script>

<style scoped></style>