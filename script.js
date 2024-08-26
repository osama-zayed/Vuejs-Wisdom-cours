const { createApp } = Vue;

createApp({
    data() {
        return {
            'name': "osama",
            'age': 22
        }
    },
    methods: {
        sayHi(time, name) {
            return "Good" + " " + time + " " + name;
        }
    }
}).mount('#app-root');