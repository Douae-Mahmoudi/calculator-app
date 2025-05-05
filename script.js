document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector("input[name='display']");
    const buttons = document.querySelectorAll("input[type='button']");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;

            if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Erreur";
                }
            } else if (value === "AC") {
                display.value = "";
            } else if (value === "DE") {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += value;
            }

            
            const audio = new Audio("SON/CMPTKey_Souris raspberry simple clic (ID 1735)_LS.wav");
            audio.play();
          
        });
    });
});
