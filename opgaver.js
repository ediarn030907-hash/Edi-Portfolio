// 1. Skift tekst ved klik på knap
function skiftTekst() {
    document.getElementById('skiftAfsnit').textContent = 'Teksten er nu skiftet!';
}

// 2. Skift baggrundsfarve
function skiftBaggrund() {
    const farver = ['#f5f7fa', '#e3f2fd', '#ffe082', '#c8e6c9', '#ffccbc', '#d1c4e9', '#b3e5fc', '#fffde7'];
    document.body.style.backgroundColor = farver[Math.floor(Math.random() * farver.length)];
}

// 3. Vis/Skjul et element
function visSkjul() {
    const afsnit = document.getElementById('visSkjulAfsnit');
    if (afsnit.style.display === 'none') {
        afsnit.style.display = 'block';
    } else {
        afsnit.style.display = 'none';
    }
}

// 4. Simpel tæller
let count = 0;
function tælOp() {
    count++;
    document.getElementById('tæller').textContent = count;
}
function tælNed() {
    count--;
    document.getElementById('tæller').textContent = count;
}

// 5. Live tegnoptælling
function tegnOptælling() {
    const input = document.getElementById('tegnInput');
    document.getElementById('tegnAntal').textContent = input.value.length;
}

// 6. Vis tekst fra inputfelt
function visTekst() {
    const input = document.getElementById('visInput').value;
    document.getElementById('visAfsnit').textContent = input;
}
