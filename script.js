let arrStudent = [
  "Daniel",
  "Samuel",
  "Esther",
  "Zachary",
  "David",
  "Yonatan",
  "Jonah",
  "Nicholas",
  "Tyler",
  "Marko",
  "EZ",
  "James",
  "Moises",
  "Yair",
  "Ezekiel",
  "Colton",
  "Natan",
  "Yohan",
];

let form = document.querySelector("form");

for (let i = 0; i < arrStudent.length; i++) {
  var y = document.createElement("input");
  y.setAttribute("type", "checkbox");
  y.setAttribute("name", "student");
  y.setAttribute("value", arrStudent[i]);
  y.setAttribute("id", "checkbox");
  var z = document.createElement("label");
  z.setAttribute("for", arrStudent[i]);
  form.appendChild(y);
  form.appendChild(z);
  z.setAttribute("id", "student");
  z.appendChild(document.createTextNode(arrStudent[i]));
  var a = document.createElement("br");
  form.appendChild(a);
}

let checkedstudents = [];

function myFunction() {
  document.getElementById("body").style.display = "none";
  for (let i = 0; i < arrStudent.length; i++) {
    if (document.querySelector(`input[value=${arrStudent[i]}]:checked`)) {
      checkedstudents.push(i);
    }
  }
  let reversedchecked = checkedstudents.reverse();

  for (let j = 0; j < reversedchecked.length; ) {
    arrStudent.splice(reversedchecked[j], 1);
    reversedchecked.splice(j, 1);
  }
  let randomStudent = () => {
    randomNum = Math.floor(Math.random() * arrStudent.length);
    return arrStudent[randomNum];
  };

  document.getElementById("countdown").style.display = "block";
  document.getElementById("countnumber").style.display = "block";
  document.getElementById("countdown").innerHTML =
    "The random student will be revealed in:";

  let count = 5;
  document.getElementById("countnumber").innerHTML = count;

  setInterval(countdown, 1000);

  function countdown() {
    if (count > 1) {
      count--;
      document.getElementById("countnumber").innerHTML = count;
    } else if (count > 0) {
      document.getElementById("countdown").style.display = "none";
      document.getElementById("countnumber").style.display = "none";
      document.getElementById("randomstudentis").style.display = "block";
      document.getElementById("studentname").style.display = "block";
      document.getElementById("button3").style.display = "block";
    }
  }

  function revealnewstudent() {
    randomStudent();
    document.getElementById("randomstudentis").innerHTML =
      "The Random Student is:";
    document.getElementById("studentname").innerHTML = randomStudent();
  }
  revealnewstudent();
}

function home() {
  location.reload();
}
