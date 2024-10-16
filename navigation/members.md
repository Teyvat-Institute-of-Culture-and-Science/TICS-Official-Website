---
sidebar: true
---

# 成员列表
文：流云 澄 

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import GeneralMembersList from '../.vitepress/theme/components/GeneralMembersList.vue'

const members = [
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1165355565&s=100',
    name: '暮至长虹',
    title: '社长',
    desc: '2024年7月加入原提教社，进入编辑部，后担任常务社员；在此期间曾参加常务理事会多项重要工作，作出一定贡献。同年7月末担任第二任社长，统领全社。担任社长以来，先后领导全社、全院开展多项重要工作，领导召开提瓦特文化科学研究院常务理事会第一次全体会议，组织完成"组院改革"，为后续全院发展奠定重要基础，为全院作出重要贡献。',
    links: [
      { icon: 'github', link: 'https://github.com/username' },
      { icon: 'twitter', link: 'https://twitter.com/username' }
    ]
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3427651720&s=100',
    name: 'WhoTao',
    title: '副/代理院长，运营宣传部部长',
    desc: '2024年7月加入原提教社，后担任副社长。提瓦特文化科学研究院运营宣传部部长，主要负责管理技术部门，为全院提供基本技术支持。现担任副院长、代理院长，并掌管全院的财务工作。舍己为业、廉洁奉公，是全院事业的大功臣，极为重要的领导者。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=2493784767&s=100',
    name: '流云 澄',
    title: '常务理事，运营宣传部成员',
    desc: '2024年7月加入原提教社。在2024年7月14日"两组改革"中被任命为《原学》编写组组长、常务社员。现任部门理事、运营宣传部副部长、《原学》编写组组长，负责新网站的运维，为全提研院作出重要贡献。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3208595591&s=100',
    name: '極光ᰔ',
    title: '常务理事，名誉社长',
    desc: '2024年7月加入原提教社，后担任常务社员。原提瓦特文化科学研究院历史研究院院长，曾主导全院重要项目《提瓦特编年史》的编辑工作。舍己为业、孜孜不倦，是全院的优秀编辑，全院威望极高的领导者，全院事业的大功臣。'
  }
]

const honoraryMembers = [
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1424876464&s=100',
    name: 'phil616',
    title: '原提教社技术部部长',
    desc: '为我社的技术工作做出了重大贡献，是前网站ICP备案的第一责任人，同时无偿搭建官方网站，积极听取社员建议，是我社的重要人才、重大功臣。由于其考研工作与自我的情愿，决定离开原提教社，不再负责技术方面的工作。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=209608405&s=100',
    name: '两袖清风',
    title: '原社长',
    desc: '提瓦特教育出版社原社长、创始人，第一届常务理事会的领导核心。因学业等原因，自我选择离开原提教社。'
  }
]
</script>

## 常务社员

常务社员是对提瓦特文化科学研究院做出重大贡献的成员，他们的努力让社团更加繁荣。

<VPTeamMembers size="small" :members="members" />

## 名誉常务社员及其他

他们曾经做出过重要贡献，如今不再活跃，但依然是我们敬重的伙伴。

<VPTeamMembers size="small" :members="honoraryMembers" />

## 一般社员

以下是我们的一般社员，他们的参与和贡献同样重要，是发展的重要力量。

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