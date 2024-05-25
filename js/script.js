(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const dataList = document.getElementById("dataList");
    const noDataMessage = document.getElementById("noDataMessage");

    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());

        const isEmpty = Object.values(formObject).some(
          (value) => value === "" || value === null,
        );

        if (isEmpty) {
          alert("Ви нічого не ввели, або заповнили не всі поля,");
          return;
        }

        let storedData = localStorage.getItem("formData");
        if (storedData) {
          storedData = JSON.parse(storedData);
          storedData.push(formObject);
        } else {
          storedData = [formObject];
        }

        localStorage.setItem("formData", JSON.stringify(storedData));

        window.location.href = "data.html";
      });
    }

    if (dataList && noDataMessage) {
      const storedData = localStorage.getItem("formData");

      if (storedData) {
        const formDataArray = JSON.parse(storedData);

        if (formDataArray.length > 0) {
          formDataArray.forEach((data) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.textContent = `Email: ${data.email}, First Name: ${data.firstName}, Last Name: ${data.lastName}, Nickname: ${data.nickname}, Option: ${data.option}, Message: ${data.message}`;
            dataList.appendChild(li);
          });
        } else {
          noDataMessage.style.display = "block";
        }
      } else {
        noDataMessage.style.display = "block";
      }
    }
  });
})();
