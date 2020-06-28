<template>
  <div>
    <h1>ToDoリスト</h1>
    <!-- 作業状態の選択 -->
    <form>
        <input v-model="selectedBtn" value="all" type="radio">すべて
        <input v-model="selectedBtn" value="working" type="radio">作業中
        <input v-model="selectedBtn" value="completed" type="radio">完了
    </form>
    <!-- todosを表示 -->
    <main>
        <table>
            <thead>
                <tr>
                    <th>ID</th><th>コメント</th><th>状態</th>
                </tr>
            </thead>
            <transition-group name="fade" tag="tbody">
              <tr v-for="(todo, index) in displayTodos" :key="todo.id">
                <td>{{ indexOfAll(todo) }}</td>
                <td>{{ todo.comment }}</td>
                <td><button @click="changeState(todo)">{{ currentState(todo) }}</button></td>
                <td><button @click="removeTodo(index)">削除</button></td>
              </tr>
            </transition-group>
        </table>
    </main>
    <!-- todoを追加 -->
    <h2>新規タスクの追加</h2>
    <form @submit.prevent="addTodo">
        <input type="text" v-model.trim="inputValue" style="margin-right: 5px;">
        <input type="submit" value="追加">
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedBtn: 'all',
      todos: [],
      inputValue: '',
      // :keyの為に一意な値を付与
      id: 0
    }
  },
  methods: {
    // 新規追加
    addTodo: function() {
      if (!this.inputValue) return;
      const todo = {
        comment: this.inputValue,
        isDone: false,
        id: this.id
      }
      this.todos.push(todo);
      this.id++;
      this.inputValue = '';
    },
    // 削除
    removeTodo: function(index) {
      this.todos.splice(index, 1);
    },
    // 作業状態の変更
    changeState: function(todo) {
      return todo.isDone = !todo.isDone;
    },
  },
  computed: {
    // 作業状態に応じ、表示するtodosの要素を選別
    displayTodos: function() {
      if (this.selectedBtn === 'all') {
        return this.todos;
      } else if (this.selectedBtn === 'working') {
        return this.todos.filter(todo => {
          return !todo.isDone; 
        })
      } else if (this.selectedBtn === 'completed') {
        return this.todos.filter(todo => {
          return todo.isDone;
        })
      } else {
        // ？このreturn〜がないと動作しない理由不明
        return this.todos;
      }
    },
    // 作業状態の監視
    currentState: function() {
      return function(todo) {
        return todo.isDone ? '完了' : '作業中';
      }
    },
    // todosから添字を取得
    indexOfAll: function() {
      return function(todo) {
        return this.todos.indexOf(todo);
      }
    }
  },
}
</script>
<style>
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
/* transition */
.fade-move {
  transition: transform .5s;
}
.fade-enter {
  opacity: 0;

}
.fade-enter-active {
  transition: opacity .5s;

}
.fade-enter-to {
  opacity: 1;

}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity .5s;
  position: absolute;
  width: 100%;
}
.fade-leave-to {
  opacity: 0;
}
</style>
