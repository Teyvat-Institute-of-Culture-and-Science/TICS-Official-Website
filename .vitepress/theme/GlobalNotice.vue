<template>
  <Transition name="slide-fade">
    <div class="notice-container" :class="{ 'dark': isDark, 'mobile': isMobile }" v-show="isVisible">
      <div class="notice-content">
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
            <p class="hitokoto-attribution">来自 一言</p>
          </div>
        </Transition>
      </div>
      <div class="countdown-bar" :style="{ width: `${countdownProgress}%` }"></div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useData } from 'vitepress'

const { theme, isDark } = useData()
const showFullNotice = ref(true)
const globalNotice = theme.value.globalNotice

const hitokoto = ref('')
const from = ref('')
const fromWho = ref('')
const countdownProgress = ref(100)

const isMobile = ref(false)
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
})

onUnmounted(() => {
  clearInterval(countdownInterval)
  window.removeEventListener('resize', checkMobile)
})

watch(isMobile, (newValue) => {
  if (newValue) {
    showFullNotice.value = false
  } else {
    showFullNotice.value = true
  }
})
</script>

<style scoped>
.notice-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: var(--vp-shadow-2);
  z-index: 100;
  width: 360px;
  backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.notice-container.dark {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.notice-container.mobile {
  left: 10px;
  right: 10px;
  bottom: 10px;
  width: calc(100% - 20px);
  max-width: none;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
}

.notice-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.notice-logo {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}

.notice-title {
  font-weight: 600;
  font-size: 16px;
  color: var(--vp-c-text-1);
}

.notice-content {
  margin-bottom: 16px;
}

.notice-text {
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  padding: 8px 0;
  color: var(--vp-c-text-2);
}

.separator {
  height: 1px;
  background-color: var(--vp-c-divider);
  margin: 12px 0;
}

.hitokoto-content {
  font-size: 14px;
  line-height: 1.6;
}

.hitokoto-text {
  margin: 0;
  color: var(--vp-c-text-1);
}

.hitokoto-source {
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-top: 8px;
  text-align: right;
}

.hitokoto-attribution {
  font-size: 10px;
  color: var(--vp-c-text-3);
  margin-top: 4px;
  text-align: right;
}

.countdown-bar {
  height: 2px;
  background-color: var(--vp-c-brand);
  margin-top: 12px;
  transition: width 0.1s linear;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

@media (max-width: 768px) {
  .notice-container {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    font-size: 14px;
  }

  .notice-container.mobile {
    max-height: 40vh;
    overflow-y: auto;
  }

  .notice-header {
    margin-bottom: 12px;
  }

  .notice-logo {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  .notice-title {
    font-size: 14px;
  }

  .notice-text,
  .hitokoto-content {
    font-size: 12px;
  }

  .hitokoto-source {
    font-size: 10px;
  }

  .hitokoto-attribution {
    font-size: 9px;
  }

  .countdown-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100% !important;
  }
}
</style>