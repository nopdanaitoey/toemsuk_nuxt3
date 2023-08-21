<template>
  <div>
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <a href="#" class="flex items-center py-4 px-2">
                <!-- <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" /> -->
                <span
                  class="font-semibold text-yellow-500 text-lg"
                  @click.prevent="onClickLogo"
                  >Toemsuk</span
                >
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <NuxtLink to="/home">
                <a
                  href=""
                  :class="{
                    'py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300':
                      $route.path !== '/home',
                    'py-4 px-2 text-yellow-500 border-b-4 border-yellow-500 font-semibold':
                      $route.path === '/home',
                  }"
                  >Home</a
                >
              </NuxtLink>
              <NuxtLink to="/services">
                <a
                  :class="{
                    'py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300':
                      $route.path !== '/service',
                    'py-4 px-2 text-yellow-500 border-b-4 border-yellow-500 font-semibold':
                      $route.path === '/service',
                  }"
                  >Services</a
                >
              </NuxtLink>
              <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300"
                >About</a
              >
              <NuxtLink to="/contact">
                <a
                  :class="{
                    'py-4 px-2 text-gray-500 font-semibold hover:text-yellow-500 transition duration-300':
                      $route.path !== '/contact',
                    'py-4 px-2 text-yellow-500 border-b-4 border-yellow-500 font-semibold':
                      $route.path === '/contact',
                  }"
                  >Contact Us</a
                >
              </NuxtLink>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-3">
            <a
              @click.prevent="onClickOpenModal('login')"
              class="cursor-pointer py-2 px-2 font-medium text-gray-500 rounded hover:bg-yellow-500 hover:text-white transition duration-300"
              >Log In</a
            >

            <a
              @click.prevent="onClickOpenModal('register')"
              class="cursor-pointer py-2 px-2 font-medium text-white bg-yellow-500 rounded hover:bg-yellow-400 transition duration-300"
              >Sign Up</a
            >
          </div>
          <div class="md:hidden flex items-center">
            <button
              class="outline-none mobile-menu-button"
              @click="toggleMobileMenu"
            >
              <svg
                class="w-6 h-6 text-gray-500 hover:text-yellow-500"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="mobile-menu md:hidden" v-show="showMenu">
        <ul>
          <li class="active">
            <a
              href="index.html"
              class="block text-sm px-2 py-4 text-white bg-yellow-500 font-semibold"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="block text-sm px-2 py-4 hover:bg-yellow-500 transition duration-300"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="block text-sm px-2 py-4 hover:bg-yellow-500 transition duration-300"
              >About</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="block text-sm px-2 py-4 hover:bg-yellow-500 transition duration-300"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import useModalStore from "@/stores/modal";
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  mounted() {
    console.log("ss", this.$route);
  },
  methods: {
    ...mapActions(useModalStore, ["changeStateAction"]),
    toggleMobileMenu() {
      this.showMenu = !this.showMenu;
    },
    onClickLogo() {
      this.$router.push("/");
    },
    onClickChangePage(v) {
      console.log("sss", v);
      this.$nuxt.$options.router.push(v);
      // this.$router.replace({ path: v });
    },
    async onClickOpenModal(v) {
      await this.changeStateAction(v);
      var modal = document.getElementById("my_modal_1");
      modal.showModal();
    },
  },
};
</script>

<style scoped>
/* Your Tailwind CSS classes and styles here */
</style>
