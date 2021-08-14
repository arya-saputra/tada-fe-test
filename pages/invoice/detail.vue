<template>
   <section v-if="details">
    <b-container
      :class="{
        'text-dark': !theme_dark,
        'text-light': theme_dark,
      }">
      <b-card
        :class="{
          'mb-4 mt-3 w-100 bg-dark-card shadow': theme_dark,
          'mb-4 mt-3 w-100 bg-light-card shadow': !theme_dark,
        }">
        <b-row class="justify-content-between ">
          <b-col
            md="6"
            sm="12">
            <h3>#{{ details.id }}</h3>
          </b-col>
          <b-col
            md="5"
            sm="12"
            class="d-flex justify-content-end">
            <b-form-group class="mb-0" inline>
              <b-button pill class="mr-2" @click="openEdit=!openEdit">Edit</b-button>
              <b-button pill class="mr-2" variant="danger" @click="remove()">Delete</b-button>
              <b-button v-if="details.status !== 'PAID'" pill variant="primary" @click="markAsPaid()">Mark as Paid</b-button>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
      <b-card
        :class="{
          'mb-2 mt-3 w-100 bg-dark-card shadow': theme_dark,
          'mb-2 mt-3 w-100 bg-light-card shadow': !theme_dark,
        }">
        <b-row class="justify-content-between ">
          <b-col
            md="6"
            sm="12"
            class="from"
            v-if="details.data_to">
            {{ details.data_to.name }}<br/>
            {{ details.data_to.address }}, {{ details.data_to.city }}<br/>
            {{ details.data_to.zip }} - {{ details.data_to.country }}
          </b-col>
          <b-col
            md="6"
            sm="12"
            class="text-right to"
            v-if="details.data_from">
            {{ details.data_from.address }}<br/>
            {{ details.data_from.city }}<br/>
            {{ details.data_from.zip }} - {{ details.data_from.country }}
          </b-col>
        </b-row>
        <hr :class="{
        'border-light': theme_dark,
        'border-dark': !theme_dark,
        }">
        <b-row class="mt-5 justify-content-between">
          <b-col
            md="6"
            sm="12"
            v-if="details.data_to">
            <p>Project Description</p>
            <h5>{{ details.data_to.project }}</h5>
          </b-col>
          <b-col
            md="5"
            sm="12"
            v-if="details.data_to">
            <p>Sent To</p>
            <h5>{{ details.data_to.email }}</h5>
          </b-col>
          <b-col
            md="6"
            sm="12"
            class="mt-3"
            v-if="details.data_to">
            <p>Due Date</p>
            <h5>{{ details.data_to.date }}</h5>
          </b-col>
          <b-col
            md="5"
            sm="12"
            class="mt-3"
            v-if="details.data_to">
            <p>Status</p>
            <b-alert
              :variant="details.status=='PAID'? 'success':
              details.status=='PENDING'? 'warning':'light'"
              class="my-0"
              show>• {{ details.status }}</b-alert>
          </b-col>


          <b-col
            md="12"
            sm="12"
            class="mt-5">
            <p>Item List</p>

            <b-table striped hover responsive :table-variant="theme_dark? 'dark':'light'" :items="details.item_list">
              <template #cell(price)="data">
                {{ addCommas(data.value) }}
              </template>
              <template #cell(total)="data">
                <b>{{ addCommas(data.value) }}</b>
              </template>
            </b-table>

            <b-card class="mt-5" :bg-variant="theme_dark? 'dark':'white'">
              <b-row>
                <b-col
                  md="8"
                  sm="6"
                  class="h2">Total Amount</b-col>
                <b-col
                  md="4"
                  sm="6"
                  class="h2">{{ addCommas(details.total) }}</b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
    <side-modal :id="id" :open="openEdit" :theme-dark="theme_dark" @close="closeSideModal" />
  </section>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import sideModal from '~/components/sideModal';

export default {
  layout: 'prime',
  components: {
    sideModal,
  },
  data() {
    return {
      openEdit: false,
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ],
      details:{},
      id: '0',
      index: null,
    }
  },
  computed: {
    ...mapState('theme', ['theme_dark']),
    ...mapState('invoice', ['invoice_list']),
  },
  mounted() {
    this.loadData();
  },
  methods: {
    ...mapActions('invoice', ['loadInvoiceData']),
    loadData() {
      this.loadInvoiceData();
      this.id = this.$route.query.id;
      const vm = this;
      this.details = this.invoice_list.find(item => item.id === vm.id);
      this.index = this.invoice_list.findIndex(item => item.id === vm.id);
    },
    closeSideModal() {
      this.openEdit = false;
      this.loadData();
    },
    markAsPaid() {
      this.invoice_list[this.index].status = 'PAID';
      const list = JSON.stringify(this.invoice_list);
      localStorage.invoice_list = list;
      this.loadData();
    },
    remove() {
      this.invoice_list.splice(this.index, 1);
      const list = JSON.stringify(this.invoice_list);
      localStorage.invoice_list = list;
      this.$router.go(-1);
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
  }
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
