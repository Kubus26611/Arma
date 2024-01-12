
$(document).ready(function () {
  $('.card').click(function () {
    var cardTitle = $(this).find('.card-title').data('custom-title'); // Pobierz tytuł z karty
    var cardText = $(this).find('.card-text').data('custom-text'); // Pobierz niestandardowy tekst z atrybutu data

    // Ustaw zawartość modala na podstawie klikniętej karty
    $('#myModal .modal-title').text(cardTitle); // Ustaw tytuł modala
    $('#modalContent').html(`
      <p>${cardText}</p>
    `);

    $('#myModal').modal('show'); // Wywołaj modal
  });
});

function showOpisTab() {
  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.add('hidden');
  }

  document.getElementById('opis').classList.remove('hidden');
}

// Funkcja obsługująca kliknięcie w przycisk zakładki
function handleTabClick(tabName) {
  showTab(tabName);
  event.preventDefault();
}

// Funkcja do pokazywania wybranej zakładki
function showTab(tabName) {
  showOpisTab(); // Pokaż zawsze zakładkę "Opis" przed otwarciem nowej zakładki

  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.add('hidden');
  }

  document.getElementById(tabName).classList.remove('hidden');
}

// Przypisz funkcję obsługującą kliknięcie do przycisków zakładek
document.getElementById('opis-button').addEventListener('click', function(event) {
  handleTabClick('opis');
});

document.getElementById('do-pobrania-button').addEventListener('click', function(event) {
  handleTabClick('do-pobrania');
});

document.getElementById('kolory-button').addEventListener('click', function(event) {
  handleTabClick('kolory');
});
