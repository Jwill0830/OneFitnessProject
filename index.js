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
               
            
            })
        })
    })
});
// we want to click a likeButton
// the clickedLikeButton should increase the span containing the number