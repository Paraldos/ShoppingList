<template>
  <nav></nav>
</template>

<script>
import NavbarLogo from "./NavbarLogo.vue";
import NavbarListOfLinks from "./NavbarListOfLinks.vue";

export default {
  components: {
    NavbarLogo,
    NavbarListOfLinks,
  },
  name: "Navbar",
};
</script>

<style lang="scss">
nav {
  height: var(--header_height);
  background-color: var(--color_1);
}
</style>
