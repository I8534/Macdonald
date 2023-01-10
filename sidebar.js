const sidebarMenuButton = document.querySelector('.gnb-icon-button');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');

function openSidebar {
  sidebar.classList.add('is-active');
  sidebarOverlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar);

function closeSidebar() {
  // overlay를 클릭했을 때 is-active라는 클래스를 제거
  sidebar.classList.remove('is-active');
  sidebarOverlay.classList.remove('is-active');
}

sidebarOverlay.addEventListener('click', closeSidebar);