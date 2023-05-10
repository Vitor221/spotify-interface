<template>
  <div>
    <img :src="imgCards" alt="">
  </div>
</template>

<script>
export default {
  name: 'PlaylistImageCard',
  props: {
    imgCards: String
  }
}
</script>