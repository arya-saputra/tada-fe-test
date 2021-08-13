<template>
  <div :class="{
    'd-flex bg-dark text-light': theme_dark,
    'd-flex bg-white text-dark': !theme_dark
  }">
    <div>
      <sidebar/>
    </div>
    <div class="main-container">
      <nuxt/>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('theme', ['theme_dark'])
  },
  methods: {
  },
}
</script>
<style>
.main-container {
  max-height: 100vh;
  width: 100%;
}
</style>
