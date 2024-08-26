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
createApp({
  methods: {
    test() {
      console.log("test");
    }
  }
}).mount("#app-root");
