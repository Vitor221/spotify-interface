<template>
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
</template>

<script>
import SvgPop from '@/components/img/SvgPop.vue'
import SvgHipHop from '@/components/img/SvgHipHop.vue'
import SvgIndie from '@/components/img/SvgIndie.vue'

export default {
  name: 'TopGenres',
  components: {
    SvgPop,
    SvgHipHop,
    SvgIndie,
  }
}
</script>