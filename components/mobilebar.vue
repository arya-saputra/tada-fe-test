<template>
  <b-row :class="{
      'sidebar-container mx-0 bg-side-dark width-100 justify-content-between': theme_dark,
      'sidebar-container mx-0 bg-side-light width-100 justify-content-between': !theme_dark,
    }">
    <b-col
      cols="2"
      class="logo-container"
      @click="goHome">
      <tadalogo/>
    </b-col>
    <b-col
      cols="4">
      <b-row>
        <b-col
          cols="6">
          <div
            class="d-flex align-items-center justify-content-center px-2 py-3 theme-switcher"
            @click="switchTheme">

            <img
              :class="!theme_dark? 'img-out':'img-in'"
              src="~/static/day.svg" width="100%" />
            <img
              :class="theme_dark? 'img-out':'img-in'"
              src="~/static/night.svg" width="100%" />
          </div>
        </b-col>
        <b-col
          cols="6">
          <div class="menu-container">
            <div class=" py-3 ">
              <b-avatar :src="avatarImg"></b-avatar>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
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

.logo-container {
  background: rgb(146,119,255);
  background: linear-gradient(0deg, rgba(146,119,255,1) 45%, rgba(117,86,236,1) 46%);
  width: 20%;
  padding: 10px 15px;
  border-radius: 0 10px 10px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-container img{
  width: 20%;
}

.theme-switcher {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.img-out {
  animation-name: out;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  display: none;
};

.img-in {
  animation-name: in;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  display: block;
};

@keyframes in {
  0%{
    opacity: 0;
    display: none;
  }
  100%{
    opacity: 1;
    display: block;
  }
}

@keyframes out {
  0%{
    opacity: 1;
    display: block;
  }
  100%{
    opacity: 0;
    display: none;
  }
}
</style>
