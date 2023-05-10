<template>
  <div>
    <img class="w-24 h-24" :src="imgAlbum" alt="">
  </div>
</template>

<script>
export default {
  props: {
    imgAlbum: String
  }
}
</script>