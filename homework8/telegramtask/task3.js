const counter = {
    value: 0,
    increment() {
        setInterval(() => {
        this.value++;
        console.log(this.value);
        }, 1000);
    }
};

counter.increment();