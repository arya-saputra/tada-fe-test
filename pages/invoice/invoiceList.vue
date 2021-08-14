<template>
  <div>
    <b-container>
      <b-row class="is-desktop justify-content-between py-3">
        <b-col
          md="6"
          sm="6">
          <h3 class="h3">Invoices</h3>
          <small>There are {{ invoice_list.length }} invoices.</small>
        </b-col>
        <b-col
          md="4"
          sm="4">
          <b-row>
            <b-col
              md="6"
              sm="6">
              <b-dropdown
                text="Filter by status"
                variant="outline-primary"
                class="m-2">
                <b-dropdown-item href="#" @click="filter_status=''">Semua</b-dropdown-item>
                <b-dropdown-item href="#" @click="filter_status='PAID'">Paid</b-dropdown-item>
                <b-dropdown-item href="#" @click="filter_status='PENDING'">Pending</b-dropdown-item>
                <b-dropdown-item href="#" @click="filter_status='DRAFT'">Draft</b-dropdown-item>
              </b-dropdown>
            </b-col>
            <b-col
              md="6"
              sm="6">
              <b-button
              pill
              variant="primary"
              class="mt-2"
              @click="addInv">+ Add Invoice</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="is-mobile justify-content-between py-3">
        <b-col
          cols="6">
          <h3 class="h3">Invoices</h3>
          <small>There are {{ invoice_list.length }} invoices.</small>
        </b-col>
        <b-col
          cols="6">
          <b-row>
            <b-col
              md="6"
              sm="6"
              style="float: right">
              <b-dropdown
                text="Filter by status"
                variant="outline-primary"
                class="m-2"
                size="sm"
                style="float: right">
                <b-dropdown-item href="#" @click="filter_status=''">Semua</b-dropdown-item>
                <b-dropdown-item href="#" @click="filter_status='PAID'">Paid</b-dropdown-item>
                <b-dropdown-item href="#" @click="filter_status='PENDING'">Pending</b-dropdown-item>
                <b-dropdown-item href="#" @click="filter_status='DRAFT'">Draft</b-dropdown-item>
              </b-dropdown>
            </b-col>
            <b-col
              md="6"
              sm="6">
              <b-button
              pill
              variant="primary"
              size="sm"
              style="float: right"
              @click="addInv">+ Add Invoice</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="py-1">
        <invoice-card
          v-for="(inv, index) in filteredList"
          :key="index"
          :details="inv"
          :theme-dark="themeDark" />
      </b-row>
    </b-container>
    <side-modal :id="null" :theme-dark="themeDark" :open="openAdd" @close="cancelAdd" />
  </div>
</template>
<script>
import invoiceCard from '~/components/invoiceCard';
import sideModal from '~/components/sideModal';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    invoiceCard,
    sideModal,
  },
  props: {
    themeDark: {
      type: Boolean,
    }
  },
  data() {
    return {
      openAdd: false,
      filter_status: '',
    }
  },
  computed: {
    ...mapState('invoice', ['invoice_list']),
    filteredList() {
      const vm = this;
      let result;

      if (vm.filter_status) {
        const list = this.invoice_list.filter(item => {
          return item.status.toLowerCase() === vm.filter_status.toLowerCase()
        });
        result = list;
      } else {
        result = vm.invoice_list;
      }

      return result;
    },
  },
  mounted() {
    this.loadInvoiceData();
  },
  methods: {
    ...mapActions('invoice', ['loadInvoiceData']),
    addInv() {
      this.openAdd = true;
    },
    cancelAdd() {
      this.openAdd = false;
    },
  }
}
</script>
