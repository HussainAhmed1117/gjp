// function callBackImplementation(cb, error) {
//     let a = 1 + 3
//     if (a == 2) {
//         cb(a)
//     }
//     else {
//         error(a)
//     }
// }

// callBackImplementation(function (a) {
//     console.log("Success", a);
// }, function (a) {
//     console.log("Error", a);
// })

// function promiseImplementation() {
//     return new Promise(function (resolve, reject) {
//         let a = 1 + 1
//         if (a == 2) {
//             resolve(a)
//         }
//         else {
//             reject(a)
//         }
//     })
// }


// promiseImplementation().then(function (a) {
//     console.log("Success", a);
// }).catch(function (a) {
//     console.log("Error", a);
// })

// create a iife
// (async () => {
//     function promiseImplementation() {
//         return new Promise(function (resolve, reject) {
//             let a = 1 + 2
//             if (a == 2) {
//                 resolve(a)
//             }
//             else {
//                 reject(a)
//             }
//         })
//     }

//     try {
//         let result = await promiseImplementation()
//         console.log("Success", result);
//     } catch (error) {
//         console.log("Error", error);
//     }
// })()



axios.post("https://jsonplaceholder.typicode.com/posts", {
    userId: 1,
    title: "Hello World",
    body: "This is the body of the post"
}).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});



let result = axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });