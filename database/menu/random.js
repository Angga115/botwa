const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *RANDOM MENU* ]----- 🔰
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
◯ *${prefix}darkjokes*
◯ *${prefix}randomhentong*
◯ *${prefix}bokep*
◯ *${prefix}uniform*
◯ *${prefix}thighs*
◯ *${prefix}pussywibu*
◯ *${prefix}asshentong*
◯ *${prefix}sangewibu*
◯ *${prefix}bdsmhentong*
◯ *${prefix}sfwneko*
◯ *${prefix}wpsfw*
◯ *${prefix}nsfwneko*
◯ *${prefix}wpwibu*
◯ *${prefix}panties*
◯ *${prefix}orgyhentong*
◯ *${prefix}randommanga*
◯ *${prefix}jahyhentong*
◯ *${prefix}zettahentong*
◯ *${prefix}cuckold*
◯ *${prefix}erohentong*
◯ *${prefix}ahegao*
───────────────────
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.random = random