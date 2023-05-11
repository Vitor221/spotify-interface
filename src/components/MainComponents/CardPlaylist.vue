<template>
  <div class="grid grid-cols-8 gap-4 mt-4">
    <div class="bg-white/5 p-3 flex flex-col gap-2 cursor-pointer rounded-md hover:bg-white/10">
      <PlaylistsImageCard class="w-full"
        :imgCards="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'" />
      <strong class="font-semibold">Daily Mix 1</strong>
      <span class="text-sm text-zinc-400">BK, Kedrick Lamar, Rihanna and more</span>
    </div>
    <div class="bg-white/5 p-3 flex flex-col gap-2 cursor-pointer rounded-md hover:bg-white/10">
      <PlaylistsImageCard class="w-full"
        :imgCards="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'" />
      <strong class="font-semibold">Daily Mix 1</strong>
      <span class="text-sm text-zinc-400">BK, Kedrick Lamar, Rihanna and more</span>
    </div>
    <div class="bg-white/5 p-3 flex flex-col gap-2 cursor-pointer rounded-md hover:bg-white/10">
      <PlaylistsImageCard class="w-full"
        :imgCards="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'" />
      <strong class="font-semibold">Daily Mix 1</strong>
      <span class="text-sm text-zinc-400">BK, Kedrick Lamar, Rihanna and more</span>
    </div>
    <div class="bg-white/5 p-3 flex flex-col gap-2 cursor-pointer rounded-md hover:bg-white/10">
      <PlaylistsImageCard class="w-full"
        :imgCards="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'" />
      <strong class="font-semibold">Daily Mix 1</strong>
      <span class="text-sm text-zinc-400">BK, Kedrick Lamar, Rihanna and more</span>
    </div>
    <div class="bg-white/5 p-3 flex flex-col gap-2 cursor-pointer rounded-md hover:bg-white/10">
      <PlaylistsImageCard class="w-full"
        :imgCards="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'" />
      <strong class="font-semibold">Daily Mix 1</strong>
      <span class="text-sm text-zinc-400">BK, Kedrick Lamar, Rihanna and more</span>
    </div>
  </div>
</template>

<script>
import PlaylistsImageCard from '@/components/Playlists/PlaylistsImageCard.vue'

export default {
  name: 'CardPlaylist',
  components: {
    PlaylistsImageCard
  }
}
</script>