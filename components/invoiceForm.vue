<template>
  <div :class="{
    'text-light bg-dark p-2':themeDark,
    'text-dark bg-light p-2':!themeDark,
  }">
  <h3 class="ml-3 mt-4">{{ title }} {{ `# ${id}` }}</h3>

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
          v-model="name"
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
          v-model="name"
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
          v-model="name"
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
          v-model="name"
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
          v-model="name"
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
          v-model="name"
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
          v-model="name"
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
          v-model="name"
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
          v-model="name"
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
          v-model="name"
          trim></b-form-input>
      </b-form-group>
    </b-col>
    <b-col
      md="6"
      sm="12"
      class="pl-0">
      <div>
        <label for="datepicker-invalid">Invoice Date</label>
        <b-form-datepicker id="datepicker-invalid" :class="themeDark? 'bg-dark text-light mb-2':'bg-light text-dark mb-2'" dark></b-form-datepicker>
      </div>
    </b-col>
    <b-col
      md="6"
      sm="12"
      class="pr-0">
      <div>
        <label for="datepicker-invalid">Payment Terms</label>
        <b-form-select v-model="selected" :options="options" :class="themeDark? 'bg-dark text-light mb-2':'bg-light text-dark mb-2'"></b-form-select>
      </div>
    </b-col>
  </b-row>

  <h4 class="ml-3 mt-4 text-secondary">Item List</h4>
   <b-row  class="m-0 px-3 justify-content-between">
    <b-col
      md="4"
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
      md="3"
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
   <b-row  class="m-0 px-3 justify-content-between">
    <b-col
      md="4"
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
          v-model="name"
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
          v-model="name"
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
          v-model="name"
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
          v-model="name"
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
   <b-button block pill variant="outline-light">Add Item</b-button>
  </div>
</template>
<script>
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
      title: 'Add'
    }
  },
  watch: {
    id(val) {
      if (val) {
        this.title = 'Edit';
      } else {
        this.title = 'Add';
      }
    }
  }
}
</script>
