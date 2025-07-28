<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

interface Props {
  navigationItems: NavigationMenuItem[]
}

defineProps<Props>()

const isOpen = defineModel<boolean>('open', { default: false })

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <USlideover
    v-model:open="isOpen"
    side="right"
  >
    <template #header>
      <div class="flex items-center justify-between w-full">
        <span class="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
        <UButton
          variant="ghost"
          color="neutral"
          size="sm"
          square
          aria-label="Close mobile menu"
          @click="closeMenu"
        >
          <UIcon
            name="i-lucide-x"
            class="size-4"
          />
        </UButton>
      </div>
    </template>

    <template #body>
      <nav class="flex flex-col space-y-1">
        <ULink
          v-for="item in navigationItems"
          :key="item.label"
          :to="item.to"
          class="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          @click="closeMenu"
        >
          <UIcon
            v-if="item.icon"
            :name="item.icon"
            class="size-4"
          />
          <span class="font-medium">{{ item.label }}</span>
        </ULink>
      </nav>
    </template>

    <template #footer>
      <div class="text-center">
        <UButton
          label="Get Started"
          color="primary"
          variant="solid"
          size="lg"
          block
          @click="closeMenu"
        />
      </div>
    </template>
  </USlideover>
</template>