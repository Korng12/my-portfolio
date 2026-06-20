<template>
  <section id="projects" class="max-w-6xl mx-auto">
    <div class="space-y-12">
      <!-- Section Header -->
      <div class="space-y-4">
        <p class="text-caption text-blue-500 font-semibold tracking-wide uppercase">Featured Work</p>
        <h2 class="text-h2 font-bold text-text-primary">Recent Projects</h2>
        <div class="w-12 h-1 bg-blue-500 rounded-full"></div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Project Card 1 -->
        <div class="group bg-background border border-color-border rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
          <div class="h-48 bg-gradient-to-br from-blue-500/10 to-transparent flex items-center justify-center border-b border-color-border">
            <svg class="w-24 h-24 text-blue-500 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V9.75M9 12h6m-6 4h6M9 8h6" />
            </svg>
          </div>
          <div class="p-6 space-y-4">
            <h3 class="text-h3 font-bold text-text-primary">Portfolio Website</h3>
            <p class="text-body text-text-secondary">A modern, responsive portfolio built with Vue 3, TypeScript, and Tailwind CSS showcasing projects and skills.</p>
            <div class="flex flex-wrap gap-2 pt-4">
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">Vue 3</span>
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">TypeScript</span>
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">Tailwind</span>
            </div>
            <button class="w-full mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
              View Project
            </button>
          </div>
        </div>

        <!-- Project Card 2 -->
        <div class="group bg-background border border-color-border rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
          <div class="h-48 bg-gradient-to-br from-blue-500/10 to-transparent flex items-center justify-center border-b border-color-border">
            <svg class="w-24 h-24 text-blue-500 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <div class="p-6 space-y-4">
            <h3 class="text-h3 font-bold text-text-primary">Database System</h3>
            <p class="text-body text-text-secondary">A comprehensive database management system with optimized queries and schema design for handling large-scale data.</p>
            <div class="flex flex-wrap gap-2 pt-4">
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">SQL</span>
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">Backend</span>
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">Architecture</span>
            </div>
            <button class="w-full mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
              View Project
            </button>
          </div>
        </div>

        <!-- Project Card 3 -->
        <div class="group bg-background border border-color-border rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
          <div class="h-48 bg-gradient-to-br from-blue-500/10 to-transparent flex items-center justify-center border-b border-color-border">
            <svg class="w-24 h-24 text-blue-500 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="p-6 space-y-4">
            <h3 class="text-h3 font-bold text-text-primary">Mobile Application</h3>
            <p class="text-body text-text-secondary">Cross-platform mobile app featuring real-time synchronization and smooth user experience across devices.</p>
            <div class="flex flex-wrap gap-2 pt-4">
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">React Native</span>
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">Mobile</span>
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">API</span>
            </div>
            <button class="w-full mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
              View Project
            </button>
          </div>
        </div>

        <!-- Project Card 4 -->
        <div class="group bg-background border border-color-border rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
          <div class="h-48 bg-gradient-to-br from-blue-500/10 to-transparent flex items-center justify-center border-b border-color-border">
            <svg class="w-24 h-24 text-blue-500 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div class="p-6 space-y-4">
            <h3 class="text-h3 font-bold text-text-primary">Auth System</h3>
            <p class="text-body text-text-secondary">Secure authentication system with JWT tokens, OAuth integration, and robust security measures.</p>
            <div class="flex flex-wrap gap-2 pt-4">
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">Security</span>
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">Backend</span>
              <span class="px-3 py-1 bg-blue-500/10 text-blue-500 text-caption font-medium rounded-full">JWT</span>
            </div>
            <button class="w-full mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
              View Project
            </button>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="flex justify-center pt-8">
        <button class="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
          View All Projects
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
