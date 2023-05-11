<template>
  <footer class="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
    <PlayMusic />


    <ReproductionMusic />


    <ToolsMusic />
  </footer>
</template>

<script>
import PlayMusic from '@/components/FooterComponents/PlayMusic.vue'
import ReproductionMusic from '@/components/FooterComponents/ReproductionMusic.vue'
import ToolsMusic from '@/components/FooterComponents/ToolsMusic.vue'

export default {
  name: 'Footer',
  components: {
    PlayMusic,
    ReproductionMusic,
    ToolsMusic
  }
}
</script>