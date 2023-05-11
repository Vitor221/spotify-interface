<template>
  <main class="flex-1 p-6">
    <NavMusic />

    <h1 class="font-semibold text-3xl mt-10">Good Afternoon</h1>

    <ShowPlaylist />

    <h2 class="font-semibold text-2xl mt-10">Made for Vitor Eduardo</h2>

    <CardPlaylist />
  </main>
</template>

<script>
import NavMusic from "@/components/MainComponents/NavMusic.vue";
import ShowPlaylist from "@/components/MainComponents/ShowPlaylist.vue";
import CardPlaylist from "@/components/MainComponents/CardPlaylist.vue";

export default {
  name: "Main",
  components: {
    NavMusic,
    ShowPlaylist,
    CardPlaylist,
  },
};
</script>
