// adding an event listener
//document.querySelector("button").addEventListener("click",handleClick);// function must be without () so it 
// des not trigger immediately, it waits for an event to happen. 
// we can also add an anonymous function

//function handleClick(){
//    alert("I got clicked!");
//}

// with anonymous fuction to all the buttons

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for( var i = 0 ; i <= numberOfDrumButtons; i++){// try to use the class or id
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        this;
        
    });
}


//var audio = new Audio("sounds/tom-1.mp3");
//        audio.play();