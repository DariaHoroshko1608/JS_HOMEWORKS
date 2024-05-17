document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("categories").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      (function (category) {
        const products = {
          category1: [
            {
              назва: "Футболка",
              опис: "Комфортна футболка для щоденного носіння.",
              ціна: 200,
            },
            {
              назва: "Сорочка",
              опис: "Класична сорочка з якісного матеріалу.",
              ціна: 350,
            },
            {
              назва: "Джинси",
              опис: "Класичні джинси для стильного образу.",
              ціна: 300,
            },
            {
              назва: "Спортивні штани",
              опис: "Зручні спортивні штани для активного відпочинку.",
              ціна: 250,
            },
          ],
          category2: [
            {
              назва: "Сукня",
              опис: "Елегантна сукня для особливого випадку.",
              ціна: 800,
            },
            {
              назва: "Пальто",
              опис: "Стильне пальто для зимових прогулянок.",
              ціна: 600,
            },
            {
              назва: "Блузка",
              опис: "Модна блузка з оригінальним дизайном.",
              ціна: 400,
            },
          ],
          category3: [
            {
              назва: "Чобітки",
              опис: "Зручні чобітки для холодної погоди.",
              ціна: 600,
            },
            {
              назва: "Кеди",
              опис: "Стильні кеди для активного відпочинку.",
              ціна: 300,
            },
            {
              назва: "Куртка",
              опис: "Тепла куртка для захисту від холоду.",
              ціна: 700,
            },
          ],
        };

        const productList = document.getElementById("product-list");
        productList.innerHTML = "";

        products[category].forEach((product) => {
          const li = document.createElement("li");
          li.textContent = product.назва;
          li.dataset.product = JSON.stringify(product);
          productList.appendChild(li);
        });

        document.getElementById("products").style.display = "block";
        document.getElementById("product-info").style.display = "none";
      })(event.target.dataset.category);
    }
  });

  document.getElementById("product-list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      (function (product) {
        product = JSON.parse(product);
        const infoDiv = document.getElementById("info");
        infoDiv.innerHTML = `<p>Назва: ${product.назва}</p><p>Опис: ${product.опис}</p><p>Ціна: ${product.ціна} грн</p><button onclick="buyProduct()">Купити</button>`;

        document.getElementById("product-info").style.display = "block";
      })(event.target.dataset.product);
    }
  });
});

const buyProduct = (function () {
  return function () {
    alert("Товар куплено");
    document.getElementById("products").style.display = "none";
    document.getElementById("product-info").style.display = "none";
  };
})();
