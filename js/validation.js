function quizOne() {
    return quizOneVal();        
}
function quizTwo() {
    return quizTwoVal();        
}
function quizThree() {
    return quizThreeVal();        
}
function quizFour() {
    return quizFourVal();        
}
function quizFive() {
    return quizFiveVal();        
}
function quizSix() {
    return quizSixVal();        
}
function quizSeven() {
    return quizSevenVal();        
}

function quizOneVal() {              
    var questionOne = document.getElementById('questionOne').value;
    if (!questionOne) {
        alert("Question is mandatory!");
        window.location.href = "index.html"
        return false;
    }
    return true;
} 

function quizTwoVal() {              
    var questionTwo = document.getElementById('questionTwo').value;
    if (!questionTwo) {
        alert("Question is mandatory!");
        window.location.href = "index.html"
        return false;
    }
    return true;
} 
function quizThreeVal() {              
    var questionThree = document.getElementById('questionThree').value;
    if (!questionThree) {
        alert("Question is mandatory!");
        window.location.href = "index.html"
        return false;
    }
    return true;
} 
function quizFourVal() {              
    var questionFour = document.getElementById('questionFour').value;
    if (!questionFour) {
        alert("Question is mandatory!");
        window.location.href = "index.html"
        return false;
    }
    return true;
} 

function quizFiveVal() {              
    var questionFour = document.getElementById('questionFour').value;
    if (!questionFour) {
        alert("Question is mandatory!");
        window.location.href = "index.html"
        return false;
    }
    return true;
} 
function quizSixVal() {              
    var questionFour = document.getElementById('questionFour').value;
    if (!questionFour) {
        alert("Question is mandatory!");
        window.location.href = "index.html"
        return false;
    }
    return true;
} 
function quizSevenVal() {              
    var questionFour = document.getElementById('questionFour').value;
    if (!questionFour) {
        alert("Question is mandatory!");
        window.location.href = "index.html"
        return false;
    }
    return true;
} 
