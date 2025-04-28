// Simulador simple de contador de visitantes
let count = localStorage.getItem('visitorCount') || 0;
count++;
localStorage.setItem('visitorCount', count);
document.getElementById('visitor-count').innerText = count;
