 function showKeys(obj) {
     for (let key in obj) {

         if (obj.hasOwnProperty(key)) {

             console.log(`${key} : ${obj[key]}`); // ownCity
         }
     }
 }
 const person = {

     city: "Moscow",
     name: "Peter",
     age: 21
 }

 const student = Object.create(person);
 student.ownCity = "Piter";
 student.name = "Oleg";
 showKeys(student);