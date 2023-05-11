<template>
  <div class="grid grid-cols-3 gap-4 mt-4">
    <div
      class="bg-white/5 rounded group flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors">
      <PlaylistsImage
        :imgAlbum="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'" />
      Mr. Morale & the Big Steppers

      <button
        class="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <PlayButton />
      </button>
    </div>
    <div
      class="bg-white/5 group rounded flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors">
      <PlaylistsImage :imgAlbum="'https://akamai.sscdn.co/letras/360x360/albuns/a/4/3/f/510581465556821.jpg'" />
      Castelos & Ruínas
      <button
        class="w-12 h-12 group flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <PlayButton />
      </button>
    </div>
    <div
      class="bg-white/5 group rounded flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors">
      <PlaylistsImage :imgAlbum="'https://akamai.sscdn.co/uploadfile/letras/albuns/b/1/0/6/671611541442093.jpg'" />
      Gigantes
      <button
        class="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <PlayButton />
      </button>
    </div>
    <div
      class="bg-white/5 group rounded flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors">
      <PlaylistsImage
        :imgAlbum="'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2014/11/criolo-convoque-seu-buda-capa.jpg'" />
      Convoque seu Buda
      <button
        class="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <PlayButton />
      </button>
    </div>
    <div
      class="bg-white/5 group rounded flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors">
      <PlaylistsImage
        :imgAlbum="'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Beyonc%C3%A9_-_Beyonc%C3%A9.svg/1200px-Beyonc%C3%A9_-_Beyonc%C3%A9.svg.png'" />
      Beyoncé
      <button
        class="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <PlayButton />
      </button>
    </div>
    <div
      class="bg-white/5 group rounded flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors">
      <PlaylistsImage :imgAlbum="'https://m.media-amazon.com/images/I/91AbZ7RgrEL._AC_SL1500_.jpg'" />
      Ctrl
      <button
        class="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
        <PlayButton />
      </button>
    </div>
  </div>
</template>

<script>
import PlayButton from '@/components/icons/PlayButton.vue'
import PlaylistsImage from '@/components/Playlists/PlaylistsImage.vue'

export default {
  name: 'ShowPlaylist',
  components: {
    PlayButton,
    PlaylistsImage
  }
}
</script>