<template>
  <div>
    <header
      class="w-full h-20 bg-gray-900 px-6 py-1 flex items-center justify-between"
    >
      <div class="flex justify-between items-center">
        <p class="text-2xl font-semibold text-slate-50">Our App</p>
      </div>
      <nav class="container mx-auto p-4 flex justify-between">
        <ul class="flex gap-4">
          <li>
            <L1AtomMenuLink href="/signin">Sign In</L1AtomMenuLink>
          </li>
          <li>
            <L1AtomMenuLink href="/signup">Sign Up</L1AtomMenuLink>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
