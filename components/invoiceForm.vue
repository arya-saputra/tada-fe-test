<template>
  <div :class="{
    'text-light bg-dark form-inv px-2 py-3':themeDark,
    'text-dark bg-light form-inv px-2 py-3':!themeDark,
  }">
  <h3 class="ml-3 mt-4">{{ title }}
    <span v-if="id">{{ `# ${id}` }}</span>
    <span v-else>New</span>
  </h3>

  <!-- BILL FROM -->
  <b-row class="m-0 px-3 justify-content-between">
    <b-col
      md="12"
      sm="12"
      class="pl-0 pr-0 mt-3">
      <h6 class="text-primary">Bill From</h6>
    </b-col>
    <b-col
      md="12"
      sm="12"
      class="pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="Street Address"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataFrom.address"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="3"
      sm="12"
      class="pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="City"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataFrom.city"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="3"
      sm="12"
      class="pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="Zip Code"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataFrom.zip"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="3"
      sm="12"
      class="pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="Country"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataFrom.country"
          trim></b-form-input>
      </b-form-group>
    </b-col>
  </b-row>
  <!-- BILL TO -->
  <b-row  class="m-0 px-3 justify-content-between">
    <b-col
      md="12"
      sm="12"
      class="mt-3 pl-0 pr-0">
      <h6 class="text-primary">Bill To</h6>
    </b-col>
    <b-col
      md="12"
      sm="12"
      class="pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="Client's Name"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataTo.name"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="12"
      sm="12"
      class="pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="Client's Email"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataTo.email"
          trim></b-form-input>
      </b-form-group>
    </b-col>
     <b-col
      md="12"
      sm="12"
      class="pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="Street Address"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataTo.address"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="3"
      sm="12"
      class="pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="City"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataTo.city"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="3"
      sm="12"
      class="pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="Zip Code"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataTo.zip"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="3"
      sm="12"
      class="pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="Country"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataTo.country"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="6"
      sm="12"
      class="pl-0">
      <div>
        <label for="datepicker-invalid">Invoice Date</label>
        <b-form-datepicker id="datepicker-invalid" :class="themeDark? 'bg-dark text-light mb-2':'bg-light text-dark mb-2'" dark v-model="dataTo.date"></b-form-datepicker>
      </div>
    </b-col>
    <b-col
      md="6"
      sm="12"
      class="pr-0">
      <div>
        <label for="datepicker-invalid">Payment Terms</label>
        <b-form-select v-model="dataTo.terms" :options="options" :class="themeDark? 'bg-dark text-light mb-2':'bg-light text-dark mb-2'"></b-form-select>
      </div>
    </b-col>
    <b-col
      md="12"
      sm="12"
      class="mt-2 pl-0 pr-0">
      <b-form-group
        id="fieldset-1"
        label="Project Description"
        label-for="input-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="dataTo.project"
          trim></b-form-input>
      </b-form-group>
    </b-col>
  </b-row>

  <h4 class="ml-3 mt-4 text-secondary">Item List</h4>
   <b-row class="m-0 px-3 justify-content-between">
    <b-col
      md="3"
      sm="12"
      class="mt-3 pl-0 pr-0">
      <p>Item Name</p>
    </b-col>
    <b-col
      md="2"
      sm="12"
      class="mt-3 pl-0 pr-0">
      <p>Qty</p>
    </b-col>
    <b-col
      md="4"
      sm="12"
      class="mt-3 pl-0 pr-0">
      <p>Price</p>
    </b-col>
    <b-col
      md="3"
      sm="12"
      class="mt-3 pl-0 pr-0">
      <p>Total</p>
    </b-col>
   </b-row>
   <b-row v-for="(item, key) in list" :key="key" class="m-0 px-3 justify-content-between">
    <b-col
      md="3"
      sm="12"
      class="mt-1 pl-0 ">
      <b-form-group
        id="fieldset-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="item.name"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="2"
      sm="12"
      class="mt-1 pl-0">
       <b-form-group
        id="fieldset-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="item.qty"
          @keyup="item_idx = key"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="3"
      sm="12"
      class="mt-1 pl-0">
      <b-form-group
        id="fieldset-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="item.price"
          trim
          @keyup="item_idx = key"></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="3"
      sm="12"
      class="mt-1 pl-0">
      <b-form-group
        id="fieldset-1"
        :class="{
          'text-light':themeDark,
          'text-dark':!themeDark,
        }"
      >
        <b-form-input
          :class="!themeDark? 'text-dark bg-light':'text-light bg-dark'"
          id="input-1"
          size="md"
          round-size="md"
          v-model="item.total"
          trim
          disabled></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="1"
      sm="12"
      class="mt-1 pl-0 pr-0">
      <p>X</p>
    </b-col>
   </b-row>

   <b-row  class="m-0 px-3 justify-content-between">
     <b-button block pill :variant="themeDark? 'outline-light':'outline-dark'" @click="addItem">Add Item +</b-button>
   </b-row>

   <b-row  class="mx-0 mt-5 px-3 justify-content-end">
     <b-button pill class="mr-2" @click="close">Cancel</b-button>
     <b-button pill variant="primary" @click="save">Save Changes</b-button>
   </b-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: {
    themeDark: {
      type: Boolean,
    },
    id: {
      type: String,
    },
  },
  data() {
    return {
      title: 'Add',
      options: [
        { text: '3 Days', value: 3 },
        { text: '10 Days', value: 10 },
        { text: '30 Days', value: 30 },
        { text: '40 Days', value: 40 },
      ],
      dataFrom: {
        address: '',
        city: '',
        zip: '',
        country: '',
      },
      dataTo: {
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        date: '',
        terms: '',
        project: '',
      },
      list: [
        {
          name:'',
          qty: '',
          price: '',
          total: '',
        }
      ],
      status: 'DRAFT',
      item_idx: null,
      invoice_list: [],
      total: 0,
      index: null,
    }
  },
  watch: {
    id(val) {
      if (val) {
        this.title = 'Edit';
        const invoice_list = JSON.parse(localStorage.invoice_list);
        const vm = this;
        const details = invoice_list.find(item => item.id === vm.id);
        this.index = invoice_list.findIndex(item => item.id === vm.id);
        this.list = details.item_list;
        this.dataTo = details.data_to;
        this.dataFrom = details.data_from;

      } else {
        this.title = 'Add';
      }
    },
    list: {
      handler: function(val) {
        const vm = this;
        vm.total = 0;
        if (this.item_idx!=null) {
          val[this.item_idx].total = val[this.item_idx].qty * val[this.item_idx].price;

        }
        val.map((item) => {
          vm.total += item.qty * item.price;
        })
      },
      deep: true,
    },
  },
  mounted() {
    if (!localStorage.invoice_list) {
      const arr = JSON.stringify(this.invoice_list);
      localStorage.invoice_list = arr;
    } else {
      this.invoice_list = JSON.parse(localStorage.invoice_list);
    }
  },
  methods: {
    ...mapActions('invoice', ['loadInvoiceData']),
    addItem() {
      this.list.push(
        {
          name:'',
          qty: '',
          price: '',
          total: '',
        }
      );
    },
    close() {
      this.$emit('close');
    },
    save() {
      let id;
      if (this.id) {
        id = this.id;
        const obj = {
          data_from: this.dataFrom,
          data_to: this.dataTo,
          id: id,
          item_list: this.list,
          status: this.status,
          total: this.total,
        };

        this.invoice_list[this.index] = obj;
      } else {
        id = this.randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        const obj = {
          data_from: this.dataFrom,
          data_to: this.dataTo,
          id: id,
          item_list: this.list,
          status: this.status,
          total: this.total,
        };

        this.invoice_list.push(obj);
      }


      localStorage.invoice_list = JSON.stringify(this.invoice_list);
      this.loadInvoiceData();
      this.$emit('close');

    },
    randomString(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
    },
  },
}
</script>
<style scoped>
.form-inv input.bg-dark, .form-inv select.bg-dark, .form-inv.bg-dark .b-form-datepicker {
  background: #333 !important;
  border: none !important;
}
</style>
