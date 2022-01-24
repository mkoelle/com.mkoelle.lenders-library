<template>
  <div class="box content">
    <article class="post" v-for="resource in resources" :key="resource.name">
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
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Resource } from "@/data";

export default defineComponent({
  props: {
    resources: {
      type: Object as PropType<Resource[]>,
      required: true,
    },
  },
});
</script>

<style></style>
