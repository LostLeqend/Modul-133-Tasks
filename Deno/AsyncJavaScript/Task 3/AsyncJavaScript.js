const GetArticle = async function () {
    var articleId = document.getElementById("numberArticleId").value;

    if (articleId <= 0)
        return;

    fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
        .then(response => response.json())
        .then(post =>
            {
                const h1 = document.querySelector("h1");
                const article = document.querySelector("article");
                h1.innerText = post.title;
                article.innerText = post.body;
            });
}

const btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", GetArticle);