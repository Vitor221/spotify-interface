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
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  data: () => ({
    imgAlbum: 'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/12/kendrick_lamar_novo_album-7960773.jpg'
  }),
  components: {
    SideBar,
    Main,
    Footer
  }
}
</script>