<template>
  <nav class="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
      <Playlists :musicsNames="'Mr. Morale & the Big Steppers'"
        class="text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer" />
      <Playlists :musicsNames="'Damn'" class="text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer" />
      <Playlists :musicsNames="'Castelos & Ruínas'" class="text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer" />
      <Playlists :musicsNames="'Gigantes'" class="text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer" />
    </nav>
</template>

<script>
import Playlists from '@/components/Playlists/Playlists.vue'

export default {
  name: 'PlaylistSide',
  components: {
    Playlists
  }
}
</script>