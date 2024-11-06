const eye = document.querySelector('.eye');
const pupil = document.querySelector('.pupil');

eye.addEventListener('mousemove', (e) => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);

    const distance = Math.sqrt(Math.pow(mouseX - eyeCenterX, 2) + Math.pow(mouseY - eyeCenterY, 2));

    const maxDistance = 150;

    const limitedDistance = Math.min(distance, maxDistance);

    const pupilX = Math.cos(angle) * limitedDistance;
    const pupilY = Math.sin(angle) * limitedDistance;

    pupil.style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
});
