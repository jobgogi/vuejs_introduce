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

    <h2>레이블로 필터링</h2>
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input type="radio" :id="`label-filter-${label.id}`"
          v-bind:checked="label.id === filter"
          v-on:change="changeFilter(label.id)">
        <label :for="`label-filter-${label.id}`">&nbsp;{{ label.text }}</label>
      </li>
      <li>
        <input type="radio"
          id="label-filter-null"
          v-bind:checked="filter === null"
          v-on:change="changeFilter(null)">
        <label for="label-filter-null">필터링 없음</label>
      </li>
    </ul>

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

    <h2>저장 및 복원</h2>
    <button type="button" v-on:click="save">저장</button>
    <button type="button" v-on:click="restore">복원</button>

    <h2>Module Counter</h2>
    <p>Amount : {{ counter }}</p>
    <p>Squared : {{ squared }}</p>
    <button type="button" @click="increment('one')" :disabled="isCounting">+ 1</button>
    <button type="button" @click="increment('two')" :disabled="isCounting">+ 2</button>
    <button type="button" @click="increment('ten')" :disabled="isCounting">+ 10</button>
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
      },
      isCounting: false
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter.amount
    },
    tasks() {
      return this.$store.getters.filteredTasks;
    },
    labels() {
      return this.$store.state.task.labels;
    },
    filter() {
      return this.$store.state.task.filter;
    },
    squared() {
      return this.$store.getters.squared;
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
      this.form.newLabelText = '';
    },
    getLabelText(id) {
      const label = this.labels.filter(label => label.id === id)[0];
      return label ? label.text : '';
    },
    changeFilter(labelId) {
      this.$store.commit('changeFilter', {
        filter: labelId
      });
    },
    save() {
      this.$store.dispatch('save');
    },
    restore() {
      this.$store.dispatch('restore');
    },
    increment(type) {
      this.isCounting = true;
      this.$store.dispatch('incrementAsync', { type }).then(() => {
        this.isCounting = false;
      });
    }
  }
}
</script>
