import anime from "animejs";

export function EffectGear(loop) {
  let textWrapper = document.querySelector(".ml2");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime
    .timeline({ loop: loop })
    .add({
      targets: ".ml2 .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i,
    })
    .add({
      targets: ".ml2",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
}

EffectGear.propTypes = {};
