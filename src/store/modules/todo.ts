import { TodoItem, TodoModule, TodoState } from "@/interfaces/modules/todo";
import { MutationTree } from "vuex";

export const state: TodoState = {
  todoList: [
    {
      id: 1,
      name: 'Item 1',
      isCompleted: false
    },
    {
      id: 2,
      name: 'Item 2',
      isCompleted: false
    }
  ]
};

export const mutations: MutationTree<any> = {
  toggleCompleteTodoItem(state: TodoState, id: number): void {
    const index: number = state.todoList.findIndex((item: TodoItem) => id === item.id);
    if (index !== -1) {
      state.todoList[index].isCompleted = !state.todoList[index].isCompleted;
    }
  },
  removeTodoItem(state: TodoState, id: number) {
    const index: number = state.todoList.findIndex((item: TodoItem) => id === item.id);
    if (index !== -1) {
      state.todoList.splice(index, 1);
    }
  },
  addTodoItem(state: TodoState, item: TodoItem): void {
    state.todoList.push(item);
  },
  setFactoryState(state: TodoState): void {
    state.todoList = [
      {
        id: 1,
        name: 'Item 1',
        isCompleted: false
      },
      {
        id: 2,
        name: 'Item 2',
        isCompleted: false
      }
    ];
  }
};

export const todo: TodoModule = {
  namespaced: true,
  state,
  mutations
};
