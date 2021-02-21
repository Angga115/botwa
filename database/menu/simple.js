const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SIMPLE MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│📍 Nama : ${pushname}
┃│📍 Level : ${getLevelingLevel(sender)}
┃│📍 User ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Jika tidak paham ketik *${prefix}bingungcok*
───────────────────
◯ *${prefix}sticker*
◯ *${prefix}ttp*
◯ *${prefix}tts*
◯ *${prefix}nulis*
◯ *${prefix}toimg*
◯ *${prefix}stalkig*
◯ *${prefix}quotes*
◯ *${prefix}bikinquote*
───────────────────
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.simple = simple