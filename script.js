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
// createApp({
//   data() {
//     return {
//       numOne: 0,
//       numTwo: 0,
//     };
//   },
//   methods: {},
//   computed: {
//     increaseNumberOneChange() {
//       console.log("this is number one");

//       return this.numOne * 2;
//     },
//     increaseNumberTwoChange() {
//       console.log("this is number two");

//       return this.numTwo + 10;
//     }
//   },
// }).mount("#app-root");

// 11- Dynamic Classes & Style
// createApp({
//   data() {
//     return {
//       myColor:"",
//     };
//   },
// }).mount("#app-root");

// 12- If Conditions & V-Show
// createApp({
//   data() {
//     return {
//       name:"osama",
//       age:22,
//     };
//   },
// }).mount("#app-root");

// 13- Looping Data (V-For)
// createApp({
//   data() {
//     return {
//       students:[
//         {
//           id:1,
//           name:"osama",
//           age:22,
//         },
//         {
//           id:2,
//           name:"ali",
//           age:22,
//         },
//         {
//           id:3,
//           name:"ahmede",
//           age:22,
//         },
//       ],
//     };
//   },
// }).mount("#app-root");

// 14- Looping Data (V-For) Practice
// createApp({
//   data() {
//     return {
//       products:[
//         {
//           id:1,
//           title:"كيمره كانون",
//           description:"كيمره كانون 50D ",
//           price:"2000",
//           brand:"الكترونيات",
//           img:"img/product-1.jpg"
//         },
//         {
//           id:2,
//           title:"فنيلية",
//           description:"فنيلية كم طويل زرقاء",
//           price:"3000",
//           brand:"ملابس",
//           img:"img/product-2.jpg"
//         },
//         {
//           id:3,
//           title:"مصباح",
//           description:"مصباح غرفة نوم ابيض",
//           price:"5000",
//            brand:"اثاث",
//           img:"img/product-3.jpg"
//         },
//       ],
//     };
//   },
// }).mount("#app-root");

// 15- Looping Data (V-For) - Nested Loop
// createApp({
//   data() {
//     return {
//       products:[
//         {
//           id:1,
//           title:"كيمره كانون",
//           description:"كيمره كانون 50D ",
//           price:"2000",
//           brand:"الكترونيات",
//           img:"img/product-1.jpg",
//           colors:["red","blue","black"]
//         },
//         {
//           id:2,
//           title:"فنيلية",
//           description:"فنيلية كم طويل زرقاء",
//           price:"3000",
//           brand:"ملابس",
//           img:"img/product-2.jpg",
//           colors:["red","blue","black"]
//         },
//         {
//           id:3,
//           title:"مصباح",
//           description:"مصباح غرفة نوم ابيض",
//           price:"5000",
//            brand:"اثاث",
//           img:"img/product-3.jpg",
//           colors:["red","blue","black"]
//         },
//       ],
//     };
//   },
// }).mount("#app-root");

// 16- Multiple Vue Instances
const products = createApp({
  data() {
    return {
      products: [
        {
          id: 1,
          title: "كيمره كانون",
          description: "كيمره كانون 50D ",
          price: "2000",
          brand: "الكترونيات",
          img: "img/product-1.jpg",
          colors: ["red", "blue", "black"]
        },
        {
          id: 2,
          title: "فنيلية",
          description: "فنيلية كم طويل زرقاء",
          price: "3000",
          brand: "ملابس",
          img: "img/product-2.jpg",
          colors: ["red", "blue", "black"]
        },
        {
          id: 3,
          title: "مصباح",
          description: "مصباح غرفة نوم ابيض",
          price: "5000",
          brand: "اثاث",
          img: "img/product-3.jpg",
          colors: ["red", "blue", "black"]
        }
      ],
      count:0
    };
  }
}).mount("#products-section");
const users = createApp({
  data() {
    return {
      users: [
        {
          id: 1,
          name: "osama"
        },

        {
          id: 2,
          name: "ali"
        },

        {
          id: 3,
          name: "ahmed"
        }
      ]
    };
  },
  methods: {
    increasecount() {
      return products.count++;
    }
  }
}).mount("#users-section");
