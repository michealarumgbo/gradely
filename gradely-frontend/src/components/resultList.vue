<template>
    <div class="flex-col flex w-full mt-10 md:px-[30px]">
        <h3 class="font-[500] mb-[20px]">Level: {{ level }}</h3>
        <div v-for="resultItem in resultItems"
            class="flex w-full  px-[6px] md:px-[30px] h-[50px] items-center rounded-sm bg-[#eeeeee] mb-[10px] justify-between">
            <div class="text-[12px] md:text-[14px]"><span class="text-[15px] md:text-[16px] font-[500]">Semester</span>:
                {{ resultItem.semester }}
            </div>

            <div class="text-[12px] md:text-[14px]"><span class="text-[15px] md:text-[16px] font-[500]">Status</span>:
                {{ resultItem.status }}
            </div>

            <a :href="`/student/my-result?result-id=${resultItem.id}`"
                class="w-[40px] h-[23px] md:w-[60px] md:h-[27px] text-[10px] md:text-[13px] items-center justify-center flex rounded-sm bg-[#09193E] text-white">
                View
            </a>
        </div>

    </div>
</template>

<script setup>
const { level, resultItems } = defineProps([
    'level',
    'resultItems'
])
</script>

<style lang="scss" scoped></style>