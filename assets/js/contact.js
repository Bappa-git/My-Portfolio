/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact_form');
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_6etckrj','template_s28iuyi','#contact_form','BsVAPEGu13F-bBfZh')
    .then(() => {

        contactMessage.textContent = 'Message sent successfully ✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }), () => {
        contactMessage.textContent = 'Message not sent (service error) ❌ '
    }

}     

contactForm.addEventListener('submit', sendEmail)