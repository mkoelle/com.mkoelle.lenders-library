<template>
  <div>
    <nav class="navbar topNav">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src="../assets/logo.png" width="28" height="28" />
            <p class="title is-3 nav-title">Library</p>
          </a>
          <div
            class="navbar-burger burger"
            @click="showNav = !showNav"
            data-target="topNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="topNav" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-start">
            <a class="navbar-item" href="#">Home</a>
            <a class="navbar-item" href="#">Tabs</a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-small">
                    <span class="icon">
                      <i class="fa fa-user-plus"></i>
                    </span>
                    <span>Register</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-small login">
                    <span class="icon">
                      <i class="fa fa-user"></i>
                    </span>
                    <span>Login</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar is-hidden-mobile is-hidden-tablet-only">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-active" href="#">Popular</a>
            <a class="navbar-item" href="#">Recent</a>
            <a class="navbar-item" href="#">Rising</a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <input
                class="input"
                type="search"
                placeholder="Search library..."
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      showNav: false
    };
  }
});
</script>

<style scoped lang="scss">
.login {
  color: hsl(57, 55%, 60%);
  border-color: hsl(57, 55%, 60%);
}

.topNav {
  border-top: 5px solid hsl(57, 46%, 50%);
  .container {
    border-bottom: 1px solid #e6eaee;
  }
}
.title {
  padding-left: 10px;
}
</style>
