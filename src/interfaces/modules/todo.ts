import { MutationTree } from "vuex";

export interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodoState {
  todoList: TodoItem[]
}

export interface TodoModule {
  namespaced: boolean,
  state: TodoState,
  mutations: MutationTree<any>
}

