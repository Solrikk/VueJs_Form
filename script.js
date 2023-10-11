new Vue({
  el: '#app',
  data: {
    message: 'Welcome!',
    name: '',
    greeting: '',
    showGreeting: false
  },
  methods: {
    sayHello() {
      if (this.name) {
        this.greeting = `Hello, ${this.name}!`;
        this.showGreeting = true;
      }
    }
  }
})