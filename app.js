const classes = document.querySelector("#classes");
const attended = document.querySelector("#attended");
const button = document.querySelector("#btn");
const txt = document.querySelector("#txt");

button.addEventListener('click', function () {
    let var1 = parseInt(classes.value);
    let var2 = parseInt(attended.value);
    let ratio = var2 / var1;
    // console.log(ratio)
    let sum = 0;
    //need to run while loop
    if (ratio >= 0.75) {
        let text1 = `Your attendance is already ${(ratio * 100).toFixed(2)}%`;
        txt.classList.add('text-change');
        txt.innerHTML = text1;
        console.log("Your attendance is already greater than equal to 75%");
    }
    else {
        let n = 1;
        while (n == 1) {
            var1++;
            var2++;
            ratio = (var2 / var1);
        if (ratio >= 0.75) {
            n = 2;
            break;
        }
        else {
            sum += 1;
        }
    }
    let text2 = `Oops your attendance is below 75%...<br>Days required to attend: ${sum+1}`;
    // txt.classList.add('text-change1');
    txt.innerHTML = text2;
    console.log("Number of days: ", sum+1);
    }
})