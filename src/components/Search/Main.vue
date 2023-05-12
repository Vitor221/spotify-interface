<template>
  <main class="flex-1 p-6">

      <SearchBar />
        <h1 class="font-semibold text-4xl mt-10">Your top genres</h1>

        <TopGenres />

        <h2 class="font-semibold text-2xl mt-10">Browse all</h2>

        <BrowseAll />
        
      </main>
</template>

<script>
import SearchBar from '@/components/Search/SearchComponents/SearchBar.vue'
import TopGenres from '@/components/Search/SearchComponents/TopGenres.vue'
import BrowseAll from '@/components/Search/SearchComponents/BrowseAll.vue'

export default {
  name: 'Main',
  components: {
    SearchBar,
    TopGenres,
    BrowseAll
  }
}
</script>