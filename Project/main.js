const canvas= document.getElementById('MyCanvas');
canvas.height= window.innerHeight;
canvas.width=200;

const ctx =canvas.getContext("2d");
const car= new Carousel(100, 100, 30, 50);


AnimationEffect();

function animate(){
    car.update();
    car.draw(ctx);
    requestAnimationFrame(animate);
}