<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navigationItems: NavigationMenuItem[] = [
  {
    label: 'Home',
    to: '/',
    icon: 'i-lucide-home',
  },
]

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
    <UContainer>
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <ULink
            to="/"
            class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-500 transition-colors"
          >
            Your Brand
          </ULink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <ULink
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.to"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium"
          >
            {{ item.label }}
          </ULink>
        </nav>

        <!-- Desktop CTA + Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <UButton
            label="Get Started"
            color="primary"
            variant="solid"
            size="sm"
            class="hidden md:inline-flex"
          />

          <UButton
            variant="ghost"
            color="neutral"
            size="sm"
            square
            aria-label="Open mobile menu"
            class="md:hidden"
            @click="isMobileMenuOpen = true"
          >
            <UIcon
              name="i-lucide-menu"
              class="size-4"
            />
          </UButton>
        </div>
      </div>
    </UContainer>

    <!-- Mobile Navigation -->
    <NavMobile
      v-model:open="isMobileMenuOpen"
      :navigation-items="navigationItems"
    />
  </header>
</template>