let box = document.querySelector('.box');

ontouch(box, (e, dir, phase, swipeType, dist) => {
    let touchreport = '';

    touchreport += '<b>Dir:</b> ' + dir + '<br />';
    touchreport += '<b>Phase:</b> ' + phase + '<br />';
    touchreport += '<b>Swipe Type:</b> ' + swipeType + '<br />';
    touchreport += '<b>Distance:</b> ' + dist + '<br />';

    box.innerHTML = touchreport;
});



function ontouch(el, callback) {
    let touchsurface = el,
        dir,
        swipeType,
        startX,
        startY,
        distX,
        distY,
        threshold = 150,
        restraint = 100,
        allowedTime = 500,
        elepsedTime,
        startTime,
        handletouch = callback || function(e, dir, phase, swipeType, dist) {};


    touchsurface.addEventListener('touchstart', (e) => {
        e.preventDefault();

        let touchObj = e.changedTouches[0];
        dir = 'none';
        swipeType = 'none';
        startX = touchObj.pageX;
        startY = touchObj.pageY;
        startTime = new Date().getTime();
        handletouch(e, dir, 'start', swipeType, 0);
    });

    touchsurface.addEventListener('touchmove', (e) => {
        e.preventDefault();

        let touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX;
        distY = touchObj.pageY - startY;

        if (Math.abs(distX) > Math.abs(distY)) {
            dir = (distX < 0) ? 'left' : 'right';
            handletouch(e, dir, 'move', swipeType, distX);
        } else {
            dir = (distY < 0) ? 'up' : 'down';
            handletouch(e, dir, 'move', swipeType, distY);
        }
    });

    touchsurface.addEventListener('touchend', (e) => {
        e.preventDefault();

        elepsedTime = new Date().getTime() - startTime;
        if (elepsedTime < allowedTime) {
            if (Math.abs(distX) > threshold && Math.abs(distY) < restraint) {
                swipeType = dir;
            } else if (Math.abs(distY) > threshold && Math.abs(distX) < restraint) {
                swipeType = dir;
            }
        }

        handletouch(e, dir, 'end', swipeType, (dir == 'left' || dir == 'right') ? distX : distY);
    });
}