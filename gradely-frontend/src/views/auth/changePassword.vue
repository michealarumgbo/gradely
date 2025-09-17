<template>
    <div class="w-full h-[100vh] flex items-center justify-center bg-[#f9fafb]">
        <div class="w-[80%] h-[70%] bg-white shadow-md flex flex-col md:flex-row items-center ">
            <div class="w-full h-[45%] md:h-[100%] md:w-[50%] bg-no-repeat  bg-cover bg-center"
                style="background-image: url('/src/assets/images/reset-password.png');"></div>
            <form action="#"
                class="flex flex-col w-full md:w-[50%] md:h-full md:pt-[30px] pt-[10px] px-[20px] md:px-[70px]">
                <img src="/src/assets/images/logo/GradelyLogo.png" class="w-[120px] hidden md:block" alt="">
                <h3 class="text-[25px] font-[500] leading-[40px] md:text-[30px]">Reset your Password?</h3>
                <p class="text-xs mb-[10px] md:text-[16px] md:mb-[15px] text-gray-700">Enter password to reset
                    password</p>
                <input type="password"
                    class="border h-[40px] pl-[10px] text-[16px] rounded-sm border-gray-400 focus-within:border-[#09193e] outline-none mb-[10px] md:mb-[20px]"
                    name="new-password" placeholder="Enter New Password" id="new-password">
                <input type="password"
                    class="border h-[40px] pl-[10px] text-[16px] rounded-sm border-gray-400 focus-within:border-[#09193e] outline-none mb-[10px] md:mb-[20px]"
                    name="confirm-password" placeholder="Confirm Password" id="confirm-password">
                <button type="submit"
                    class="cursor-pointer bg-[#09193e] rounded-sm h-[40px] font-[500] text-white text-[15px]">Change
                    Password</button>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>