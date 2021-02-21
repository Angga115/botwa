const gabut = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GABUTZ MENU* ]----- 🔰
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
◯ *${prefix}apakah*
◯ *${prefix}bisakah*
◯ *${prefix}kapankah*
◯ *${prefix}hobby*
◯ *${prefix}rate*
◯ *${prefix}cekbapak*
◯ *${prefix}seberapagay*
◯ *${prefix}truth*
◯ *${prefix}dare*
◯ *${prefix}tebakin*
◯ *${prefix}simi*
───────────────────
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.gabut = gabut
