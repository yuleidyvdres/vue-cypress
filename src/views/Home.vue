<template>
  <div class="home">
    <info-card title="Example 1" text="Lorem ipsum" button-text="Ok" @action="clickAction"></info-card>
    <div class="col-6">
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InfoCard from '@/components/InfoCard.vue';
import TodoList from '@/components/TodoList.vue';

@Component({
  components: {
    InfoCard,
    TodoList
  }
})
export default class Home extends Vue {
  clickAction(): void {
    console.log("click");
  }
}
</script>
