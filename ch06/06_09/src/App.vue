<template>
  <div id="app">
    <h2>태스크 목록</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" :id="`task-${task.id}`" v-bind:checked="task.done"
          v-on:change="toggleTaskStatus(task)">
        <label :for="`task-${task.id}`">&nbsp;{{ task.name }}</label>
      </li>
    </ul>
    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="form.newTaskName" placeholder="새 태스크">
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        newTaskName: ''
      }
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', {
        name: this.form.newTaskName
      });
      this.form.newTaskName = '';
    },
    toggleTaskStatus(task) {
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      });
    }
  }
}
</script>
