import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗]  RESPONDE AL STICKER QUE QUIERES AÑADIR UN PAQUETE Y UN NOMBRE*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] RESPONDE AL STICKER QUIEN QUIERE AÑADIR UN PAQUETE Y UN NOMBRE*'
let img = await m.quoted.download()
if (!img) throw '*[❗𝐈𝐍𝐅𝐎❗]  RESPONDE AL STICKER QUE QUIERES AÑADIR UN PAQUETE Y UN NOMBR*'
stiker = await addExif(img, packname || global.packname, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[❗𝐈𝐍𝐅𝐎❗] LO SIENTO, ALGO SALIO MAL COMPRUEBE QUE HA RESPONDIDO A UNA PEGATINA Y AÑADIDO UN NOMBRE DE PAQUETE Y UN NOMBRE DE USUARIO*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^take|steal|wm$/i
export default handler
