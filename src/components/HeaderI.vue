<template>
  <div>
    HeaderI
    {{ usersList }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderI",
  computed: {
    ...mapGetters("users", ["usersList"]),
  },
};
</script>
