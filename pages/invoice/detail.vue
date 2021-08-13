<template>
   <section>
    <b-container
      :class="{
        'text-dark': !theme_dark,
        'text-light': theme_dark,
      }">
      <b-card
        :class="{
          'mb-4 mt-3 w-100 bg-dark-card': theme_dark,
          'mb-4 mt-3 w-100 bg-light-card': !theme_dark,
        }">
        <b-row class="justify-content-between ">
          <b-col
            md="6"
            sm="12">
            <h3>#XSDJ5A12</h3>
          </b-col>
          <b-col
            md="5"
            sm="12"
            class="d-flex justify-content-end">
            <b-form-group class="mb-0" inline>
              <b-button pill class="mr-2" @click="openEdit=!openEdit">Edit</b-button>
              <b-button pill class="mr-2" variant="danger">Delete</b-button>
              <b-button pill variant="primary">Mark as Paid</b-button>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
      <b-card
        :class="{
          'mb-2 mt-3 w-100 bg-dark-card': theme_dark,
          'mb-2 mt-3 w-100 bg-light-card': !theme_dark,
        }">
        <b-row class="justify-content-between ">
          <b-col
            md="6"
            sm="12"
            class="from">
            Last First Name<br/>
            Nama jalan, nama kota<br/>
            BD1892
          </b-col>
          <b-col
            md="6"
            sm="12"
            class="text-right to">
            nama jalan<br/>
            kota<br/>
            kode pos<br/>
            Negara
          </b-col>
        </b-row>
        <hr :class="{
        'border-light': theme_dark,
        'border-dark': !theme_dark,
        }">
        <b-row class="mt-5 justify-content-between">
          <b-col
            md="6"
            sm="12">
            <p>Project Description</p>
            <h5>lorem</h5>
          </b-col>
          <b-col
            md="5"
            sm="12">
            <p>Sent To</p>
            <h5>lorem</h5>
          </b-col>
          <b-col
            md="6"
            sm="12"
            class="mt-3">
            <p>Due Date</p>
            <h5>lorem</h5>
          </b-col>


          <b-col
            md="12"
            sm="12"
            class="mt-5">
            <p>Item List</p>

            <b-table striped hover :table-variant="theme_dark? 'dark':'light'" :items="items"></b-table>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
    <side-modal :open="openEdit" :theme-dark="theme_dark" />
  </section>
</template>
<script>
import { mapState } from 'vuex';
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
      ]
    }
  },
  computed: {
    ...mapState('theme', ['theme_dark'])
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
