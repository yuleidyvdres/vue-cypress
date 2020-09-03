<template>
  <v-list data-test="todo-list">
    <v-list-item-group multiple>
      <v-list-item v-for="item of todoList" :key="item.id" data-test="todo-list-item">
        <template v-slot:default="{ active }">
          <v-list-item-action data-test="todo-list-item-action">
            <v-checkbox :input-value="active" @change="toggleCompleteItem(item.id)"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content data-test="todo-list-item-content">
            <v-list-item-title data-test="todo-list-item-title">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapMutations, mapState } from "vuex";
import { TodoItem } from '@/interfaces/modules/todo';

@Component({
  computed: {
    ...mapState('todo', ['todoList'])
  },
  methods: {
    ...mapMutations('todo', ['toggleCompleteTodoItem'])
  }
})
export default class TodoList extends Vue {
  todoList!: TodoItem[];
  toggleCompleteTodoItem!: (id: number) => void;

  toggleCompleteItem(id: number): void {
    this.toggleCompleteTodoItem(id);
  }
}
</script>

<style scoped>

</style>