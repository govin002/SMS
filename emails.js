function sendEmail() {
  const templateParams = {
    name: document.getElementById("#name").value,
    email: document.getElementById("#email").value,
    message: document.getElementById("#message").value,
  };
  emailjs.send(service_lzufifr, template_jna8ggb, templateParams);
}
