<template>
  <main class="bg-background text-text-primary">
    <!-- Header/Navigation -->
    <Header />
    <!-- Hero Section with Profile -->
    <section class="relative overflow-hidden bg-gradient-to-b from-surface to-background">
      <Profile />
    </section>

    <!-- About Me Section -->
    <section class="py-20 px-4 md:px-8">
      <AboutMe />
    </section>

    <!-- Featured Projects Section -->
    <section class="py-20 px-4 md:px-8 bg-surface">
      <FeatureProjuect />
    </section>

    <!-- Skills Section -->
    <section class="py-20 px-4 md:px-8">
      <SkillSection />
    </section>
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Profile from '@/components/Profile.vue';
import AboutMe from '@/components/AboutMe.vue';
import FeatureProjuect from '@/components/FeatureProjuect.vue';
import SkillSection from '@/components/SkillSection.vue';
// import Sidebar from '@/components/Sidebar.vue';
</script>