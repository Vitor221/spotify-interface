<template>
  <div class="flex items-center gap-2">
      <div class="w-3 h-3 bg-red-500 rounded-full" />
      <div class="w-3 h-3 bg-yellow-500 rounded-full" />
      <div class="w-3 h-3 bg-green-500 rounded-full" />
    </div>
    <nav class="space-y-5 mt-10">
      <router-link to="/" class="flex items-center gap-3 text-sm font-semibold text-zinc-200">
        <HomeIcon />
        Home
      </router-link>
      <router-link to="/search" class="flex items-center gap-3 text-sm font-semibold text-zinc-200">
        <SearchIcon />
        Search
      </router-link>
      <router-link to="/library" class="flex items-center gap-3 text-sm font-semibold text-zinc-200">
        <LibraryIcon />
        Your Library
      </router-link>
    </nav>
</template>

<script>
import HomeIcon from '@/components/icons/HomeIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import LibraryIcon from '@/components/icons/LibraryIcon.vue'

export default {
  name: 'SideNav',
  components: {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
  }
}
</script>