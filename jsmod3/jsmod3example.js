let helloCounter = 0;

function sayHello(name) {
    console.log("Moro", name);
    helloCounter++;
    // pysäytä interval, kun tätä funktiota on kutsuttu 3 kertaa
    if (helloCounter > 3) {
        clearInterval(timer);
    }
}

// Asynkroninen (ajastin asetetaan taustalla)
setTimeout(sayHello, 3000, 'Iiris');
sayHello('Ellen');

const timer = setInterval(sayHello, 2000, 'Roope');

