<template>
  <h1>Hello</h1>
  <Navbar />
  <ShoppingList :ShoppingListItems="ShoppingListItems" />
</template>

<script>
import Navbar from "./components/navbar/Navbar.vue";
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

<style lang="scss">
:root {
  --color_1: #201e43;
  --color_2: #134b70;
  --color_3: #508c9b;
  --color_4: #eeeeee;

  --header_height: 75px;
}

body {
  font-family: "Nunito", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: var(--color_4);
}

.btn {
  background-color: var(--color_2);
  color: var(--color_4);
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  svg {
    margin-left: 10px;
    aspect-ratio: 1;
  }

  &:hover {
    background-color: var(--color_3);
  }
}
</style>
