---
sidebar: false
---

# 加入聊天室

欢迎来到我们的聊天室！在这里你可以了解如何加入和参与活动。我们期待与你一同成长、学习和分享。

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleRules = () => isOpen.value = !isOpen.value

const qqGroups = [
  { name: "1群", number: "499097612", link: "https://qm.qq.com/cgi-bin/qm/qr?-wv=1027&k=Ac0aa6hRRS-tQg13ejKX0T9ju5bvBYNW&group-code=810805871" },
  { name: "2群", number: "806316890", link: "https://qm.qq.com/cgi-bin/qm/qr?-wv=1027&k=Ac0aa6hRRS-tQg13ejKX0T9ju5bvBYNW&group-code=806316890" },
  { name: "3群", number: "210439111", link: "https://qm.qq.com/cgi-bin/qm/qr?-wv=1027&k=Ac0aa6hRRS-tQg13ejKX0T9ju5bvBYNW&group-code=210439111" },
  { name: "4群", number: "964080723", link: "https://qm.qq.com/cgi-bin/qm/qr?-wv=1027&k=Ac0aa6hRRS-tQg13ejKX0T9ju5bvBYNW&group-code=964080723" },
  { name: "5群", number: "551422505", link: "https://qm.qq.com/cgi-bin/qm/qr?-wv=1027&k=Ac0aa6hRRS-tQg13ejKX0T9ju5bvBYNW&group-code=551422505" },
  { name: "引导群", number: "953723871", link: "https://qm.qq.com/cgi-bin/qm/qr?-wv=1027&k=Ac0aa6hRRS-tQg13ejKX0T9ju5bvBYNW&group-code=953723871" },
  { name: "Discord 频道", number: "ajnYST4j", link: "https://discord.gg/ajnYST4j" },
]
</script>

<div class="community-component">
  <h2>加入方式</h2>
  <div class="join-methods">
    <div v-for="group in qqGroups" :key="group.number" class="qq-group">
      <a :href="group.link" target="_blank" rel="noopener noreferrer">
        <h3>{{ group.name }}</h3>
        <p>{{ group.number }}</p>
      </a>
    </div>
  </div>

  <h2>群聊守则</h2>
  <div class="rules-card" :class="{ 'is-open': isOpen }">
    <div class="rules-header" @click="toggleRules">
      <h3>提瓦特文化科学研究院 旗下聊天室群准则</h3>
      <span class="toggle-icon">{{ isOpen ? '▲' : '▼' }}</span>
    </div>
    
    群员是指通过合法方式与规定加入本群聊的正式群聊成员。
        权利与义务：群员享有群规与法律保护的权利，必须履行相关义务。
        群员须遵守以下规定：
          
            遵纪守法，自觉监督群规与法律的实施。
            对发布内容承担法律责任，拥护中国共产党和中央政府的领导。
            监督群管理行为，具有集体意识。
          
        
        所有群员在法律与群规面前一律平等。
        禁止任何形式的侮辱、诽谤等侵犯他人人格尊严的行为。
        严禁宣扬攻击、颠覆党的政权等严重违法行为。
        禁止发布不适当内容（如刷屏、青少年不宜内容）。
        禁止传播邪教、恶俗文化内容。
        不得在群内挑拨离间或寻衅滋事。
        禁止发布色情、赌博、传销等违法违规内容。
        未经同意不得发布广告信息。
      
    
  </div>
</div>

<style scoped>
.join-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.qq-group a {
  display: block;
  background-color: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid var(--vp-c-divider);
}

.qq-group a:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.qq-group h3 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  color: var(--vp-c-brand);
}

.qq-group p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.rules-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  transition: all 0.3s ease;
}

.rules-header {
  background-color: var(--vp-c-brand);
  color: white;
  padding: 0.8rem 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rules-header h3 {
  margin: 0;
  font-size: 1rem;
}

.toggle-icon {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.rules-card.is-open .toggle-icon {
  transform: rotate(180deg);
}

.rules-content {
  padding: 1rem;
  display: none;
}

.rules-card.is-open .rules-content {
  display: block;
}

.rules-content ol {
  padding-left: 1.2rem;
}

.rules-content li {
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
}

.rules-content ul {
  padding-left: 1.2rem;
  list-style-type: disc;
}

@media (max-width: 640px) {
  .join-methods {
    grid-template-columns: 1fr;
  }
  
  .rules-header h3 {
    font-size: 0.9rem;
  }
  
  .rules-content li {
    font-size: 0.8rem;
  }
}
</style>