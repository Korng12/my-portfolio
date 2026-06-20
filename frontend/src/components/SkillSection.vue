<template>
  <section id="skills" class="max-w-6xl mx-auto">
    <div class="space-y-12">
      <!-- Section Header -->
      <div class="space-y-4">
        <p class="text-caption text-blue-500 font-semibold tracking-wide uppercase">Expertise</p>
        <h2 class="text-h2 font-bold text-text-primary">Skills & Technologies</h2>
        <div class="w-12 h-1 bg-blue-500 rounded-full"></div>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Frontend Skills -->
        <div class="bg-surface p-6 rounded-xl border border-color-border hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl mb-4">🎨</div>
          <h3 class="text-h3 font-bold text-text-primary mb-4">Frontend</h3>
          <ul class="space-y-2">
            <li class="text-body text-text-secondary">Vue 3</li>
            <li class="text-body text-text-secondary">React</li>
            <li class="text-body text-text-secondary">TypeScript</li>
            <li class="text-body text-text-secondary">Tailwind CSS</li>
          </ul>
        </div>

        <!-- Backend Skills -->
        <div class="bg-surface p-6 rounded-xl border border-color-border hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl mb-4">⚙️</div>
          <h3 class="text-h3 font-bold text-text-primary mb-4">Backend</h3>
          <ul class="space-y-2">
            <li class="text-body text-text-secondary">Node.js</li>
            <li class="text-body text-text-secondary">Express</li>
            <li class="text-body text-text-secondary">Python</li>
            <li class="text-body text-text-secondary">REST APIs</li>
          </ul>
        </div>

        <!-- Database Skills -->
        <div class="bg-surface p-6 rounded-xl border border-color-border hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl mb-4">🗄️</div>
          <h3 class="text-h3 font-bold text-text-primary mb-4">Database</h3>
          <ul class="space-y-2">
            <li class="text-body text-text-secondary">PostgreSQL</li>
            <li class="text-body text-text-secondary">MySQL</li>
            <li class="text-body text-text-secondary">MongoDB</li>
            <li class="text-body text-text-secondary">Redis</li>
          </ul>
        </div>

        <!-- Tools & Others -->
        <div class="bg-surface p-6 rounded-xl border border-color-border hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
          <div class="text-4xl mb-4">🛠️</div>
          <h3 class="text-h3 font-bold text-text-primary mb-4">Tools</h3>
          <ul class="space-y-2">
            <li class="text-body text-text-secondary">Git</li>
            <li class="text-body text-text-secondary">Docker</li>
            <li class="text-body text-text-secondary">VS Code</li>
            <li class="text-body text-text-secondary">Figma</li>
          </ul>
        </div>
      </div>

      <!-- Proficiency Levels -->
      <div class="space-y-8 mt-12">
        <h3 class="text-h3 font-bold text-text-primary">Proficiency</h3>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-body font-medium text-text-primary">Frontend Development</span>
            <span class="text-caption text-text-secondary">90%</span>
          </div>
          <div class="w-full bg-surface rounded-full h-2 overflow-hidden">
            <div class="bg-blue-500 h-full rounded-full" style="width: 90%; transition: width 0.8s ease-out;"></div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-body font-medium text-text-primary">Backend Development</span>
            <span class="text-caption text-text-secondary">80%</span>
          </div>
          <div class="w-full bg-surface rounded-full h-2 overflow-hidden">
            <div class="bg-blue-500 h-full rounded-full" style="width: 80%; transition: width 0.8s ease-out;"></div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-body font-medium text-text-primary">Database Design</span>
            <span class="text-caption text-text-secondary">85%</span>
          </div>
          <div class="w-full bg-surface rounded-full h-2 overflow-hidden">
            <div class="bg-blue-500 h-full rounded-full" style="width: 85%; transition: width 0.8s ease-out;"></div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-body font-medium text-text-primary">System Architecture</span>
            <span class="text-caption text-text-secondary">75%</span>
          </div>
          <div class="w-full bg-surface rounded-full h-2 overflow-hidden">
            <div class="bg-blue-500 h-full rounded-full" style="width: 75%; transition: width 0.8s ease-out;"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

