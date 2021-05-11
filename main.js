if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", mainFunction)
}
else {
    mainFunction()
}



function mainFunction() {   
    
// *************************************************************************
//  Exercise #1
//      Change the color of the text within the button with an id of #change-text-color.
//
//      1.  Select the button with an id of #change-text-color and save 
//          it to a variable named changeColorButton.
//      2.  Add a click event listener to the button with an id #change-text-color.
//      3.  Add a function that will change the text color in the button to black.


    // Solution #1
    // const changeColorButton = document.getElementById("change-text-color");
    // changeColorButton.addEventListener("click", () => {
    //     changeColorButton.style.color = "black";
    // })


    // Solution #2
    // changeColorButton.addEventListener("click", changeColor);
    // function changeColor(el) {
    //     el.target.style.color = "black";
    // }


    // Solution #3
    // const changeColor = (el) => {
    //     el.target.style.color = "black";
    // }




    


// ***************************************************************************
//  Exercise #2
//      When user clicks on the change text color button the text in the button
//      should change to "Hello World".
//
//      1.  Select the button with an id of #change-text-color and save it to a
//          variable named changeTextButton. 
//      2.  Add a click event listener to the button with an id #change-text-color.
//      3.  Add a function that will change the text in the button to "Hello World".

    
    // Solution #1
    // const changeTextButton = document.getElementById("change-text-color");
    // changeTextButton.onclick = function () {
    //     changeTextButton.innerHTML = 'Hello World';
    // }

    // Solution #2
    // changeTextButton.addEventListener("click", () => {
    //     changeTextButton.innerHTML = 'Hello World';
    // })

    //  Solution #3
    //  let changeTextButton = document.getElementById("change-text-color");
    //  changeTextButton.addEventListener("click", () => {
    //  changeTextButton.innerHTML = "Hello World";
    //  })






// ***************************************************************************
//  Exercise #3
//      When user clicks on the subscribe button, an alert box should pop up 
//      with the message "Thank you for subscribing".
//
//      1.  Select the button with an id of #subscribe-button and save it to a 
//          variable named subscribeButton.
//      2.  Add a click event that will display an alert box with the message 
//          "Thank you for subscribing". 


        // Solution #1
        // const subscribeButton = document.getElementById("subscribe-button");
        // subscribeButton.addEventListener("click", () => {
        //     alert("Thank you for subscribing");
        // })

        //Solution #2
        // const subscribeButton = document.getElementById("subscribe-button");
        // subscribeButton.onclick = function () {
        //     alert("Thank you for subscribing");
        // }
    




// ***************************************************************************
//  Exercise #4
//      When user clicks each of the buttons on the card elements with class 
//      name of .card-btn the button should disappear.
//
//      1.  Select the buttons with a class name of .card-btn and save them to a 
//          variable named cardButton.
//      2.  Add a click event to each button that will trigger a function which will cause the 
//          visibility property of the button clicked to be changed to hidden to black. You 
//          should use some sort of loop to add the event listener to each button.

        
        // Solution #1
        // const cardButton = document.querySelectorAll(".card-btn");        
        // cardButton.forEach((cardBtn)  => {
        //     cardBtn.onclick = function() {
        //              cardBtn.style.visibility = "hidden";
        //         }
        // })
        

        // Solution #2
        // let cardButton = document.querySelectorAll(".card-btn");
        // for(let i = 0; i < cardButton.length; i++) {
        //     cardButton[i].addEventListener("click", () => {
        //         cardButton[i].style.visibility = "hidden";
        //     })
        // }







// ***************************************************************************
//  Exercise #5
//      When user enters text in the input field, if the letter "h" is entered in 
//      the input field, display an alert box with the text from the input field. 
//
//      1.  Select the input field with a class of .input-field and save it to a 
//          variable named userInput.
//      2.  Add a keyup event that checks the value of the user input. If value contains 
//          the letter "h", display alert box. The .includes method may be usefull here.

        // Solution #1
        // const userInput = document.getElementsByClassName("input-field")[0];
        // userInput.addEventListener("keyup", () => {
        //     if(userInput.value.includes("h")) {
        //         alert(userInput.value);
        //     }
        // })


        // Solution #2
        // let userInput = document.getElementsByClassName("input-field")[0];
        // userInput.addEventListener("keyup", (el) => {
        //     if(el.target.value.includes("h")) {
        //         alert(el.target.value);
        //     }
        // })

    





// ****************************************************************************
//  Exercise #6
//      When user moves mouse over the words "Subscribe To Our Newletter" the text color 
//      should change to red. When user moves mouse away the text color should change back to white.
//
//      1.  Select the h3 element and save it to a variable named newsletterHeader.
//      2.  Add a mouseover event that will change the color of the text in the h3 element to red.
//      3.  Add a mouseout event that will change the color of the text in the h3 element back to white.


        // Solution #1
        // const newsletterHeader = document.getElementsByTagName("H3")[0];
        // newsletterHeader.addEventListener("mouseover", function() {
        //     newsletterHeader.style.color = "red";
        // })
        // newsletterHeader.addEventListener("mouseout", function() {
        //     newsletterHeader.style.color = "white";
        // })
       


        // Solution #2
        // let newsletterHeader = document.querySelector("h3");
        // newsletterHeader.addEventListener("mouseover", () => {
        //     newsletterHeader.style.color = "red";
        // })
        // newsletterHeader.addEventListener("mouseout", () => {
        //     newsletterHeader.style.color = "white";
        // })

 




    


// *****************************************************************************
//  Exercise #7
//      When user clicks on the <Add div> button a new div element should be created 
//      with a <p> tag containing some text.
//      1.  Select the button with an id of #add-element and save it to a variable named addDiv.
//      2.  Select the div container with an id of #add-element-section and save it to a 
//          variable named parentDiv so that you are able to append your new div to the page.
//      3.  Add a click event to the addDiv button which will run a function creating a new div
//          with a <p> tag containing some text.


        // Solution #1
        // const addDiv = document.getElementById("add-element");
        // const parentDiv = document.getElementById("add-element-section");
        // addDiv.addEventListener("click", () => {
        //     const newDiv = document.createElement("div");
        //     newDiv.innerHTML = "<p>Hello World</p>";
        //     parentDiv.appendChild(newDiv);
        // })


}