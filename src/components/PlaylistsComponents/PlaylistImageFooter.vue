<template>
  <div>
    <img class="w-16 h-16" :src="imgPlaylistFooter" alt="">
  </div>
</template>

<script>
export default {
  name: 'PlaylistImageFooter',
  props: {
    imgPlaylistFooter: String
  }
}
</script>