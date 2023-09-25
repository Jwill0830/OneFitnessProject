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
    fetch (exerciseUrl)
    .then((resp) => resp.json())
    .then(exerciseData => {
        const excerciseCont = document.getElementById('exercise-container')
        exerciseData.forEach((exerciseObj) =>{
            const list = document.createElement('img')
            list.src = exerciseObj.image
            list.id = exerciseObj.id
            excerciseCont.append(list)
        })
    })
})
