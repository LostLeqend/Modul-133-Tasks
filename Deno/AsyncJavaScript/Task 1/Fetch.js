fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respone => respone.json())
    .then(json => console.log(json));