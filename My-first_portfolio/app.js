const sections = document.querySelectorAll('.container');
const navBtns = document.querySelectorAll('.controlls');
const navBtn = document.querySelectorAll(".control");
const holeContent = document.querySelector('body');

function pageTransition() {
  holeContent.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      navBtn.forEach(btn => {
        btn.classList.remove("active-btn");
        btn.classList.remove("active");
      });
      e.target.classList.add("active-btn");
      e.target.classList.add("active");
  
      sections.forEach(section =>{
        section.classList.remove("active");
      });
      currnSec = document.getElementById(id)
      currnSec.classList.add("active");
    }
  })
}

pageTransition();


//select skills selectors

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight) - 200) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress;

    });

  }
  if (windowScrollTop < (skillsOffsetTop + skillsOuterHeight - windowHeight) - 390) {

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill => {

      skill.style.width = 0;

    });

  }

};

document.querySelector(".theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
})