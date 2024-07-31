let handler = async (m, { conn, args }) => {
    await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
    m.reply('*✅mensaje de descripcion cambiado exitosamente*')
    }
    handler.help = ['Setdesc <text>']
    handler.tags = ['grupo']
    handler.command = /^setdesk|setdesc$/i
    handler.group = true
    handler.admin = true
    handler.botAdmin = true
    export default handler
