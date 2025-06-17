
//Auto text api===============================================================================================================================
var typed = new Typed(".auto-text", {
    strings: ["Apurava Anand", "Software Developer", "Working Professional"],
    typeSpeed: 50,
    backSpeed: 80,
    loop: true
});
//===========================================================================================================================================
// Email's API using====================================================================================================================
let btn = document.getElementById("submitbtn");


(function () {
    emailjs.init({
        publicKey: "csAfktDpTh71vSx7Z",
    });
})();

btn.addEventListener("click", function (event) {
    let para = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        message: document.getElementById("message").value.trim()
    }

    let name1 = document.getElementById("name").value.trim();
    let email1 = document.getElementById("email").value.trim();
    let subject1 = document.getElementById("subject").value.trim();
    let message1 = document.getElementById("message").value.trim();

    if (!name1 || !email1 || !subject1 || !message1) {
        alert("Plz fill the information before submiting.");
        event.preventDefault();
    }
    else {
        emailjs.send("service_m7qoc5h", "template_wp2xt3b", para).then((res) => {
            console.log(res);
            alert("Message sent Sucessfully");
        })
            .catch(err => console.log(err));
    }

});
// =======================================================================================================================================
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

function toggleSubmenu(menuId, iconId) {
    const menu = document.getElementById(menuId);
    const icon = document.getElementById(iconId);
    const isOpen = menu.classList.contains("show");

    document.querySelectorAll(".submenu").forEach(sub => sub.classList.remove("show"));
    document.querySelectorAll(".check-icon").forEach(ic => ic.classList.remove("rotate"));

    if (!isOpen) {
        menu.classList.add("show");
        icon.classList.add("rotate");
    }
}


// =============================================================================================================================
let count_container = document.querySelector('.count-container');
let counterclient = document.querySelector('.counter-client');
let counterproject = document.querySelector('.counter-project');

let counterNum = 0;

const updateCounter = setInterval(function () {
    counterNum++;
    counterclient.textContent = counterNum;

    if (counterNum >= 478) {
        clearInterval(updateCounter);
    }

}, 1);

const projects = setInterval(function () {
    counterNum++;
    counterproject.textContent = counterNum;
    if (counterNum >= 12) {
        clearInterval(projects);
    }
}, 1);
