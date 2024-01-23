
// window.addEventListener("keydown", function (e) {
//     if (e.key === "Enter") {  
//         div.innerHTML = "hello"
//     }
//   });

//    function validate(e) {
//     var text = e.target.value;
//     alert("text");
//   }

// $('#command')
// .append('my DOM manupulation skills dont seem like a big deal when using jquery')
// .css('color', 'red').addClass('myclass');

 	

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        var input = document.getElementById("entercmd").value;
        $('<div class="command"> <h1 class="username">guest@johns-portfolio</h1><h1 class="location">:~$</h1><div class="inputcmd"><p class="entercmd">'+input+'</p></div></div>').insertBefore("#command");
        $('#entercmd').val("");
        $('.terminaltext').scrollTop(100000);

        switch (input) {
            case "help":
                $('<div class="output">help, aboutme, resume, clear, date, pwd, github, email, linkedin<br>(Please note that all commands are case sensitive.)</div>').insertBefore('#command');
                break;
        
            case "resume":
                $('<div class="output"><a href="images/Resume.jpg" target="_blank">Click here if you are not automatically redirected.</a></div>').insertBefore('#command');
                window.open('images/Resume.jpg', '_blank');
                break;

            case "clear":
                $('.command,.output').remove();
                $('<div class="command" id="command"><h1 class="username">guest@johns-portfolio</h1><h1 class="location">:~$</h1><div class="inputcmd"><input class="entercmd" type="text" name="entercmd" id="entercmd" autofocus></div></div>').insertAfter('.help');
                $('#entercmd').focus();
                break;

            case "date":
                $('<div class="output">'+currentdate+'</div>').insertBefore('#command');
                break;

            // case "echo":
            //     break;

            case "pwd":
                $('<div class="output">/home/guest</div>').insertBefore('#command');
                break;

             case "email":
                $('<div class="output"><a href="mailto:john.t.machado@gmail.com" target="_blank">Click here if you are not automatically redirected.</a></div>').insertBefore('#command');
                window.location.href = "mailto:john.t.machado@gmail.com";
                 break;

            case "github":
                $('<div class="output"><a href="https://github.com/john-machado" target="_blank">Click here if you are not automatically redirected.</a></div>').insertBefore('#command');
                window.open('https://github.com/john-machado', '_blank');
                break;

            case "linkedin":
                $('<div class="output"><a href="https://www.linkedin.com/in/john-t-machado/" target="_blank">Click here if you are not automatically redirected.</a></div>').insertBefore('#command');
                window.open('https://www.linkedin.com/in/john-t-machado/', '_blank');
                break;
                
            case "aboutme":
                $("<div class='output'>Hi, I'm John Machado. I am an aspiring Cybersecurity professional with problem-solving and troubleshooting skills. I have a Bachelor's degree in Computer science and I am actively looking for an entry level role in Networking and Security.</div>").insertBefore('#command');
                break;
            default:
                $('<div class="output">'+input+' : command not found</div>').insertBefore('#command');
            break;
        }
        
    
    }
});

var currentdate = new Date(); 
    var datetime = "Now: " + currentdate.getDate() + "/"
                           + (currentdate.getMonth()+1)  + "/" 
                           + currentdate.getFullYear() + " @ "  
                           + currentdate.getHours() + ":"  
                           + currentdate.getMinutes() + ":" 
                           + currentdate.getSeconds();
