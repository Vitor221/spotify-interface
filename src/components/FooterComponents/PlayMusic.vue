<template>
  <div class="flex items-center gap-3">
    <PlaylistsImageFooter
      :imgPlaylistFooter="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'" />
    <div class="flex flex-col">
      <strong class="font-normal">Count me out</strong>
      <span class="text-xs text-zinc-400">Kendrick Lamar</span>
    </div>
  </div>
</template>

<script>
import PlaylistsImageFooter from '@/components/Playlists/PlaylistImageFooter.vue'
export default {
  name: 'PlayMusic',
  components: {
    PlaylistsImageFooter
  }
}
</script>