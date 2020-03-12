Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>"
});
var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    seen: false,
    name: "",
    product: "",
    counter1: 0,
    counter2: 0,
    users: [
      { name: "Erick" },
      { name: "Juan" },
      { name: "Pedro" },
      { name: "Emilio" },
      { name: "Ricardo" }
    ],
    todoList: [
      { id: 0, text: "Shop Vegetables" },
      { id: 1, text: "Buy Cheese" },
      { id: 2, text: "Pick the packages from Amazon" }
    ]
  },
  methods: {
    addNameEnter: function() {
      this.message = "Welcome " + this.name;
      this.name = "";
      this.counter1++;
    },
    addNameClick: function() {
      this.message = "Welcome " + this.name;
      this.name = "";
      this.counter2++;
    },
    addProduct: function() {
      if (this.product == "") {
        return false;
      }
      this.todoList.push({
        id: this.todoList.length + 1,
        text: this.product
      });
      this.product = "";
    },
    changeSeen: function() {
      this.seen = !this.seen;
    }
  }
});
