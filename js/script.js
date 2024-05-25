(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const itemList = document.getElementById("itemList");

    function saveFavorites(favorites) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    function toggleFavorite(itemId) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const index = favorites.indexOf(itemId);
      if (index === -1) {
        favorites.push(itemId);
      } else {
        favorites.splice(index, 1);
      }
      saveFavorites(favorites);
      renderItems();
    }

    function renderItems() {
      itemList.innerHTML = "";

      for (let i = 1; i <= 5; i++) {
        const li = document.createElement("li");
        li.textContent = `Елемент ${i}`;
        const favoriteBtn = document.createElement("button");
        favoriteBtn.textContent = JSON.parse(
          localStorage.getItem("favorites"),
        )?.includes(i)
          ? "Видалити"
          : "Додати";
        favoriteBtn.classList.add("favorite-btn");
        favoriteBtn.addEventListener("click", () => {
          toggleFavorite(i);
        });
        li.appendChild(favoriteBtn);
        itemList.appendChild(li);
      }
    }

    renderItems();
  });
})();
