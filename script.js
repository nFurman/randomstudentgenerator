let arrStudent = [
  "Daniel",
  "Sammy",
  "Esther",
  "Zach",
  "David",
  "Yonatan",
  "Jonah",
  "Nicky",
  "Tyler",
  "Marko",
  "EZ",
  "James",
  "Moi",
  "Yair",
  "Zeke",
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
  y.setAttribute("id", i);
  var z = document.createElement("label");
  z.setAttribute("for", i);
  form.appendChild(y);
  form.appendChild(z);
  z.setAttribute("class", "studentLabel");
  z.appendChild(document.createTextNode(arrStudent[i]));
  var a = document.createElement("br");
  form.appendChild(a);
}

let validStudents = [];

const randomStudent = () => {
  let randomNum = Math.floor(Math.random() * validStudents.length);
  return validStudents[randomNum];
};

function myFunction() {
  document.getElementById("body").style.display = "none";
  validStudents = [];
  for (let i = 0; i < arrStudent.length; i++) {
    if (document.getElementById(i).checked === false) {
      console.log(arrStudent[i]);
      validStudents.push(arrStudent[i]);
    }
  }

  document.getElementById("countdown").style.display = "block";
  document.getElementById("countnumber").style.display = "block";
  document.getElementById("countdown").innerHTML =
    "The random student will be revealed in:";

  countdown(5);
}

function revealnewstudent() {
  randomStudent();
  document.getElementById("randomstudentis").innerHTML =
    "The Random Student is:";
  document.getElementById("studentname").innerHTML = randomStudent();
}

function countdown(count) {
  if (count > 0) {
    document.getElementById("countnumber").innerHTML = count;
    setTimeout(countdown, 1000, count - 1);
  } else {
    revealnewstudent();
    document.getElementById("countdown").style.display = "none";
    document.getElementById("countnumber").style.display = "none";
    document.getElementById("randomstudentis").style.display = "block";
    document.getElementById("studentname").style.display = "block";
    document.getElementById("button3").style.display = "block";
  }
}

function home() {
  document.getElementById("body").style.display = "block";
  document.getElementById("randomstudentis").style.display = "none";
  document.getElementById("studentname").style.display = "none";
  document.getElementById("button3").style.display = "none";
}
