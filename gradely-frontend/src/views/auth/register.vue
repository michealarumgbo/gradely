<template>
  <div class="w-full h-[100vh] justify-center flex bg-[#f9fafb] items-center">
    <!-- Side Panel -->
    <div class="hidden md:flex items-center w-[35%] justify-center h-[100%] text-white bg-[#09193e]">
      <div class="w-[89%] h-[80%] rounded-[40px] flex flex-col justify-center px-[20px] bg-[#0f2e77c5]">
        <p class="font-[500] text-[20px] mb-[20px] ml-[8px]">
          Simplifying <span class="text-[40px]">Enrollment</span>
        </p>
        <!-- Illustrious Image -->
        <div
          class="w-[100%] h-[300px] rounded-[30px] bg-cover bg-center bg-no-repeat"
          style="background-image: url('/src/assets/images/bg-images.png');"
        ></div>
      </div>
    </div>

    <!-- Form -->
    <div class="md:w-[65%] flex flex-col w-full h-full justify-center items-center">
      <div
        class="w-[90%] flex flex-col md:w-[60%] md:h-[90%] h-[92%] items-center shadow rounded-lg bg-white pt-10"
      >
        <a href="/" class="w-[60%] h-[18%] flex justify-center">
          <img
            class="h-[100%]"
            src="/src/assets/images/logo/GradelyLogo.png"
            alt="logo"
          />
        </a>
        <h3 class="font-[600] text-[22px] mt-2">Create Student Account</h3>
        <p class="text-[13px] text-gray-500">Fill in your details to register</p>

        <form
          action="#"
          class="w-full h-[75%] flex flex-col md:px-[70px] px-[20px] mt-[20px] overflow-y-auto"
        >
          <!-- Full Name -->
          <label for="name" class="font-[500] mb-[5px]">Full Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            class="border border-gray-300 rounded-md h-[45px] text-[14px] pl-[12px] placeholder:text-gray-400 outline-none focus:border-[#09193e] mb-[15px]"
          />

          <!-- Matric Number -->
          <label for="matric" class="font-[500] mb-[5px]">Matric Number:</label>
          <input
            type="text"
            name="matric"
            placeholder="Enter your matric number"
            class="border border-gray-300 rounded-md h-[45px] text-[14px] pl-[12px] placeholder:text-gray-400 outline-none focus:border-[#09193e] mb-[15px]"
          />

          <!-- Department, Level, Gender in Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Department -->
            <div class="flex flex-col">
              <label for="department" class="font-[500] mb-[5px]">Department:</label>
              <select
                name="department"
                class="border border-gray-300 rounded-md h-[45px] text-[14px] pl-[8px] outline-none focus:border-[#09193e] placeholder:text-gray-400 mb-[15px]"
              >
                <option value="">Select department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Engineering">Engineering</option>
                <option value="Biology">Biology</option>
                <option value="Economics">Economics</option>
              </select>
            </div>

            <!-- Level -->
            <div class="flex flex-col">
              <label for="level" class="font-[500] mb-[5px]">Level:</label>
              <select
                name="level"
                class="border border-gray-300 rounded-md h-[45px] text-[14px] pl-[8px] outline-none focus:border-[#09193e] mb-[15px]"
              >
                <option value="">Select level</option>
                <option value="100">100 Level</option>
                <option value="200">200 Level</option>
                <option value="300">300 Level</option>
                <option value="400">400 Level</option>
                <option value="500">500 Level</option>
              </select>
            </div>

            <!-- Gender -->
            <div class="flex flex-col">
              <label for="gender" class="font-[500] mb-[5px]">Gender:</label>
              <select
                name="gender"
                class="border border-gray-300 rounded-md h-[45px] text-[14px] pl-[8px] outline-none focus:border-[#09193e] mb-[15px]"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <!-- Email -->
          <label for="email" class="font-[500] mb-[5px]">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            class="border border-gray-300 rounded-md h-[45px] text-[14px] pl-[12px] placeholder:text-gray-400 outline-none focus:border-[#09193e] mb-[15px]"
          />

          <!-- Password -->
          <label for="password" class="font-[500] mb-[5px]">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            class="border border-gray-300 rounded-md h-[45px] text-[14px] pl-[12px] placeholder:text-gray-400 outline-none focus:border-[#09193e] mb-[15px]"
          />

          <!-- Confirm Password -->
          <label for="confirmPassword" class="font-[500] mb-[5px]">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            class="border border-gray-300 rounded-md h-[45px] text-[14px] pl-[12px] placeholder:text-gray-400 outline-none focus:border-[#09193e] mb-[20px]"
          />

          <!-- Register Button -->
          <div class="flex justify-center mb-[12px]">
            <button
              type="submit"
              class="w-[80%] md:w-[60%] md:h-[45px] h-[40px] text-[16px] font-[500] rounded-md text-[#09193e] cursor-pointer hover:bg-[#09193e] hover:text-[#fff] transition duration-200 border border-gray-200 outline-none"
            >
              Register
            </button>
          </div>

          <!-- Link to Login -->
          <p class="text-[15px] text-center">
            Already have an account?
            <a href="/login" class="text-blue-500 font-[500]">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// Registration logic will be implemented here later
</script>

<style lang="scss" scoped></style>

