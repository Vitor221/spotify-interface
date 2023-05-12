<template>
  <div class="h-screen flex flex-col">

    <div class="flex flex-1">
      <SideBar />

      <Main />
    </div>



    <Footer />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Footer from '@/components/Footer.vue'
import Main from '@/components/Search/Main.vue'

export default {
  name: 'Search',
  components: {
    SideBar,
    Footer,
    Main,
  }
}
</script>