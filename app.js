
var data = [];

var signup = [];
var login = [];

var inputID1 = ["name1", "email1", "pass1"];
var inputID2 = [ "email2", "pass2"];


function dataSubmit() {
  for (let i = 0; i < 3; i++) {
    signup[i] = document.getElementById(inputID1[i]).value;
  }

//   console.log(signup);
}

function checkInput() {

    for (let j = 0; j < inputID2.length; j++) {
       
        login[j] = document.getElementById(inputID2[j]).value;
        
    }

    for (let k = 0; k < 2; k++) {
        
        if (login[k] === signup[k + 1]) {
            
            alert("your form Submit");
            
        }
        else {

            alert("Incorrect input");

        }
        
    }

}





//  }
// var data = [];

// var signup = [];
// var login = [];

// var inputID1 = ["name1", "email1", "pass1"];
// var inputID2 = [ "email2", "pass2"];


// function dataSubmit() {
//   for (let i = 0; i < 3; i++) {
//     signup[i] = document.getElementById(inputID1[i]).value;
//   }

//   console.log(signup);
// }

// function checkInput() {

//     for (let j = 0; j < inputID2.length; j++) {
       
//         login[j] = document.getElementById(inputID2[j]).value; 
//        }

//         for (let k = 0; k < 2; k++) {
            
//             if (login[k] === signup[k + 1]) {
                
//                 alert("redirecting to homepage");
                
//             }
//             else {
    
//                 alert("Incorrect input");
    
//       }
//     }
// }






        