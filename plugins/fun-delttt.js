let handler = async(m, { conn, text }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.reply(m.chat,`*✳️ no estas en un juego de tictactoe 🎮* `, m)
delete conn.game[room.id]
await conn.reply(m.chat, `✅ *tictactoe session cerrada🎮*`, m)
}
handler.help = ['delttt']
handler.tags = ['fun']
handler.command = ['delttc', 'delttt', 'delxo']

export default handler
