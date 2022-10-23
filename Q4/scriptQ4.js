function Show() {
  let topStyle = document.getElementById("top");
  let rightStyle = document.getElementById("right");
  let notification = document.getElementById("notif");
  let className = document.getElementById("class-name");
  let result = document.getElementById("result");
  let statusStyle = document.querySelector(".status");
  result.innerHTML = notification.value;
  statusStyle.style.top = topStyle.value;
  statusStyle.style.right = rightStyle.value;
  statusStyle.classList.add(className.value);
}
