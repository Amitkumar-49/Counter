// setting initial count 
let count = 0;

// selecting the value and buttons 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach( function (btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("-D")){
            count--;
        }
        else if(styles.contains("-I")){
            count++;
        }
        else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
         if(count == 0){
            value.style.color = "black";
        }


        value.textContent = count;
    
        
    })
});
