function addTask() {
  let input = document.getElementById("task");
  let list = document.getElementById("list");
  let error = document.getElementById("errorMessage");
  let li = document.createElement("li");

  let value = input.value.trim();

  if (value == "") {
    error.style.display = "block";
    input.classList.add("shake-animation");

    setTimeout(() => {
      input.classList.remove("shake-animation");
    }, 300);

    return;
  }
  error.style.display = "none";

  li.innerHTML = `<span>${value}</span>
                    <button class="delete"
            onclick="this.parentElement.remove()"><i class="fas fa-trash"></i></button>`;

  document.getElementById("list").appendChild(li);

  input.value = "";
}
