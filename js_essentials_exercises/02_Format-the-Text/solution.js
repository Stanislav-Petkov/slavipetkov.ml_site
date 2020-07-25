function solve(){
  let wholeParagraphElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  let textInTheParagraph = wholeParagraphElement.innerText;
  let array = textInTheParagraph.split('.');
  let currParagraph = "";
  for(let i = 0; i < array.length; i++){
    let currSentence = document.createTextNode(array[i]);

    if(i % 3 === 0 && currSentence.length > 0){
      //create paragraph
      currParagraph = document.createElement('p');
      //attach current sentence
      currParagraph.appendChild(currSentence);
      //append the paragraph to the output div element
      outputElement.appendChild(currParagraph);
    }
    if(i % 3 !== 0 && currSentence.length > 0){
      // attach sentence to the paragraph
      currParagraph.appendChild(currSentence);
    }
  }
  
}

