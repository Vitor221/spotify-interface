<template>
  <div class="flex items-center gap-3">
    <button class="rounded-full bg-black/40 p-1">
      <ArrowLeft />
    </button>
    <button class="rounded-full bg-black/40 p-1">
      <ArrowRight />
    </button>
  </div>
</template>

<script>
import ArrowLeft from '@/components/icons/ArrowLeftIcon.vue'
import ArrowRight from '@/components/icons/ArrowRightIcon.vue'

export default {
  name: 'NavMusic',
  components: {
    ArrowLeft,
    ArrowRight
  }
}
</script>