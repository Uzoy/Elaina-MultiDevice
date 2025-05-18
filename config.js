// S C R I P T  O R I  B Y  Bochilgaming 🔭

// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • FahriAdison
// • The.Sad.Boy01
// • Rlxfly
// • Rasel comel
// • ImYanXiao
// • Xtreshe (Beban)
// • Dll

//[!] Jangan Lupa Ganti Bagian global.owner

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
    // let wibh = moment.tz('Asia/Jakarta').format('HH')
    // let wibm = moment.tz('Asia/Jakarta').format('mm')
    // let wibs = moment.tz('Asia/Jakarta').format('ss')
    // let wktuwib = `${wibh} H ${wibm} M ${wibs} S`

    let wktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss') + ' WIB';

    let wktuwita = moment.tz('Asia/Makassar').format('HH:mm:ss') + ' WITA';

    let wktuwit = moment.tz('Asia/Jayapura').format('HH:mm:ss') + ' WIT';

    global.gabung = wktuwib+'\n'+wktuwita+'\n'+wktuwit;

    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
      
    
/*============== SOCIAL ==============*/

// kalo ga punya biarin aja biar ada creditsnya :v
global.sig = '-' //Link Instagrammu
global.sgh = '-' //Link Githubmu
global.sgc = 'https://chat.whatsapp.com/KgA3fLjhXrA2513pVsD4wE'
global.sdc = '-' //Isi Pake Link Discordmu Kalo Gada Biarin aja
global.snh = 'https://nhentai.net/' //Hmmm, Ini boleh kalian isi terserah :v

/*============== PAYMENT ==============*/
global.pdana = '-' //Nomor Danamu
global.ppulsa = '6282284519515' //Nomor SimCard Yang Kamu Pake
global.psaweria = '-' //Link Saweriamu Kalo Nggada Ketik - aja

/*============== NOMOR ==============*/
global.nomorbot = '6283189131519' //Nomor Bot
global.nomorown = '6282284519515' //Nomor Owner
global.namebot = 'AndiBot' //Nama Bot
global.nameown = 'Andika' // Nama Owner


/*============== STAFF ==============*/
global.owner = [
  ['6282284519515', 'Developer Owner', true] //Ganti jd nomormu sama Namamu
  // [number, dia creator/owner?, dia developer?] ex= [62123456789, "siapa kek", false]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


global.lolkey = 'dc60b3d70a9a1fcf0efa7123'
global.googlegemini = 'AIzaSyBR2A8uBAcwPRua1lgkf9BcgEYZMwIa2sw' // https://aistudio.google.com/app/apikey
/*============== API ==============*/
// Tambahin Rest Apinya Sendiri Krn yg saya hapus apinya sudah Mati
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.lolhuman.xyz': 'dc60b3d70a9a1fcf0efa7123'
}
// Kata APIKEY itu isi dengan apikeymu, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = '                「 𝚈𝚊𝚎 𝙱𝙾𝚃 汉  」' //Main Watermark
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘Yae - Chan˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = '⫹⫺ 𝚈𝚊𝚎 𝙱𝙾𝚃'
global.namedoc = '𝚈𝚊𝚎`s 𝙱𝙾𝚃' //Main Name Menu Document
global.botdate = `⫹⫺ Day's: ${week} ${date}\nWeton: ${weton}`
global.bottime = `⫹⫺TIME: \nWIB: ${wktuwib}\nWITA: ${wktuwita}\nWIT: ${wktuwit}`
global.titlebot = '🎋 ┊ Simple WhatsApp Bot'
global.author = global.namedoc


/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/cce9ab4551f7150f1970d.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/26b515d170f1e599f78a7.jpg'
global.thumbbc = 'https://telegra.ph/file/05f874dc87f7e27fa8127.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumblvlup = 'https://telegra.ph/file/a3e66e0fa840b08236c75.jpg'

/*============== TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```404 error```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━═┅═❏ *ღ 𝘿𝘼𝙎𝙃𝘽𝙊𝘼𝙍𝘿 ღ* ❏═┅═━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊❀'                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = '.'
global.packname = `☂︎\nY\na\ne\n-\nb\no\nt\n⫹⫺ Whatsapp BOT\nwa.me/${global.nomorbot}`
global.requestpack = 'Sticker Request By '

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
