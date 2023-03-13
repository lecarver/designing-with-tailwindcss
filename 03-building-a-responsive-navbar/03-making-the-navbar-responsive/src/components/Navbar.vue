<template>
  <header class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <img class="h-8" src="img/logo-inverted.svg" alt="Workcation">
      </div>

      <div class="sm:hidden">
        <!-- add @click so that our 'isopen' will switch to true and open the navbar -->
        <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 focus:text-white focus:outline-none hover:text-white">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <!-- Change menu bar icon based on whether it is open or not -->
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
          </svg>
        </button>
      </div>
    </div>
    <!-- if isOpen is true then the navbar shows but is hidden by default -->
    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex">
      <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Trips</a>
      <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">List your property</a>
      <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Message</a>
    </div>
  </header>   
</template>

<script>
export default {
  data() {
    return {
      isOpen:false,
    }
  },
}
</script>
