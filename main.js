const block = document.querySelector(".square");

let position = 0;
let topPosition = 0;

const animation = () => {
  if (position <= 430 && topPosition === 0) {
    position += 16;
    block.style.left = `${position}px`;
    setTimeout(animation, 150);
  } else if (position >= 430 && topPosition <= 430) {
    topPosition += 16;
    block.style.top = `${topPosition}px`;
    setTimeout(animation, 150);
  } else if (topPosition >= 430 && position !== 0) {
    position -= 16;
    block.style.left = `${position}px`;
    setTimeout(animation, 150);
  } else if (position === 0 && topPosition !== 0) {
    topPosition -= 16;
    block.style.top = `${topPosition}px`;
    setTimeout(animation, 150);
  }
};

animation();