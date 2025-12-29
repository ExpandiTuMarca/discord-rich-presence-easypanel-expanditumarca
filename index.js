const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

// Creamos el cliente
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`Bot conectado como ${client.user.tag}`);

    // CONFIGURACIÓN DEL ESTADO
    client.user.setPresence({
        activities: [{ 
            name: 'Competitive',  // El texto grande que se ve
            type: ActivityType.Competing // Opciones: Playing, Watching, Listening, Competing
        }],
        status: 'dnd', // Opciones: online (verde), idle (luna), dnd (rojo), invisible
    });
});

// El login usa la variable que pondrás en EasyPanel
client.login(process.env.DISCORD_TOKEN);