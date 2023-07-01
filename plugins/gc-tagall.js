let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝐁𝐨𝐭 𝐝𝐞𝐝𝐢𝐜𝐚𝐝𝐨 𝐩𝐚𝐫𝐚 𝐚𝐧𝐱𝐬<𝟑 :* ${pesan}`
let teks = `*𝐀𝐍𝐎𝐓𝐄𝐍𝐒𝐄 𝐂𝐑𝐉𝐎, 𝐏𝐀𝐑𝐓𝐈𝐂𝐈𝐏𝐄𝐍 𝐏𝐋𝐀𝐍𝐓𝐀𝐒*\n\n🫶🏻 ${oi}\n\n🫶🏻 *➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `💌❖≽ @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐆𝐚𝐛𝐢𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler