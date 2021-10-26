/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const dummyParagraph =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. 
Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orcieget mollis. 
Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam
in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. 
Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod`


const numberOfSections = 4


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function creatSectionsArea() {
    let i = 0;

    let sectionsarea = document.querySelector('.sectionsArea');
    let navBarArea = document.querySelector('#navbar__list');
    //let sideBarArea = document.querySelector('#sideBarId');
    for (i = 0; i < numberOfSections; i++) {
        let sectionStructure =
            `<section id="section${i+1}" data-nav="Section ${i+1}" class="">
                 <div class="landing__container">
                     <h2>Section ${i+1}</h2>
                     <p></p>
                 </div>
             </section>`
        let navItem = `<li class='menu__link'><a>Section ${i+1}</a></li>`
            //let sideItem = `<li class='sideBarItemsClass black'><a>Section ${i+1}</a></li>`
        sectionsarea.innerHTML += sectionStructure;
        navBarArea.innerHTML += navItem;
        //sideBarArea.innerHTML += sideItem;
    }
}

function fillSectionParagraphs() {
    let sectionsData = document.querySelectorAll('section p');
    console.log("fillSectionParagraphs called")
    for (let sectionData of sectionsData) {
        sectionData.innerHTML = dummyParagraph;
    }
}

function addingEventListenters() {
    // Scroll to anchor ID using scrollTO event
    const clickableItems = document.querySelectorAll(".menu__link");
    for (let i = 0; i < clickableItems.length; i++) {
        clickableItems[i].addEventListener("click", function() {
            var element_to_scroll_to = document.getElementById(`section${i+1}`);
            element_to_scroll_to.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    window.addEventListener('scroll', function(event) {
        let sections = document.querySelectorAll('section');
        for (let section of sections) {
            if (sectionInView(section)) {
                section.classList.add("your-active-class")
            } else {
                section.classList.remove("your-active-class")
            }
        }
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
function mainFunction() {
    creatSectionsArea();
    fillSectionParagraphs();
    addingEventListenters();
}

// build the nav


// Add class 'active' to section when near top of viewport

function sectionInView(elem) {
    let bounderies = elem.getBoundingClientRect();
    return (
        (bounderies.top >= 0) && (bounderies.left >= 0) &&
        (bounderies.bottom <= (window.innerHeight || document.documentElement.clientHeight)) &&
        (bounderies.right <= (window.innerWidth || document.documentElement.clientWidth))
    );
};



/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active

mainFunction();