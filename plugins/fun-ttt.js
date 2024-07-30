import TicTacToe from '../lib/tictactoe.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
     conn.game = conn.game ? conn.game : {}
     if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `✳️ aun estas jugando para cerrar sesion usa : *${usedPrefix}delttt*`
     if (!text) throw `✳️ dale un nombre a la sala o pon nueva sala`
     let room = Object.values(conn.game).find(room => room.state === 'espera' && (text ? room.name === text : true))
     // m.reply('[WIP Feature]')
     if (room) {
         m.reply('✅ partida iniciada')
         room.o = m.chat
         room.game.jugadorO = m.sender
         room.state = 'jugador2'
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
         let str = `h
esperando @${room.game.currentTurn.split('@')[0]} como primer jugador
        
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

▢ *nombre de sala* ${room.id}

▢ *Reglas*
‣ Haz 3 filas de símbolos vertical, horizontal o diagonal para ganar
‣ Escribe *surrender* para salir del juego y ser declarado derrotado
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
             state: 'esperando'
         }
         if (text) room.name = text
        
      conn.reply(m.chat, `⏳ *esperando jugador ingrese *\nEnter para aceptar*
▢ *${usedPrefix + command} ${text}*

🎁 ganaste: *4999 XP*`, m, {
             mentions: conn.parseMention(text)
         })
        
    conn.game[room.id] = room
     }
    
}

handler.help = ['tictactoe <room name>']
handler.tags = ['game']
handler.command = ['tictactoe', 'ttc', 'ttt', 'xo']

export default handler
