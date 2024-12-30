var z=document.querySelectorAll(".drum");
for(let i=0; i<z.length; i++){
    z[i].addEventListener("click",function(){
        var Button=this.innerHTML;
        
        switch (Button) {
            case 'w':
                var tom1=new Audio("./sounds/tom-1.mp3")
                tom1.play();
                break;

            case "a":
                var tom2=new Audio("./sounds/tom-2.mp3")
                tom2.play();
                break;
            case "s":
                var tom3=new Audio("./sounds/tom-3.mp3")
                tom3.play();
                break;
            case "d":
                var tom4=new Audio("./sounds/tom-4.mp3")
                tom4.play();
                break;
            case "j":
                var snare=new Audio("./sounds/snare.mp3")
                snare.play();
                break;
                
            case "k":
                var crash=new Audio("./sounds/crash.mp3")
                crash.play();
                break;
            case "l":
                var kick=new Audio("./sounds/kick-bass.mp3")
                kick.play();
                break;
        
            default:
                alert("wrong key");
                break;
        }
        button_animation(Button);
        
    });
}
document.addEventListener("keypress",function(event){
    var pressed_key=event.key;
    switch (pressed_key) {
        case 'w':
            var tom1=new Audio("./sounds/tom-1.mp3")
            tom1.play();
            break;

        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var snare=new Audio("./sounds/snare.mp3")
            snare.play();
            break;
            
        case "k":
            var crash=new Audio("./sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            var kick=new Audio("./sounds/kick-bass.mp3")
            kick.play();
            break;
    
        default:
            alert("wrong keys");
            break;
    }
    button_animation(event.key);

});

function button_animation(currentkey){
    var new_animation=document.querySelector("."+currentkey)
    new_animation.classList.add("pressed");
    setTimeout(function(){
        new_animation.classList.remove("pressed")
    },100);
}
