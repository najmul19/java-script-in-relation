// console.log("hello JS")
// console.log(document)
const section = document.querySelectorAll('section')
// console.log(section);
for(const sect of section){
    sect.style.border = '2px solid steelblue'
    sect.style.marginBottom = '5px'
    sect.style.borderRadius = '15px'
    sect.style.paddingLeft='7px'
    sect.style.backgroundColor='lightGray'
}
// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow'
const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg')
placesContainer.classList.remove('large-text')