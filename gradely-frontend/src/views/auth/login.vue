<template>
    <div class="w-full h-[100vh] justify-center flex bg-[#f9fafb] items-center">
        <!-- Side Panel -->
        <div class="hidden md:flex items-center  w-[35%] justify-center h-[100%] text-white bg-[#09193e]">
            <div class="w-[89%] h-[80%] rounded-[40px] flex flex-col justify-center px-[20px] bg-[#0f2e77c5]">
                <p class="font-[500] text-[20px] mb-[20px] ml-[8px]">
                    Simplifying Results <span class="text-[40px]">Management</span>
                </p>
                <!-- Illustrious Image -->
                <div class="w-[100%] h-[300px] rounded-[30px] bg-cover bg-center bg-no-repeat" style="background-image: url('/src/assets/images/bg-images.png');"></div>
            </div>
        </div>
        <!-- Form -->
        <div class="md:w-[65%] flex flex-col w-full h-full justify-center  items-center">
            <div
                class="w-[90%] flex flex-col md:w-[60%] md:h-[90%] h-[80%] items-center shadow rounded-sm bg-white pt-10">
                <a href="/" class="w-[60%] h-[18%] flex justify-center">
                    <img class=" h-[100%]" src="/src/assets/images/logo/GradelyLogo.png" alt="hello">
                </a>
                <h3 class="font-[500] text-[20px]">Welcome to Gradely</h3>
                <p class="text-[12px]">Login to continue...</p>
                <form action="#" class="w-full h-[60%]  flex flex-col md:px-[70px] px-[20px] mt-[20px]">
                    <label for="email" class="font-[500] mb-[5px]">Email:</label>
                    <input type="email" name="email" placeholder="Enter your Email"
                        class="border border-gray-300 rounded-sm h-[35px] text-[12px] pl-[12px] outline-none focus-within:border-[#09193e] mb-[5px]">
                    <label for="password" class="font-[500] mb-[5px]">Password:</label>
                    <input type="password" name="password" placeholder="Enter your Password"
                        class="border border-gray-300 rounded-sm h-[35px] text-[12px] pl-[12px] outline-none focus-within:border-[#09193e] mb-[5px]">
                    <a href="/forgot-password" class="text-[13px] text-blue-400 mt-[8px] mb-[8px]">Forgot Password?</a>
                    <div class="flex justify-center mb-[8px]">
                        <button type="submit"
                            class="w-[80%] md:w-[60%] md:h-[40px] h-[30px] text-[15px] rounded-sm text-[#09193e] cursor-pointer focus-within:text-[#fff] focus-within:bg-[#09193e] hover:bg-[#09193e] hover:text-[#fff] border border-[f9fafb] outline-none">Sign
                            In</button>
                    </div>

                    <p class="text-[15px]">Don't have an account? <a href="/register" class="text-blue-400">Register</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>