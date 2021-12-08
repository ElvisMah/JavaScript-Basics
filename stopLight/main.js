function stopLight() {
    let colors = document.getElementsByClassName('colors');

    colors[0].style.background = 'red';
    colors[1].style.background = 'gray';
    colors[2].style.background = 'gray';

    function changeToYellow() {
        colors[0].style.background = 'gray';
        colors[1].style.background = 'yellow';
        colors[2].style.background = 'gray';
    }

    function changeToGreen() {
        colors[0].style.background = 'gray';
        colors[1].style.background = 'gray';
        colors[2].style.background = 'green';
    }

    const x = setTimeout(changeToYellow, 3000);
    const y = setTimeout(changeToGreen, 5000);

    let start = setInterval(stopLight, 8000);
}

stopLight();