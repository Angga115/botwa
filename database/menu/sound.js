const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SOUND MENU* ]----- 🔰
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
◯ *${prefix}iri*
◯ *${prefix}pale*
◯ *${prefix}sound1*
◯ *${prefix}sound2*
◯ *${prefix}sound3*
◯ *${prefix}sound4*
◯ *${prefix}sound5*
◯ *${prefix}sound6*
◯ *${prefix}sound7*
◯ *${prefix}sound8*
◯ *${prefix}sound9*
◯ *${prefix}sound10*
───────────────────
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.sound = sound