<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

// 解析假名和拼音
const parseFurigana = (text) => {
  const parts = []
  const regex = /([^%]+)%((?:<span\s+lang="[^"]+">.*?<\/span>|[\u3040-\u309F\u30A0-\u30FFa-zA-Z\u3400-\u4DBF\u4E00-\u9FFF\u0101\u00E1\u01CE\u00E0\u014D\u00F3\u01D2\u00F2\u0113\u00E9\u011B\u00E8\u012B\u00ED\u01D0\u00EC\u016B\u00FA\u01D4\u00F9\u01D6\u01DA\u01DC\u00FC]+)+)%/g;
  let lastIndex = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        text: text.slice(lastIndex, match.index)
      })
    }

    parts.push({
      type: 'furigana',
      kanji: match[1],
      reading: match[2]
    })

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      text: text.slice(lastIndex)
    })
  }

  return parts
}

// 提取可用于导航的文本
const extractPlainText = (text) => {
  return text.replace(/%[^%]+%/g, '').trim() // 去除注音部分
}
</script>

<template>
  <span class="furigana-container" :aria-hidden="true">
    <template v-for="(part, index) in parseFurigana(text)" :key="index">
      <template v-if="part.type === 'furigana'">
        <ruby>
          {{ part.kanji }}<rt aria-hidden="true">{{ part.reading }}</rt>
        </ruby>
      </template>
      <template v-else>
        {{ part.text }}
      </template>
    </template>
  </span>
</template>

<style scoped>
.furigana-container {
  display: inline-block;
  line-height: 2;
}

ruby {
  display: inline-flex;
  flex-direction: column-reverse;
  vertical-align: bottom;
}

rt {
  display: block;
  font-size: 0.6em;
  text-align: center;
  line-height: 1;
  color: #666;
}
</style>
