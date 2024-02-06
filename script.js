//Problem#3//
var fname, lname, byear,txtfname, txtlname, txtbyear, txt, age;

fname= prompt("What is your first name?");
lname = prompt("What is your last name?");
byear = prompt("What is your birth year?");

age = 2024 - byear;

//txtfname = document.getElementById("fname").innerHTML;
//txtlname = document.getElementById("lname").innerHTML;
//txtbyear = document.getElementById("byear").innerHTML;
txt = document.getElementById("output");

txt.innerHTML = "Hello " + fname + " " + lname + "! How does it feel to be " + age + " years old?";
alert(txt.innerHTML);