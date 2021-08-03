let btn = document.querySelectorAll('button');
let fieldMain = document.querySelector(".main");


let checkNaN = (str) => {
    if (str == "0" || str == "1" || str == "2" || str == "3" || str == "4" || str == "5" || str == "6" || str == "7" || str == "8" || str == "9") {
        return false
    }
    else {
        return true
    }
}


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

let logln = (str, ex) => {
    let where, value;
    
    if((str.value).includes(")")){
        where = str.value.slice(str.value.indexOf(ex), str.value.indexOf(")") + 1);
        
        for (let i = 0; i < fieldMain.value.length; i++) {
            if (where.includes("log")) {
                value = Math.log10(where.slice(4, -1));
            }
            if (where.includes("ln")) {
                value = Math.log(where.slice(3));
            }
        }

    }
    else{
        where = str.value.slice(str.value.indexOf(ex));
        
        for (let i = 0; i < fieldMain.value.length; i++) {
            if (where.includes("log")) {
                value = Math.log10(where.slice(4));
            }
            if (where.includes("ln")) {
                value = Math.log(where.slice(3));
            }
        }
        
    }
    

    str.value = str.value.replace(where, value);
}


let sqrt = (str) => {
    let base, exponent, result;
    base = (str.value).slice(0, (str.value).indexOf("^"));
    exponent = (str.value).slice((str.value).indexOf("^") + 1);
    result = eval("Math.pow(" + base + "," + exponent + ")");
    return result;
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
        if (btnValue == "x^") {
            btnValue = "^";
        }
        if (btnValue === "x²") {
            btnValue = "^2";
        }
        if (btnValue === "√x") {
            btnValue = "√";
        }
        if (btnValue == "log") {
            btnValue = "log(";
        }
        if (btnValue == "ln") {
            btnValue = "ln(";
        }



        if (btnValue === "+-") {
            btnValue = "";
            if (fieldMain.value[0] != "-") {
                fieldMain.value = "-" + fieldMain.value;
            }
            else if (fieldMain.value[0] == "-") {
                fieldMain.value = fieldMain.value.slice(1);
            }
        }

        if (btnValue == "π") {
            if (checkNaN(fieldMain.value.slice(-1))) {
                btnvalue = "π";
            }
            else {
                btnValue = "*π";
            }
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

                fieldMain.value = fieldMain.value.replace("π", Math.PI);


                if (fieldMain.value.includes("sin(")) {
                    trigno(fieldMain, "sin(");
                }
                if (fieldMain.value.includes("cos(")) {
                    trigno(fieldMain, "cos(");
                }
                if (fieldMain.value.includes("tan(")) {
                    trigno(fieldMain, "tan(");
                }
                if (fieldMain.value.includes("log(")) {
                    logln(fieldMain, "log");
                }
                if (fieldMain.value.includes("ln(")) {
                    logln(fieldMain, "ln");
                }
                if (fieldMain.value.includes("√")) {
                    fieldMain.value = Math.sqrt(fieldMain.value.slice(1));
                }
                
                if (fieldMain.value.includes("^")) {
                    fieldMain.value = sqrt(fieldMain);
                }


                fieldMain.value = eval(fieldMain.value);
            }
            else {
                if (btnValue != "%"){
                    fieldMain.value += btnValue;
                }
            }
        }
        
        
        // (find out the pronounciation  of the following words) plumber prnounciatiopn cemmunication are duogh plough lead ought https://type.method.ac/#

        if (fieldMain.value == "result field") {
            fieldMain.value = btnValue;
        }

        if (btnValue === "AC") {
            fieldMain.value = "result field";
        } // All Clear
    })
}

