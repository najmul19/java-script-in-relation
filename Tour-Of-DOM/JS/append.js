// where to add
const placesList = document.getElementById('places-list')
// what to be added
const li=document.createElement('li');
li.innerText = 'kashbon';
// add the child
placesList.appendChild(li)


// where
const mainCOntainer = document.getElementById('main-container')
// what
const sect = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'food list'
sect.appendChild(h1);
const ul = document.createElement('ul')
const li1= document.createElement('li')
li1.innerText = 'biriyani'
ul.appendChild(li1)

const li2= document.createElement('li')
li2.innerText = 'burhani'
ul.appendChild(li2)

const li3= document.createElement('li')
li3.innerText = 'salad'
ul.appendChild(li3)
sect.appendChild(ul)

mainCOntainer.appendChild(sect)


// set inner html derectly
const sectionDress = document.createElement('section')
sectionDress.innerHTML=`
<h1>My dress section</h1>
<ul>
    <li>T-Shirt</li>
    <li>lungi</li>
    <li>pant</li>
</ul>
`

mainCOntainer.appendChild(sectionDress)