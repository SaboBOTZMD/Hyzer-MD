const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `*─────� DONATE 」 ───*

*Donasi Lah Tod Kalo Mau Bot On 24 Jam*
┌〔 Donasi 〕
├*Dana     : 0821-4520-3493*
├*Gopay   : 0821-4520-3493*
├*Pulsa    : 0821-4520-3493*
└────
*Note : Mau Donasi Apa Liat Doang Kont*

Contact person Owner: wa.me/6282145203493 (Owner)`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/donasi.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍instagram',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: 'Back To Menu',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp']
handler.command = /^(donasi|donate)$/i

module.exports = handler
