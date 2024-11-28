let handler = async (m, { conn, usedPrefix, isOwner }) => {
conn.sendContact(m.chat, [['5493813355709', '⌯ ׅ🐝ׁ ˳ ʿ α︪︩ввуу!𓂃𔘓']], m)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
