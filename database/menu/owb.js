const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OWNER MENU* ]----- 🔰
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
◯ *${prefix}bc*
◯ *${prefix}bcgc*
◯ *${prefix}clearall*
◯ *${prefix}block*
◯ *${prefix}unblock*
◯ *${prefix}clone*
◯ *${prefix}setppbot*
◯ *${prefix}setreply*
◯ *${prefix}setprefix*
◯ *${prefix}addprem*
◯ *${prefix}dellprem*
◯ *${prefix}ban*
◯ *${prefix}unban*
◯ *${prefix}resetlimit*
◯ *${prefix}event* 「1/0」
───────────────────
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.owb = owb