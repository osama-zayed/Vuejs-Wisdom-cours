const { createApp } = Vue;

createApp({
    data() {
        return {
            'name': "osama",
            'age': 22,
            'link':"test.com"
        }
    },
    methods: {
        sayHi(time, name) {
            return "Good" + " " + time + " " + name;
        }
    }
}).mount('#app-root');