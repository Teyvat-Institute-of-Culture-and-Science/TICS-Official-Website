---
sidebar: true
---

# メンバーリスト
文：流雲 澄 

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import GeneralMembersList from '../../.vitepress/theme/components/GeneralMembersList.vue'

const members = [
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1165355565&s=100',
    name: '暮至長虹',
    title: '会長',
    desc: '2024年7月に元のテイワット教育社に加入し、編集部に入り、その後常任会員を務めました。この間、常任理事会の多くの重要な業務に参加し、一定の貢献をしました。同年7月末に第2代会長に就任し、全社を統括しています。会長就任以来、全社、全院の多くの重要な業務を主導し、テイワット文化科学研究院常任理事会第1回全体会議の開催を主導し、「組織改革」を完了させ、その後の全院の発展のための重要な基礎を築き、全院に重要な貢献をしました。',
    links: [
      { icon: 'github', link: 'https://github.com/username' },
      { icon: 'twitter', link: 'https://twitter.com/username' }
    ]
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3427651720&s=100',
    name: 'WhoTao',
    title: '副/代理院長、運営広報部部長',
    desc: '2024年7月に元のテイワット教育社に加入し、その後副会長を務めました。テイワット文化科学研究院運営広報部部長として、主に技術部門の管理を担当し、全院に基本的な技術サポートを提供しています。現在、副院長、代理院長を務め、全院の財務業務も管理しています。自己犠牲的で清廉潔白、全院事業の大功労者であり、極めて重要な指導者です。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=2493784767&s=100',
    name: '流雲 澄',
    title: '常任理事、運営広報部メンバー',
    desc: '2024年7月に元のテイワット教育社に加入。2024年7月14日の「二組改革」で『原学』編集グループのリーダー、常任会員に任命されました。現在、部門理事、運営広報部副部長、『原学』編集グループリーダーを務め、新ウェブサイトの運用保守を担当し、テイワット研究院全体に重要な貢献をしています。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3208595591&s=100',
    name: '極光ᰔ',
    title: '常任理事、名誉会長',
    desc: '2024年7月に元のテイワット教育社に加入し、その後常任会員を務めました。元テイワット文化科学研究院歴史研究院院長として、全院の重要プロジェクト『テイワット年代記』の編集作業を主導しました。自己犠牲的で勤勉、全院の優秀な編集者であり、全院で非常に尊敬される指導者、全院事業の大功労者です。'
  }
]

const honoraryMembers = [
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1424876464&s=100',
    name: 'phil616',
    title: '元テイワット教育社技術部部長',
    desc: '我々の社の技術業務に重大な貢献をし、前ウェブサイトのICP登録の第一責任者であり、同時に無償で公式ウェブサイトを構築し、積極的に社員の提案を聞き入れ、我々の社の重要な人材、大功労者です。彼の大学院受験の仕事と自身の意思により、元のテイワット教育社を離れ、技術面の仕事を担当しなくなりました。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=209608405&s=100',
    name: '両袖清風',
    title: '元会長',
    desc: 'テイワット教育出版社元会長、創設者、第1回常任理事会の指導核心。学業などの理由により、自ら元のテイワット教育社を離れることを選択しました。'
  }
]
</script>

## 常任会員

常任会員はテイワット文化科学研究院に重大な貢献をしたメンバーで、彼らの努力が社団をより繁栄させています。

<VPTeamMembers size="small" :members="members" />

## 名誉常任会員およびその他

彼らはかつて重要な貢献をし、今はもう活発ではありませんが、依然として我々が敬意を払うパートナーです。

<VPTeamMembers size="small" :members="honoraryMembers" />

## 一般会員

以下は我々の一般会員で、彼らの参加と貢献も同様に重要で、発展の重要な力です。

<GeneralMembersList />

<style scoped>
@media (max-width: 640px) {
  .vp-doc h2 {
    font-size: 1.5rem;
  }
  
  .VPTeamMembers {
    --vp-members-image-size: 60px;
  }
  
  .VPTeamMembersItem {
    padding: 0.5rem;
  }
  
  .VPTeamMembersItem .profile .name {
    font-size: 1rem;
  }
  
  .VPTeamMembersItem .profile .title {
    font-size: 0.8rem;
  }
  
  .VPTeamMembersItem .profile .desc {
    font-size: 0.8rem;
  }
}
</style>