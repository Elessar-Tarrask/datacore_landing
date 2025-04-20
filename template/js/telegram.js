// Telegram Integration for Contact Form

// Telegram API credentials
const TELEGRAM_BOT_TOKEN = '7553931303:AAHhObi987TJDa__0WLfA7Mr-ZEG0MJMJ70';
const TELEGRAM_CHAT_ID = '-1002556748941';

// Function to send message to Telegram
async function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: "Markdown"
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!data.ok) {
      console.error("Failed to send message to Telegram:", data);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return false;
  }
}

// Function to handle form submission
async function handleContactFormSubmit(event) {
  event.preventDefault();
  
  // Get form elements
  const form = event.target;
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const phoneInput = form.querySelector('#phone');
  const messageInput = form.querySelector('#message');
  const submitButton = form.querySelector('input[type="submit"]');
  const msgSubmit = document.querySelector('#msgSubmit');
  
  // Disable submit button during processing
  submitButton.disabled = true;
  submitButton.value = 'Отправка...';
  
  // Format message for Telegram
  const telegramMessage = `📩 *Новое обращение с сайта DataCore*\n\n👤 *Имя:* ${nameInput.value}\n📧 *Email:* ${emailInput.value}\n📞 *Телефон:* ${phoneInput.value}\n💬 *Сообщение:*\n${messageInput.value}`;
  
  // Send message to Telegram
  const success = await sendTelegramMessage(telegramMessage);
  
  // Show response to user
  if (success) {
    msgSubmit.style.display = 'block';
    msgSubmit.className = 'text-right c-blue';
    msgSubmit.textContent = 'Сообщение отправлено!';
    form.reset();
  } else {
    msgSubmit.style.display = 'block';
    msgSubmit.className = 'text-right c-red';
    msgSubmit.textContent = 'Ошибка при отправке. Пожалуйста, попробуйте позже.';
  }
  
  // Re-enable submit button
  submitButton.disabled = false;
  submitButton.value = 'Отправить';
  
  // Hide message after 5 seconds
  setTimeout(() => {
    msgSubmit.style.display = 'none';
  }, 5000);
}

// Initialize form handling when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactFormSubmit);
    
    // Hide the message element initially
    const msgSubmit = document.querySelector('#msgSubmit');
    if (msgSubmit) {
      msgSubmit.style.display = 'none';
    }
  }
}); 