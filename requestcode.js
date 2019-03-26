const axios = require("axios");

// FIRST API :::::::::::::::::::::::::::::::::::::::::::

const url = "http://saral.navgurukul.org/api";

const coursesUrl = url + "/courses";

axios.get(coursesUrl).then(response => {

    const availableCourses = response.data.availableCourses;

    for(let i = 0; i < availableCourses.length; i++){

        let course = availableCourses[i];

        console.log("-------------------------");

        console.log(i+1,"Course Name", course.name);
        
        // console.log(i+1,"Course Id", course.id);
   
    }
}).then()


// SECOND API :::::::::::::::::::::::::::::::::::::::::

let exercises = "http://saral.navgurukul.org/api/courses/76/exercises";


// let exercises_id_list=[]

axios.get(exercises).then(response => {
    
  
    const availableExercises = response.data.data;
       
    for(let i = 0; i < availableExercises.length; i++){

        let ex = availableExercises[i];
        
        console.log(i+1,"Exercises Name", ex.name);
        
        console.log(ex.slug)
        // console.log(i+1,"Exercises Id", ex.id);
        // exercises_id_list.push(ex.id)
        
    }
    // console.log(exercises_id_list)
}).then()

// THARD API ::::::::::::::::::::::::::::::::::::::::::::::::::



let slug_url="http://saral.navgurukul.org/api/courses/43/exercise/getBySlug"

const config = {
    "params": {
        "slug":"web-scraping__task12",
    }
}
axios.get(slug_url, config).then(response => {
    
    const slug_ex = response.data.content;
    
    console.log(slug_ex)

});
