const { createApp } = Vue;
// المحاضره الثانية
// createApp({
//     data() {
//         return {
//             'name': "osama",
//             'age': 22,
//         }
//     },
// }).mount('#app-root');

// المحاضره الثالثه
// createApp({
//     data() {
//         return {
//             'name': "osama",
//             'age': 22,
//         }
//     },
//     methods: {
//         sayHi(time, name) {
//             return "Good" + " " + time + " " + name;
//         }
//     }

// }).mount('#app-root');

// المحضاره الرابعه
// createApp({
//     data() {
//         return {
//             'link':"test.com"
//         }
//     },
// }).mount('#app-root');

// المحضاره الخامسة
// createApp({
//     data() {
//         return {
//             number: 0
//         };
//     },
//     methods: {
//         increase() {
//             this.number++;
//         }
//     }
// }).mount("#app-root");

// المحضاره السادسة
// createApp({
//   data() {
//     return {
//       link: "test.com"
//     };
//   },
//   methods: {
//     test() {
//       console.log("once");
//     }
//   }
// }).mount("#app-root");

// المحضاره السابعه
// createApp({
//   methods: {
//     test() {
//       console.log("test");
//     }
//   }
// }).mount("#app-root");

// 8- Two Way Data Binding
// createApp({
//   data() {
//     return {
//       name: "osama"
//     };
//   }
// }).mount("#app-root");

// 9- Two Way Data Binding Practice
// createApp({
//   data() {
//     return {
//       newUser : {
//         name: "",
//         email: "",
//         password: "",
//       }
//     };
//   },
//   methods: {
//     sendData() {
//       console.log(this.newUser);
//     }
//   }
// }).mount("#app-root");

// 10- Computed Property
createApp({
  data() {
    return {
      numOne: 0,
      numTwo: 0,
    };
  },
  methods: {},
  computed: {
    increaseNumberOneChange() {
      console.log("this is number one");

      return this.numOne * 2;
    },
    increaseNumberTwoChange() {
      console.log("this is number two");

      return this.numTwo + 10;
    }
  },
}).mount("#app-root");
