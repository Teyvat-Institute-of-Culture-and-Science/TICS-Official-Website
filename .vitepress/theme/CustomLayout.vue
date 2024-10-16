<template>
    <Layout>
      <template #nav-bar-title-before>
        <Hitokoto class="hitokoto-nav" />
      </template>
    </Layout>
  </template>
  
  <script setup>
  import DefaultTheme from 'vitepress/theme'
  import Hitokoto from './components/Hitokoto.vue'
  
  const { Layout } = DefaultTheme
  </script>
  
  <style scoped>
  .hitokoto-nav {
    margin-right: 12px;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  @media (max-width: 768px) {
    .hitokoto-nav {
      display: none;
    }
  }
  </style>