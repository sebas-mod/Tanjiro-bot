const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command}) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
    var sum = member.length;
  } else {
    var sum = 0;
    const total = 0;
    var member = 0;
  }
  const pesan = args.join` `;
  const oi = `${pesan}`;
  let teks = `𝙏𝘼𝙉𝙅𝙄𝙍𝙊 𝘽𝙊𝙏*\n\n𝙋𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚𝙨:  ${participants.length}* ${oi}\n\n┌──│ ♛►𝙍𝙀𝙑𝙄𝙑𝘼𝙉 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎👻\n`;
  for (const mem of participants) {
    teks += `│ ♛►@${mem.id.split('@')[0]}\n`;
  }
  teks += `└───────│ ♛

© 2024 Starlights Team | All rights reserved`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos <mesaje>', ' <mesaje>'];
handler.tags = ['group'];
handler.command = /^(todos)$/i;
handler.admin = true;
handler.group = true;
export default handler;