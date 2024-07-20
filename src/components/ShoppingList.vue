<template>
  <ul>
    <li v-for="item in ShoppingListItems" :key="item.id">
      <input type="number" :value="item.amount" />
      <input type="text" :value="item.name" />
      <input type="checkbox" />
    </li>
  </ul>
  <Dropdown />
</template>

<script>
import Dropdown from "./Dropdown.vue";

export default {
  name: "ShoppingList",
  components: {
    Dropdown,
  },
  props: {
    ShoppingListItems: Array,
  },
};
</script>
