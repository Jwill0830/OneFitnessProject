// Resources
//   http://localhost:3000/Exercises

//   Home
//   http://localhost:3000

//pseudo code:
// use get command for json
// iterate through the objects in db.json file
// 

const exerciseUrl = "http://localhost:3000/Exercises"



document.addEventListener('DOMContentLoaded', () => {
    fetch(exerciseUrl)
    .then((resp) => resp.json())
    .then(exerciseData => {
        const exerciseCont = document.getElementById('exercise-container')
        exerciseData.forEach((exerciseObj) => {
            
            const img = document.createElement('img');
            img.src = exerciseObj.image;
            img.id = exerciseObj.id;

            const likeButton = document.createElement('button');
            likeButton.className = 'btn';
            likeButton.innerText = 'Like';
            const span = document.createElement("span")
            span.className = "nums" 
            span.innerText = 0
                
            const image_container = document.createElement("div");
            image_container.append(img, likeButton, span);
            exerciseCont.append(image_container);

            likeButton.addEventListener('click', () => {
                span.innerText++
                const title = document.getElementById('title')
            })

            image_container.addEventListener('mouseover', () => {
                
            })
        })
    
    })
});
const title = document.getElementById('title')
title.addEventListener('mouseover', () => {
    title.textContent = 'ONEFITNESS'
});
const form = document.querySelector('form')
const reviewCont = document.getElementById('form-container')
form.addEventListener('submit',(event) => {
    event.preventDefault()
    const userInput = event.target.review.value
    const div = document.createElement('div')
    div.innerText = userInput
    reviewCont.append(div)
    

    

})

//where is from going to go? => We want the form to go on the side. => create a container for the form. 
//what do we want the form to do? => 
// we want the form to go into the span.innertext 