// Función para generar las respuestas automáticas del bot
function generateBotResponse(input) {
    const messagesContainer = document.getElementById('chatbox-messages');
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');

    // Lógica para determinar la respuesta basada en el input del usuario
    if (input.toLowerCase().includes("estudiantil")) {
        botMessage.textContent = "Te recomiendo la Acer Aspire 5, con un buen equilibrio entre rendimiento y precio. Tiene un procesador Ryzen 5, 8 GB de RAM y SSD de 256 GB, ideal para estudiantes.";
    } else if (input.toLowerCase().includes("videojuegos")) {
        botMessage.textContent = "Para juegos, te sugiero la HP Pavilion Gaming con GTX 1650, 16 GB de RAM y un procesador Intel Core i5 de décima generación. Ofrece buen rendimiento a un precio razonable.";
    } else if (input.toLowerCase().includes("calidad-precio")) {
        botMessage.textContent = "En cuanto a calidad-precio, la Lenovo IdeaPad Gaming 3 es una excelente opción. Con un Ryzen 5, 16 GB de RAM y GTX 1650, es perfecta tanto para tareas académicas como para juegos.";
    } else {
        botMessage.textContent = "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?";
    }

    messagesContainer.appendChild(botMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Pregunta al usuario si desea más información y carga el menú principal
    setTimeout(() => {
        askForMoreInfo();
    }, 1500);
}

// Función para preguntar si se desea más información
function askForMoreInfo() {
    const messagesContainer = document.getElementById('chatbox-messages');
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');

    botMessage.textContent = "¿Te gustaría más recomendaciones de computadoras?";
    messagesContainer.appendChild(botMessage);

    // Cargar el menú principal con opciones
    const optionsMessage = document.createElement('div');
    optionsMessage.classList.add('message', 'bot-message');
    optionsMessage.innerHTML = `
        <button onclick="handleOption('Computadora estudiantil')">Computadora para estudiantes</button>
        <button onclick="handleOption('Computadora para videojuegos')">Computadora para videojuegos</button>
        <button onclick="handleOption('Calidad-precio')">Mejor calidad-precio</button>
    `;
    messagesContainer.appendChild(optionsMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
