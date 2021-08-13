<template>
  <div class="side-modal">
    <div class="side-modal-container">
      <div :class="open? 'side-modal-content side-modal-open':'side-modal-content side-modal-close'">
        <invoice-form :theme-dark="themeDark" />
      </div>
    </div>
  </div>
</template>
<script>
import invoiceForm from '~/components/invoiceForm';
export default {
  components: {
    invoiceForm
  },
  props: {
    themeDark: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    }
  },
}
</script>
<style scoped>
.side-modal {
  height: 100vh;
  position: fixed;
  width: 40%;
  top:0;
  overflow: hidden;
}

.side-modal-container {
  position: relative;
}

.side-modal-content {
  height: 100vh;
  position: absolute;
  width: 100%;
  top:0;
  left: -110%;
}

.side-modal-open {
  animation-name: opener;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.side-modal-close {
  left: -110%;
  animation-name: closer;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes opener {
  0%{
    left:-110%;
  }
  100%{
    left:0%;
  }
}

@keyframes closer {
  0%{
    left:0%;
  }
  100%{
    left:-110%;
  }
}
</style>
