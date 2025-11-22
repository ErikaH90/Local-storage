const lista = ["Erika", 35];

localStorage.setItem("minLista", JSON.stringify(lista));
const sparadLista = JSON.parse(localStorage.getItem("minLista"));

const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener ("click", (event) => {
  event.preventDefault();
  text.innerHTML = sparadLista;
});

const personer = [
  new Person("Erika", 35, "SFI-lärare"),
  new Person("Anna", 28, "Designer"),
  new Person("Johan", 42, "Ingenjör"),
  new Person("Sara", 31, "Frontend Developer"),
  new Person("Karl", 50, "Lärare")
];

localStorage.setItem("enLista", JSON.stringify(personer));
const getList = JSON.parse(localStorage.getIdtem("enLista"));