let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('⭐')

let m2 = `
│ ► ♛ 𝐓𝐀𝐍𝐉𝐈𝐑𝐎 𝐁𝐎𝐓 ♛

• · ─ ─ ─ ─ ─ ─ · •
│ ► 𝙘𝙧𝙚𝙙𝙞𝙩𝙤𝙨 𝙖 𝙢𝙞𝙨 𝙘𝙤𝙡𝙖𝙗𝙤𝙧𝙖𝙙𝙤𝙧𝙚𝙨
• · ─ ─ ─ ─ ─ ─ · •
 
       
 ╭──► 𝙧𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤 𝙙𝙚 𝙢𝙞𝙨 𝙘𝙤𝙡𝙖𝙗𝙤𝙧𝙖𝙙𝙤𝙧𝙚𝙨
 │ ►  Angelito | 𝗚𝗶𝘁𝗵𝘂𝗯: https://github.com/Angelito-OFC
 ╰─────────────►
  
 
 ╭──► 𝙣𝙪𝙢𝙚𝙧𝙤
 ┆ Angelito:wa.me/59168683798
 ╰─────────────►

 ╭──►🔰𝗣𝗥𝗢𝗬𝗘𝗖𝗧𝗢 𝗥𝗘𝗔𝗟𝗜𝗭𝗔𝗗𝗢 𝗖𝗢𝗡: 
 ┆"🫧 丂ㄒ卂千千 乂乃 🫧"
 ╰─────────────►`
        let pp = 'https://telegra.ph/file/3de573c9b2837ef3edcfc.jpg' 

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\n ♛ 𝐓𝐀𝐍𝐉𝐈𝐑𝐎 𝐁𝐎𝐓 ♛ \n`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, ' 𝙇𝙊𝘼𝘿𝙄𝙉𝙂....', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, fwc)

}
handler.help = ['Creditos']
handler.tags = ['main']
handler.command = ['crdts'] 

export default handler
