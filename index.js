function launchApp(app) {
  const iframe = document.getElementById('appFrame');
  if (app === 'zebgx') {
    iframe.src = 'apps/zebgx.html';
  } else if (app === 'store') {
    iframe.src = 'apps/store.html';
  } else if (app === 'settings') {
    iframe.src = 'apps/settings.html';
  }
  iframe.style.display = 'block';
}

function toggleStartMenu() {
  alert('Start Menu is under construction...');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('vpnToggle').addEventListener('change', (e) => {
    alert('VPN toggled: ' + (e.target.checked ? 'ON' : 'OFF'));
  });

  document.getElementById('proxyToggle').addEventListener('change', (e) => {
    alert('Proxy toggled: ' + (e.target.checked ? 'ON' : 'OFF'));
  });
});
