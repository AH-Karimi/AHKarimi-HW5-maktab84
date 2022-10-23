//first example function
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
    }
    //change to arrow function
   let ask= (question,yes,no)=>{
    if (confirm(question)) yes();
    else no();
    }
// second example function
    ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
    );
    // change to arrow function
    ask(
        "Do you agree?",
        ()=> { alert("You agreed."); },
        ()=> { alert("You canceled the execution."); }
        );