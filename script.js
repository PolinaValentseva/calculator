
myBtnId = document.getElementById("btn").addEventListener('click', function calcSum(){
    let aStr = document.getElementById("num1").value;
    let bStr = document.getElementById("num2").value;

    let a = Number(aStr)
    let b = Number(bStr)

    let sum = a + b;


    document.getElementById("result").textContent = a + " + " + b + " = " + sum;
})



