// scroll automatique vers le formulaire si besoin
document.querySelectorAll('a[href="#lead-section"]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#lead-section').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
