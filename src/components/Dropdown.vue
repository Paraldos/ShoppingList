<template>
  <div class="dropdown">
    <button class="btn dropdown__btn" @click="onclickHandler">
      Dropdown
      <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </button>
    <div class="dropdown__options {{ open }}">
      <div>Optin 1</div>
      <div>Optin 2</div>
      <div>Optin 3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    onclickHandler() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
.dropdown__options {
  display: none;
}
</style>
