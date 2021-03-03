//Tasks 

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user.surname);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert(sum);

let user = {
    name: 'Ann',
    age: 22,
    email: 'ann123@gmail.com',
    location: 'Berlin',
    blogs: ['morning routine', '10 breakfast recipes'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        // console.log(this.blogs);  
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

// console.log(user);
// console.log(user.name);

// // user.age = 32;
// console.log(user.age);

// console.log(user['location']);
// user['name'] = 'Chan';
// console.log(user['name']);

// console.log(typeof user);

// user.login();
// user.logout();

// const name = 'mario';
// name.toUpperCase();

user.logBlogs();
console.log(this);
