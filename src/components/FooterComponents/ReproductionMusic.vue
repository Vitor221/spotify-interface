<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex items-center gap-6">
      <ShuffleIcon class="text-zinc-200" />
      <SkipBackIcon class="text-zinc-200" />
      <button class="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
        <PlayButton />
      </button>
      <SkipForwardIcon class="text-zinc-200" />
      <RepeatIcon class="text-zinc-200" />
    </div>

    <div class="flex items-center gap-2">
      <span class="text-xs text-zinc-400">0:31</span>
      <div class="h-1 rounded-full w-96 bg-zinc-600">
        <div class="bg-zinc-200 w-40 h-1 rounded-full"></div>
      </div>
      <span class="text-xs text-zinc-400">4:43</span>
    </div>
  </div>
</template>

<script>
import ShuffleIcon from '@/components/icons/ShuffleIcon.vue'
import SkipBackIcon from '@/components/icons/SkipBackIcon.vue'
import SkipForwardIcon from '@/components/icons/SkipForwardIcon.vue'
import RepeatIcon from '@/components/icons/RepeatIcon.vue'
import PlayButton from '@/components/icons/PlayButton.vue'

export default {
  name: 'ReproductionMusic',
  components: {
    ShuffleIcon,
    SkipBackIcon,
    SkipForwardIcon,
    RepeatIcon,
    PlayButton
  }
}
</script>