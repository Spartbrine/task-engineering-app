// ===== Task Engineering App - logica base =====
document.addEventListener('DOMContentLoaded', function () {
  console.log('Task Engineering App cargada correctamente.');

  var form = document.getElementById('task-form');
  var input = document.getElementById('task-input');
  var list = document.getElementById('task-list');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var texto = input.value.trim();
      if (texto === '') return;
      var li = document.createElement('li');
      li.className = 'task-list__item';
      li.textContent = texto;
      list.appendChild(li);
      input.value = '';
      input.focus();
    });
  }
});
