
function validate() {
    let q1a1 = document.getElementById('q1a1').checked
    let q1a3 = document.getElementById('q1a3').checked
    let q1a2 = document.getElementById('q1a2').checked
    let q2a1 = document.getElementById('q2a1').checked
    let q2a2 = document.getElementById('q2a2').checked
    let q2a3 = document.getElementById('q2a3').checked
    let q3 = document.getElementById('q3').value


    valid = true;
    if (!q1a1 && !q1a2 && !q1a3) {
        alert("Please answer Question 1.")
        valid = false;
    }
    if (!q2a1 && !q2a2 && !q2a3) {
        alert("Please give at least one answer for Question 2.")
        valid = false;
    }
    if (q3 === '') {
        alert("Please enter an answer for Question 3.")
        valid = false;
    }

    if (valid === true) {
        evalutate(q1a1, q1a2, q1a3, q2a1, q2a2, q2a3, q3)
    }
}

function evalutate(q1a1, q1a2, q1a3, q2a1, q2a2, q2a3, q3) {

    let score = 0;
    if (!q1a1 && !q1a2 && q1a3) {
        score++;
    }
    if (q2a1 && q2a2 && q2a3) {
        score++;
    }
    if (q3.toLowerCase() === 'world wide web') {
        score++;
    }
    alert("Your final score is :" + score + "/3")
}