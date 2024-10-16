<script setup>
import { useData } from 'vitepress'
import { ref, onMounted, computed } from 'vue'

const { theme } = useData()
const members = theme.value.generalMembers || []
const isDarkMode = ref(false)
const isMobile = ref(false)

onMounted(() => {
  isDarkMode.value = document.documentElement.classList.contains('dark')
  const observer = new MutationObserver(() => {
    isDarkMode.value = document.documentElement.classList.contains('dark')
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

  checkMobile()
  window.addEventListener('resize', checkMobile)
})

function checkMobile() {
  isMobile.value = window.innerWidth <= 640
}

function truncateName(name) {
  return isMobile.value ? (name.length > 4 ? name.slice(0, 4) + '...' : name) : (name.length > 6 ? name.slice(0, 6) + '...' : name)
}

const gridColumns = computed(() => {
  if (isMobile.value) {
    return 'repeat(auto-fill, minmax(80px, 1fr))'
  } else {
    return 'repeat(auto-fill, minmax(120px, 1fr))'
  }
})
</script>

<template>
  <div class="general-members-list" :class="{ 'dark-mode': isDarkMode, 'mobile': isMobile }" :style="{ gridTemplateColumns: gridColumns }">
    <div 
      v-for="member in members" 
      :key="member.name" 
      class="member-card"
    >
      <div class="member-name">
        <span class="truncated">{{ truncateName(member.name) }}</span>
        <span class="full-name">{{ member.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.general-members-list {
  display: grid;
  gap: 12px;
  padding: 16px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.dark-mode {
  background-color: var(--vp-c-bg-soft);
}

.member-card {
  background-color: var(--vp-c-bg);
  border-radius: 8px;
  padding: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.member-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.member-name {
  font-size: 14px;
  font-weight: bold;
  color: var(--vp-c-text-1);
  text-align: center;
  position: relative;
}

.truncated {
  display: inline-block;
  transition: opacity 0.3s ease;
}

.full-name {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.member-card:hover .truncated {
  opacity: 0;
}

.member-card:hover .full-name {
  opacity: 1;
}


@media (hover: none) {
  .member-card:hover {
    transform: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .member-card:hover .truncated {
    opacity: 1;
  }

  .member-card:hover .full-name {
    opacity: 0;
  }
}
</style>