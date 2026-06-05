//Show Rescate Animal at the beginning
document.getElementById("rescateanimal").classList.add("active");

//get all buttons
const raButton = document.getElementById("ra");
const ssButton = document.getElementById("ss");
const modButton = document.getElementById("mod");

//get all projects
const raProject = document.getElementById("rescateanimal");
const ssProject = document.getElementById("supersimulator");
const modProject = document.getElementById("modeling");

//show project and hide others
function showProject(projectToShow){
    //hide all
    raProject.classList.remove("active");
    ssProject.classList.remove("active");
    modProject.classList.remove("active");

    raButton.classList.remove("active");
    ssButton.classList.remove("active");
    modButton.classList.remove("active");
    
    //show clicked
    projectToShow.classList.add("active");
    
    //higlight clicked button
    if(projectToShow === raProject) raButton.classList.add("active");
    if(projectToShow === ssProject) ssButton.classList.add("active");
    if(projectToShow === modProject) modButton.classList.add("active");    
}

//click handlers
raButton.addEventListener("click", function(){
    showProject(raProject);
});
ssButton.addEventListener("click", function(){
    showProject(ssProject);
});
modButton.addEventListener("click", function(){
    showProject(modProject);
});