<template>
    <div class="flex flex-col items-center justify-center h-screen text-center">
        <h1 class="text-6xl font-bold text-[var(--primary-color)]">404</h1>
        <p class="mt-4 text-lg text-gray-600">Oops! The page you are looking for doesn’t exist.</p>
        <router-link to="/"
            class="mt-6 px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-gradely-dark">
            Go Home
        </router-link>
    </div>
</template>
