<template>
  <div class="dropdown" :class="{ dropdown__active: dropdown_is_active }">
    <button class="btn dropdown__btn" @click="toggle">
      Dropdown
      <font-awesome-icon :icon="['fas', 'chevron-down']" />
    </button>
    <div class="dropdown__options">
      <div class="dropdown__item">Optin 1</div>
      <div class="dropdown__item">Optin 2</div>
      <div class="dropdown__item">Optin 3</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      dropdown_is_active: false,
    };
  },
  props: {
    optionItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggle() {
      console.log("toggle");
      this.dropdown_is_active = !this.dropdown_is_active;
    },
  },
};
</script>

<style>
.dropdown {
  width: fit-content;
}

.dropdown .dropdown__btn svg {
  transform: rotate(0deg);
  transition: transform 0.2s;
}

.dropdown.dropdown__active .dropdown__btn svg {
  transform: rotate(180deg);
}

.dropdown__options {
  width: 150%;
  background-color: var(--color_4);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  opacity: 0;
  transition: all 0.2s;
}

.dropdown__active .dropdown__options {
  opacity: 1;
  transform: translate(0, 10px);
}

.dropdown__item {
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    color: var(--color_4);
    background-color: var(--color_3);
  }
}
</style>
