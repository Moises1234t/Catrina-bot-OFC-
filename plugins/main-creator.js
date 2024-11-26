let handler = async (m, { conn, usedPrefix, isOwner }) => {
conn.sendContact(m.chat, [['5493813355709', 'abby'], ['51913776697', 'Haru']],m)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
