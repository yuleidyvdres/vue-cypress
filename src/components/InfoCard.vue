<template>
  <v-card id="info-card" class="mx-auto" max-width="344">
    <v-card-title id="title-card">{{ title }}</v-card-title>
    <v-card-text id="title-text">{{ text }}</v-card-text>
    <v-card-actions id="title-actions">
      <v-btn @click="action">{{ buttonText }}</v-btn>
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