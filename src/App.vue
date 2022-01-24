<template>
  <div id="app" class="main">
    <Navbar></Navbar>
    <div class="container">
      <div class="columns">
        <div class="column is-9">
          <div class="box content">
            <article
              class="post"
              v-for="resource in resources"
              :key="resource.name"
            >
              <h4>{{ resource.name }}</h4>
              <div class="media">
                <div class="media-left">
                  <p class="image is-32x32">
                    <img :src="resource.image" />
                  </p>
                </div>
                <div class="media-content">
                  <div class="content">{{ resource.description }}</div>
                  <div class="content">
                    <p>
                      Provided by:
                      <a href="#">@user</a>&nbsp;
                      <span class="tag">Board Game</span>
                    </p>
                  </div>
                </div>
                <div class="media-right">
                  <span class="has-text-grey-light">
                    <i class="fa fa-heart"></i> 1
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="column has-text-centered wip">
          <div class="box wip is-full-height"></div>
        </div>
      </div>
    </div>
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
import { createComponent, ref } from "@vue/composition-api";
import Navbar from "./components/Navbar.vue";
import { data } from "./shared/data";
import { Resource } from "./shared/interfaces";

export default createComponent({
  components: {
    Navbar
  },
  setup() {
    const resources = ref<Resource[]>([]);
    const fetchData = async (): Promise<void> => {
      resources.value = (await data.getResources()) as Array<Resource>;
    };
    fetchData();
    return {
      resources
    };
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
