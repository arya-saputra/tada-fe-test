<template>
  <div>
    <div :class="{
      'sidebar-container bg-side-dark height-100': theme_dark,
      'sidebar-container bg-side-light height-100': !theme_dark,
    }">
      <div class="logo-container" @click="goHome">
        <tadalogo/>
      </div>
      <div class="menu-container">
        <div
          class="px-2 py-3 d-flex align-items-center justify-content-center theme-switcher"
          @click="switchTheme">

          <img
            :class="!theme_dark? 'img-out':'img-in'"
            src="~/static/day.svg" width="30%" />
          <img
            :class="theme_dark? 'img-out':'img-in'"
            src="~/static/night.svg" width="30%" />
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
    },
    goHome() {
      this.$router.push('/');
    },
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
  cursor: pointer;
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

.theme-switcher {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.theme-switcher img{
  position: absolute;
}

.img-out {
  animation-name: out;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
};

.img-in {
  animation-name: in;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
};

@keyframes in {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

@keyframes out {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
