for (let i = 2; i <= 100; i += 2) {
    const p = document.createElement('p');
p.textContent = i;
contenedor.appendChild(p);
if (i !== 100) {
contenedor.appendChild(document.createElement('hr'));
}
}