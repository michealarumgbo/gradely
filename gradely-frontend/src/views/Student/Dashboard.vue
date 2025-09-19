<template>
    <div class="flex  w-full h-[100vh] bg-gray-200">
        <div class="w-[0.0001%]  h-full md:w-auto ">
            <SideNav :linkItems="linkItems" />

        </div>
        <!-- Main Content -->
        <div class="h-full w-full flex flex-col items-center md:w-full">
            <TopNav />

            <div class="bg-white min-h-[85%] w-[94%] mt-[10px] px-[20px] rounded-md py-[30px]">
                <h1 class="text-[22px] font-[500]">My Results</h1>
                <ResultList v-for="resultItem in resultItems" :key="resultItem.id" :level="resultItem.level"
                    :resultItems="resultItem.resultDetails" />
            </div>


        </div>
    </div>
</template>

<script setup>
import ResultList from '../../components/resultList.vue';
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

const resultItems = [
    {
        id: 1,
        level: 100,
        resultDetails: [
            {
                semester: "First",
                status: "Ready",
                id: "93894"
            },
            {
                semester: "Second",
                status: "Ready",
                id: "93895"
            }
        ]
    },
    {
        id: 2,
        level: 200,
        resultDetails: [
            {
                semester: "First",
                status: "Ready",
                id: "93887"
            },
            {
                semester: "Second",
                status: "Pending",
                id: "93897"
            }
        ]
    }
]

</script>

<style scoped></style>