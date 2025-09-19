<template>
    <div class="navbar bg-[#09193e] shadow-sm">
        <div class="flex-1">
            <!-- <a class="btn btn-ghost text-xl"> -->
            <label for="my-drawer-2" class="btn shadow-none bg-[unset] border-none text-white text-[25px] lg:hidden">
                <i class="fa-solid fa-bars"></i>
            </label>
            <!-- </a> -->
        </div>
        <div class="flex gap-2">
            <!-- <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" /> -->
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a href="/student/settings" class="justify-between">
                            Profile
                        </a>
                    </li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>