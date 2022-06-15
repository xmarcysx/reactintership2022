// MY LIST:
const students = [
  {
    name: "Martin",
    lastName: "Lant",
    marks: [9, 8, null, 7, 5],
  },
  {
    name: "Francesco",
    lastName: "Portus",
    marks: [5, 4, 2, 3, 2],
  },
  {
    name: "Bill",
    lastName: "Merdoc",
    marks: [10, null, null, null, 10],
  },
  {
    name: "John",
    lastName: "Entman",
    marks: [9, 8, 9, 7, 5],
  },
];

var list = function (students) {
  for (let i = 0; i < 4; i++) {
    let card = document.createElement("div");
    let name = document.createElement("div");
    let lastName = document.createElement("div");
    let marks = document.createElement("div");
    card.classList.add("card");
    name.innerHTML = students[i].name;
    lastName.innerHTML = students[i].lastName;

    let marksLength =
      (students[i].marks[0] +
        students[i].marks[1] +
        students[i].marks[2] +
        students[i].marks[3] +
        students[i].marks[4]) /
      5;

    if (marksLength > 5) {
      card.style.border = "2px solid green";
      marks.innerHTML = marksLength;
    } else {
      card.style.border = "2px solid red";
      marks.innerHTML = marksLength;
    }

    document.querySelector(".container").appendChild(card);
    card.appendChild(name);
    card.appendChild(lastName);
    card.appendChild(marks);
  }
};

list(students);

let card = document.querySelector(".card");
let container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("card")) {
    e.target.classList.toggle("active");
  }
});

// card.onclick = function () {
//   card.classList.toggle("active");
// };
