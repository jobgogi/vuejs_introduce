<template>
  <div id="app">
    <h2>태스크 목록</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" :id="`task-${task.id}`" v-bind:checked="task.done"
          v-on:change="toggleTaskStatus(task)">
        <label :for="`task-${task.id}`">&nbsp;{{ task.name }}</label>
        -
        <span v-for="id in task.labelIds" v-bind:key="id">
          {{ getLabelText(id) }}
        </span>
      </li>
    </ul>
    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="form.newTaskName" placeholder="새 태스크">
    </form>

    <h2>레이블 목록</h2>
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input type="checkbox" :id="`label-${label.id}`" v-bind:value="label.id"
          v-model="form.newTaskLabelIds">
        <label :for="`label-${label.id}`">&nbsp;{{ label.text }}</label>
      </li>
    </ul>

    <form v-on:submit.prevent="addLabel">
      <input type="text" v-model="form.newLabelText" placeholder="새 레이블">
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        newTaskName: '',
        newTaskLabelIds: [],
        newLabelText: ''
      }
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    labels() {
      return this.$store.state.labels;
    }
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', {
        name: this.form.newTaskName,
        labelIds: this.form.newTaskLabelIds
      });
      this.form.newTaskName = '';
      this.form.newTaskLabelIds = [];
    },
    toggleTaskStatus(task) {
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      });
    },
    addLabel() {
      this.$store.commit('addLabel', {
        text: this.form.newLabelText
      });
      this.newLabelText = '';
    },
    getLabelText(id) {
      const label = this.labels.filter(label => label.id === id)[0];
      return label ? label.text : '';
    }
  }
}
</script>
