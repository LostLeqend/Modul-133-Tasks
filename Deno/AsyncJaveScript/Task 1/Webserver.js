fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(respone => respone.json())
    .then(json => console.log(json));