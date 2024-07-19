<template>
  <div class="hidden sm:ml-6 sm:block">
    <div class="flex space-x-4">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a
        href="#"
        class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
        aria-current="page"
        >Dashboard</a
      >
      <a
        href="#"
        class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >Team</a
      >
      <a
        href="#"
        class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >Projects</a
      >
      <a
        href="#"
        class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >Calendar</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarListOfLinks",
};
</script>
