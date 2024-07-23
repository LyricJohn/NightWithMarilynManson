const colourThemes = [
    "#8b0000, var(--midRed), #000000", 
    "var(--turq), var(--midTurq), #000000"
]

const patternThemes = [
    "linear-gradient(135deg, var(--hCBlack) 25%, transparent 25%) -50px 0",
    "linear-gradient(135deg, var(--hCBlack) 25%, transparent 25%) -50px 0, linear-gradient(225deg,  var(--hCBlack) 25%, transparent 25%) -50px 0",
    "linear-gradient(135deg, var(--hCBlack) 25%, transparent 25%) -50px 0, linear-gradient(225deg,  var(--hCBlack) 25%, transparent 25%) -50px 0, linear-gradient(315deg,  var(--hCBlack) 25%, transparent 25%)",
    "linear-gradient(135deg, var(--hCBlack) 25%, transparent 25%) -50px 0, linear-gradient(225deg,  var(--hCBlack) 25%, transparent 25%) -50px 0, linear-gradient(315deg,  var(--hCBlack) 25%, transparent 25%), linear-gradient(45deg,  var(--hCBlack) 25%, transparent 25%)",
    "linear-gradient(135deg, black 25%, transparent 25%)", 
    "linear-gradient(135deg, var(--hCBlack) 25%, transparent 25%)",
    "linear-gradient(var(--hCBlack) 2%, transparent 2%)",
    "linear-gradient(15deg, var(--hCBlack) 2%, transparent 2%) -50px 25px, linear-gradient(15deg, var(--hCBlack) 2%, transparent 2%)",
    "linear-gradient(15deg, var(--hCBlack) 10%, transparent 10%) -50px 25px, linear-gradient(15deg, black 5%, transparent 5%)",
    "none",
]

const mangrels = "?!@%#$*^&){[}<>(;:/\|";

function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const barEls = document.querySelectorAll(".bar");
const MM = "MARILYN MANSON";
const barHeight = 200;

function slideDown(bar, distance) {
    // How far the bar slides is dependent on the target distance
    bar.style.transform = `translateY(-${barHeight * distance}px)`;
}

function oldReleaseLetters() {
    // Loop through the name first

    for (let i = 0; i < MM.length; i++) {
        // Create a copy of bars
        const bars = [...barEls];
    
        // Loop through bars
        bars.forEach(bar => {
            let index = bars.indexOf(bar);
            let distance = 1;
            const children = [...bar.children];
            
            let childrenArray = [];
    
            // Should loop through the bar's children for MM[k]
            for (let j = 0; j < children.length; j++) {
                if (!childrenArray.includes(children[j].innerText)) {
                    childrenArray.push(children[j].innerText);
                }

                for (let k = 0; k < childrenArray.length; k++) {
                    if (childrenArray[k] == MM[i]) {
                        distance = childrenArray.indexOf(MM[i]);
                    }
                }
            }
            console.log(distance);
                    
            setTimeout(() => {
                // console.log(index, MM[i], children);
    
                // Individually slides bars one after the other
                slideDown(bar, distance);
            }, 750 * (index / 2))
        })
    }
}

function releaseLetters() {
    MM.split('').forEach((letter, i) => {
        if (i >= barEls.length) return;

        const bar = barEls[i];

        const children = [...bar.children];

        children[0].innerText = rand(mangrels);

        let distance = 0;
        for (let j = 0; j < children.length; j++) {
            if (children[j].innerText.trim() === letter.trim()) {
                distance = j;
                break;
            }
        }

        console.log(`Bar ${i}: Moving to ${letter} with distance ${distance}`)

        setTimeout(() => {
            // console.log(index, MM[i], children);

            // Individually slides bars one after the other
            slideDown(bar, distance);
        }, 750 * (i / 2))

        console.log(letter);
    })
}

const pipeCircle = document.querySelector(".pipeCircle");
const cockCircle = document.querySelector(".cockCircle");

document.addEventListener('DOMContentLoaded', () => {
    releaseLetters();
    pipeCircle.style.background = `radial-gradient(circle, ${rand(colourThemes)}`;
    cockCircle.style.backgroundImage = rand(patternThemes);
})
console.log(MM)