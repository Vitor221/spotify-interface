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

        <h2 class="font-semibold text-2xl mt-10">Your top genres</h2>

        <div class="grid grid-cols-3 gap-4 mt-4">
          <div class="bg-purple-400 relative h-80 rounded-xl">
            <h2 class="text-5xl pl-6 pt-10"><strong>Pop</strong></h2>
            <SvgPop class="absolute right-0 bottom-0 "/>
          </div>

          <div>
            <SvgHipHop/>
          </div>

          <div>
            <SvgIndie />
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

export default {
  name: 'Search',
  components: {
    SideBar,
    Footer,
    NavMusic,
    SearchIcon,
    SvgPop,
    SvgHipHop,
    SvgIndie
  }
}
</script>