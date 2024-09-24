window.addEventListener('keydown', function (e) {
    document.querySelector('body').innerHTML = `<div class="container"> 
        <table>
  <tr>
    <th>key</th>
    <th>Keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>`;
})