var menu = document.getElementById("change_chart");
menu.addEventListener("change", generateData);

function generateData(event) {
  if (menu.value == '1') {
    console.log('clicked 1')
    alert(1);
  } else if (menu.value == '2') {
    alert(2);
  } else if (menu.value == '3') {
    alert(3);
  }
}