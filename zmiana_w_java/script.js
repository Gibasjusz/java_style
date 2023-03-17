function kolor() {
    document.getElementById('prawy').style.backgroundColor = '#4B0082';
}

function kolor2() {
    document.getElementById('prawy').style.backgroundColor = 'steelblue';
}

function kolor3() {
    document.getElementById('prawy').style.backgroundColor = 'olive';
}

function kolorek() {
    var sleTex = document.getElementById('czcionka').value;
    document.getElementById('text').style.color = sleTex;
}

function wielkosc() {
    var sleTek = document.getElementById('wielk').value;
    document.getElementById('text').style.fontSize = sleTek + '%';
}

function ramka() {
    if (document.getElementById('rama').checked == true)
        document.getElementById('gora').style.border = '2px solid white';
    else
        document.getElementById('gora').style.borderColor = 'transparent';
}

function radio() {
    console.log(document.getElementById('1').checked);
    if (document.getElementById('1').checked == true) {
        document.getElementById('ham').style.listStyleType = 'disc';
        document.getElementById('ham2').style.listStyleType = 'disc';
        document.getElementById('ham3').style.listStyleType = 'disc';
    } 

    if (document.getElementById('2').checked == true) {
        document.getElementById('ham').style.listStyleType = 'square';
        document.getElementById('ham2').style.listStyleType = 'square';
        document.getElementById('ham3').style.listStyleType = 'square';
    } 

    if (document.getElementById('3').checked == true) {
        document.getElementById('ham').style.listStyleType = 'circle';
        document.getElementById('ham2').style.listStyleType = 'circle';
        document.getElementById('ham3').style.listStyleType = 'circle';
    }
}