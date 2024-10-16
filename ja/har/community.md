---
sidebar: false
---

# チャットルームに参加

私たちのチャットルームへようこそ！ここでは、参加方法とアクティビティへの参加方法を知ることができます。皆様と共に成長し、学び、共有できることを楽しみにしています。

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleRules = () => isOpen.value = !isOpen.value

const qqGroups = [
  { name: "Discord チャンネル", number: "ajnYST4j", link: "https://discord.gg/ajnYST4j" },
]
</script>

<div class="community-component">
  <h2>参加方法</h2>
  <div class="join-methods">
    <div v-for="group in qqGroups" :key="group.number" class="qq-group">
      <a :href="group.link" target="_blank" rel="noopener noreferrer">
        <h3>{{ group.name }}</h3>
        <p>{{ group.number }}</p>
      </a>
    </div>
  </div>

  <h2>グループチャットルール</h2>
  <div class="rules-card" :class="{ 'is-open': isOpen }">
    <div class="rules-header" @click="toggleRules">
      <h3>テイワット文化科学研究院 チャットルームグループガイドライン</h3>
      <span class="toggle-icon">{{ isOpen ? '▲' : '▼' }}</span>
    </div>
    
    グループメンバーとは、合法的な方法と規定に従ってこのグループチャットに参加した正式なメンバーを指します。
        権利と義務：グループメンバーはグループ規則と法律で保護される権利を享受し、関連する義務を果たさなければなりません。
        グループメンバーは以下の規定を遵守する必要があります：
          
            法律と規則を守り、自主的にグループ規則と法律の実施を監督すること。
            投稿内容に対して法的責任を負い、中国共産党と中央政府の指導を支持すること。
            グループ管理行為を監督し、集団意識を持つこと。
          
        
        すべてのグループメンバーは法律とグループ規則の前で平等です。
        他人の人格の尊厳を侵害するような侮辱、誹謗などのいかなる形態の行為も禁止されています。
        党の政権を攻撃、転覆するなどの重大な違法行為の宣伝は厳禁です。
        不適切なコンテンツ（スパム、青少年に不適切なコンテンツなど）の投稿は禁止されています。
        邪教、悪俗文化のコンテンツの伝播は禁止されています。
        グループ内で離間を煽ったり、トラブルを起こしたりしてはいけません。
        ポルノ、ギャンブル、マルチ商法などの違法・規則違反のコンテンツの投稿は禁止されています。
        同意なしに広告情報を投稿してはいけません。
      
    
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