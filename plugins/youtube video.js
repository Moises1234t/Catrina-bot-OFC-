import Starlights from '@StarlightsTeam/Scraper'
let limit = 500

await m.react('🕓')
try {
let v = urls[0]
let { title, duration, size, thumbnail, dl_url } = await Starlights.ytmp4v2(v)

if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))

await conn.sendFile(m.chat, dl_url, title + '.mp4', `*» Título* : ${title}`, m, false, { asDocument: user.useDocument })
await m.react('✅')
} catch {
try {
let v = urls[0]
let { title, size, quality, thumbnail, dl_url } = await Starlights.ytmp4(v)

if (size.split('MB')[0] >= limit) return m.reply(`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`).then(_ => m.react('✖️'))

await conn.sendFile(m.chat, dl_url, title + '.mp4', `*» Título* : ${title}\n*» Calidad* : ${quality}`, m, false, { asDocument: user.useDocument })
await m.react('✅')
} catch {
await m.react('✖️')
}}}
handler.help = ['Video']
handler.tags = ['youtube']
handler.customPrefix = /^(Video|video|vídeo|Vídeo)/
handler.command = new RegExp
handler.limit = 2

export default handler
