let btn = document.querySelectorAll('button');
let fieldMain = document.querySelector(".main");


let trigno = (str, tri) => {
    let trig = str.value.slice(str.value.indexOf(tri), str.value.indexOf(")") + 1);

    let trigvalue;

    for (let i = 0; i < fieldMain.value.length; i++) {
        if (trig.includes("sin")) {
            trigvalue = Math.sin(trig.slice(4, -1) * (Math.PI / 180));
        }
        if (trig.includes("cos")) {
            trigvalue = Math.cos(trig.slice(4, -1) * (Math.PI / 180));
        }
        if (trig.includes("tan")) {
            trigvalue = Math.tan(trig.slice(4, -1) * (Math.PI / 180));
        }
    }

    str.value = str.value.replace(trig, trigvalue);
}

for (item of btn) {
    item.addEventListener('click', (e) => {
        btnValue = e.target.innerText;

        if (btnValue === "%") {
            fieldMain.value = eval(fieldMain.value) / 100;
            fieldMain.value += "*";
        }
        if (btnValue === "sin") {
            btnValue = "sin(";
        }
        if (btnValue === "cos") {
            btnValue = "cos(";
        }
        if (btnValue === "tan") {
            btnValue = "tan(";
        }
        if (btnValue === "backspace") {
            btnValue = "";
            fieldMain.value = fieldMain.value.slice(0, -1);
        } // backspace

        if (fieldMain.value != "result field") {
            if (btnValue == "=") {
                fieldMain.value = fieldMain.value.replace("mod", "%");

                fieldMain.value = fieldMain.value.replace("÷", "/");
                fieldMain.value = fieldMain.value.replace("x", "*");

                fieldMain.value = fieldMain.value.replace("x", "*");
                fieldMain.value = fieldMain.value.replace("x", "*");
                fieldMain.value = fieldMain.value.replace("x", "*");

                fieldMain.value = fieldMain.value.replace("π", "*" + Math.PI);


                if (fieldMain.value.includes("sin(")) {
                    trigno(fieldMain, "sin(");
                }
                if (fieldMain.value.includes("cos(")) {
                    trigno(fieldMain, "cos(");
                }
                if (fieldMain.value.includes("sin(")) {
                    trigno(fieldMain, "tan(");
                }

                fieldMain.value = eval(fieldMain.value);
            }
            else {
                if (btnValue != "%") {
                    fieldMain.value += btnValue;
                }
            }
        }

        if (fieldMain.value == "result field") {
            fieldMain.value = btnValue;
        }

        if (btnValue === "AC") {
            fieldMain.value = "result field";
        } // All Clear
    })
}







// make recourstion with this concept 
// str.slice(str.indexOf("sin(") +4, str.indexOf(")") );
// use start =  str.indexOf("sin(") + 4 
// use end = str.indexOf(")");

// once you extract use start = start + str
// once you extract use end = end + str

















// for (let i = 0; i < 20; i++) {
//     document.querySelector(`.grid-${i+1}`).addEventListener("click",
//     () => {
//             console.log( parseInt(document.querySelector(`.grid-${i+1}`).innerHTML));
//         }
//     );
// }



// let value = (valueof) => {
//     return document.getElementsByClassName(valueof).value;
// }


// let field1 = document.querySelector(".one");
// let field2 = document.querySelector(".two");
// let fieldMain = document.querySelector(".main");


// let field = 1;
// let operation;

// let num1 = 0, num2 = 0;


// for (item of btn) {
//     item.addEventListener('click', (e) => {
//         btnValue = e.target.innerText;
//         console.log(btnValue);

//         if(fieldMain.value != "result field"){
//             fieldMain.value += btnValue;
//         }

//         if (fieldMain.value == "result field") {
//             fieldMain.value = btnValue;
//         }        

//         if (btnValue === '÷' || btnValue === 'x' || btnValue === '+' || btnValue === '-') {
//             field = 2;
//             operation = btnValue;
//             console.log("artha field 1");
//         }

//         if (btnValue === '=') {
//             field = 1;
//             console.log(" equel field 1");

//             if (operation == "+") {
//                 fieldMain.value = parseInt(field1.value) + parseInt(field2.value);
//                 console.log(parseInt(num1) + parseInt(num2));
//             }
//             if (operation == "-") {
//                 fieldMain.value = parseInt(field1.value) - parseInt(field2.value);
//                 console.log(parseInt(num1) - parseInt(num2));
//             }
//             if (operation == "x") {
//                 fieldMain.value = parseInt(field1.value) * parseInt(field2.value);
//                 console.log(parseInt(num1) * parseInt(num2));
//             }
//             if (operation == "÷") {
//                 fieldMain.value = parseInt(field1.value) / parseInt(field2.value);
//                 console.log(parseInt(num1) / parseInt(num2));
//             }
//         }

//         if (btnValue == 0 || btnValue == 1 || btnValue == 2 || btnValue == 3 || btnValue == 4 || btnValue == 5 || btnValue == 6 || btnValue == 7 || btnValue == 8 || btnValue == 9) {
//             if (field == 1) {
//                 if (field1.value == "field 1") {
//                     field1.value = btnValue;
//                     num1 = btnValue;
//                 }
//                 else {
//                     field1.value += btnValue;
//                     num1 = num1 + btnValue;
//                 }
//                 // console.log(" btn 1 field 1");
//             }

//             if (field == 2) {
//                 if (field2.value == "field 2") {
//                     field2.value = btnValue;
//                     num2 = btnValue;
//                 }
//                 else {
//                     field2.value += btnValue;
//                     num2 = num2 + btnValue;
//                 }
//                 // console.log(" btn 1 field 2");
//             }
//         }

//         if (btnValue === "AC") a{
//             field1.value = "field 1";
//             field2.value = "field 2";
//             fieldMain.value = "result field";
//             num1 = 0;
//             num2 = 0;

//         }

//         // console.log(btnValue);

//     }
//     )
// }

