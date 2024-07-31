//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
   if (text) {
     global.db.data.chats[m.chat].sBye = text
     m.reply('✅ mensaje de despedida configurado exitosamente')
   } else throw `✳️ agregue el mensaje\n@user (mention)`
}
handler.help = ['setbye <text>']
handler.tags = ['grupo']
handler.command = ['setbye']
handler.admin = true
handler.owner = false

export default handler
