import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
await conn.reply(m.chat, global.wait, m)

let type = (command).toLowerCase()

switch (type) {
case 'waifu':
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, 'hentai.jpg', 'woh telqnjng', m)
break

case 'neko':
  let _neko = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!_neko.ok) throw await _neko.text()
  let neko = await _neko.json()
  if (!neko.url) throw global.error
  conn.sendFile(m.chat, neko.url, 'neko.jpg', 'mwntqp', m)
break 
    
default:
 }
}

handler.help = ['hentai', 'nekotai']
handler.tags = ['random']
handler.command = /^(hentai|nekotai)$/i

export default handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
