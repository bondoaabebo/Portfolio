// رسالة بسيطة عند إرسال الفورم
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
});
