let handler  = async (m, { conn, usedPrefix: _p }) => {
	let fetch = require('node-fetch')
    let fs = require('fs')
const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 3609,
    status: 1,
    surface : 1,
    message: 'Script Botz 🌟', 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + 'Script')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Source+code'
let info = `◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://instagram.com/dark_devil_3609
│ *Base :* 
│ ╰ 
│ *RestApi :* https://bit.ly/36RRYSF
╰──────────═┅═──────────
📍 *N o t e :* 
• Follow me to get script link and message me 
`.trim()
await conn.send2Button(m.chat, info, `${botol}`, '⋮☰ INFO', '.info', 'OWNER', '.owner', ftrol)
}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

let botol = global.botwm
