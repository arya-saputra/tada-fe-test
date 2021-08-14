<template>
  <section>
    <div
      :class="{
        'text-dark': !theme_dark,
        'text-light': theme_dark,
      }">
      <invoice-list :theme-dark="theme_dark" />
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex';
import invoiceList from '~/pages/invoice/invoiceList.vue';

export default {
  layout: 'prime',
  components: {
    invoiceList,
  },
  computed: {
    ...mapState('theme', ['theme_dark'])
  },
  methods: {
  },
}
</script>
<style>
.w-100 {
  width: 100%;
}

.no-margin {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.no-padding {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
</style>
