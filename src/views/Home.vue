<template>
  <div class="home">
    <info-card title="Example 1" text="Lorem ipsum" button-text="Ok" @action="clickAction"></info-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InfoCard from '@/components/InfoCard.vue'

@Component({
  components: {
    InfoCard
  }
})
export default class Home extends Vue {
  clickAction(): void {
    console.log("click");
  }
}
</script>
