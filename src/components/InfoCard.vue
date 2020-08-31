<template>
  <v-card id="info-card" class="mx-auto" data-test="info-card" max-width="344">
    <v-card-title id="title-card" data-test="title-card">{{ title }}</v-card-title>
    <v-card-text id="title-text" data-test="title-text">{{ text }}</v-card-text>
    <v-card-actions id="title-actions" data-test="title-actions">
      <v-btn @click="action" color="red" data-test="btn-red">{{ buttonText }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class InfoCard extends Vue {
  @Prop({ type: String }) title!: string;
  @Prop({ type: String }) text!: string;
  @Prop({ type: String }) buttonText!: string;

  action(): void {
    this.$emit("action");
  }
}
</script>

<style scoped>

</style>