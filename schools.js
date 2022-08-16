const a_btn =
document.getElementById('a_btn');
const b_btn =
document.getElementById('b_btn');
const a_result =
document.getElementById('result_a');
const b_result =
document.getElementById('result_b');

a_btn.addEventListener('click', getRandomEarthquake);
b_btn.addEventListener('click', getRandomScripture);

function getRandomEarthquake() {
  fetch('')
  .then(res => res.json())
  .then(data => {
    a_result.innerHTML =`<img src=${data.file} alt= "earthquake"/>`
  });


}