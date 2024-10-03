---
sidebar: true
---

# 团队介绍

本社由一群热爱《原神》的玩家组成，来自中华人民共和国的各地成员，不论学生还是职场人士，都因共同的爱好和方向汇聚在一起。

## 社员列表

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1165355565&s=100',
    name: '暮至长虹',
    title: '社长',
    desc: '2024年7月加入原提教社，进入编辑部，后担任常务社员；在此期间曾参加常务理事会多项重要工作，作出一定贡献。同年7月末担任第二任社长，统领全社。担任社长以来，先后领导全社、全院开展多项重要工作，领导召开提瓦特文化科学研究院常务理事会第一次全体会议，组织完成“组院改革”，为后续全院发展奠定重要基础，为全院作出重要贡献。',
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
    desc: '2024年7月加入原提教社。在2024年7月14日“两组改革”中被任命为《原学》编写组组长、常务社员。现任部门理事、运营宣传部副部长、《原学》编写组组长，负责新网站的运维，为全提研院作出重要贡献。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3208595591&s=100',
    name: '極光ᰔ',
    title: '常务理事，名誉社长',
    desc: '2024年7月加入原提教社，后担任常务社员。原提瓦特文化科学研究院历史研究院院长，曾主导全院重要项目《提瓦特编年史》的编辑工作。舍己为业、孜孜不倦，是全院的优秀编辑，全院威望极高的领导者，全院事业的大功臣。    '
  }
]

const honoraryMembers = [
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=1424876464&s=100',
    name: 'phil616',
    title: '前服务器运营',
    desc: '曾负责社团服务器的运营工作。'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=209608405&s=100',
    name: '两袖清风',
    title: '前社长',
    desc: '曾经领导社团，奠定了基础。'
  }
]
</script>

### 常务社员

常务社员是对提瓦特文化科学研究院做出重大贡献的成员，他们的努力让社团更加繁荣。

::: tip 提示
以下使用VitePress的`<VPTeamMembers>`组件来展示常务社员信息。
:::

<VPTeamMembers size="small" :members="members" />

### 名誉常务社员及其他

他们曾经为社团做出过重要贡献，如今不再活跃，但依然是我们敬重的伙伴。

::: info 信息
以下使用VitePress的`<VPTeamMembers>`组件来展示名誉常务社员信息。
:::

<VPTeamMembers size="small" :members="honoraryMembers" />

::: warning 注意
确保你的VitePress配置正确，并且已经正确导入了所需的组件。
:::