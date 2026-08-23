<script setup lang="ts">
  import { ElButton, ElInput } from 'element-plus'
  import { computed, onMounted, ref, watch } from 'vue';
  import Todo from './components/Todo.vue';
  import { v4 as uuidv4 } from 'uuid'

  interface TodoItems {
    content: string,
    id: string
  }

  const todo = ref('');
  const todoList = ref<TodoItems[]>([]);
  const TODO_APP_KEY = 'TODO_APP_STORAGE_KEY';

  const onButtonClick = () => {
    todoList.value.unshift({
      content: todo.value,
      id: uuidv4()
    });
    todo.value = '';
  }

  const deleteTodo = (targetId: string) => {
    todoList.value = todoList.value.filter((item) => {
      return item.id !== targetId;
    })
  }

  onMounted(() => {
    const data = localStorage.getItem(TODO_APP_KEY);
    if(data){
      todoList.value = JSON.parse(data) as TodoItems[];
    }
  });

  watch(todoList, (newValue) => {
    localStorage.setItem(TODO_APP_KEY, JSON.stringify(newValue));
  }, { deep: true });
</script>

<template>
  <ElInput :clearable="true" v-model="todo" placeholder="please input todo content" style="
      width: 400px;
      height: 50px;
      font-size: 20px;"></ElInput>
  <ElButton type="primary" @click="onButtonClick()" :disabled="todo.trim() === ''" style="
      height: 50px;
      width: 80px;
      font-size: 20px;  
    ">Add</ElButton>
  <Todo v-for="item in todoList" :name="item.content" :id="item.id" @click="deleteTodo(item.id)"/>

</template>

<style scoped>

</style>
