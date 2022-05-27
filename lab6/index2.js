let variable = document.getElementById('var');
let colorPicker = document.getElementById('color_picker');
let variable2 = document.getElementById('var2');
let variable4 = document.getElementById('var4');

/* Task2.1 */
variable.addEventListener("mouseover" , () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
     variable.style.backgroundColor = "#" + randomColor;
})
/* Task2.2 */
variable.addEventListener("click" , () => {
    variable.style.backgroundColor = colorPicker.value;
})
/* Task2.3 */
variable.addEventListener("dblclick" , () => {
    variable.style.backgroundColor = colorPicker.value;
    variable2.style.backgroundColor = colorPicker.value;
    variable4.style.backgroundColor = colorPicker.value;
})

