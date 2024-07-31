let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, 💍 deberías casarte con ${toM(b)},hacen bonita pareja🙈💓*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['fun']
handler.command = ['formarparejas']
handler.group = true
export default handler
