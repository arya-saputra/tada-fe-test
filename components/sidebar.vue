<template>
  <div :class="{
    'sidebar-container bg-side-dark height-100': theme_dark,
    'sidebar-container bg-side-light height-100': !theme_dark,
   }">
    <div class="logo-container">
      <tadalogo/>
    </div>
    <div class="menu-container">
      <div
        class="px-2 py-3 d-flex align-items-center justify-content-center"
        @click="switchTheme">

        <img
          v-if="theme_dark"
          src="~/static/day.svg" width="50%" />
        <img
          v-else
          src="~/static/night.svg" width="50%" />
      </div>
      <hr :class="{
        'border-light': theme_dark,
        'border-dark': !theme_dark,
      }">
      <div class="px-2 py-3 d-flex align-items-center justify-content-center">
        <b-avatar :src="avatarImg"></b-avatar>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('theme', ['theme_dark']),
    avatarImg() {
      return require('~/static/avatar.png');
    },
  },
  methods: {
    ...mapActions('theme', ['setDarkNow', 'setLightNow']),
    switchTheme() {
      if (this.theme_dark) {
        this.setLightNow();
      } else {
        this.setDarkNow();
      }
    }
  }
}
</script>
<style scoped>
.bg-side-dark {
  background: #4f4f4f;
}

.bg-side-light {
  background: #dfdfdf;
}

.sidebar-container {
  align-items: stretch;
  flex-wrap: wrap;
  position: relative;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
}

.height-100 {
  height: 100vh;
}

.logo-container {
  background: rgb(146,119,255);
  background: linear-gradient(0deg, rgba(146,119,255,1) 45%, rgba(117,86,236,1) 46%);
  width: 100%;
  height: 10%;
  padding: 20px 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-container {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
