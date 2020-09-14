const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");

let lastChecked;

function handleCheck(e) {

    let inBetween = false;

        //added lastChecked.checked to fix the bug
        //it will look if the lastCheck is checked before checking all the in between checkboxes
    if(e.shiftKey && this.checked && lastChecked.checked){

        checkboxes.forEach(checkbox => {
            
            if ((checkbox  === this || checkbox === lastChecked) ) {
                inBetween = !inBetween;
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        });

    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));