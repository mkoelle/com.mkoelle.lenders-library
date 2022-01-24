<template>
  <div id="app" class="main">
    <Navbar></Navbar>
    <HomePage />
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Footer footer footer
            <br />
            <a href="#">Terms of service</a> |
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Navbar from "@/navigation/Navbar.vue";
import HomePage from "@/home/HomePage.vue";

export default defineComponent({
  components: {
    Navbar,
    HomePage
  }
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
.container .columns {
  margin: 1rem 0;
}
.media-left img {
  border-radius: 20%;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.section {
  flex: 1;
}
</style>
