
document.querySelector('a[href="#about"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  });
  document.querySelector('a[href="#contacts"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#contacts').scrollIntoView({
      behavior: 'smooth'
    });
  });