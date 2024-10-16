<script setup>
import { ref, onMounted } from 'vue'

const hitokoto = ref('')
const from = ref('')
const fromWho = ref('')

const fetchHitokoto = async () => {
  try {
    const response = await fetch('https://v1.hitokoto.cn/')
    const data = await response.json()
    hitokoto.value = data.hitokoto
    from.value = data.from
    fromWho.value = data.from_who
  } catch (error) {
    console.error('Failed to fetch hitokoto:', error)
  }
}

onMounted(() => {
  fetchHitokoto()
})
</script>

<template>
  <div class="hitokoto-container">
    <p class="hitokoto-text">{{ hitokoto }}</p>
    <p class="hitokoto-source">
      —— {{ fromWho ? fromWho + '，' : '' }}「{{ from }}」
    </p>
  </div>
</template>

<style scoped>
.hitokoto-container {
  font-size: 14px;
  line-height: 1.2;
  color: var(--vp-c-text-2);
}

.hitokoto-text {
  margin: 0;
}

.hitokoto-source {
  margin: 0;
  font-size: 12px;
  opacity: 0.8;
}
</style>