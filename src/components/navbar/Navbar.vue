<template>
  <nav>
    <NavbarListOfLinks />
    <NavbarPlusBtn />
  </nav>
</template>

<script>
import NavbarLogo from "./NavbarLogo.vue";
import NavbarListOfLinks from "./NavbarListOfLinks.vue";
import NavbarPlusBtn from "./NavbarPlusBtn.vue";

export default {
  components: {
    NavbarLogo,
    NavbarListOfLinks,
    NavbarPlusBtn,
  },
  name: "Navbar",
};
</script>

<style lang="scss">
nav {
  position: absolute;
  bottom: 0;
  left: 0;
  height: var(--header_height);
  width: 100%;
  background-color: var(--color_1);
}
</style>
