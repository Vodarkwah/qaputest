

function SelectRedirect() {
switch (document.getElementById('colleges').value) {
    case "COE":
        window.location = "./COE.html";
        break;

    case "COS":
        window.location = "./COS.html";
        break;

    case "CANR":
        window.location = "./CANR.html";
        break;
    case "COHSS":
        window.location = "./COHSS.html";
        break;

    case "FOSS":
        window.location = "./FOSS.html";
        break;
    default:
        window.location = "./qapu.html"; // if no selection matches then redirected to home page
        break;}}

var submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();
    SelectRedirect();

});
