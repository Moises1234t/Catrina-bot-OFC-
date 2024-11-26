let handler = async (m, { conn, usedPrefix, isOwner }) => {
conn.sendContact(m.chat, [['51913776697', 'Haru ⁠✯'], ['5493813355709', 'abby']], m)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
