let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🍟 *Bot:* ${global.botname}
✨️  *Versión:* ${global.vs}

👑 *Propietario:*

• sebas-md
🍟 *Rol:* Propietario
🚩 *Número:* ${creador}
✨️ *GitHub:* https://github.com/sebas-mod

⁖❤️꙰  *Colaboradores:*

• ArizzVal
🍟 *Rol:* Developer
🚩 *Número:* 
✨️ *GitHub:* 

await conn.sendFile(m.chat, icons, 'luffy.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
