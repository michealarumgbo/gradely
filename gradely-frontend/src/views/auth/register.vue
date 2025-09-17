<template>
    <div class="w-full h-[100vh] justify-center flex bg-[#f9fafb] items-center">
        <!-- Side Panel -->
        <div class="hidden md:flex items-center  w-[35%] justify-center h-[100%] text-white bg-[#09193e]">
            <div class="w-[89%] h-[80%] rounded-[40px] flex flex-col justify-center px-[20px] bg-[#0f2e77c5]">
                <p class="font-[500] text-[20px] mb-[20px] ml-[8px]">
                    Simplifying Results <span class="text-[40px]">Management</span>
                </p>
                <!-- Illustrious Image -->
                <div class="w-[100%] h-[300px] rounded-[30px] bg-cover bg-center bg-no-repeat"
                    style="background-image: url('/src/assets/images/bg-images.png');"></div>
            </div>
        </div>
        <!-- Form -->
        <div class="md:w-[65%] flex flex-col w-full h-full justify-center  items-center">
            <div
                class="w-[90%] flex flex-col md:w-[60%] md:h-[95%] h-[90%] items-center shadow rounded-sm bg-white pt-1">
                <div class="flex flex-col  items-center h-[14%] w-full">
                    <a href="/" class="w-[60%] h-[80%] flex justify-center">
                        <img class=" h-[100%]" src="/src/assets/images/logo/GradelyLogo.png" alt="hello">
                    </a>
                    <div class="">
                        <p class="text-[15px]">Register to get Started...</p>
                    </div>
                </div>
                <form action="#" class="w-full h-[84%]  flex flex-col md:px-[70px] px-[20px] mt-[10px]">
                    <label for="firstname" class="font-[500] mb-[5px]">First Name:</label>
                    <input type="text" name="firstname" placeholder="Enter your First Name"
                        class="border border-gray-300 rounded-sm h-[35px] text-[12px] pl-[12px] outline-none focus-within:border-[#09193e] mb-[5px]">
                    <label for="lastname" class="font-[500] mb-[5px]">Last Name:</label>
                    <input type="text" name="lastname" placeholder="Enter your Last Name"
                        class="border border-gray-300 rounded-sm h-[35px] text-[12px] pl-[12px] outline-none focus-within:border-[#09193e] mb-[5px]">
                    <div class="flex ">
                        <label for="dept" class="font-[500] mr-[10px] mb-[5px]">Department:</label>
                    <select name="dept" id="dept" class="mb-[5px] w-[50%] outline-none border border-gray-300 rounded-[3px] cursor-pointer h-[25px] text-[13px]">
                        <option value="CEE">Computer Engineering</option>
                        <option value="LAW">Law</option>
                        <option value="MED">Medicine and Surgery</option>
                        <option value="MAC">Mass Communication</option>
                        <option value="ELS">English & Literary Studies</option>
                    </select>
                    </div>
                    <label for="reg-no" class="font-[500] mb-[5px]">Reg Number:</label>
                    <input type="text" name="reg-no" placeholder="Enter your Reg No"
                        class="border border-gray-300 rounded-sm h-[35px] text-[12px] pl-[12px] outline-none focus-within:border-[#09193e] mb-[5px]">
                    <label for="email" class="font-[500] mb-[5px]">Email:</label>
                    <input type="email" name="email" placeholder="Enter your Email"
                        class="border border-gray-300 rounded-sm h-[35px] text-[12px] pl-[12px] outline-none focus-within:border-[#09193e] mb-[5px]">
                    <label for="password" class="font-[500] mb-[5px]">Password:</label>
                    <input type="password" name="password" placeholder="Create your Password"
                        class="border border-gray-300 rounded-sm h-[35px] text-[12px] pl-[12px] outline-none focus-within:border-[#09193e] mb-[5px]">
                    <label for="confirm-password" class="font-[500] mb-[5px]">Confirm Password:</label>
                    <input type="confirm-password" name="password" placeholder="Confirm your Password"
                        class="border border-gray-300 rounded-sm h-[35px] text-[12px] pl-[12px] outline-none focus-within:border-[#09193e] mb-[15px]">
                    <div class="flex justify-center  mb-[5px]">
                        <button type="submit"
                            class="w-[80%] md:w-[60%] md:h-[30px] h-[30px] text-[15px] rounded-sm text-[#09193e] cursor-pointer focus-within:text-[#fff] focus-within:bg-[#09193e] hover:bg-[#09193e] hover:text-[#fff] border border-[f9fafb] outline-none">Sign
                            In</button>
                    </div>

                    <p class="text-[13px]">Don't have an account? <a href="/login" class="text-blue-400">Register</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
// Registration logic will be implemented here later
</script>

<style scoped>
@media (max-width: 768px) {
    
    label{
        font-size: 14px;
    }
}
label{
    font-size: 15px;
}
</style>