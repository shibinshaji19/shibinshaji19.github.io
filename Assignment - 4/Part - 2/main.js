const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']


/* Declaring the alternative text for each image file */
const object = {'pic1.jpg': 'an eye','pic2.jpg':'oyster','pic3.jpg':'flower','pic4.jpg':'painting','pic5.jpg':'butterfly'}
/* Looping through images */

for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    
    newImage.setAttribute('src', 'images/' + pictures[i]);  
    newImage.setAttribute('alt', object[pictures[i]]);      

    thumbBar.appendChild(newImage); 

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', newImage.src);  
        displayedImage.setAttribute('alt', newImage.alt);  
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
