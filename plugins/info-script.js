var handler = async(m, { conn }) => {

let str = `*https://github.com/ImYanXiao/Elaina-MultiDevice*`
let letoy = hwaifu.getRandom()
return conn.reply(m.chat, str, fakes, { externalAdReply : { title: 'ᴡᴀɴᴛ sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ ᴛʜɪs ʙᴏᴛ?',mediaType: 1, renderLargeThumbnail: true, thumbnail: await getBuffer(letoy), socialUrl: social}}) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
