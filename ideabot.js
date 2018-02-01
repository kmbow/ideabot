var inquirer = require('inquirer');
var namesave = "";
const simpletts = require('simpletts');

function bot_on(){     
    simpletts.read({ text: "IdeaBot on! How can I help?", volume: 75, speed: 60 });
    var questions = [
        {
          type: 'input',
          name: 'greet',
          message: "IdeaBot on! How can I help?"
        },
        
    ];

    inquirer.prompt(questions).then(answers => {
        if(answers.greet==="how are you?"){
            console.log("Doing very good! Thanks for asking");
            simpletts.read({ text: "Doing very good! Thanks for asking", volume: 75, speed: 60 });
            setTimeout(function(){bot_on(); ; }, 1000);
        }
        else if (answers.greet==="do you know me"&& namesave===""){
            myname();
            
        }
        else if (answers.greet==="do you know me?"&& namesave.length>1){
            console.log("Yes! your name is "+namesave+ " :D");
            simpletts.read({ text: "Yes! your name is "+ namesave , volume: 75, speed: 60 });
            setTimeout(function(){bot_on(); ; }, 1000);
        }
        else{
            console.log(":( sorry I'm not smart enough yet to answer that.For now just ask me 'how are you?' or 'do you know me?' ");
            simpletts.read({ text: "sorry I'm not smart enough yet to answer that.For now just ask me 'how are you?' or 'do you know me?'", volume: 75, speed: 60 });
            setTimeout(function(){bot_on(); ; }, 1000);
           
        }
        
    });
}

function myname(){
    simpletts.read({ text: "No, what's your name?", volume: 75, speed: 60 });
    var question2 = [
        {
          type: 'input',
          name: 'name',
          message: "No :(, what's your name?"
        },
        
    ];
    inquirer.prompt(question2).then(answers => {
        namesave = answers.name;
        console.log("Noted!, hi " +answers.name + " :D");
        simpletts.read({ text: "Noted!, hi " +answers.name  , volume: 75, speed: 60 });
        setTimeout(function(){bot_on(); ; }, 1000);
        
        
        
    });

}

bot_on(); 


  