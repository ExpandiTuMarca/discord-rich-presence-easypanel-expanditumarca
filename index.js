const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Bot conectado y listo para el show: ${client.user.tag}`);

    // AQUÍ ESTÁ TU LISTA DE FRASES DIVERTIDAS
    // Puedes agregar todas las que quieras siguiendo el formato.
    const estados = [
        // Viendo...
        { name: 'cómo se hacen automatizaciones', type: ActivityType.Watching },
        { name: 'Noticias de IA (y asustándome)', type: ActivityType.Watching },
        
        // Compitiendo en...
        { name: 'una pelea a muerte con ChatGPT', type: ActivityType.Competing },
        { name: 'la carrera por la Singularidad', type: ActivityType.Competing },

        // Escuchando...
        { name: 'podcast de "Tuercas y Café"', type: ActivityType.Listening },
        { name: 'tus secretos... es broma', type: ActivityType.Listening },

        // Jugando a... (Discord pone "Jugando a" antes del texto)
        { name: 'Simulador de Humano v3.0', type: ActivityType.Playing },
        { name: 'conectar cables sin mirar', type: ActivityType.Playing },
        { name: 'dominar el mundo (mañana)', type: ActivityType.Playing }
    ];

    let i = 0;
    
    // Esta función se ejecuta cada 10 segundos (10000 ms)
    setInterval(() => {
        client.user.setPresence({
            activities: [estados[i]],
            status: 'online'
        });

        // Pasa al siguiente estado y si llega al final, vuelve al 0
        i = (i + 1) % estados.length;
    }, 10000);
});

client.login(process.env.DISCORD_TOKEN);
