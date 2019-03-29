<template>
  <div>
    <TheNavbar/>
    <nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variables.scss';

* {
  box-sizing: 'border-box';
}

html {
  font-size: 16px;
  font-family: $main-font;
  scroll-behavior: smooth;
}

body {
  margin: 0;
}
</style>
