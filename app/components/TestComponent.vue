<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

interface Props {
  text: string
  textWithDefault?: string
}

const props = withDefaults(defineProps<Props>(), {
  textWithDefault: 'Default Value',
})

// VueUse clipboard integration
const { copy, copied, isSupported } = useClipboard()

const copyText = async () => {
  await copy(props.text)
}

console.info('COMPONENT PROPS: ', props)
</script>

<template>
  <div class="space-y-4 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
    <div>
      <p class="text-lg font-medium">
        {{ text }}
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Default: {{ textWithDefault }}
      </p>
    </div>

    <!-- VueUse Clipboard Demo -->
    <div
      v-if="isSupported"
      class="space-y-2"
    >
      <UButton
        :label="copied ? 'Copied!' : 'Copy Text'"
        :color="copied ? 'neutral' : 'primary'"
        variant="outline"
        size="sm"
        :icon="copied ? 'i-lucide-check' : 'i-lucide-copy'"
        @click="copyText"
      />
      <p class="text-xs text-gray-500">
        Click to copy "{{ text }}" to clipboard
      </p>
    </div>

    <div
      v-else
      class="text-red-500 text-sm"
    >
      Clipboard API not supported in this browser
    </div>
  </div>
</template>

<style>
</style>
