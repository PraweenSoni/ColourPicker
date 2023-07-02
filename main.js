const colorbtn = document.querySelector('#picker-btn');
const colourList = document.querySelector('.all-colours');
const pickedColours = JSON.parse(localStorage.getItem("picked-colours") || "[]");

const showColours = () => {
 colourList.innerHTML = pickedColours.map(colours => `        <li class="colour">
      <span class="rect" style="background: ${colours} border: 1px solid ${colours == "#ffffff" ? "#ccc" : colours}"></span>
      <span class="value">${colours}</span>
      </li>
      `).join("");

}
showColours();

const activateEyeDropper = async () => {
 try {
  const eyeDropper = new eyeDropper();
  const { sRGBHex } = await eyeDropper.open();
  navigator.clipboard.writeText(sRGBHex);

  if (!pickedColours.includes(sRGBHex)) {
   pickedColours.push(sRGBHex);
   localStorage.setItem("picked-colours", JSON.stringify(pickedColours));
   showColours();
  }
 } catch (error) {
  console.log(error);
 }
}
colorbtn.addEventListener("click", activateEyeDropper);
console.log(colourList);