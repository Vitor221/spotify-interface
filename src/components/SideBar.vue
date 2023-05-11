<template>
  <aside class="w-72 bg-zinc-950 p-6">
    <SideNav />

    <PlaylistSide />
  </aside>
</template>

<script>
import SideNav from '@/components/SideBarComponents/SideNav.vue'
import PlaylistSide from '@/components/SideBarComponents/PlaylistSide.vue'


export default {
  name: 'SideBar',
  components: {
    SideNav,
    PlaylistSide
  }
}
</script>