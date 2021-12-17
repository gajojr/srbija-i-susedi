document.getElementById('select-location').addEventListener('change', function() {
    const grad = this.value;
    document.querySelector('iframe').src = `https://naslovi.net/vremenska-prognoza/${grad}#w-next`;
});