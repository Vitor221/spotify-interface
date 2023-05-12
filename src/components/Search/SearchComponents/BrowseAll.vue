<template>
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
</template>

<script>
import SvgPodcasts from '@/components/img/SvgPodcasts.vue'
import SvgMadeForYou from '@/components/img/SvgMadeForYou.vue'
import SvgCharts from '@/components/img/SvgCharts.vue'
import SvgNewReleases from '@/components/img/SvgNewReleases.vue'
import SvgDiscover from '@/components/img/SvgDiscover.vue'
import SvgConcerts from '@/components/img/SvgConcerts.vue'

export default {
  name: 'BrowseAll',
  components: {
    SvgPodcasts,
    SvgMadeForYou,
    SvgCharts,
    SvgNewReleases,
    SvgDiscover,
    SvgConcerts
  }
}
</script>