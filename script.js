//function to open accordions xd
function toggleAccordion(header) {
    const body = header.nextElementSibling;
    const icon = header.querySelector(".toggle-icon");
    
    body.classList.toggle("show");
    icon.textContent = body.classList.contains("show") ? "−" : "+";
}

/* MAIN SECTION TOGGLE */
function toggleMainSection(section) {
    // Hide all main sections
    document.getElementById('section-3d').classList.remove('active');
    document.getElementById('section-vr').classList.remove('active');
    document.getElementById('section-art').classList.remove('active');
    
    // Remove active class from all main buttons
    document.getElementById('btn-3d').classList.remove('active');
    document.getElementById('btn-vr').classList.remove('active');
    document.getElementById('btn-art').classList.remove('active');
    
    // Show selected section
    document.getElementById('section-' + section).classList.add('active');
    document.getElementById('btn-' + section).classList.add('active');
}

/* VR PROJECTS TOGGLE */
function toggleVRProject(project) {
    // Hide all VR galleries
    document.getElementById('vr-rescate').style.display = 'none';
    document.getElementById('vr-simulator').style.display = 'none';
    document.getElementById('vr-hands').style.display = 'none';
    
    // Remove active class from all project buttons
    document.getElementById('btn-ra').classList.remove('active');
    document.getElementById('btn-ss').classList.remove('active');
    document.getElementById('btn-hands').classList.remove('active');
    
    // Show selected project
    if (project === 'rescate') {
        document.getElementById('vr-rescate').style.display = 'flex';
        document.getElementById('btn-ra').classList.add('active');
    } else if (project === 'simulator') {
        document.getElementById('vr-simulator').style.display = 'flex';
        document.getElementById('btn-ss').classList.add('active');
    } else if (project === 'hands') {
        document.getElementById('vr-hands').style.display = 'flex';
        document.getElementById('btn-hands').classList.add('active');
    }
}

/* CONCEPT ART PROJECTS TOGGLE */
function toggleConceptProject(project) {
    // Hide all concept galleries
    document.getElementById('concept-rescate').style.display = 'none';
    document.getElementById('concept-simulator').style.display = 'none';
    document.getElementById('concept-hands').style.display = 'none';
    
    // Remove active class from all project buttons
    document.getElementById('btn-ca-ra').classList.remove('active');
    document.getElementById('btn-ca-ss').classList.remove('active');
    document.getElementById('btn-ca-vr-hands').classList.remove('active');
    
    // Show selected project
    if (project === 'rescate') {
        document.getElementById('concept-rescate').style.display = 'flex';
        document.getElementById('btn-ca-ra').classList.add('active');
    } else if (project === 'simulator') {
        document.getElementById('concept-simulator').style.display = 'flex';
        document.getElementById('btn-ca-ss').classList.add('active');
    } else if (project === 'hands') {
        document.getElementById('concept-hands').style.display = 'flex';
        document.getElementById('btn-ca-vr-hands').classList.add('active');
    }
}