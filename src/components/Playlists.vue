<template>
  <div>
    <a href="#" v-text="musicsNames"></a>
  </div>
</template>

<script>
export default {
  name: 'Playlists',
  props: {
    musicsNames: String
  }
}
</script>