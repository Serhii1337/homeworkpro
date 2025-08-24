const user = {
    name: `Bill`,
    age: 29,
    location: `Los Angeles, USA`,
    hobby: `Basketball`,

    getInfo: function() {
        return `Name: ${user.name}; Age: ${user.age}; Location: ${user.location}; Hobby: ${user.hobby}`;
    }
};

console.log(user.getInfo());