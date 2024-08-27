function moveButton() {
    const button = document.getElementById('no-btn');
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function showThankYou() {
    document.getElementById('container').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';

    
    setTimeout(() => {
        document.getElementById('thank-you').style.display = 'none';
        document.getElementById('scanner').style.display = 'block';
    }, 3000); 
}
