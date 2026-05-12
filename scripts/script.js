const contactForm = document.querySelector('.contact__form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    // Checking if name input is empty
    if (name === '' || name.length < 2) {
        alert('Please enter your name (at least 2 characters)');
        return;
    }
    // Checking if email input is empty
    if (email === '') {
        alert('Please enter your email address');
        return;
    }
    // Email Validation
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address');
        return;
    }
    // Checking if subject input is empty
    if (subject === '' || subject.length < 3) {
        alert('Please enter a subject (at least 3 characters)');
        return;
    }
    
    // Checking if message input is empty
    if (message === '' || message.length < 10) {
        alert('Please enter a message (at least 10 characters)');
        return;
    }
    
    // If all the checks are filled then submit the form
    alert('Thank you! Your message will be sent.');
    contactForm.submit();
});

const cvButton = document.querySelector('.button__cv');
cvButton.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'assets/Fatima Muhammad Bashir CV.pdf';
    link.download = 'Fatima_Bashir_CV.pdf';
    link.click();
});
