<template>
  <div>
    <app-header></app-header>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <nuxt />
      </fade-transition>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>
<style></style>
