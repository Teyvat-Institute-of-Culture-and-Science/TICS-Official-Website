<template>
  <Transition name="slide-fade">
    <div class="notice-container" :class="{ 'dark': isDark, 'collapsed': !showFullNotice, 'mobile': isMobile }" v-show="isVisible">
      <div v-if="!isMobile || !isMinimized" class="notice-content">
        <div class="notice-header">
          <img src="/head&favicon.png" alt="Logo" class="notice-logo">
          <span class="notice-title">T.I.C.S Next</span>
        </div>
        <Transition name="fade">
          <div v-if="showFullNotice" class="notice-text">
            <p>{{ globalNotice?.text }}</p>
          </div>
        </Transition>
        <div class="separator" v-if="showFullNotice"></div>
        <Transition name="fade" mode="out-in">
          <div :key="hitokoto" class="hitokoto-content">
            <p class="hitokoto-text">{{ hitokoto }}</p>
            <p class="hitokoto-source">
              —— {{ fromWho ? fromWho + '，' : '' }}「{{ from }}」
            </p>
          </div>
        </Transition>
      </div>
      <div v-else class="minimized-content">
        <Transition name="fade" mode="out-in">
          <p :key="hitokoto" class="hitokoto-text">{{ hitokoto }}</p>
        </Transition>
      </div>
      <div class="countdown-bar" :style="{ width: `${countdownProgress}%` }"></div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useData } from 'vitepress'

const { theme, isDark } = useData()
const showFullNotice = ref(true)
const globalNotice = theme.value.globalNotice

const hitokoto = ref('')
const from = ref('')
const fromWho = ref('')
const countdownProgress = ref(100)

const isMobile = ref(false)
const isMinimized = ref(false)
const isVisible = ref(true)

const fetchHitokoto = async () => {
  try {
    const response = await fetch('https://international.v1.hitokoto.cn/')
    const data = await response.json()
    hitokoto.value = data.hitokoto
    from.value = data.from
    fromWho.value = data.from_who
    countdownProgress.value = 100
  } catch (error) {
    console.error('Failed to fetch hitokoto:', error)
  }
}

const updateCountdown = () => {
  countdownProgress.value = Math.max(0, countdownProgress.value - 2)
  if (countdownProgress.value === 0) {
    fetchHitokoto()
  }
}

let countdownInterval

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  fetchHitokoto()
  countdownInterval = setInterval(updateCountdown, 100)

  if (globalNotice?.text) {
    setTimeout(() => {
      showFullNotice.value = false
    }, 5000)
  }

  checkMobile()
  window.addEventListener('resize', checkMobile)

  if (isMobile.value) {
    setTimeout(() => {
      isMinimized.value = true
    }, 10000) // 10秒后最小化移动端显示
  }
})

onUnmounted(() => {
  clearInterval(countdownInterval)
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.notice-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 16px;
  border-radius: 8px;
  box-shadow: var(--vp-shadow-3);
  z-index: 100;
  width: 360px;
  transition: all 0.3s ease;
}

.notice-container.dark {
  background-color: rgba(44, 44, 44, 0.8);
  backdrop-filter: blur(10px);
}

.notice-container.collapsed {
  padding-bottom: 8px;
}

.notice-container.mobile {
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius: 16px 16px 0 0;
  padding: 20px;
  box-sizing: border-box;
}

.notice-container.mobile.collapsed {
  height: 40px;
  padding: 8px 16px;
}

.notice-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.notice-logo {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.notice-title {
  font-weight: 600;
  font-size: 16px;
}

.notice-content {
  margin-bottom: 12px;
}

.notice-text {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

.separator {
  height: 1px;
  background-color: var(--vp-c-divider);
  margin: 12px 0;
}

.hitokoto-content {
  font-size: 14px;
  line-height: 1.5;
}

.hitokoto-text {
  margin: 0;
}

.hitokoto-source {
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-top: 4px;
}

.countdown-bar {
  height: 2px;
  background-color: var(--vp-c-brand);
  margin-top: 8px;
  transition: width 0.1s linear;
}

.minimized-content {
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

.minimized-content .hitokoto-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .notice-container {
    transition: all 0.3s ease, height 0.3s ease;
  }

  .notice-container.mobile {
    height: auto;
    max-height: 50vh;
    overflow-y: auto;
  }

  .notice-container.mobile.collapsed {
    height: 40px;
    overflow: hidden;
  }

  .countdown-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100% !important;
  }
}
</style>