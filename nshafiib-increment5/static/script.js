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
/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();

 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });

function showForm() {
    document.getElementById("ticketPurchaseForm").style.display = "block";
}

function toggleNav() {
    const nav = document.querySelector('.nav_bar');
    nav.classList.toggle('responsive');
}