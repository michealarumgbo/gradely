<template>
    <div class="w-full h-screen flex items-center justify-center bg-[#f9fafb]">
        <!-- Side Panel (Desktop only) -->
        <div class="hidden md:flex items-center w-[35%] justify-center h-full text-white bg-[#09193e]">
            <div class="w-[85%] h-[80%] rounded-[40px] flex flex-col justify-center px-6 bg-[#0f2e77c5]">
                <p class="font-[500] text-[20px] mb-[20px] ml-[8px]">
                    Simplifying Results <span class="text-[40px]">Management</span>
                </p>
                <!-- Illustration -->
                <div class="w-full h-[280px] rounded-[30px] bg-cover bg-center bg-no-repeat"
                    style="background-image: url('/src/assets/images/bg-images.png');"></div>
            </div>
        </div>

        <!-- Forgot Password Form -->
        <div class="md:w-[65%] w-full h-full flex items-center justify-center">
            <div class="w-[90%] md:w-[60%] h-auto flex flex-col items-center shadow rounded-lg bg-white p-8">
                <!-- Logo (always visible) -->
                <a href="/" class="flex justify-center mb-4">
                    <img src="/src/assets/images/logo/GradelyLogo.png" alt="Gradely Logo" class="h-10 md:h-12" />
                </a>

                <h3 class="font-[600] text-[22px] mb-2">Forgot Password</h3>
                <p class="text-[14px] text-gray-500 text-center mb-6">
                    Enter your email address to reset your password.
                </p>

                <form action="#" class="w-full flex flex-col md:px-6">
                    <!-- Email -->
                    <label for="email" class="font-[500] mb-[5px]">Email:</label>
                    <input type="email" name="email" placeholder="Enter your email"
                        class="border border-gray-300 rounded-md h-[45px] text-[14px] pl-[12px] placeholder:text-gray-400 outline-none focus:border-[#09193e] mb-[20px]" />

                    <!-- Reset Button -->
                    <button type="submit"
                        class="w-full h-[45px] bg-[#09193e] text-white font-[500] rounded-md hover:bg-[#0f2e77] transition duration-200 mb-4">
                        Reset Password
                    </button>

                    <!-- Link to Register -->
                    <p class="text-[14px] text-center">
                        Don’t have an account?
                        <a href="/register" class="text-blue-500 font-[500] hover:underline">
                            Sign Up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
// Reset password logic will go here
</script>

<style lang="scss" scoped></style>
