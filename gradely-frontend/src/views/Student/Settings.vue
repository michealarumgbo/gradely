<template>
    <div class="flex  w-full h-[100vh] bg-gray-200">
        <div class="w-[0.0001%]  h-full md:w-auto ">
            <SideNav :linkItems="linkItems" />
        </div>
        <!-- Main Content -->
        <div class="h-full w-full flex flex-col items-center md:w-full">
            <TopNav />

            <div class="bg-white min-h-[85%] w-[94%] mt-[10px] px-[20px] rounded-md py-[30px] overflow-auto">
                <h1 class="text-[22px] font-[500]">My Settings</h1>
                <div
                    class="w-[130px] h-[130px] rounded-full bg-center bg-cover bg-no-repeat bg-gray-400 mt-[40px] mb-[40px]">
                </div>
                <form action="#" method="PUT" class="flex flex-col">
                    <label for="firstname">First Name:</label>
                    <input type="text" name="fisrtname" value="Micheal" disabled>
                    <label for="lastname">Last Name:</label>
                    <input type="text" name="lastname" value="Chris" disabled>
                    <label for="dept">Department:</label>
                    <input type="text" name="dept" value="CSC" disabled>
                    <label for="reg-no">Reg No:</label>
                    <input type="text" name="reg-no" value="2022/244838" disabled>
                    <label for="email">Email:</label>
                    <input type="text" name="email" value="arumgb2@gmail.com" disabled>
                    <label for="password">Password:</label>
                    <input type="text" name="password" placeholder="Enter New Password">

                    <button type="submit"
                        class="w-[80px] h-[40px] text-white bg-[var(--primary-color)] rounded-sm cursor-pointer text-[17px]">Save</button>
                </form>

            </div>


        </div>
    </div>
</template>

<script setup>
import SideNav from '../../components/sideNav.vue';
import TopNav from '../../components/topNav.vue';
import { usestudentLinkItemsStore } from '../../stores/studentLinkItems';

const { linkItems } = usestudentLinkItemsStore();
</script>

<style scoped>
input {
    width: 60%;
    height: 40px;
    background-color: #bfbfbf;
    margin-left: 20px;
    padding-left: 10px;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
}

@media (max-width: 768px) {

    input {
        width: 90%;
        margin-left: 0;
    }
}
</style>