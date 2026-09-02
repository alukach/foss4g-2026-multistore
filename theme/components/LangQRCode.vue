<script setup lang="ts">
import { computed } from 'vue'
import CurrentUrlQRCode from './CurrentUrlQRCode.vue'

// Links the title slide to the same deck in the other language.
// The English build is served at `/`, the Japanese one at `/ja/` (see the
// `--base` flag in package.json's build script), so BASE_URL tells us which
// deck we are currently in.
withDefaults(defineProps<{ width?: number; dark?: boolean }>(), {
  width: 80,
  dark: true, // white dots, for use on the decorative rectangle
})

const base = import.meta.env.BASE_URL
const isJa = /\/ja\/?$/.test(base)
const label = isJa ? 'English' : '日本語'

const url = computed(() => {
  if (typeof window === 'undefined')
    return ''
  const { origin, hash } = window.location
  const otherBase = isJa
    ? base.replace(/ja\/?$/, '')
    : `${base.replace(/\/?$/, '/')}ja/`
  // hash routing (see routerMode in the deck headmatter): carry the slide over
  return `${origin}${otherBase}${hash}`
})
</script>

<template>
  <div class="lang-qr">
    <CurrentUrlQRCode
      :url="url"
      :width="width"
      :height="width"
      :image="dark ? '/images/logos/symbol--neg-mono@2x.png' : '/images/logos/symbol--pos-mono@2x.png'"
      :dotsOptions="{ type: 'classy-rounded', color: dark ? 'white' : 'black' }"
    />
    <div class="lang-qr-label">{{ label }}</div>
  </div>
</template>

<style scoped>
.lang-qr {
  text-align: center;
  line-height: 1;
}

.lang-qr-label {
  font-family: var(--slidev-font-family-mono, monospace);
  font-size: 10px;
  margin-top: 4px;
  opacity: 0.8;
}
</style>
