import store from "@/store";
import { NUMBER_OF_TODO_ITEMS } from "../../constants";
import todoItemFixture from "../fixtures/todoItem";

describe('Todo module store', () => {

  describe('Initialization', () => {
    it('todoList state', () => {
      expect(store.state.todo.todoList).toHaveLength(NUMBER_OF_TODO_ITEMS);
    });
  });

  describe('Mutations', () => {
    beforeEach(() => {
      store.commit('todo/setFactoryState');
    });

    it('Add todo item', () => {
      const item = todoItemFixture;
      store.commit('todo/addTodoItem', item);
      const length = store.state.todo.todoList.length;
      expect(store.state.todo.todoList[length - 1]).toBe(item);
    });

    it('Remove todo item', () => {
      store.commit('todo/removeTodoItem', 1);
      expect(store.state.todo.todoList).toHaveLength(NUMBER_OF_TODO_ITEMS - 1);
    });

    it('Complete todo item', () => {
      store.commit('todo/toggleCompleteTodoItem', 1);
      const item = store.state.todo.todoList.find(item => item.id === 1);
      expect(item.isCompleted).toBe(true);
    });
  });
});