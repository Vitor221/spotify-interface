<template>
  <div class="h-screen flex flex-col">

    <div class="flex flex-1">
      <aside class="w-72 bg-zinc-950 p-6">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 bg-red-500 rounded-full" />
          <div class="w-3 h-3 bg-yellow-500 rounded-full" />
          <div class="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <nav class="space-y-5 mt-10">
          <router-link to="/" class="flex items-center gap-3 text-sm font-semibold text-zinc-200"> 
            <HomeIcon/>
            Home
          </router-link>
          <router-link to="/search" class="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <SearchIcon/>
            Search
          </router-link>
          <router-link to="/library" class="flex items-center gap-3 text-sm font-semibold text-zinc-200"> 
            <LibraryIcon/>
            Your Library
          </router-link>
        </nav>

        <nav class="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
          <Playlists :musicsNames="'Mr. Morale & the Big Steppers'" class="text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer"/>
          <Playlists :musicsNames="'Damn'" class="text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer"/>
          <Playlists :musicsNames="'Castelos & Ruínas'" class="text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer"/>
          <Playlists :musicsNames="'Gigantes'" class="text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer"/>
        </nav>
      </aside>

      <main class="flex-1 p-6">
        <div class="flex items-center gap-3">
          <button class="rounded-full bg-black/40 p-1">
            <ArrowLeft />
          </button>
          <button class="rounded-full bg-black/40 p-1">
            <ArrowRight />
          </button>
        </div>

        <h1 class="font-semibold text-3xl mt-10">Good Afternoon</h1>

        <div class="grid grid-cols-3 gap-4 mt-4">
          <div class="bg-white/5 rounded group flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors" >
            <PlaylistsImage :imgAlbum="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'"/>
            Mr. Morale & the Big Steppers

            <button class="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <PlayButton />
            </button>
          </div>
          <div class="bg-white/5 group rounded flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors" >
            <PlaylistsImage :imgAlbum="'https://akamai.sscdn.co/letras/360x360/albuns/a/4/3/f/510581465556821.jpg'"/>
            Castelos & Ruínas
            <button class="w-12 h-12 group flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <PlayButton />
            </button>
          </div>
          <div class="bg-white/5 group rounded flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors" >
            <PlaylistsImage :imgAlbum="'https://akamai.sscdn.co/uploadfile/letras/albuns/b/1/0/6/671611541442093.jpg'"/>
            Gigantes
            <button class="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <PlayButton />
            </button>
          </div>
          <div class="bg-white/5 group rounded flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors" >
            <PlaylistsImage :imgAlbum="'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2014/11/criolo-convoque-seu-buda-capa.jpg'"/>
            Convoque seu Buda
            <button class="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <PlayButton />
            </button>
          </div>
          <div class="bg-white/5 group rounded flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors" >
            <PlaylistsImage :imgAlbum="'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Beyonc%C3%A9_-_Beyonc%C3%A9.svg/1200px-Beyonc%C3%A9_-_Beyonc%C3%A9.svg.png'"/>
            Beyoncé
            <button class="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <PlayButton />
            </button>
          </div>
          <div class="bg-white/5 group rounded flex items-center gap-4 overflow-hidden cursor-pointer hover:bg-white/10 transition-colors" >
            <PlaylistsImage :imgAlbum="'https://m.media-amazon.com/images/I/91AbZ7RgrEL._AC_SL1500_.jpg'"/>
            Ctrl
            <button class="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <PlayButton />
            </button>
          </div>
        </div>

        <h2 class="font-semibold text-2xl mt-10">Made for Vitor Eduardo</h2>

        <div class="grid grid-cols-8 gap-4 mt-4">
          <div class="bg-white/5 p-3 flex flex-col gap-2 cursor-pointer rounded-md hover:bg-white/10">
            <PlaylistsImageCard class="w-full" :imgCards="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'"/>
            <strong class="font-semibold">Daily Mix 1</strong>
            <span class="text-sm text-zinc-400">BK, Kedrick Lamar, Rihanna and more</span>
          </div>
          <div class="bg-white/5 p-3 flex flex-col gap-2 cursor-pointer rounded-md hover:bg-white/10">
            <PlaylistsImageCard class="w-full" :imgCards="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'"/>
            <strong class="font-semibold">Daily Mix 1</strong>
            <span class="text-sm text-zinc-400">BK, Kedrick Lamar, Rihanna and more</span>
          </div>
          <div class="bg-white/5 p-3 flex flex-col gap-2 cursor-pointer rounded-md hover:bg-white/10">
            <PlaylistsImageCard class="w-full" :imgCards="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'"/>
            <strong class="font-semibold">Daily Mix 1</strong>
            <span class="text-sm text-zinc-400">BK, Kedrick Lamar, Rihanna and more</span>
          </div>
          <div class="bg-white/5 p-3 flex flex-col gap-2 cursor-pointer rounded-md hover:bg-white/10">
            <PlaylistsImageCard class="w-full" :imgCards="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'"/>
            <strong class="font-semibold">Daily Mix 1</strong>
            <span class="text-sm text-zinc-400">BK, Kedrick Lamar, Rihanna and more</span>
          </div>
          <div class="bg-white/5 p-3 flex flex-col gap-2 cursor-pointer rounded-md hover:bg-white/10">
            <PlaylistsImageCard class="w-full" :imgCards="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'"/>
            <strong class="font-semibold">Daily Mix 1</strong>
            <span class="text-sm text-zinc-400">BK, Kedrick Lamar, Rihanna and more</span>
          </div>
        </div>
      </main>

    </div>

    <footer class="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <PlaylistsImageFooter :imgPlaylistFooter="'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'"/>
        <div class="flex flex-col">
          <strong class="font-normal">Count me out</strong>
          <span class="text-xs text-zinc-400">Kendrick Lamar</span>
        </div>
      </div>
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
      <div>
        
      </div>
    </footer>

  </div>
</template>

<script>
import HomeIcon from '@/components/icons/HomeIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import LibraryIcon from '@/components/icons/LibraryIcon.vue'
import ArrowLeft from '@/components/icons/ArrowLeftIcon.vue'
import ArrowRight from '@/components/icons/ArrowRightIcon.vue'
import PlayButton from '@/components/icons/PlayButton.vue'
import ShuffleIcon from '@/components/icons/ShuffleIcon.vue'
import SkipBackIcon from '@/components/icons/SkipBackIcon.vue'
import SkipForwardIcon from '@/components/icons/SkipForwardIcon.vue'
import RepeatIcon from '@/components/icons/RepeatIcon.vue'

import Playlists from '@/components/Playlists/Playlists.vue'
import PlaylistsImage from '@/components/Playlists/PlaylistsImage.vue'
import PlaylistsImageCard from '@/components/Playlists/PlaylistsImageCard.vue'
import PlaylistsImageFooter from '@/components/Playlists/PlaylistImageFooter.vue'

export default {
  name: 'Home',
  data: () => ({
    imgAlbum: 'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'
  }),
  components: {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    Playlists,
    PlaylistsImage,
    ArrowLeft,
    ArrowRight,
    PlayButton,
    PlaylistsImageCard,
    PlaylistsImageFooter,
    ShuffleIcon,
    SkipBackIcon,
    SkipForwardIcon,
    RepeatIcon
  }
}
</script>