document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("show");
    });
  }

  const datetimeEl = document.getElementById("datetime");
  if (datetimeEl) {
    const days = ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"];
    const months = ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"];

    const now = new Date();
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    datetimeEl.textContent = `${dayName}, ${day}. ${month} ${year}`;
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const searchBtn = document.querySelector('.search-btn');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const searchBox = document.getElementById('searchBox');

  menuBtn.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'none') {
      dropdownMenu.style.display = 'flex';
      searchBox.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'none';
    }
  });

  searchBtn.addEventListener('click', () => {
    if (searchBox.style.display === 'none') {
      searchBox.style.display = 'block';
      dropdownMenu.style.display = 'none';
    } else {
      searchBox.style.display = 'none';
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-btn') && !e.target.closest('#dropdownMenu')) {
      dropdownMenu.style.display = 'none';
    }
    if (!e.target.closest('.search-btn') && !e.target.closest('#searchBox')) {
      searchBox.style.display = 'none';
    }
  });
});


