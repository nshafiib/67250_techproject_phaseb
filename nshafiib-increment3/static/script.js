var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var A = "Hello ";
var B = "world!";
var C = A + B
console.log(C)

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else {
    if (C.length < z) {
        console.log(z);
    } else {
        console.log("good job!");
    }
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Found the banana");
        }
    }
}

//findTheBanana(L1);
//findTheBanana(L2);

function findTheBananaForEach(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Found the banana");
        }
    });
};

//findTheBananaForEach(L1);
//findTheBananaForEach(L2);

var now = new Date();
var hour = now.getHours();

function greeting(hours) {
    var newGreeting = document.getElementById("greeting");
    if (newGreeting) {
        if (hours < 5 || hours >= 20) {
            newGreeting.innerHTML = "Good Night";
        } else if (hours < 12) {
            newGreeting.innerHTML = "Good Morning";
        } else if (hours < 18) {
            newGreeting.innerHTML = "Good Afternoon";
        } else {
            newGreeting.innerHTML = "Good Evening";
        }
    }
}

greeting(hour);

function addYear() {
    var newYear = document.getElementById("copyYear");
    if (newYear) {
        newYear.innerHTML = new Date().getFullYear();
    }
}