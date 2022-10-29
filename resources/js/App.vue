
<template>
  <component :is="layout" />
</template>

<script>
import AuthLayout from "./layouts/AuthLayout.vue";
import StandardLayout from "./layouts/StandardLayout.vue";

export default {
  components: {
    AuthLayout,
    StandardLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {

      // set layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout
      } else {
        this.layout = "StandardLayout" // this is default layout if route meta is not set
      }
    },
  },
};
</script>