import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `✳️ Aún estás en el juego. Para reiniciar la sesión, escribe: *${usedPrefix}delttt*`
if (!text) throw ` ✳️ Dale un nombre a la sala`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
// m.reply('[WIP Feature]')
if (room) {
m.reply('✅ Se encontró un jugador')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'JUGANDO'
let arr = room.game.render().map(v => {
return {
X: '❎',
Or: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `
Esperando @${room.game.currentTurn.split('@')[0]} como primer jugador

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

▢ *NOMBRE DE SALA* ${room.id}

▢ *Reglas*
‣ Haz 3 filas de símbolos en forma vertical, horizontal o diagonal para ganar
‣ Escribe *surrender* para salir del juego y ser declarado derrotado.
`.trim()
if (room.x !== room.o) await conn.reply(room.x, str, m, {
mentions: conn.parseMention(str)
})
await conn.reply(room.o, str, m, {
mentions: conn.parseMention(str)
})
} else {
room = {
id: 'tictactoe-' + (+new Date),
x:m.chat,
either: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text

conn.reply(m.chat, `⏳ *Esperando a un compañero*\nIngresa el siguiente comando para aceptar
▢ *${usedPrefix + command} ${text}*

🎁 Recompensa: *4999 XP*`, m, {
menciones: conn.parseMention(text)
})

conn.game[room.id] = room
}

}

handler.help = ['tictactoe <nombre de la sala>']
handler.tags = ['fun']
handler.command = ['tictactoe', 'ttc', 'ttt', 'xo']

export default handler
