<template>
  <Navbar />
  <ShoppingList :ShoppingListItems="ShoppingListItems" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ShoppingList from "./components/ShoppingList.vue";

export default {
  components: {
    Navbar,
    ShoppingList,
  },
  data() {
    return {
      ShoppingListItems: [
        { id: 1, name: "Milk", amount: 1 },
        { id: 2, name: "Bread", amount: 2 },
        { id: 3, name: "Cheese", amount: 3 },
      ],
    };
  },
};
</script>
