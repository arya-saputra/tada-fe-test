<template>
  <b-card
    :class="{
      'mb-2 w-100 bg-dark-card shadow': themeDark,
      'mb-2 w-100 bg-light-card shadow': !themeDark,
    }"
    @click="gotoPage"
  >
    <b-card-text :class="{
      'text-dark': !themeDark,
      'text-light': themeDark,
    }">
      <b-row class="is-desktop">
        <b-col
          md="2"
          sm="6"
          class="d-flex align-items-center">
          #{{ details.id }}
        </b-col>
        <b-col
          md="2"
          sm="6"
          class="d-flex align-items-center justify-content-center">
          {{ details.data_to.date }}
        </b-col>
        <b-col
          md="2"
          sm="6"
          class="d-flex align-items-center justify-content-center">
          {{ details.data_to.name }}
        </b-col>
        <b-col
          md="3"
          sm="6"
          class="d-flex align-items-center justify-content-center">
          {{ addCommas(details.total) }}
        </b-col>
        <b-col
          md="2"
          sm="6"
          class="d-flex align-items-center">
          <b-alert
          :variant="details.status=='PAID'? 'success':
          details.status=='PENDING'? 'warning':'light'"
          class="my-0"
          show>• {{ details.status }}</b-alert>
        </b-col>
        <b-col
          md="1"
          sm="6"
          class="d-flex align-items-center justify-content-center">
          >
        </b-col>
      </b-row>
      <b-row class="is-mobile">
        <b-col
          cols="6"
          class="mb-4 text-left">
          #{{ details.id }}
        </b-col>
        <b-col
          cols="6"
          class="mb-4 text-right">
          {{ details.data_to.name }}
        </b-col>
        <b-col
          cols="6"
          class="mt-2 text-left">
          <p class="m-0">{{ details.data_to.date }}</p>
          {{ addCommas(details.total) }}
        </b-col>
        <b-col
          cols="6"
          class="mt-2 text-left">
          <b-alert
          :variant="details.status=='PAID'? 'success':
          details.status=='PENDING'? 'warning':'light'"
          class="my-0 text-center"
          show>• {{ details.status }}</b-alert>
        </b-col>
      </b-row>
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  props: {
    themeDark: {
      type: Boolean,
    },
    details: {
      type: Object,
      default: {},
    },
  },
  methods: {
    gotoPage() {
      this.$router.push('/invoice/detail?id=' + this.details.id)
    },
    addCommas(nStr) {
      nStr += '';
      const x = nStr.split('.');
      let x1 = x[0];
      let x2 = x.length > 1 ? '.' + x[1] : '';
      const rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return '£ ' + x1 + x2 + '.00';
    },
  },
}
</script>
<style scoped>
.card:hover {
  opacity: .8;
  cursor: pointer;
  transform: scale(1.07);
}

.card {
  transition: transform .2s;
}

.bg-dark-card {
  background: #333;
}

.bg-light-card {
  background: rgb(237, 237, 237);
}
</style>
