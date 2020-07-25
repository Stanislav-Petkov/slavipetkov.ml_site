
function solve() {
	let createTitleElement = document.getElementById('createTitle');
	let createContentElement = document.getElementById('createContent'); // Get the whole element

	let createTitleValue = createTitleElement.value;
	let createContentValue = createContentElement.value; // Gets only the value written in the input field

	if(createTitleValue && createContentValue){ // if both are not empty strings, it gives true
		let titleElement = document.createElement('h3');
		// textContent - gives text content to the h3 title element
		// createTitleValue is the value that was taken from the input field and it is set to the
		// titleElement
		titleElement.textContent = createTitleValue; 

		// attaches the  input value of createContentValue to the paragraph content element
		let contentElement = document.createElement('p');
		contentElement.textContent = createContentValue;

		let articleElement = document.createElement('article');
		articleElement.appendChild(titleElement);// attached the heading title to the article element
		articleElement.appendChild(contentElement); // attaches the paragraph to the article element
	
		// get the articles element from the html
		let articlesElement = document.getElementById('articles');
		articlesElement.appendChild(articleElement); // attaches the article to the articles element
		
		createTitleElement.value = ''; // the input field of the whole element becomes empty
		createContentElement.value = '';
	}
}




