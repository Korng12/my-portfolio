<template>
    <div v-for="menu in menus">
        <div  @click="handleClick(menu)"  :key="menu"  >
            {{ menu }}
        </div>
    </div>
</template>
<script setup lang="ts">
// import { ref } from 'vue'

// const activeTab = ref('dashboard')
const emit = defineEmits(['click'])
function handleClick(tab:String){
    emit('click',tab)
}

const menus = [
  'dashboard',
  'jobs',
  'saved-jobs',
  'profile',
]
</script>
