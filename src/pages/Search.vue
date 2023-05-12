<template>
  <div class="h-screen flex flex-col">

    <div class="flex flex-1">
      <SideBar />

      <main class="flex-1 p-6">
        <div class="flex">
          <NavMusic />
          <div class="ml-5">
            <SearchIcon class="stroke-black w-12 absolute z-10 top-9"/>
            <input type="text" class="relative rounded-full pl-14 px-16 p-3 text-black" placeholder="Artists, songs, or podcasts">
          </div>
        </div>

        <h1 class="font-semibold text-4xl mt-10">Your top genres</h1>

        <div class="grid grid-cols-3 gap-4 mt-5">
          <div class="bg-purple-400 relative h-80 rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all">
            <h2 class="text-5xl pl-6 pt-10"><strong>Pop</strong></h2>
            <SvgPop class="absolute right-0 bottom-0 "/>
          </div>

          <div class="bg-amber-600 relative h-80 rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all">
            <h2 class="text-5xl pl-6 pt-10"><strong>Hip Hop</strong></h2>
            <SvgHipHop class="absolute right-0 bottom-0 "/>
          </div>

          <div class="bg-lime-700 relative h-80 rounded-xl cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all">
            <h2 class="text-5xl pl-6 pt-10"><strong>Indie</strong></h2>
            <SvgIndie class="absolute right-0 bottom-0 "/>
          </div>
        </div>

        <h2 class="font-semibold text-2xl mt-10">Browse all</h2>

        <div class="grid grid-cols-6 gap-4 mt-7">
          <div class="bg-lime-700 relative hover:scale-110 duration-300 ease-in-out transition-all ml-4 h-60 rounded-xl cursor-pointer">
            <h2 class="text-2xl pl-6 pt-5"><strong>Podcasts</strong></h2>
            <SvgPodcasts class="absolute right-0 bottom-0 "/>
          </div>

          <div class="bg-blue-950 relative hover:scale-110 duration-300 ease-in-out transition-all ml-4 h-60 rounded-xl cursor-pointer">
            <h2 class="text-2xl pl-6 pt-5"><strong>Made For You</strong></h2>
            <SvgMadeForYou class="absolute right-0 bottom-0 "/>
          </div>

          <div class="bg-purple-400 relative hover:scale-110 duration-300 ease-in-out transition-all ml-4 h-60 rounded-xl cursor-pointer">
            <h2 class="text-2xl pl-6 pt-5"><strong>Charts</strong></h2>
            <SvgCharts class="absolute right-0 bottom-0 "/>
          </div>

          <div class="bg-rose-600 relative hover:scale-110 duration-300 ease-in-out transition-all ml-4 h-60 rounded-xl cursor-pointer">
            <h2 class="text-2xl pl-6 pt-5"><strong>New Releases</strong></h2>
            <SvgNewReleases class="absolute right-0 bottom-0 "/>
          </div>

          <div class="bg-purple-400 relative hover:scale-110 duration-300 ease-in-out transition-all ml-4 h-60 rounded-xl cursor-pointer">
            <h2 class="text-2xl pl-6 pt-5"><strong>Discover</strong></h2>
            <SvgDiscover class="absolute right-0 bottom-0 "/>
          </div>

          <div class="bg-blue-950 relative hover:scale-110 duration-300 ease-in-out transition-all ml-4 h-60 rounded-xl cursor-pointer">
            <h2 class="text-2xl pl-6 pt-5"><strong>Concerts</strong></h2>
            <SvgConcerts class="absolute right-0 bottom-0 "/>
          </div>

          

        </div>
      </main>
    </div>



    <Footer />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Footer from '@/components/Footer.vue'
import NavMusic from '@/components/MainComponents/NavMusic.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import SvgPop from '@/components/img/SvgPop.vue'
import SvgHipHop from '@/components/img/SvgHipHop.vue'
import SvgIndie from '@/components/img/SvgIndie.vue'
import SvgPodcasts from '@/components/img/SvgPodcasts.vue'
import SvgMadeForYou from '@/components/img/SvgMadeForYou.vue'
import SvgCharts from '@/components/img/SvgCharts.vue'
import SvgNewReleases from '@/components/img/SvgNewReleases.vue'
import SvgDiscover from '@/components/img/SvgDiscover.vue'
import SvgConcerts from '@/components/img/SvgConcerts.vue'

export default {
  name: 'Search',
  components: {
    SideBar,
    Footer,
    NavMusic,
    SearchIcon,
    SvgPop,
    SvgHipHop,
    SvgIndie,
    SvgPodcasts,
    SvgMadeForYou,
    SvgCharts,
    SvgNewReleases,
    SvgDiscover,
    SvgConcerts
  }
}
</script>