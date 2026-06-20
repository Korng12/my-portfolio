<template>
  <section class="relative py-20 px-4 md:px-12 lg:px-20 overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Text Content with staggered animation -->
        <div class="space-y-6 animate-fade-in-up">
          <!-- Greeting -->
          <div class="inline-block">
            <p class="text-text-secondary text-caption font-medium tracking-wide">Welcome to my portfolio</p>
          </div>

          <!-- Main Heading -->
          <h1 class="text-display font-bold text-text-primary leading-tight">
            Chantha Mengkong
          </h1>

          <!-- Subtitle -->
          <p class="text-h3 text-text-secondary font-light">
            Full-Stack Developer & System Architect
          </p>

          <!-- Description -->
          <p class="text-body text-text-secondary leading-relaxed max-w-xl">
            Software engineering student with strong interest in frontend and backend development, system architecture, and how software systems work internally. Passionate about learning how applications are designed, built, and communicate across different layers of a system.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <button class="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button class="px-8 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500/5 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        <!-- Image with animation -->
        <div class="relative animate-fade-in-down" style="animation-delay: 0.2s;">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-2xl"></div>
          <img 
            src="@/assets/hero.png" 
            alt="Chantha Mengkong"
            class="relative w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
          >
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
  opacity: 0;
}
</style>