// Author : Ramlan ID
// Owner : Nama lu
// Jangan Hapus Author ngonsol
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const base64Img = require('base64-img')
const fetch = require('node-fetch')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { cara } = require('./src/cara')
const { iklan1 } = require('./src/iklan')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const ms = require('parse-ms')
const toMs = require('ms')
const speed = require('performance-now')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { nad } = require('./language')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Angga ID\n' // GANTI NAMA LU
            + 'ORG:OWNER BOTZ;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285266692786:+62 852-6669-2786\n' // GANTI NOMOR LU
            + 'END:VCARD'
const ngonsol = JSON.parse(fs.readFileSync('./settings/Ramlan.json'))
const {
    botName,
    ownerName,
    XteamKey,
    VhtearKey,
    ownerNumber,
    botPrefix,
    GrupLimitz,
    UserLimitz,
    CeerTod
} = ngonsol
// Settings
prefix = botPrefix
blocked = []   
limitawal = UserLimitz
memberlimit = GrupLimitz
cr = CeerTod

// LOAD JSON
const setimker = JSON.parse(fs.readFileSync('./media/stik.json'))
const vidioya = JSON.parse(fs.readFileSync('./media/video.json'))
const audioya = JSON.parse(fs.readFileSync('./media/audio.json'))
const imegya = JSON.parse(fs.readFileSync('./media/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, time, serials) => {
            const obj = { id: userid, name: sender, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
//MrG3P5
/*        function convertBalanceToString(angka)
        {
            var balancenyeini = '';		
            var angkarev = angka.toString().split('').reverse().join('');
            for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) balancenyeini += angkarev.substr(i,3)+'.';
            return ''+balancenyeini.split('',balancenyeini.length-1).reverse().join('');
        }*/
//PREMIUM
                    const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(premium).forEach((i) => {
		        if (premium[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return premium[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(premium).forEach((i) => {
		            if (Date.now() >= premium[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${premium[position].id}`)
		            premium.splice(position, 1)
		            fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
		        }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(premium).forEach((i) => {
		        array.push(premium[i].id)
		    })
		    return array
		}
		
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/*
]=====> SCAN QR <=====[
*/
const rmln = new WAConnection()
rmln.logger.level = 'warn'
console.log(banner.string)
   rmln.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' SUBSCRIBE YT RAMLAN CHANNEL'))
})

	rmln.on('credentials-updated', () => {
		fs.writeFileSync('./Ramlan.json', JSON.stringify(rmln.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'ingfokan cuyy...')
	})
	fs.existsSync('./Ramlan.json') && rmln.loadAuthInfo('./Ramlan.json')
	rmln.on('connecting', () => {
		start('2', 'Ramlan Connecting...')
	})
	rmln.on('open', () => {
		success('2', 'Ramlan Connected')
	})
	rmln.connect({timeoutMs: 30*1000})

rmln.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await rmln.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await rmln.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `[ *WELCOME IN GC ${mdata.subject}* ] \n___________________________\n@${num.split('@')[0]} Intro/Dikick!!! \n➸ Nama : \n➸ Umur : \n➸ Askot : \n➸ Gender : \n➸ Udah Punya Doi/Blm: \n➸ Pap Muka dumlu!!! \n➸ Instagram? \n𝐒𝐚𝐯𝐞 𝐍𝐨𝐦𝐨𝐫 𝐀𝐃𝐌𝐈𝐍! \n *___________________________*\nJangan jadi kutu lomcat sayang!!`
				let buff = await getBuffer(ppimg)
				rmln.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await rmln.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `SELAMAT TINGGAL... @${num.split('@')[0]}👋* \n_Jasamu akan saya kubur dalam dalam_`
				let buff = await getBuffer(ppimg)
				rmln.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	rmln.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	rmln.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const date = new Date().toLocaleDateString()
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await rmln.chats.all()
			const q = args.join(' ')
			const botNumber = rmln.user.jid
			const sender = mek.key.fromMe ? rmln.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
			const RmID = isGroup? mek.participant : mek.key.remoteJid
			pushname = rmln.contacts[RmID] != undefined ? rmln.contacts[RmID].vname || rmln.contacts[RmID].notify : undefined
//			const conts = mek.key.fromMe ? rmln.user.jid : rmln.contacts[sender] || { notify: jid.replace(/@.+/, '') }
//			const pushname = mek.key.fromMe ? rmln.user.name : conts.notify || conts.vname || conts.name || '-'
//			pushname = rmln.contacts[sender] != undefined ? rmln.contacts[sender].vname || rmln.contacts[sender].notify : undefined
//			const pushname = rmln.chats.get(mek.participant) === undefined ? (rmln.contacts[mek.key.remoteJid].notify ? rmln.contacts[mek.key.remoteJid].notify : sender.split('@')[0]) : (rmln.contacts[mek.participant].notify ? rmln.contacts[mek.participant].notify : sender.split('@')[0]
			const groupMetadata = isGroup ? await rmln.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
/*
]=====> RAMLAN ID <=====[
*/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBanned = ban.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPrem = premium.includes(sender) || isOwner
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				rmln.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				rmln.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? rmln.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : rmln.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    rmln.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			rmln.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    rmln.sendMessage(from, audio, mp3, {quoted:mek})
		    }
			
/*
]=====> LEVELING <=====[
*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(nad.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
 
/*
]=====> CHECK LIMIT BY LANN ID <=====[
*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return rmln.sendMessage(from, `Limit anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan naik level_`, text,{ quoted: mek})
                            rmln.sendMessage(from, nad.limitcount(isPrem, limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        rmln.sendMessage(from, nad.limitcount(isPrem, limitCounts), text, { quoted : mek})
                    }
				}
				
/*
]=====> LIMITED BY LANN ID <=====[
*/
           const isLimit = (sender) =>{ 
          	if (isOwner && isPrem) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    rmln.sendMessage(from, nad.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
         const limitAdd = (sender) => {
if (isOwner && isPrem) {return false;}
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
     	       if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`maaf kak membernya sedikit, aku gak bisa disini! Minimal member : ${memberlimit}`)
						setTimeout( () => {
 	                           rmln.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								rmln.updatePresence(from, Presence.composing)
								reply("See you kak")
							}, 4000)
								setTimeout( () => {
								rmln.updatePresence(from, Presence.composing)
								reply("Oh iya, jangan lupain aku ya:(")
							}, 3000)
								setTimeout( () => {
								rmln.updatePresence(from, Presence.composing)
								reply("Baru undang aku lagi:)")
							}, 2000)
								setTimeout( () => {
								rmln.updatePresence(from, Presence.composing)
								reply("Membernya tambahin dulu")
							}, 1000)
								setTimeout( () => {
								rmln.updatePresence(from, Presence.composing)
								reply("Aku pamit ya kak:)")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
      
/*
]=====> ATM <=====[
*/
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Atasan grup mah bebas yakan:v')
		        rmln.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Woyy ${sender.split("@")[0]} Gak Boleh Share Link Group😡`)
		        setTimeout( () => {
			        rmln.groupRemove(from, [kic]).catch((e)=>{reply(`BOT HARUS JADI ADMIN`)})
		        }, 3000)
		        setTimeout( () => {
			        rmln.updatePresence(from, Presence.composing)
			        reply("Hedsot :v")
		        }, 2000)
		        setTimeout( () => {
			        rmln.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        rmln.updatePresence(from, Presence.composing)
			        reply("Ready?")
		        }, 0)
	        }               
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    let authorname = rmln.contacts[from] != undefined ? rmln.contacts[from].vname || rmln.contacts[from].notify : undefined	
	    if (authorname != undefined) { } else { authorname = groupName }				function addMetadata(packname, author) {	

				if (!packname) packname = 'MOSHIBOT'; if (!author) author = 'Angga ID';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}

switch(command) {
                case 'help':
				case 'menu':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				uptime = process.uptime()
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
				    const lvl = getLevelingLevel(sender)
				    const ca = totalchat
await costum(`🔰 -----[ *「 MENU ${botName} 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
*⟡ Nama : ${pushname}*
*⟡ User : ${isPrem ? 'Premium' : 'Free'}*
*⟡ Uang : Rp:${uangku}*
*⟡ Level : ${lvl}*
*⟡ Xp : ${reqXp}*
───────────────────────
*📍 Total Chat : ${ca.length}*
*📍 Total Register : ${_registered.length}*
───────────────────────
◯ *cekprefix*
◯ *${prefix}info*
◯ *${prefix}ping*
◯ *${prefix}donasi*
◯ *${prefix}iklan*
◯ *${prefix}owner*
───────────────────────
◯ *${prefix}simplemenu*
◯ *${prefix}makermenu*
◯ *${prefix}gabutmenu*
◯ *${prefix}downloadmenu*
◯ *${prefix}randommenu*
◯ *${prefix}dompetmenu*
◯ *${prefix}othermenu*
◯ *${prefix}groupmenu*
◯ *${prefix}storagemenu*
◯ *${prefix}ownermenu*
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
				case 'simplemenu':
				case 'simpelmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				await limitAdd(sender)
				uptime = process.uptime()
				await costum(`🔰 -----[ *「 SIMPLE MENU 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
◯ *${prefix}sticker*
◯ *${prefix}stickergif*
◯ *${prefix}quotes*
◯ *${prefix}stalkig*
◯ *${prefix}ttp*
◯ *${prefix}tts*
◯ *${prefix}toimg*
◯ *${prefix}simi*
◯ *${prefix}nulis*
◯ *${prefix}bikinquote*
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
				case 'makermenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				await limitAdd(sender)
				uptime = process.uptime()
				await costum(`🔰 -----[ *「 MAKER MENU 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
◯ *${prefix}hartatahta*
◯ *${prefix}pornhub*
◯ *${prefix}bloodtext*
◯ *${prefix}glitchtext*
◯ *${prefix}blackpink*
◯ *${prefix}coffetext*
◯ *${prefix}neontext*
◯ *${prefix}smoketext*
◯ *${prefix}halloweentext*
◯ *${prefix}ninjalogo*
◯ *${prefix}wolflogo*
◯ *${prefix}gemboktext*
◯ *${prefix}thundername*
◯ *${prefix}makelogoff*
◯ *${prefix}steeltext*
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
				case 'gabutmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				await limitAdd(sender)
				uptime = process.uptime()
				await costum(`🔰 -----[ *「 GABUT MENU 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
◯ *${prefix}apakah*
◯ *${prefix}bisakah*
◯ *${prefix}kapankah*
◯ *${prefix}hobby*
◯ *${prefix}rate*
◯ *${prefix}truth*
◯ *${prefix}dare*
◯ *${prefix}timer*
◯ *${prefix}cekbapak*
◯ *${prefix}tebakin*
◯ *${prefix}caklontong*
◯ *${prefix}family100*
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
				case 'downloadmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				await limitAdd(sender)
				uptime = process.uptime()
				await costum(`🔰 -----[ *「 DOWNLOAD MENU 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
◯ *${prefix}play*
◯ *${prefix}ytmp3*
◯ *${prefix}yutubdl*
◯ *${prefix}tiktod*
◯ *${prefix}tiktod2*
◯ *${prefix}igvideo*
◯ *${prefix}igphoto*
◯ *${prefix}joox*
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
				case 'randommenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				await limitAdd(sender)
				uptime = process.uptime()
				await costum(`🔰 -----[ *「 RANDOM MENU 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
◯ *${prefix}gachacewek*
◯ *${prefix}gachacowok*
◯ *${prefix}darkjokes*
◯ *${prefix}bokep*
◯ *${prefix}cersex*
◯ *${prefix}randomhentong*
◯ *${prefix}pussywibu*
◯ *${prefix}asshentong*
◯ *${prefix}sangewibu*
◯ *${prefix}bdsmhentong*
◯ *${prefix}sfwneko*
◯ *${prefix}wpsfw*
◯ *${prefix}nsfwneko*
◯ *${prefix}panties*
◯ *${prefix}orgyhentong*
◯ *${prefix}randommanga*
◯ *${prefix}jahyhentong*
◯ *${prefix}zettahentong*
◯ *${prefix}cuckold*
◯ *${prefix}erohentong*
◯ *${prefix}ahegao*
◯ *${prefix}husbu*
◯ *${prefix}anjing*
◯ *${prefix}pokemon*
◯ *${prefix}neko*
◯ *${prefix}wibu*
◯ *${prefix}loli*
◯ *${prefix}randomkpop*
◯ *${prefix}nekonime*
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
				case 'dompetmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				await limitAdd(sender)
				uptime = process.uptime()
				await costum(`🔰 -----[ *「 DOMPET MENU 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
◯ *${prefix}atm*
◯ *${prefix}limit*
◯ *${prefix}buylimit*
◯ *${prefix}transfer*
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
				case 'groupmenu':
				case 'grupmenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				await limitAdd(sender)
				uptime = process.uptime()
				await costum(`🔰 -----[ *「 GROUP MENU 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
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
◯ *${prefix}delete*
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
				case 'storagemenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				await limitAdd(sender)
				uptime = process.uptime()
				await costum(`🔰 -----[ *「 STORAGE MENU 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
◯ *${prefix}iri*
◯ *${prefix}pale*
◯ *${prefix}pota*
◯ *${prefix}welot*
◯ *${prefix}alay*
◯ *${prefix}bernyanyi*
◯ *${prefix}bwa*
◯ *${prefix}ganteng*
◯ *${prefix}gatal*
◯ *${prefix}ladida*
◯ *${prefix}rusher*
◯ *${prefix}boong*
◯ *${prefix}tengteng*
◯ *${prefix}sound1*
◯ *${prefix}sound2*
◯ *${prefix}sound3*
◯ *${prefix}sound4*
◯ *${prefix}sound5*
◯ *${prefix}sound6*
◯ *${prefix}sound7*
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
				case 'othermenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				await limitAdd(sender)
				uptime = process.uptime()
				await costum(`🔰 -----[ *「 OTHER MENU 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
◯ *${prefix}premiumlist*
◯ *${prefix}premiumcek*
◯ *${prefix}addstiker*
◯ *${prefix}getstiker*
◯ *${prefix}liststiker*
◯ *${prefix}addvideo*
◯ *${prefix}getvideo*
◯ *${prefix}listvideo*
◯ *${prefix}addvn*
◯ *${prefix}getvn*
◯ *${prefix}listvn*
◯ *${prefix}mutual*
◯ *${prefix}next*
◯ *${prefix}nuliskiri*
◯ *${prefix}nuliskanan*
◯ *${prefix}moddroid*
◯ *${prefix}happymod*
◯ *${prefix}pinterest*
◯ *${prefix}brainly*
◯ *${prefix}wiki*
◯ *${prefix}nangis*
◯ *${prefix}cium*
◯ *${prefix}peluk*
◯ *${prefix}slowmo*
◯ *${prefix}ngebass*
◯ *${prefix}tupai*
◯ *${prefix}tomp3*
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
					case 'ownermenu':
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
					if (isLimit(sender)) return reply(nad.limitend(pusname))
				await limitAdd(sender)
				uptime = process.uptime()
				await costum(`🔰 -----[ *「 OWNER MENU 」* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan✨
*📍Tanggal : ${date}*
*📍Jam : ${time}*
*📍Aktif : ${kyun(uptime)}*
───────────────────────
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
───────────────────────
🔰 --------[ *「 BY ${ownerName} 」* ]-------- 🔰`, text, tescuk, cr)
					break
// END MENU
/*
Script VIP by Ramlan ID
*/
// START

				case 'info':
					me = rmln.user
					em = ownerNumber
					au = `Ramlan ID`
					uptime = process.uptime()
					const teps = `*➸ Nama bot : ${me.name}*
*➸ OWNER : ${ownerName}*
*➸ AUTHOR : ${au}*
*➸ Nomor Owner : wa.me/${em.split('@')[0]}*
*➸ Prefix : ${prefix}*
*➸ User Premium : ${premium.length}*
*➸ Total Block Contact : ${blocked.length}*
*➸ Aktif : ${kyun(uptime)}*`
					buffer = await getBuffer(me.imgUrl)
					rmln.sendMessage(from, buffer, image, {caption: teps, contextInfo:{mentionedJid: [me.jid]}})
					break
            case 'admin':
            case 'owner':
            case 'creator':
                  rmln.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  rmln.sendMessage(from, 'Tuh Nomor Pacarku >_<, Ehh Ownerku mksdnya:v',MessageType.text, { quoted: mek} )
					break
				case 'donasi':
				case 'donate':
					rmln.sendMessage(from, `Hallo, ${pushname} 👋
Mau donasi ya kak ✨
 اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_
╔════════════════════
║ *DONASI UNTUK ${botName}*
╠════════════════════
║╭──❉ *DONASI BOS* ❉─────
║│➸ *OVO*: _0855-5924-0360_
║│➸ *DANA*: _0855-5924-0360_
║│➸ *PULSA*: _0812-1444-1027_
║│➸ *GOPAY*: _0855-5924-0360_
║╰──────────────────
╠════════════════════
║         ${botName}
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║         ${botName}
╠════════════════════
║ _*POWERED BY ${ownerName}*_
╚════════════════════`, text, tescuk, cr)
					break
				case 'bingungcok':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())				
					rmln.sendMessage(from, cara(pushname, prefix, botName, ownerName), text)
					break
				case 'iklan':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())				
					rmln.sendMessage(from, iklan1(pushname, prefix, botName, ownerName), text)
					break
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                rmln.sendMessage(from, `Speed: ${latensi.toFixed(4)} _ms_`, text, { quoted: mek})
                    break
// STICKER
				case 'stiker':
				case 'sticker':
				case 's':
				case 'stickergif':
				case 'stikergif':
				if (isBanned) return reply(nad.baned())
				    if (!isRegistered) return reply(nad.noregis())
				    if (isLimit(sender)) return reply(nad.limitend(pusname))
                    await limitAdd(sender)				
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await rmln.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(nad.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('MOSHIBOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(nad.stikga())
									rmln.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await rmln.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(nad.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(` Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('MOSHIBOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(nad.stikga())
									rmln.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
// SIMI
				case 'simi':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (args.length < 1) return reply(`Mau nanya apa? Contoh : ${prefix}simi halo`)
					teks = body.slice(5)
					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=${teks}&APIKEY=${XteamKey}`)
					reply(anu.jawaban)
					await limitAdd(sender)
					break
// TTS
				case 'tts':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (args.length < 1) return rmln.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id Halo Moshi`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return rmln.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('Teks nya terlalu panjang kak')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(nad.stikga())
							rmln.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
// TTP
							case 'ttp': //By NOIR X RAMLAN ID
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
							pngttp = './temp/ttp.png'
							webpng = './temp/ttp.webp'
							const ttptext = body.slice(5)
							fetch(`https://api.areltiyan.site/sticker_maker?text=${ttptext}`, { method: 'GET'})
							.then(async res => {
							const ttptxt = await res.json()
							console.log("BERHASIL")
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function(err, filepath) {
							if (err) return console.log(err);
							exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
							buffer = fs.readFileSync(webpng)
							rmln.sendMessage(from, buffer, sticker)
							fs.unlinkSync(webpng)
							fs.unlinkSync(pngttp)
							})
							})
							});
							await limitAdd(sender)
							break
// TOIMG
				case 'toimg':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (!isQuotedSticker) return reply('Reply atau Tag sticker yang mau dijadiin gambar kak >_<')
					reply(nad.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await rmln.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(ran)
						rmln.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kak [(^.^)]'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
// STALK IG
                   case 'stalkig':
                   if (isBanned) return reply(nad.baned())
                   if (!isRegistered) return reply(nad.noregis())
                   if (isLimit(sender)) return reply(nad.limitend(pusname))
                     teks = body.slice(9)
                     anu = await fetchJson(`https://api.xteam.xyz/dl/igstalk?nama=${teks}&APIKEY=${XteamKey}`, {method: 'get'})
                     reply('「❗」Sabar Lagi Stalking IG nya kak')
                     buffer = await getBuffer(anu.result.user.hd_profile_pic_url_info.url)
                     hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${teks} \n\n *Username?* : _${anu.result.user.username}_ \n *Nama??* : _${anu.result.user.full_name}_ \n *Jumlah Follower??﹦?* : _${anu.result.user.follower_count}_ \n *Jumlah Following?* : _${anu.result.user.following_count}_ \n *Jumlah Post?* : _${anu.result.user.media_count}_ \n *Biografi?? :* _${anu.result.user.biography}`
                    rmln.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
			       break
// QUOTES
				case 'quotes':
				rmln.updatePresence(from, Presence.composing) 
                if (isBanned) return reply(mess.wait)
                if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				 data = fs.readFileSync('./src/quote.json');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote =''+randKey.quote+ '\n\n_By: '+randKey.by+'_'
                 rmln.sendMessage(from, randQuote, text, {quoted: mek})
				 await limitAdd(sender)
				 break
// NULIS
				case 'nulis':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis Moshi baik hati`)
				nul = body.slice(7)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				tak = await getBuffer(`https://api.vhtear.com/write?text=${nul}&apikey=${VhtearKey}`)
				rmln.sendMessage(from, tak, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
					await limitAdd(sender)				
				break
// BIKIN QUOTE
                case 'bikinquote':
                if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `yang mau dijadiin quote apaan, titit?\n\ncontoh : ${prefix}bikinquote aku bukan boneka & Kata Moshi`
					if (args.length < 1) return reply(pref)
					reply(nad.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					rmln.sendMessage(from, buffer, image, {caption: 'Nih kak >_<', quoted: mek})
					await limitAdd(sender)
					break
// NINJA LOGO
				case 'ninjalogo':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}ninjalogo BOTWA & Moshi ID`)
				reply(nad.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${nin}&text2=${ja}&APIKEY=${XteamKey}`)
				rmln.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break
// HALOWIN		
		case 'halloweentext':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))				
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}halloweentext BOTWA`)
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(nad.wait())
				bumfer = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${ween}&APIKEY=${XteamKey}`)
		    rmln.sendMessage(from, bumfer, image, {quoted: mek})
		    await limitAdd(sender)
		    break
// SMOKETEXT
		case 'smoketext':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}smoketext Moshi ID`)
				smoke = body.slice(11)
				if (smoke.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(nad.wait())
				bunfer = await getBuffer(`https://api.xteam.xyz/photooxy/smoke?text=${smoke}&APIKEY=${XteamKey}`)
		    rmln.sendMessage(from, bunfer, image, {quoted: mek})
		    await limitAdd(sender)
		    break
// NEONTEXT
           case 'neontext':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
           if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}neontext BOTWA`)
           neon = body.slice(10)
           reply(nad.wait())
           busfer = await getBuffer(`https://api.xteam.xyz/textpro/neon?text=${neon}&APIKEY=${XteamKey}`)
           rmln.sendMessage(from, busfer, image, {quoted: mek})
		    await limitAdd(sender)
           break
// HARTATAHTA
           case 'hartatahta':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
           if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}hartatahta BOTWA`)
           tahta = body.slice(12)
           reply('「❗」Hirti Tihti Tai Anjg :v')
           bupfer = await getBuffer(`https://api.xteam.xyz/tahta?text=${tahta}&APIKEY=${XteamKey}`)
           rmln.sendMessage(from, bupfer, image, {quoted: mek})
		    await limitAdd(sender)
           break
// KOPI
           case 'coffetext':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
           if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}coffetext BOTWA`)
           kopi = body.slice(11)
           reply(nad.wait())
           butfer = await getBuffer(`https://api.xteam.xyz/photooxy/kopi2?text=${kopi}&APIKEY=${XteamKey}`)
           cap = `「☕」Harga Kopi : Rp.30.000\nJan Lupa Bayar Ajg`
           rmln.sendMessage(from, butfer, image, {quoted: mek, caption: cap})
		    await limitAdd(sender)
           break
// PORNHUB
				case 'pornhub':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}pornhub BOT & HUB`)
				reply(nad.wait())
				bukfer = await getBuffer(`https://api.xteam.xyz/textpro/ph?text=${porn}&text2=${hub}&APIKEY=${XteamKey}`)
				rmln.sendMessage(from, bukfer, image, {quoted: mek})
				await limitAdd(sender)
				break
// STEEL
				case 'steeltext':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
				var so = body.slice(11)
				var ste = so.split("&")[0];
				var el = so.split("&")[1];
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}steeltext BOT & Moshi`)
				reply(nad.wait())
				bukfer = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome2/steel3d?apikey=7665337f174e61689ac6f51b&text1=${ste}&text2=${el}`)
				rmln.sendMessage(from, bukfer, image, {quoted: mek})
				await limitAdd(sender)
				break
// BELKPING
           case 'blackpink':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
           if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}blackpink BOTWA`)
           ping = body.slice(11)
           reply('[😱] Hah Blekping :v')
           bupper = await getBuffer(`https://api.xteam.xyz/textpro/blackpink?text=${ping}&APIKEY=${XteamKey}`)
           rmln.sendMessage(from, bupper, image, {quoted: mek})
		    await limitAdd(sender)
           break
// WOLF LOGO
				case 'wolflogo':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
				var gh = body.slice(11)
				var wo = gh.split("&")[0];
				var lf = gh.split("&")[1];
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}wolflogo BOTWA & Moshi ID`)
				reply(nad.wait())
				bufcer = await getBuffer(`https://api.vhtear.com/avatarwolf?text1=${wo}&text2=${lf}&apikey=${VhtearKey}`)
				rmln.sendMessage(from, bufcer, image, {quoted: mek})
				break
// GEMBOK
				case 'gemboktext':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
				var gh = body.slice(12)
				var gem = gh.split("&")[0];
				var bok = gh.split("&")[1];
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}gemboktext 11 01 2021 & Moshi Dan Doi`)
				reply(nad.wait())
				bufser = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
				rmln.sendMessage(from, bufser, image, {quoted: mek})
				await limitAdd(sender)
				break
// GLITCHTEXT
				case 'glitchtext':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
				var gh = body.slice(12)
				var gli = gh.split("&")[0];
				var tch = gh.split("&")[1];
				if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}glitchtext Moshi & Ganteng`)
				reply(nad.wait())
				bulder = await getBuffer(`https://api.xteam.xyz/textpro/glitch?text=${gli}&text2=${tch}&APIKEY=${XteamKey}`)
				rmln.sendMessage(from, bulder, image, {quoted: mek})
				await limitAdd(sender)
				break
// BLOODTEXT
           case 'bloodtext':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
           if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}bloodtext BOTWA`)
           blood = body.slice(11)
           reply('[😱] Hati Hati Darah Nihh Boss:v')
           busser = await getBuffer(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${blood}&APIKEY=${XteamKey}`)
           rmln.sendMessage(from, busser, image, {quoted: mek})
		    await limitAdd(sender)
           break
// THUNDER
           case 'thundername':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
           if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}thundername Moshi`)
           thun = body.slice(13)
           reply(nad.wait())
           nem = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=${VhtearKey}`)
           rmln.sendMessage(from, nem, image, {quoted: mek, caption: `Anjay bah`})
           await limitAdd(sender)
           break
// LOGO FF
           case 'makelogoff':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
           if (args.length < 1) return reply(`Teksnya mana kak?\nContoh : ${prefix}makelogoff Moshi & alok`)
           ff = body.slice(12)
           bulner = await getBuffer(`https://api.vhtear.com/logoff?hero=alok&text=${di}&apikey=${VhtearKey}`)
           reply(nad.wait())
           rmln.sendMessage(from, bulner, image, {quoted: mek})
           await limitAdd(sender)
           break
           
// TEBAK GAMBAR
				case 'tebakin':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${VhtearKey}`, {method: 'get'})
					nah = anu.result
					ngebuff = await getBuffer(nah.soalImg)
					tebak = `➸ Jawaban : *${nah.jawaban}*`
					setTimeout( () => {
					rmln.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
// CAK LONTONG
				case 'caklontong':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VhtearKey}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					lontong = `➸ Jawaban : *${anu.result.jawaban}* \n➸ Penjelasan : *${anu.result.desk}*`
					setTimeout( () => {
					rmln.sendMessage(from, lontong, text, {quoted: mek})					
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, '_10 Detik lagi…_', text)
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, '_20 Detik lagi..._', text)
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, '_30 Detik lagi..._', text)
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, caklontong, text, {quoted: mek})
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
// FAMILY 100
				case 'family100':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${VhtearKey}`, {method: 'get'})
					ihh =  `➸ Pertanyaan : *{anu.result.soal}*`
					ahh = `➸ Jawaban : *${anu.result.jawaban[0]}*`
					setTimeout( () => {
					rmln.sendMessage(from, ahh, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					rmln.sendMessage(from, ihh, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender)
					 break
// BISAKAH
				case 'bisakah':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky','Gak Bisa Ajg Aowkwowk','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					rmln.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
// KAPANKAH
				case 'kapankah':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					rmln.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
// APAKAH
           case 'apakah':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					rmln.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
// RATE
				case 'rate':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					rmln.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
// HOBBY
           case 'hobby':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					rmln.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
// CEK GAY
/*          case 'seberapagay':
           if (isBanned) return reply(nad.baned())
           if (!isRegistered) return reply(nad.noregis())
           if (isLimit(sender)) return reply(nad.limitend(pusname))
					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${gay}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   await limitAdd(sender)
					break*/
// TRUTH
                case 'truth':
                if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					rmln.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
// DARE
                case 'dare':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))                
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					rmln.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break
// CEK BAPAK
                case 'cekbapak': // By Ramlan ID
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				const bapak =['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs','Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda','Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v','Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					rmln.sendMessage(from, cek, text, { quoted: mek})
					await limitAdd(sender)
					break
// TIMER
                  case 'timer':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))                  
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Bangun Woyy Habis Waktu :v")
				}, timer)
				break
// PLAY
					case 'play':
						if (args.length < 1) return reply(`Yang mau di download apaan?\nContoh : ${prefix}play DJ TUMANEDANG`)
					    if (isBanned) return reply(nad.baned())
						if (!isRegistered) return reply(nad.noregis())
						if (isLimit(sender)) return reply(nad.limitend(pusname))
					     reply(nad.wait())
					     anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${body.slice(6)}&APIKEY=${XteamKey}`)
					    if (anu.error) return reply(anu.error)
					     infomp3 = `*「❗」Lagu Ditemukan「❗」*\n➸ Judul : ${anu.judul}\n➸ Size : ${anu.size}\n\n*[WAIT] Proses Dumlu Yakan*`
					     bumfer = await getBuffer(anu.thumbnail)
					     lamgu = await getBuffer(anu.url)
					     rmln.sendMessage(from, bumfer, image, {quoted: mek, caption: infomp3})
					     rmln.sendMessage(from, lamgu, audio, {mimetype: 'audio/mp4', quoted: mek})
					     await limitAdd(sender)
				break
// YTMP3
					case 'ytmp3':
						if (args.length < 1) return reply('Urlnya mana um?')
					     if (isBanned) return reply(nad.baned())
						 if (!isRegistered) return reply(nad.noregis())
						 if (isLimit(sender)) return reply(nad.limitend(pusname))
						 if (!isPrem) return reply(nad.premium(prefix))
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
					     reply(nad.wait())
					     anu = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=${body.slice(7)}`)
					     if (anu.error) return reply(anu.error)
					     ingfomp3 = `*「❗」Lagu Ditemukan「❗」*\n➸ Judul : ${anu.title}\n\n*[WAIT] Proses Dumlu Yakan*`
					     buffer = await getBuffer(anu.thumb)
					     lagu = await getBuffer(anu.result)
					     rmln.sendMessage(from, buffer, image, {quoted: mek, caption: ingfomp3})
					     rmln.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
					     await limitAdd(sender)
					break
// YTMP4
				case 'yutubdl':
					if (args.length < 1) return reply('Linknya mana um?')
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
				    if (!isPrem) return reply(nad.premium(prefix))
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
					lah = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${body.slice(9)}&APIKEY=${XteamKey}`)
					if (lah.error) return reply(lah.error)
					teks = `*➸ Judul* : ${lah.judul}\n*➸ Size* : ${lah.size}\n\n*[WAIT] Proses Dumlu Yakan*`
					mengasu = await getBuffer(lah.thumbnail)
					rmln.sendMessage(from, mengasu, image, {quoted: mek, caption: teks})
					mengery = await getBuffer(lah.url)
					rmln.sendMessage(from, mengery, video, {mimetype: 'video/mp4', quoted: mek})
					break
// YTMP4
				case 'ytmp4':
					if (args.length < 1) return reply('Linknya mana um?')
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
				    if (isLimit(sender)) return reply(nad.limitend(pusname))
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
					cie = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${body.slice(7)}`)
					if (cie.error) return reply(cie.error)
					tels = `*➸ JUDUL* : ${cie.title}\n\n*[WAIT] Proses Dumlu Yakan*`
					bufper = await getBuffer(cie.thumb)
					rmln.sendMessage(from, bufper, image, {quoted: mek, caption: tels})
					bufp = await getBuffer(cie.result)
					rmln.sendMessage(from, bufp, video, {mimetype: 'video/mp4', quoted: mek})
					await limitAdd(sender)
					break
// TIKTOD
				case 'tiktod':
					if (args.length < 1) return reply('Linknya mana um?')
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${body.slice(8)}&APIKEY=${XteamKey}`)
					reply('[WAIT] Proses Dumlu Yakan')
					neteh = await getBuffer(anu.result.url)
					rmln.sendMessage(from, neteh, video, {mimetype: 'video/mp4', quoted: mek})
					await limitAdd(sender)
					break
				case 'tiktod2':
					if (args.length < 1) return reply('Linknya mana um?')
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					amu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${body.slice(9)}&apikey=${VhtearKey}`,)
					reply('[WAIT] Proses Dumlu Yakan')
					wui = await getBuffer(amu.result.video)
					rmln.sendMessage(from, wui, video, {mimetype: 'video/mp4', quoted: mek})
					await limitAdd(sender)
					break
// JOOX
				case 'joox':
					if (args.length < 1) return reply('Linknya mana um?')
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					aru = await fetchJson(`https://lolhuman.herokuapp.com/api/jooxplay?apikey=7665337f174e61689ac6f51b&query=${body.slice(6)}`)
					woo = await getBuffer(aru.result.image)
					waa = aru.result.info
					capt = `*➸ Song* : ${waa.song}\n*➸ Penyanyi* : ${waa.singer}\n*➸ Album* : ${waa.album}\n*➸ Tanggal* : ${waa.date}\n*➸ Durasi* : ${waa.duration}\n\n*[WAIT] Proses Dumlu Yakan*`
					rmln.sendMessage(from, woo, image, {quoted: mek, caption: capt})
					ya = aru.result.audio[0]
					wii = await getBuffer(ya.link)
					rmln.sendMessage(from, wii, video, {mimetype: 'audio/mp4', quoted: mek})
					await limitAdd(sender)
					break
// IG PHOTO
		    case 'igphoto':
		    if (args.length < 1) return reply('Linknya mana um?')
		    if (isBanned) return reply(nad.baned())
		    if (!isRegistered) return reply(nad.noregis())
		    if (isLimit(sender)) return reply(nad.limitend(pusname))
		    reply(nad.wait())
		    uh = await fetchJson(`https://api.xteam.xyz/dl/ig?url=${body.slice(9)}&APIKEY=${XteamKey}`)
		    if (uh.error) return reply(uh.error)
		    cuyy = `*Caption :* ${uh.result.caption}`
		    buffer = await getBuffer(uh.result.data[0].data)
		    rmln.sendMessage(from, buffer, image, {quoted: mek, caption: cuyy})
		    await limitAdd(sender)
		    break
// IG VIDEO
		    case 'igvideo':
		    if (args.length < 1) return reply('Linknya mana um?')
		    if (isBanned) return reply(nad.baned())
		    if (!isRegistered) return reply(nad.noregis())
		    if (!isPrem) return reply(nad.premium(prefix))
		    reply(nad.wait())
		    asu = await fetchJson(`https://api.xteam.xyz/dl/ig?url=${body.slice(9)}&APIKEY=${XteamKey}`)
		    if (asu.error) return reply(asu.error)
		    ige = await getBuffer(asu.result.data[0].data)
		    rmln.sendMessage(from, ige, video, {mimetype: 'video/mp4', quoted: mek})
		    break
// GACHA CEWEK
					case 'gachacewek':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply(nad.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cewekcantik&apikey=${VhtearKey}`, {method: 'get'})
					var ram = JSON.parse(JSON.stringify(anu.result));
					var lan =  ram[Math.floor(Math.random() * ram.length)];
					mhe = await getBuffer(lan)
					rmln.sendMessage(from, mhe, image, { quoted: mek })
					await limitAdd(sender)
					break
// GACHA COWOK
					case 'gachacowok':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply(nad.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cowokganteng&apikey=${VhtearKey}`, {method: 'get'})
					var ram = JSON.parse(JSON.stringify(anu.result));
					var lan =  ram[Math.floor(Math.random() * ram.length)];
					ngonsol = await getBuffer(lan)
					rmln.sendMessage(from, ngonsol, image, { quoted: mek })
					await limitAdd(sender)
					break
// HENTAI
                case 'randomhentong':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					gatauda = body.slice(15)
					reply(nad.wait())
					buffer = await getBuffer(`https://api.xteam.xyz/randomimage/hentai?APIKEY=${XteamKey}`)
					rmln.sendMessage(from, buffer, image, {quoted: mek})
					break
// BOKEP
				case 'bokep':
				rmln.updatePresence(from, Presence.composing) 
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('JANGAN COMLY MULU BRO')
                 randTeks = randKey.teks
                 rmln.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
// CERSEX
					case 'cersex':
					if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
						gam = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VhtearKey}`, {method: 'get'})
						ohh = gam.result
						tuxt = `${ohh.cerita}`
						buffer = await getBuffer(ohh.image)
						rmln.sendMessage(from, buffer, image, {quoted: mek, caption: tuxt})
					await limitAdd(sender)
					break
// DARK
                case 'darkjokes':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))   
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
                await limitAdd(sender)
				break
// AHEGAO
					case 'ahegao':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (!isPrem) return reply(nad.premium(prefix))
				ahe = await getBuffer(`https://api.xteam.xyz/randomimage/ahegao?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, ahe, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					break
// EROHENTAI
					case 'erohentong':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (!isPrem) return reply(nad.premium(prefix))
				ahu = await getBuffer(`https://api.xteam.xyz/randomimage/ero?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, ahu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					break
// CUCKOLD
					case 'cuckold':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (!isPrem) return reply(nad.premium(prefix))
				agu = await getBuffer(`https://api.xteam.xyz/randomimage/cuckold?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, agu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					break
// ZETTA HENTONG
					case 'zettahentong':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
				avu = await getBuffer(`https://api.xteam.xyz/randomimage/zettairyouiki?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, avu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					await limitAdd(sender)
					break
// JAHY HENTONG
					case 'jahyhentong':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis()) // Ramlan ID
                if (!isPrem) return reply(nad.premium(prefix))
				aku = await getBuffer(`https://api.xteam.xyz/randomimage/jahy?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, aku, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					break
// RANDOM MANGA
					case 'randommanga':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
				alu = await getBuffer(`https://api.xteam.xyz/randomimage/manga?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, alu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					await limitAdd(sender)
					break
// ORGY HENTAI
					case 'orgyhentong':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (!isPrem) return reply(nad.premium(prefix))
				azu = await getBuffer(`https://api.xteam.xyz/randomimage/orgy?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, azu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					break
// PANTIES
					case 'panties':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (!isPrem) return reply(nad.premium(prefix))
				axu = await getBuffer(`https://api.xteam.xyz/randomimage/panties?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, axu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					break
// NSFWNEKO
					case 'nsfwneko':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
				   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
				abu = await getBuffer(`https://api.xteam.xyz/randomimage/nsfwneko?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, abu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					await limitAdd(sender)
					break
// LOLI
				case 'loli':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				axu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VhtearKey}`)
				nih = axu.result
				buller = await getBuffer(nih.result)
				rmln.sendMessage(from, buller, image, {quoted: mek, caption: 'Cintai Loli Mu >_<'})
				await limitAdd(sender)
				break
// WPSFW
					case 'wpsfw':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
				   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
				anu = await getBuffer(`https://api.xteam.xyz/randomimage/wpnsfwmobile?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, anu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					await limitAdd(sender)
					break
// SFWNEKO
					case 'sfwneko':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
				   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
				amu = await getBuffer(`https://api.xteam.xyz/randomimage/sfwneko?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, amu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					await limitAdd(sender)
					break
// BDSM HENTAI
					case 'bdsmhentong':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
				aqu = await getBuffer(`https://api.xteam.xyz/randomimage/bdsm?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, aqu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					break
// SANGE WIBU
					case 'sangewibu':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
				aau = await getBuffer(`https://api.xteam.xyz/randomimage/mstrb?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, aau, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					break
// ASSHENTAI
					case 'asshentong':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
				awu = await getBuffer(`https://api.xteam.xyz/randomimage/ass?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, awu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					break
// PUSIWIBU
					case 'pussywibu':
				if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
				asu = await getBuffer(`https://api.xteam.xyz/randomimage/pussy?APIKEY=${XteamKey}`)
				reply('Tobat bro tobat :v')
					rmln.sendMessage(from, asu, image, {quoted: mek, caption: 'Jangan Comly >_<'})
					break
// NEKONIME
                case 'nekonime':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					reply(nad.wait())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/nekonime`)
					vvibu = await getBuffer(anu.result)
					rmln.sendMessage(from, vvibu, image, {quoted: mek, caption: 'VVibu AbiZzzz :v'})
					await limitAdd(sender)
				break
// KPOP
                case 'randomkpop':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
                                        reply(nad.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        randomkpop = `*PLASTIQUE*`
                                        rmln.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        await limitAdd(sender)
                                        break
// HUSBU
                case 'husbu':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
                   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						rmln.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
// WIBU
				case 'wibu':
                if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				data = await fetchJson(`https://st4rz.herokuapp.com/api/waifu`)
				buffer = await getBuffer(data.image)
				rmln.sendMessage(from, buffer, image, {quoted: mek, caption: 'VVibu AbiZzz :v'})
				await limitAdd(sender)
				break
//POKEMON
                case 'pokemon':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
                   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(nad.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					rmln.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
// ANJING
                case 'anjing':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
                   if (!isGroup) return reply(nad.groupo())
                   if (!isNsfw) return reply(nad.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(nad.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					rmln.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
//NEKO
					case 'neko':
					if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						rmln.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih nekonime mu >_<'})
					await limitAdd(sender)
					break
// LIMIT
				case 'limit':
				   if (isBanned) return reply(nad.baned())
				   if (!isRegistered) return reply(nad.noregis())
				   checkLimit(sender)
					break
// TF
				case 'transfer':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				if (!q.includes('|')) return  reply(nad.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6285266692786@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang berhasil\n➸ dari : +${sender.split("@")[0]}\n➸ ke : +${tujuan}\n➸ jumlah transfer : ${jumblah}\n➸ pajak : ${fee}`)
                await limitAdd(sender)
                break
//ATM
				case 'atm':
                  if (isBanned) return reply(nad.baned())				
				if (!isRegistered) return reply(nad.noregis())
				const kantong = checkATMuser(sender)
				reply(nad.uangkau(pushname, sender, kantong))
				break
// BUYLIMIT
				case 'buylimit':
                  if (isBanned) return reply(nad.baned())				
				if (!isRegistered) return reply(nad.noregis())
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dumlu >_< jangan open bo kak:v`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n➸ pengirim : Moshi ID\n➸ penerima : ${pushname}\n➸ nominal pembelian : ${payout} \n➸ harga limit : ${koinPerlimit}/limit\n➸ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
				} 
				break
// WELCOME
				case 'welcome':
                  if (isBanned) return reply(nad.baned())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*FITUR WELCOME SUDAH AKTIF KAK*')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「 SUKSES 」MENGAKTIFKAN FITUR WELCOME DI GROUP*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「 SUKSES 」MEMATIKAN FITUR WELCOME DI GROUP*')
					} else {
						reply(nad.satukos())
					}
					break
// EVENT
                 case 'event':
                  if (isBanned) return reply(nad.baned())                 
					if (!isGroup) return reply(nad.groupo())
					if (!isOwner) return reply(nad.ownerb())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF BOS*')
						event.push(from)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「 SUKSES 」MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「 SUKSES 」MEMATIKAN EVENT DI GROUP*')
					} else {
						reply(nad.satukos())
					}
					break
// LEVELING
                case 'leveling':
                if (!isGroup) return reply(nad.groupo())
                if (!isGroupAdmins) return reply(nad.admin())
                if (args.length < 1) return reply('Ekhemm >_<')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(nad.lvlon())
                } else if (args[0] === '0') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(nad.lvloff())
                } else {
                    reply(nad.satukos())
                }
					break
// SIMIH
				case 'simih':
                  if (isBanned) return reply(nad.baned())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*SUDAH AKTIF*')
						samih.push(from)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「 SUKSES 」MENGAKTIFKAN FITUR SIMI DI GROUP*')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「 SUKSES 」MEMATIKAN FITUR SIMI DI GROUP*')
					} else {
						reply(nad.satukos())
					}
					break
// NSFW
				case 'nsfw':
                  if (isBanned) return reply(nad.baned())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (args.length < 1) return reply('Ekhem >_<')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「 SUKSES 」MENGAKTIFKAN FITUR NSFW DI GROUP*')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「 SUKSES 」MEMATIKAN FITUR NSWF DI GROUP*')
					} else {
						reply(nad.satukos())
					}
					break
// ANTI LINK
                                case 'antilinkgrup':
                  if (isBanned) return reply(nad.baned())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('EMANG MATI?')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「 SUKSES 」MENGAKTIFKAN ANTI LINK DI GROUP')
						rmln.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「 SUKSES 」MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
// ADMIN
				case 'admin':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))			
					if (!isGroup) return reply(nad.groupo())
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					await limitAdd(sender)
					break
// BUKA TUTUP
					case 'grup':
					case 'group':
                  if (isBanned) return reply(nad.baned())					
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						rmln.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						rmln.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
// ADD
				case 'add':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())	
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						rmln.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
					break
// KICK
			     	case 'kick':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())	     	
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Bismillah atas izin admin grup kamu akan saya tendang 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						rmln.groupRemove(from, mentioned)
					} else {
						mentions(`Bismillah atas izin admin grup kamu akan saya tendang @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						rmln.groupRemove(from, mentioned)
					}
					break
// HIDETAG
                case 'hidetag':
                  if (isBanned) return reply(nad.baned())                
                if (!isRegistered) return reply(nad.noregis())
                if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					var value = body.slice(9)
					var group = await rmln.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					rmln.sendMessage(from, options, text)
					await limitAdd(sender)
					break
// LEVEL
                case 'level':
                  if (isBanned) return reply(nad.baned())                
                if (!isRegistered) return reply(nad.noregis())
                if (!isLevelingOn) return reply(nad.lvlnoon())
                if (!isGroup) return reply(nad.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(nad.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : wa.me/${sender.split("@")[0]}\n┃│➸ XP : ${userXp}/${requiredXp}\n┃│➸ LEVEL : ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
               rmln.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
// LINKGROUP
                 case 'linkgrup':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))                
				    if (!isGroup) return reply(nad.groupo())
				    if (isLimit(sender)) return reply(nad.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(nad.badmin())
				    linkgc = await rmln.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    rmln.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
// TAG ALL
				case 'tagall':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))		
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					await limitAdd(sender)
					break
// SETNAME
           case 'setname':
                if (!isRegistered) return reply(nad.noregis())           
                if (!isGroup) return reply(nad.groupo())
			    if (!isGroupAdmins) return reply(nad.admin())
				if (!isBotGroupAdmins) return reply(nad.badmin())
                rmln.groupUpdateSubject(from, `${body.slice(9)}`)
                rmln.sendMessage(from, '「 SUKSES 」Mengubah Nama Grup', text, {quoted: mek})
					break
// SETDESC
                case 'setdesc':
                if (!isRegistered) return reply(nad.noregis())                
                if (!isGroup) return reply(nad.groupo())
			    if (!isGroupAdmins) return reply(nad.admin())
				if (!isBotGroupAdmins) return reply(nad.badmin())
                rmln.groupUpdateDescription(from, `${body.slice(9)}`)
                rmln.sendMessage(from, '*「 SUKSES 」Mengubah Desk Grup', text, {quoted: mek})
					break
// DEMOTE
           case 'demote':
                if (!isRegistered) return reply(nad.noregis())           
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						rmln.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						rmln.groupDemoteAdmin(from, mentioned)
					}
					break
// PROMOTE
				case 'promote':
                if (!isRegistered) return reply(nad.noregis())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						rmln.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						rmln.groupMakeAdmin(from, mentioned)
					}
					break
// HEDSOT
				case 'hedsot':
                if (!isRegistered) return reply(nad.noregis())				
					if (!isGroup) return reply(nad.groupo())
					if (!isGroupAdmins) return reply(nad.admin())
					if (!isBotGroupAdmins) return reply(nad.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Bismillah Hedsot >_< :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						rmln.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						rmln.groupAdd(from, [num])
					} else {
						mentions(`Berhasil Meng hedsot pala nya  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						rmln.groupRemove(from, mentioned)
						}
					break
// FITNAH
                 case 'fitnah':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))				
				if (!isGroup) return reply(nad.groupo())
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					rmln.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					await limitAdd(sender)
					break
// LEAVE
                      case 'leave':
                      if (isBanned) return reply(nad.baned())      
                      if (!isRegistered) return reply(nad.noregis())           
                      if (!isGroup) return reply(nad.groupo())
                      if (!isGroupAdmins) return reply(nad.admin())
                      setTimeout( () => {
                      rmln.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      rmln.updatePresence(from, Presence.composing) 
                      if (!isRegistered) return reply(nad.noregis())
                      if (isBanned) return reply(nad.baned())   
                      rmln.sendMessage(from, 'Aku pamit kak:)', text)
                      }, 0)
                      break
// DELETE
                case 'del':
				case 'delete':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					 rmln.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
// MINING
            	case 'mining':
                      if (!isRegistered) return reply(nad.noregis())
                      if (isLimit(sender)) return reply(nad.limitend(pushname))
                      if (!isGroup) return reply(nad.groupo())
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner ${ownerName}`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena ${ownerName} baik Bot memberikan ${one}Xp >_<`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
// BC	
				case 'bc':
					rmln.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(nad.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await rmln.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await rmln.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							rmln.sendMessage(_.jid, buff, image, {caption: `*「 BABY BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BABY BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
// BC GC
				case 'bcgc':
				     if (!isOwner) return reply(nad.ownerb())
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await rmln.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							rmln.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`})
						}
						reply('*「 SUKSES BOSKU 」*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
// SET CR
					case 'setreply':
					if (!isOwner) return reply(nad.ownerb())
                    rmln.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break
// SETPREFIX
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(nad.ownerb())
					prefix = args[0]
					reply(`*「 SUKSES 」* Prefix jadi ➸ : ${prefix}`)
					break
// CLEAR ALL
				case 'clearall':
					if (!isOwner) return reply(nad.ownerb())
					anu = await rmln.chats.all()
					rmln.setMaxListeners(25)
					for (let _ of anu) {
						rmln.deleteChat(_.jid)
					}
					reply(nad.clears())
					break
// BLOCK
			       case 'block':
				 rmln.updatePresence(from, Presence.composing) 
				 rmln.chatRead (from)
					if (!isGroup) return reply(nad.groupo())
					if (!isOwner) return reply(nad.ownerb())
					rmln.blockUser (`${body.slice(7)}@c.us`, "add")
					rmln.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
// UNBLOCK
                    case 'unblock':
					if (!isGroup) return reply(nad.groupo())
					if (!isOwner) return reply(nad.ownerb())
				    rmln.blockUser (`${body.slice(9)}@c.us`, "remove")
					rmln.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break  
// SETPPBOT			
					case 'setppbot':
					if (!isOwner) return reply(nad.ownerb())
				    rmln.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await rmln.downloadAndSaveMediaMessage(enmedia)
					await rmln.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya bosku😗')
					break
// CLONE
				case 'clone':
					if (!isGroup) return reply(nad.groupo())
					if (!isOwner) return reply(nad.ownerg())
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await rmln.getProfilePicture(id)
						buffer = await getBuffer(pp)
						rmln.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(nad.stikga())
					}
					await limitAdd(sender)
					break
//BAN
			                case 'ban':
					if (!isOwner) return reply(nad.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor ${bnnd} telah dibanned!`)
					break
// UNBAN
				case 'unban':
					if (!isOwner) return reply(nad.ownerb())
					ya = body.slice(8)
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor ${ya} telah di unban!`)
					break
// RESET LIMIT
				case 'resetlimit':
				if (!isOwner) return reply(nad.ownerb())
				var ngonsol = []
				rest = _limit.indexOf()
				_limit.splice(rest)
				fs.writeFileSync('./database/user/limit.json', JSON.stringify(ngonsol))
				reply(`LIMIT BERHASIL DI RESET BOS`)
				break
//PREMIUM LIST
	            case 'premiumlist':
	                if (!isRegistered) return reply( nad.noregis())
	                let teks = '╭────「 *LIST PREMIUM* 」\n'
	                let nomorList = 0
	                const deret = getAllPremiumUser()
	                const arrayPremi = []
	                for (let i = 0; i < deret.length; i++) {
	                    const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	                    arrayPremi.push(getAllPremiumUser()[i])
	                    nomorList++
	                    teks += `${nomorList}. @${getAllPremiumUser()[i].split('@')[0]}\n◯ *Expired*: ${checkExp.days} Hari ${checkExp.hours} Jam ${checkExp.minutes} Menit\n`
	                }
					teks += `\`\`\`Total : ${premium.length}\`\`\`\n╰──────「 *${botName}* 」`
					rmln.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": getAllPremiumUser}})
	            break
// CEK PREM
				case 'premiumcek':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				const niminyi = pushname
				pmex = `╭─「 *PREMIUM EXPIRED* 」
\`\`\`➸ Nama : ${niminyi}\`\`\`
\`\`\`➸ Nomor : @${sender.split('@')[0]}\`\`\`
\`\`\`➸ Expired\`\`\` : ${cekExp.days} Hari ${cekExp.hours} Jam ${cekExp.minutes} Menit
╰──────「 *${botName}* 」`
rmln.sendMessage(from, pmex, extendedText, {quoted: mek, contextInfo: {"mentionedJid": sender}})
				break
// PREMIUM ADD DELETE
				case 'addprem':
				if (!isOwner) return reply(nad.ownerb())
				expired = "30d"
				if (args.length < 1 ) return reply(' tag member nya bos')
				alan = `${args[0].replace('@','')}@s.whatsapbp.net`
				const ngeri = {id: alan , expired: Date.now() + toMs(expired) }
				premium.push(ngeri) 
				fs.writeFileSync('./database/user/premium.json',JSON.stringify(premium))
				reply(nad.premadd(args[0]))
				break
				
				case 'dellprem':
				if (!isOwner) return reply(nad.ownerb())
				if (args.length < 1 ) return reply('tag member nya bos')
				nadia = `${args[0].replace('@','')}@s.whatsapp.net`
 			   for( var i = 0; i < arr.length; i++){ 
 		       if ( arr[i] === nadia) { 
    		      	  arr.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/user/premium.json',JSON.stringify(arr))
       			 }
 			    }
				reply(nad.dellprem(args[0]))
				break
// MUTUALAN
				case 'mutual':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
            break
 // NEXT
            case 'next':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
                break
//MOD
                case 'moddroid':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*➸ Nama*: ${data.result[0].title}\n*➸ publisher*: ${hepi.publisher}\n*➸ mod info:* ${hepi.mod_info}\n*➸ size*: ${hepi.size}\n*➸ latest version*: ${hepi.latest_version}\n*➸ genre*: ${hepi.genre}\n*➸ link:* ${hepi.link}\n*➸ download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			rmln.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
// HAPPY MOD
			case 'happymod':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*➸ Nama*: ${data.result[0].title}\n*➸ version*: ${hupo.version}\n*➸ size:* ${hupo.size}\n*➸ root*: ${hupo.root}\n*➸ purchase*: ${hupo.price}\n*➸ link*: ${hupo.link}\n*➸ download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			rmln.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
// PINTEREST
					case 'pinterest':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					rmln.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(nad.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					rmln.sendMessage(from, pok, image, { quoted: mek, caption: `*⟪ PINTEREST ⟫*`})
					await limitAdd(sender)
					break 
// BRAINLY
					case 'brainly':
	                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '♡───────────♡\n'
					for (let Y of res.data) {
						teks += `\n*「 BRAINLY 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					rmln.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break
// NANGIS
                case 'nangis':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(rano)
						rmln.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
// ADD STIKER
				case 'addstiker':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (!isQuotedSticker) return reply('Reply stickernya kak -_-')
					stiklan = body.slice(11)
					if (!stiklan) return reply('Namain Stickernya kak!')
					adds = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					lan = await rmln.downloadMediaMessage(adds)
					setimker.push(`${stiklan}`)
					fs.writeFileSync(`./media/sticker/${stiklan}.webp`, lan)
					fs.writeFileSync(`./media/stik.json`, JSON.stringify(setimker))
					await reply('SUKSES MENAMBAHKAN STICKER')
					await limitAdd(sender)
					break
// GET LIST
				case 'getstiker':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					stikeram = body.slice(11)
					hasilya = fs.readFileSync(`./media/sticker/${stikeram}.webp`)
					rmln.sendMessage(from, hasilya, sticker, {quoted: mek})
					await limitAdd(sender)
					break
				case 'liststiker':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					tems = '╭──「 *LIST STICKER* 」\n'
					for (let cieee of setimker) {
						tems += `◯ ${cieee}\n`
					}
					tems += `\n╰─────「 *${setimker.length}* 」`
					rmln.sendMessage(from, tems.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setimker } })
					await limitAdd(sender)
					break
				case 'addvideo':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					adv = body.slice(10)
					if (!adv) return reply('Namain video nya kak')
					deo = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					dvi = await rmln.downloadMediaMessage(deo)
					vidioya.push(`${adv}`)
					fs.writeFileSync(`./media/video/${adv}.mp4`, dvi)
					fs.writeFileSync(`./media/video.json`, JSON.stringify(vidioya))
					rmln.sendMessage(from, `SUKSES MENAMBAHKAN VIDEO`, MessageType.text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'getvideo':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					getvi = body.slice(10)
					buffer = fs.readFileSync(`./media/video/${getvi}.mp4`)
					rmln.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					await limitAdd(sender)
					break
				case 'listvideo':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					tems = '╭──「 *LIST VIDEO* 」\n'
					for (let nihh of vidioya) {
						tems += `◯ ${nihh}\n`
					}
					tems += `\n╰─────「 *${vidioya.length}* 」`
					rmln.sendMessage(from, tems.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vidioya } })
					await limitAdd(sender)
					break
				case 'addvn':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					if (!isQuotedAudio) return reply('Reply/Tag Vn Nya Kak')
					advn = body.slice(7)
					if (!advn) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await rmln.downloadMediaMessage(boij)
					audioya.push(`${advn}`)
					fs.writeFileSync(`./media/audio/${advn}.mp3`, delb)
					fs.writeFileSync('./media/audio.json', JSON.stringify(audioya))
					rmln.sendMessage(from, `BERHASIL MENAMBAHKAN VN`, MessageType.text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'getvn':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./media/audio/${namastc}.mp3`)
					rmln.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					await limitAdd(sender)
					break
				case 'listvn':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					tems = '╭──「 *LIST VN* 」\n'
					for (let awokwkwk of audioya) {
						tems += `◯ ${awokwkwk}\n`
					}
					tems += `\n╰─────「 *${audioya.length}* 」`
					rmln.sendMessage(from, tems.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audioya } })
					await limitAdd(sender)
					break
// TOMP3
		 case 'tomp3':
                if (isBanned) return reply(nad.baned())
                if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
                	rmln.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('*Reply video nya lah-_-*')
					reply(nad.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await rmln.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Yahh gagall um:(')
						mhee = fs.readFileSync(ran)
						rmln.sendMessage(from, mhee, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					}) 
					break
//SLOWMO
				case 'slowmo':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await rmln.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				rmln.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				await limitAdd(sender)
				break
// TUPAI
				case 'tupai':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await rmln.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						rmln.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break
// NGEBASS
				case 'ngebass':                 
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await rmln.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						rmln.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
// CIUM
					case 'cium':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(rano)
						rmln.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
// WIKI
				case 'wiki':
					if (args.length < 1) return reply('masukan kata kunci')
					if (isBanned) return reply(nad.baned())
					if (!isRegistered) return reply(nad.noregis())
				    if (isLimit(sender)) return reply(nad.limitend(pusname))
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/wiki?q=${body.slice(6)}`)
					reply(anu.result)
                    await limitAdd(sender)
					break
//PELUK
					case 'peluk':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
					reply('「❗」KASIH JEDA 1 MENIT HABIS INI YA KAK')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(nad.stikga())
						buffer = fs.readFileSync(rano)
						rmln.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
// NULIS KIRI
				case 'nuliskiri':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nuliskiri Moshi baik hati`)
				kiri = body.slice(11)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				kir = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${kiri}&APIKEY=${XteamKey}`)
				rmln.sendMessage(from, kir, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				break
// NULIS KANAN
				case 'nuliskanan':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nuliskanan Moshi baik hati`)
				kanan = body.slice(12)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				kan = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${kanan}&APIKEY=${XteamKey}`)
				rmln.sendMessage(from, kan, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})		
				break
// STORAGE
					case 'iri':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					irim = fs.readFileSync('./media/dj/iri.mp3');
					rmln.sendMessage(from, irim, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					await limitAdd(sender)
					break
					case 'pale':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					pal = fs.readFileSync('./media/dj/pale.mp3');
					rmln.sendMessage(from, pal, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					await limitAdd(sender)
					break
					case 'pota':
				if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (isLimit(sender)) return reply(nad.limitend(pusname))
					pot = fs.readFileSync('./media/dj/pota.mp3');
					rmln.sendMessage(from, pot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					await limitAdd(sender)
					break
					case 'welot':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					wel = fs.readFileSync('./media/dj/welot.mp3');
					rmln.sendMessage(from, wel, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'alay':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					ala = fs.readFileSync('./media/dj/alay.mp3');
					rmln.sendMessage(from, ala, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'bernyanyi':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					ber = fs.readFileSync('./media/dj/bernyanyi.mp3');
					rmln.sendMessage(from, ber, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'bwa':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					bw = fs.readFileSync('./media/dj/bwa.mp3');
					rmln.sendMessage(from, bw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'ganteng':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					gan = fs.readFileSync('./media/dj/ganteng.mp3');
					rmln.sendMessage(from, gan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'gatal':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					ga = fs.readFileSync('./media/dj/gatal.mp3');
					rmln.sendMessage(from, ga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'ladida':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					lada = fs.readFileSync('./media/dj/ladadida.mp3');
					rmln.sendMessage(from, lada, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'rusher':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					rus = fs.readFileSync('./media/dj/rusher.mp3');
					rmln.sendMessage(from, rus, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'boong':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					boo = fs.readFileSync('./media/dj/tb.mp3');
					rmln.sendMessage(from, boo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
					case 'tengteng':
                  if (isBanned) return reply(nad.baned())
				if (!isRegistered) return reply(nad.noregis())
				if (!isPrem) return reply(nad.premium(prefix))
					teng = fs.readFileSync('./media/dj/tengteng.mp3');
					rmln.sendMessage(from, teng, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
// MHEHE
case 'sound1':
satu = fs.readFileSync('./media/music/sound1.mp3');
rmln.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./media/music/sound2.mp3');
rmln.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./media/music/sound3.mp3');
rmln.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./media/music/sound4.mp3');
rmln.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./media/music/sound5.mp3');
rmln.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./media/music/sound6.mp3');
rmln.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./media/music/sound7.mp3');
rmln.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

                     default:
                if (budy == '@verify') {
				if (isBanned) return reply(nad.baned())
                if (isRegistered) return  reply(nad.rediregis())
                const namaUser = pushname
                const serialUser = createSerial(20)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, time, serialUser)
try {
					ppadd = await rmln.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppadd = 'https://i.ibb.co/5sNrzdf/IMG-20210228-WA0009.jpg'
					}
captnya =`╭──「 *VERIFIKASI BERHASIL* 」
\`\`\`➸ Nama : ${namaUser}\`\`\`
\`\`\`➸ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Waktu Verify : ${time}\`\`\`
\`\`\`➸ SN : ${serialUser}\`\`\`
\`\`\`➸ User Verified : ${_registered.length}\`\`\`
╰─────「 *${botName}* 」`
let ngebuf = await getBuffer(ppadd)
rmln.sendMessage(from, ngebuf, image, {caption: captnya, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `𝐁𝐀𝐁𝐘 𝐁𝐎𝐓 𝐕𝐄𝐑𝐈𝐅𝐈𝐄𝐃` }}})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, time, serialUser)
try {
					ppadd = await rmln.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppadd = 'https://i.ibb.co/5sNrzdf/IMG-20210228-WA0009.jpg'
					}
captnya =`╭──「 *VERIFIKASI BERHASIL* 」
\`\`\`➸ Nama : ${namaUser}\`\`\`
\`\`\`➸ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Waktu Verify : ${time}\`\`\`
\`\`\`➸ SN : ${serialUser}\`\`\`
\`\`\`➸ User Verified : ${_registered.length}\`\`\`
╰─────「 *${botName}* 」`
let ngebuf = await getBuffer(ppadd)
rmln.sendMessage(from, ngebuf, image, {caption: captnya, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `𝐁𝐀𝐁𝐘 𝐁𝐎𝐓 𝐕𝐄𝐑𝐈𝐅𝐈𝐄𝐃` }}})
}
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
			}
                  if (budy == 'cekprefix') {
                  reply(`*${botName} MENGGUNAKAN PREFIX :「 ${prefix} 」*`)
                  }
                  if (budy == 'bot') {
                  reply(`Iya kak, Ada yang bisa bot bantu?\nKalo bingung ketik ${prefix}menu ya kak`)
                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
				//		reply(rmln.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	