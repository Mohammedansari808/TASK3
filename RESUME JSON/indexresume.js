let title = {
    "res" :"RESUME"};
console.log(title.res);

let resume ={
    "NAME" : "Mohammed Ansari",
    "ADDRESS": "(No:22/2,V.V Giri Street,Vivekananda nagar,Kodungaiyur,Chennai - 600 118.)",
    "Email" : "mohammedansari808@gmail.com"
}
let resu = Object.entries(resume);
for (let res of resu){
    console.log(`${res[0]} : ${res[1]}`)
}
let  pers_onal ={
    "pers" : "PERSONAL DETAILS",
}
console.log(pers_onal.pers);
let personal ={
    "Date of Birth"  :    "15/03/1998",
	"Gender"         :         "Male",
	"Marital status" :       "Single",
    "Nationality" :        "Indian",
	"Language known"   :     "Tamil,English"

}

let person = Object.entries(personal);
for (let detail of person){
    console.log(`${detail[0]} : ${detail[1]}`)
}

 let carobj ={
    "car" : "CAREER OBJECTIVE"};
 console.log(carobj.car);

let careerobjective = {
    "statement" : "To work in a challenging environment demanding all my skills and adapt myself in different fields for the development of the organization with impressive performance."
}
console.log(careerobjective.statement);


let certificates ={
    "certi":"CERTIFICATE",
    "certificate1" : "-> Winner  in the intercollege competition-CRICKET",
    "certificate2" : "-> Runner in kabaddi tournament 2013 and 2014",
    "certificate3" : "-> Winner in many drawing competitions",
    "certificate4" : "-> Winner in the department match -FOOTBALL"
    
}
for (let key in certificates){
    console.log(certificates[key]);
}


let degrees= {
    "edu" : "EDUCATIONAL CERTIFICATES"
};
degrees.schoolcertificate1={
    "COURSE":"SSLC",
    "SCHOOL":"Don Bosco Matriculation School,Kannadasan Nagar, Chennai.",
    "YEAR OF PASSING"	:"2013",
    "PERCENTAGE" : "83.8%"
}
degrees.schoolcertificate2={
    "COURSE":"HSC",
    "SCHOOL":"Daniel Matriculation Higher Secondary School,Coronation Nagar, Chennai.",
    "YEAR OF PASSING"	:"2015",
    "PERCENTAGE" : "67.58%"
}
degrees.collegecertificate1={
    "COURSE":"B.sc Chemistry",
    "COLLEGE":"The New College, Chennai",
    "YEAR OF PASSING"	:"2018",
    "PERCENTAGE" : "71.08%"
}
degrees.collegecertificate2={
    "COURSE":"M.sc Chemistry",
    "COLLEGE":"The New College, Chennai",
    "YEAR OF PASSING"	:"2020",
    "PERCENTAGE" : "66.60%"
}
for (let result in degrees){
    console.log(degrees[result]);
}


let hobbies ={
    "hobby" : "HOBBIES",
    "hobby1" : "-> playing cricket",
    "hobby2" : "-> playing video games like BGMI,AMONG US,etc",
    "hobby3" : "-> watching fantasy and sci-fi series ",
    "hobby4" : "-> going out with friends"
}
for (let value in hobbies){
    console.log(hobbies[value])
}
console.log("DECLARATION")
let dec = {
    "DECLARE": "I hereby declare that the information furnished above is true to the best of my knowledge."
}
console.log(dec.DECLARE)









