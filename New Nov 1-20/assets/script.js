// Callenge 1; Your Age in Days

function ageInDays() {
    var birthday = prompt('What year were you born... Good friend?');
    var ageInDayss = (2020 - birthday) * 356;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

function myFunction() {
    var help = document.getElementById("myDIV");
    if (help.style.display === "none") {
        help.style.display = "block";
    } else {
        help.style.display = "none";
    }
}