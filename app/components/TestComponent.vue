<script lang="ts" setup>
interface Props {
  text: string
  textWithDefault?: string
}

const props = withDefaults(defineProps<Props>(), {
  textWithDefault: 'Default Value',
})

console.info('COMPONENT PROPS: ', props)
</script>

<template>
  <div>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<style>

</style>
