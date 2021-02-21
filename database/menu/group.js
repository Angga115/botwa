const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GROUP MENU* ]----- 🔰
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
◯ *${prefix}welcome* 「1/0」
◯ *${prefix}leveling* 「1/0」
◯ *${prefix}simih* 「1/0」
◯ *${prefix}nsfw* 「1/0」
◯ *${prefix}antilinkgrup* 「1/0」
◯ *${prefix}grup* 「buka/tutup」
◯ *${prefix}add*
◯ *${prefix}kick*
◯ *${prefix}hedsot*
◯ *${prefix}linkgrup*
◯ *${prefix}promote*
◯ *${prefix}demote*
◯ *${prefix}setname*
◯ *${prefix}setdesc*
◯ *${prefix}leave*
◯ *${prefix}tagall*
◯ *${prefix}admin*
◯ *${prefix}level*
◯ *${prefix}fitnah*
◯ *${prefix}hidetag*
◯ *${prefix}mining*
───────────────────
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.groupm = groupm