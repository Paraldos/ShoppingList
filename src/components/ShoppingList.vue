<template>
  <div class="ShoppingList">
    <h1>ShoppingList</h1>
    <Dropdown :optionItems="['Option 1', 'Option 2', 'Option 3']" />
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
  name: "ShoppingList",
  components: {
    Dropdown,
  },
  data() {
    return {};
  },
};
</script>

<style>
.ShoppingList {
  padding: 10px;
}
</style>
