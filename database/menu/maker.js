const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *MAKER MENU* ]----- 🔰
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
◯ *${prefix}pornhub*
◯ *${prefix}tahta*
◯ *${prefix}coffe*
◯ *${prefix}ninjalogo*
◯ *${prefix}halloweentext*
◯ *${prefix}neontext*
◯ *${prefix}smoketext*
◯ *${prefix}glitchtext*
◯ *${prefix}blackpink*
◯ *${prefix}bloodtext*
───────────────────
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.maker = maker