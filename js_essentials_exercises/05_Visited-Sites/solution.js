function solve() {
    let exerciseElement = document.getElementById("exercise");
    let arrayOfAElements = exerciseElement.querySelectorAll("a");// get all a elements in the exercise
    let arrayOfSpanElements = exerciseElement.querySelectorAll("span");// get all span elements in the exercise

    for (let i = 0; i < arrayOfAElements.length; i++) {
        let aContent = arrayOfAElements[i].innerText;
        let spanContent = arrayOfSpanElements[i].innerText;
        let spanContentSplit = spanContent.split(" ");
        let counter = Number(spanContentSplit[1]);

        let currAElement = arrayOfAElements[i]; 
        if(aContent === "SoftUni"){
            currAElement.addEventListener('click',() =>{
                arrayOfSpanElements[i].innerText = (spanContentSplit[0] + " " + ++counter +  " " + spanContentSplit[2]);
            })
        }
        if (aContent === "Google") {
            currAElement.addEventListener('click',() =>{
                arrayOfSpanElements[i].innerText = (spanContentSplit[0] + " " + ++counter +  " " + spanContentSplit[2]);
            })
        }
        if (aContent === "YouTube") {
            currAElement.addEventListener('click',() =>{
                arrayOfSpanElements[i].innerText = (spanContentSplit[0] + " " + ++counter +  " " + spanContentSplit[2]);
            })
        }
        if (aContent === "Wikipedia") {
            currAElement.addEventListener('click',() =>{
                arrayOfSpanElements[i].innerText = (spanContentSplit[0] + " " + ++counter +  " " + spanContentSplit[2]);
            })
        }
        if (aContent === "Gmail") {
            currAElement.addEventListener('click',() =>{
                arrayOfSpanElements[i].innerText = (spanContentSplit[0] + " " + ++counter +  " " + spanContentSplit[2]);
            })
        }
        if (aContent === "Stackoverflow") {
            currAElement.addEventListener('click',() =>{
                arrayOfSpanElements[i].innerText = (spanContentSplit[0] + " " + ++counter +  " " + spanContentSplit[2]);
            })
        }
    }

}