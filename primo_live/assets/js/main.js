
const ulElement = document.createElement("ul");
console.log(ulElement);

const bodyElement = document.querySelector("body");

bodyElement.append(ulElement);

for ( let i = 0; i < 10; i++) {
    console.log(i);
    const liElement = document.createElement("li");
    console.log(liElement);

    liElement.append(i);
    console.log(liElement);

    ulElement.append(liElement);
    console.log(ulElement);


}