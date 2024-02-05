const denyButton = document.getElementById("dennyBtn");
const acceptButton = document.getElementById("acceptBtn");
const mainStage = document.querySelector(".gatto-images");

const complains = [
  "კაი რაა",
  "ეეეე ნუ მიკეთებ მაგას",
  "მაგრად ვიტირებ",
  "თავს მევიკლავ გეუბნები",
  "ნუცააააააააააა",
  "ასე ხოოო?!",
  "ახიააა ჩემზე",
  "დაააჭირეეეე კის",
  "ნერვებს მიშლი",
  "ატრიას აღარ შევჭამ იცოდე",
  "ვიშიმშილებ",
  "ნახე მანდ რაღაც მწვანეა yesო თუ რაღაც ჭირი",
  "დაააჭირე ქალო მწვანეს რა გახდა",
  "დამღალე",
  "საჩუქარს გავამხელ იცოდე",
  "შენ მე საეეეერთოდ აღარ გიყვარვარ",
  "gif",
  "გიყვარვარ თუ გკიდივარ",
  "ჰააამეთქი",
];

const randomDenialPhotoPaths = [
  "./images/cat-4.jpg",
  "./images/gatto-1.jpg",
  "./images/cat-5.jpg",
  "./images/crying-racoon.jpg",
  "./images/dying-monke.jpg",
  "./images/squidward.png",
];

if (window.innerWidth < 1024) {
  denyButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * complains.length);
    denyButton.innerText = complains[randomIndex];

    const denyButtonRandomPosition = {
      position: "absolute",
      left: Math.random() * 65 + "%",
      top: Math.random() * 65 + "%",
    };

    if (complains[randomIndex] === "gif") {
      denyButton.innerHTML = `<img src="https://media.giphy.com/media/1BCIlYHwJ3hu0/giphy.gif?cid=ecf05e47ajjpcwyhln8gq1cn0dtg154pc43bw153gdc53taf&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="gif" />`;
      denyButton.style.width = "200px";
    }

    const randomPhotoIndex = Math.floor(Math.random() * randomDenialPhotoPaths.length);
    mainStage.src = randomDenialPhotoPaths[randomPhotoIndex];

    Object.assign(denyButton.style, denyButtonRandomPosition);
  });
} else {
  denyButton.addEventListener("mouseover", () => {
    denyButton.innerText = "ვერ დამიჭერ ბადუ";

    mainStage.src = "./images/evil-smile.gif";

    const maxX = window.innerWidth - denyButton.clientWidth;
    const maxY = window.innerHeight - denyButton.clientHeight;

    const cursorX = event.clientX;
    const cursorY = event.clientY;

    const buttonRect = denyButton.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    const distanceX = cursorX - buttonX;
    const distanceY = cursorY - buttonY;

    const ratioX = distanceX / maxX;
    const ratioY = distanceY / maxY;

    const moveX = ratioX * 100;
    const moveY = ratioY * 100;

    const translateX = Math.min(Math.max(moveX, -maxX), maxX);
    const translateY = Math.min(Math.max(moveY, -maxY), maxY);

    denyButton.style.transform = `translate(${translateX * 50}px, ${translateY * 50}px)`;
  });
}

acceptButton.addEventListener("click", () => {
  const answerH1 = document.getElementById("answerH1");
  const paragraph = document.getElementById("paragraph");
  const buttonsWrapper = document.getElementById("buttonsDiv");
  mainStage.src = "./images/cat-yes.jpg";

  answerH1.innerText = "კიოოოო ხალხოოოოოოოოოოოოოოო";
  paragraph.style.display = "none";
  buttonsWrapper.style.display = "none";

  setTimeout(() => {
    let modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
  }, 4000);
});
