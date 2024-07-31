let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] mensaje de bienvenida configurado exitosamente *')
} else throw ` *[❗] ingrese el mensaje de bienvenida que quieres agregar, 𝚄𝚂𝙴:*\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['grupo']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
