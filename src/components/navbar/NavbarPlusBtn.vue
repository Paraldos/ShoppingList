<template>
  <div class="navbar__plus-btn">
    <button class="navbar__plus-btn--btn">+</button>
  </div>
</template>

<script>
export default {
  name: "NavbarPlusBtn",
};
</script>

<style lang="scss">
.navbar__plus-btn {
  position: absolute;
  height: 150%;
  aspect-ratio: 1;
  right: 0;
  bottom: 0;
  transform: translate(-20px, 0);
  border-radius: 100px;
  background-color: var(--color_4);

  &--btn {
    position: absolute;
    inset: 0;
    margin: 10px;
    font-size: 4rem;
    color: var(--color_4);
    background-color: var(--color_2);
    border: none;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: var(--color_3);
    }
  }
}
</style>
