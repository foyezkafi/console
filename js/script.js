// const age = prompt('Apner boyos koto?')
// const income = prompt('apner sellary koto hole apni ay job niben?')


// if(age >=20 && age <=50){
//     if(income <=25000){
//         console.log('ok job e apnake newa holo')
//     }
//     else{
//         console.log('apni onk besi chaitechen')
//     }
    
// }
// else{
//     console.log('apner boyos ta aro besi hole vhalo hoto')
// }


// const myButton = document.getElementById('#clikbutton')

//     console.log('myButton')
// myButton.addEventListener('click',()=>{
//     console.log('kemon asen apni?')
// })

// -------for loop-----------

// for ( let i=1; i<=5; i++){
//     console.log("amar nam foyez kafi:", i);

// }


// -----------while loop------
// let i = 1;
// while (i <= 5) {
//   console.log("Count:", i);
//   i++;
// }

// --------------do while loop---------------

// let j = 1;
// do {
//   console.log("Step:", j);
//   j++;
// } while (j <= 5);




// let gpa = prompt('apner ssc te GPA koto?')
// let mark = prompt('apner g-math and h-math e total mark koto')

// if(gpa ==5){
//     console.log('ok thik ase')
//     if(mark >=170){
//         console.log('okh')
//     }
//     else('mark ta 170 er besi hole newa jeto')
// }
// else{
//     console.log('apner gpa 5 hole newa jeto')
// }



// const alu = (alu , pera2 , country)=>{
    

//     console.log(alu)
//     console.log(pera2)
//     console.log(`i am living in ${country}`)

// }

// alu('lalalallalala' , 'tumi k?' , 'bangladesh')




// const alu = (a , b)=>{
    

//     console.log(a+b)
 
   

// }

// alu(10 , 30)


// const button = document.querySelector('button')
// const h1 = document.querySelector('h1')




// button.addEventListener('click' , ()=>{
//     console.log('click hoise')
//     h1.style ='color:red;'
// })






// task 3
// // ----------dom
// let main_box = document.querySelector('div#main_box')
// let yellowbutton = document.querySelector('button#yellow')
// let greenbutton = document.querySelector('button#green')
// let pinkbutton = document.querySelector('button#pink')
// let purple = document.querySelector('button#purple')


// yellowbutton.addEventListener('click' , ()=>{
//     main_box.style ='background-color:yellow'
// })
// greenbutton.addEventListener('click' , ()=>{
//     main_box.style ='background-color:green'
// })
// pinkbutton.addEventListener('click' , ()=>{
//     main_box.style ='background-color:pink'
// })
// purple.addEventListener('click' , ()=>{
//     main_box.style ='background-color:purple'
// })






// task 4



// let quantityDisplay = document.getElementById('quantityNumber')
// let quantityNumber = Number(document.getElementById('quantityNumber').innerText)
// let addButton = document.getElementById('addButton')
// let minusButton = document.getElementById('minusButton')

// addButton.addEventListener('click', ()=>{
//     quantityNumber++
//     quantityDisplay.innerText = quantityNumber
// })

// minusButton.addEventListener('click', ()=>{
//     if(quantityNumber >= 1){
//         quantityNumber--
//         quantityDisplay.innerText = quantityNumber
//     }
// })
    



// const input = document.getElementById("nameInput");
// const button = document.getElementById("submitBtn");
// const message = document.getElementById("message");

// button.addEventListener("click", () => {
//   const name = input.value.trim(); // remove extra spaces
//   if (name === "") {
//     message.textContent = "Input can't be empty";
//     message.className = "error";
//   } else {
//     message.textContent = `My name is ${name}`;
//     message.className = "success";
//   }
// });

// task 6

// const showBtn = document.getElementById("showBtn");
// const userInput = document.getElementById("userInput");
// const displayText = document.getElementById("displayText");
// const colorButtons = document.getElementById("colorButtons");
// const errorMsg = document.getElementById("errorMsg");

// showBtn.addEventListener("click", () => {
//   const text = userInput.value.trim();

//   if (text === "") {
//     errorMsg.textContent = "Input can't be empty";
//     displayText.textContent = "";
//     colorButtons.classList.add("hidden");
//     return;
//   }

//   errorMsg.textContent = "";
//   displayText.textContent = text;
//   colorButtons.classList.remove("hidden");
// });

// colorButtons.addEventListener("click", (e) => {
//   if (e.target.classList.contains("color-btn")) {
//     if (e.target.classList.contains("red")) {
//       displayText.style.color = "red";
//     } else if (e.target.classList.contains("blue")) {
//       displayText.style.color = "blue";
//     } else if (e.target.classList.contains("green")) {
//       displayText.style.color = "green";
//     }
//   }
// });

// task 7

// const input = document.getElementById("numberInput");
// const generateBtn = document.getElementById("generateBtn");
// const tableDisplay = document.getElementById("tableDisplay");
// const errorMsg = document.getElementById("errorMsg");

// generateBtn.addEventListener("click", () => {
//   const num = parseInt(input.value);

//   // Validate input
//   if (isNaN(num) || num <= 0) {
//     errorMsg.textContent = "Please enter a valid positive number!";
//     tableDisplay.innerHTML = "";
//     return;
//   }

//   errorMsg.textContent = "";

//   // Generate multiplication table
//   let tableHTML = `<h3>Multiplication Table of ${num}</h3>`;
//   for (let i = 1; i <= 10; i++) {
//     tableHTML += `<p>${num} × ${i} = ${num * i}</p>`;
//   }

//   // Display table
//   tableDisplay.innerHTML = tableHTML;
// });



















