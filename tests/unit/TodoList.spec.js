import { shallowMount, createLocalVue } from '@vue/test-utils';
import TodoList from "../../src/components/TodoList.vue";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoList', () => {
  const todoModule = {
    namespaced: true,
    state: {
      todoList: []
    }
  };

  it('Toggle complete item', () => {
    const wrapper = shallowMount(TodoList, {
      localVue,
      store: new Vuex.Store({ modules: { todoModule } })
    });
    wrapper.vm.toggleCompleteTodoItem = jest.fn();
    wrapper.vm.toggleCompleteItem(1);
    expect(wrapper.vm.toggleCompleteTodoItem).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.toggleCompleteTodoItem).toHaveBeenCalledWith(1);
  });
});