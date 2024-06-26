const postIdInput = document.getElementById("postId");
const searchButton = document.getElementById("searchButton");
const postContainer = document.getElementById("postContainer");

searchButton.addEventListener("click", () => {
  const postId = parseInt(postIdInput.value);
  if (postId < 1 || postId > 100) {
    alert("Ід повинен бути від 1 до 100");
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((post) => {
      if (!post) {
        alert("Пост не знайдено");
        return;
      }

      const postHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button id="getCommentsButton">Отримати коментарі</button>
      `;
      postContainer.innerHTML = postHTML;

      const getCommentsButton =
        postContainer.querySelector("#getCommentsButton");
      getCommentsButton.addEventListener("click", () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
          .then((response) => response.json())
          .then((comments) => {
            const commentsHTML = comments
              .map((comment) => `<p>${comment.body}</p>`)
              .join("");
            postContainer.innerHTML += `<h3>Коментарі:</h3>${commentsHTML}`;
          })
          .catch((error) =>
            console.error("Помилка при отриманні коментарів:", error),
          );
      });
    })
    .catch((error) => console.error("Помилка при отриманні поста:", error));
});
