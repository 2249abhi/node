// var name = "Abhishek Shrivastav";
// export default name;

var name = "Prateek Shrivastav";
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var emp = {
    id: 1001,
    name: "Abhishek Shrivastav",
    dsg: "Developer",
    Salary: 120000,
    city: "Noida",
    state: "UP"
}

function display() {
    console.log("In display function of test module");
}

class Sample {
    show() {
        console.log("In show function of test class");
    }
}

export default Sample; //default export
export { name, arr, emp, display }; // name export