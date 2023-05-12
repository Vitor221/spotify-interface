<template>
  <div class="flex">
          <NavMusic />
          <div class="ml-5">
            <SearchIcon class="stroke-black w-12 absolute z-10 top-9"/>
            <input type="text" class="relative rounded-full pl-14 px-16 p-3 text-black" placeholder="Artists, songs, or podcasts">
          </div>
        </div>
</template>

<script>
import NavMusic from '@/components/MainComponents/NavMusic.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'

export default {
  name: 'SearchBar',
  components: {
    NavMusic,
    SearchIcon
  }
}
</script>
