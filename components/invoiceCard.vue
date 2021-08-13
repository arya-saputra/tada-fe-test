<template>
  <b-card
    :class="{
      'mb-2 w-100 bg-dark-card': themeDark,
      'mb-2 w-100 bg-light-card': !themeDark,
    }"
    @click="gotoPage"
  >
    <b-card-text :class="{
      'text-dark': !themeDark,
      'text-light': themeDark,
    }">
      <b-row>
        <b-col
          md="2"
          sm="6"
          class="d-flex align-items-center">
          #{{ id }}
        </b-col>
        <b-col
          md="2"
          sm="6"
          class="d-flex align-items-center justify-content-center">
          {{ date }}
        </b-col>
        <b-col
          md="2"
          sm="6"
          class="d-flex align-items-center justify-content-center">
          {{ name }}
        </b-col>
        <b-col
          md="3"
          sm="6"
          class="d-flex align-items-center justify-content-center">
          {{ addCommas(amount) }}
        </b-col>
        <b-col
          md="2"
          sm="6"
          class="d-flex align-items-center">
          <b-alert
          :variant="status=='PAID'? 'success':
          status=='PENDING'? 'warning':'light'"
          class="my-0"
          show>• {{ status }}</b-alert>
        </b-col>
        <b-col
          md="1"
          sm="6"
          class="d-flex align-items-center justify-content-center">
          >
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
    id: {
      type: Number,
    },
    date: {
      type: String,
    },
    name: {
      type: String,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
    },
  },
  methods: {
    gotoPage() {
      this.$router.push('/invoice/detail?id=' + this.id)
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
.bg-dark-card {
  background: #333;
}

.bg-light-card {
  background: rgb(237, 237, 237);
}
</style>
