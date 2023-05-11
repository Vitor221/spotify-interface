<template>
  <div class="flex items-center gap-4">
    <MicrophoneIcon />
    <ListIcon />
    <LapTopIcon class="stroke-green-600" />
    <div class="flex items-center gap-2">
      <VolumeIcon />
      <div class="h-1 rounded-full w-24 bg-zinc-600">
        <div class="bg-zinc-200 w-10 h-1 rounded-full"></div>
      </div>
    </div>
    <MaximumIcon />
  </div>
</template>

<script>
import MicrophoneIcon from '@/components/icons/MicrophoneIcon.vue'
import ListIcon from '@/components/icons/ListIcon.vue'
import LapTopIcon from '@/components/icons/LapTopIcon.vue'
import VolumeIcon from '@/components/icons/VolumeIcon.vue'
import MaximumIcon from '@/components/icons/MaximumIcon.vue'

export default {
  name: 'ToolsMusic',
  components: {
    MicrophoneIcon,
    ListIcon,
    LapTopIcon,
    VolumeIcon,
    MaximumIcon,
  }
}
</script>