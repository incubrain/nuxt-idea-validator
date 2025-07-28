<script setup lang="ts">
const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    icon: 'i-lucide-github',
    to: 'https://github.com',
    target: '_blank',
  },
  {
    label: 'Twitter',
    icon: 'i-lucide-twitter',
    to: 'https://twitter.com',
    target: '_blank',
  },
]
</script>

<template>
  <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <UContainer>
      <div class="py-8 md:py-12">
        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Brand & Description -->
          <div class="space-y-4">
            <div class="text-xl font-bold text-gray-900 dark:text-white">
              Your Brand
            </div>
            <p class="text-gray-600 dark:text-gray-400 max-w-md">
              A simple starter template for Nuxt applications with beautiful UI components.
            </p>
            <div class="flex space-x-3">
              <UButton
                v-for="social in socialLinks"
                :key="social.label"
                variant="ghost"
                color="neutral"
                size="sm"
                square
                :to="social.to"
                :target="social.target"
                :aria-label="social.label"
              >
                <UIcon
                  :name="social.icon"
                  class="size-4"
                />
              </UButton>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <nav class="flex flex-col space-y-2">
              <ULink
                v-for="link in quickLinks"
                :key="link.label"
                :to="link.to"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
              >
                {{ link.label }}
              </ULink>
            </nav>
          </div>

          <!-- Contact Info -->
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-900 dark:text-white">
              Contact
            </h3>
            <div class="space-y-2 text-gray-600 dark:text-gray-400">
              <p>hello@yourcompany.com</p>
              <p>Your Location</p>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              © {{ currentYear }} Your Company. All rights reserved.
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Built with Nuxt & Nuxt UI
            </p>
          </div>
        </div>
      </div>
    </UContainer>
  </footer>
</template>