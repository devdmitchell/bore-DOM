// 1. Alter the text color of the paragraph to a shade of aqua.
const myParagraph = document.querySelector("p");
myParagraph.style.color = "aqua";

// 2. Adjust the font size of the heading to 42 pixels.
const myHeading = document.querySelector("hi");
myHeading.style.fontSize = "42px";

// document.querySelector("h1").style.fontSize = "42px";

// 3. Replace the text in the paragraph with the new Lorem Ipsum content.
paragraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices.";

// 4. Reduce the opacity of the 13th item to 30% transparency.
const list13 = document.getElementsById("item-13")
list13.style.opacity = "30%";

// 5. Modify the text of the 3rd item to read "Greetings!"
document.getElementById("item-3").innerHTML="Greetings!";

// 6. Update the image below the list to display the new image.
const myNewImg = document.querySelector("img").
myNewImg.src = 
"https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=)."

// 7. Resize the new image to a height of 250 pixels.
myNewImg.style.height = "250px";

// 8. Integrate an additional image using innerHTML below the existing image.
const thirdPick = document.createElement("img");
const imageContainer = document.querySelector(".imgDiv");
thirdPick.src = 
"https://images.app.goo.gl/b4iXQmhSXVdQRT7h9"

// imageContainer.innerHTML += 
// "https://images.app.goo.gl/b4iXQmhSXVdQRT7h9"


// imageContainer.innerHTML += thirdPick.outerHTML;

// 9. Adjust the height of the new image to 280 pixels programmatically
const newHeight = document.querySelectorAll('img')[2];
newHeight.style.height= "280px";

// 10. Append a 17th <li> element to the list using innerHTML.
const newListItem = document.createElement('li');
const myUl = document.querySelector("ul");
myUl.appendChild(newListItem);

// 11. Assign the same class as the other list items to the new <li> element using JavaScript.
const item16 = document.getElementById("item-16");
item16.className = 'item';

// 12. Populate the new <li> with the text "Never gonna give you up."
newListItem.textContent = "Never gonna give you up."