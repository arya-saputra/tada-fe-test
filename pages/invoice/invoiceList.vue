<template>
  <div>
    <b-row class="justify-content-between py-3">
      <b-col
        md="6"
        sm="6">
        <h3 class="h3">Invoices</h3>
        <small>There are total_num invoices.</small>
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
              <b-dropdown-item href="#">Paid</b-dropdown-item>
              <b-dropdown-item href="#">Pending</b-dropdown-item>
              <b-dropdown-item href="#">Draft</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col
            md="6"
            sm="6">
            <b-button
            pill
            variant="primary"
            size="lg">+ Add Invoice</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="py-1">
      <invoice-card
        :id="20"
        :amount="24000"
        :theme-dark="themeDark"
        status="PENDING"
        name="bahar"
        date="20 Nov 2022" />
    </b-row>
  </div>
</template>
<script>
import invoiceCard from '~/components/invoiceCard';
export default {
  props: {
    themeDark: {
      type: Boolean,
    }
  },
  components: {
    invoiceCard,
  }
}
</script>
