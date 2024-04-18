// var name = "Abhishek Shrivastav";
// module.exports = name;

var name = "Prateek Shrivastav";
var arr = [10,20,30,40,50,60,70,80,90,100];
var emp = {
    id:1001,
    name:"Abhishek Shrivastav",
    dsg:"Developer",
    Salary:120000,
    city:"Noida",
    state:"UP"
}

function display()
{
    console.log("In display function of test module");
}

class Sample {
    show()
    {
        console.log("In show function of test class");    
    }
}

//export using Array
//module.exports = [name,arr,emp,display,Sample];

//export using Object
module.exports = {name, arr, emp, display,Sample};

//========================CJS done================================

//========================MJS start==============================