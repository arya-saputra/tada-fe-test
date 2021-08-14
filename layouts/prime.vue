<template>
  <div>
    <div :class="{
      'is-desktop d-flex bg-dark text-light ': theme_dark,
      'is-desktop d-flex bg-white text-dark ': !theme_dark
    }">
      <div class="is-desktop">
        <sidebar />
      </div>
      <div class="main-container">
        <nuxt/>
      </div>
    </div>
    <div :class="{
      'is-mobile d-flex bg-dark text-light flex-wrap': theme_dark,
      'is-mobile d-flex bg-white text-dark flex-wrap': !theme_dark
    }">
      <div  class="is-mobile w-100 ml-0 mr-0">
        <mobilebar />
      </div>
      <div class="main-container">
        <nuxt/>
      </div>
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
