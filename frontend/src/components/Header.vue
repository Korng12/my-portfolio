<template>
  <header class="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-color-border">
    <nav class="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-h3 font-bold text-text-primary">
        CM
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#home" class="text-body text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium">
          Home
        </a>
        <a href="#about" class="text-body text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium">
          About
        </a>
        <a href="#projects" class="text-body text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium">
          Projects
        </a>
        <a href="#skills" class="text-body text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium">
          Skills
        </a>
      </div>

      <!-- CTA Button -->
      <button class="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
        Contact
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
header {
  --color-border: #d2d2d7;
}
</style>