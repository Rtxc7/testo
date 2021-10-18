"use strict";
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys");
const fs = require("fs");
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const qrcode = require("qrcode");
const ffmpeg = require("fluent-ffmpeg");
const fetch = require("node-fetch");
const ms = require("parse-ms");
const toMS = require("ms");
const axios = require("axios");
const cheerio = require("cheerio");
const speed = require("performance-now");
const yts = require("yt-search");
const translate = require("@vitalets/google-translate-api");
const { da } = require("@vitalets/google-translate-api/languages");
const { default: Axios } = require("axios");
const util = require("util");
const text2png = require("text2png");
const crypto = require('crypto')
const Ra = require('ra-api')
const nhentai = require('nhentai-js')
const mathjs = require('mathjs')
const request = require('request')
const tele = require('telegraph-uploader')
const WSF = require('wa-sticker-formatter')

// Nekos.life
const Nekos = require('nekos.life')
const neko = new Nekos();

// Google Img
const scrapimg = require('images-scraper');
const googleimg = new scrapimg()

const { color, bgcolor } = require("../lib/color");
const { serialize, getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime } = require("../lib/myfunc");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const _prem = require("../lib/premium");
const _sewa = require("../lib/sewa");
const afk = require("../lib/afk");
const { ind } = require('../help/')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../lib/banned");
const { isTicTacToe, getPosTic } = require("../lib/tictactoe");
const tictac = require("../lib/tictac");
const { yta, ytv } = require("../lib/ytdl");
const { getUser, getPost, searchUser } = require('../lib/instagram');
const { fbdl } = require("../lib/fbdl");
const { fakeStatus, fakeToko } = require("./fakeReply");
const game = require("../lib/game");
const { requestPay, checkPay } = require("../lib/saweria");
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("../lib/badword");

// Database
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let setting = JSON.parse(fs.readFileSync('./config.json'));
let mess = JSON.parse(fs.readFileSync('./message/mess.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let bangrup = JSON.parse(fs.readFileSync('./database/bangrup.json'));
let bancmd = JSON.parse(fs.readFileSync('./database/bancmd.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let antinsfw = JSON.parse(fs.readFileSync('./database/antinsfw.json'));
let nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'));
let badword = JSON.parse(fs.readFileSync('./database/badword.json'));
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let _respon = JSON.parse(fs.readFileSync('./database/respon.json'))
let _stick = JSON.parse(fs.readFileSync('./database/sticker.json'))
let _vn = JSON.parse(fs.readFileSync('./database/vn.json'))
let _update = JSON.parse(fs.readFileSync('./database/update.json'))
let _image = JSON.parse(fs.readFileSync('./database/image.json'))
let _video = JSON.parse(fs.readFileSync('./database/video.json'))
let _document = JSON.parse(fs.readFileSync('./database/document.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let _claim = JSON.parse(fs.readFileSync('./database/claim.json'))

// Hit
global.hit = {}

//Gambar Url
const qris = 'https://i.ibb.co/nMw1T5z/Screenshot-2021-05-18-07-38-00-622-com-bukalapak-mitra.jpg'
const bgbot = 'https://i.ibb.co/Rpdfnwh/images-q-tbn-ANd9-Gc-Tmn-q-Sq-E0m-Fr-QUEpar-Wd-L-GK5u-Rb-M9661-Xw-usqp-CAU.jpg'


// Game
let tictactoe = [];
let tebakgambar = [];
let kuis = [];
let kimiakuis = [];
let tebakbendera = [];
let tebaklirik = [];
let siapaaku = [];
let mathkuis = [];
let family100 = [];

//Simih
let simi = [];

// Jadi bot

if (global.conns instanceof Array) console.log()
else global.conns = []

let {
    ownerNumber,
    limitCount,
    lolkey,
    vhkey,
    zekskey,
    gamewaktu
} = setting

moment.tz.setDefault("Asia/Jakarta").locale("id");
     
            // Leveling
            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Each minute
}

const addResponBot = (txt, respon) => {
    const obj = { txt: txt, resp: respon }
    _respon.push(obj)
    fs.writeFileSync('./database/respon.json', JSON.stringify(_respon))
}

const checkText = (txt) => {
    let status = false
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            status = true
        }
    })
    return status
}

const getRespon = (txt) => {
    let position = null
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            position = i
        }
    })
    if (position !== null) {
        return _respon[position].resp
    }
}

const getResponPosition = (txt) => {
    let position = null
    Object.keys(_respon).forEach((i) => {
        if (_respon[i].txt === txt) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getAllRespon = () => {
    const array = []
    Object.keys(_respon).forEach((i) => {
        array.push(_respon[i].txt)
    })
    return array
}

const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

module.exports = async(xinz, msg, blocked, _afk, welcome, left) => {
    try {
      const time = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YY HH:mm:ss z')
            const ucap = moment.tz('Asia/Jakarta').locale('id').format('a')
            const jsho = moment.tz('Asia/Jakarta').locale('id').format('HHmmss')
        const { type, quotedMsg, isGroup, isQuotedMsg, mentioned, sender, from, fromMe, pushname, chats, isBaileys } = msg
        if (fromMe && isBaileys) return
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''

     var levelRole = getLevelingLevel(sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }

        if (xinz.multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|!?#$%^&.+,\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓=|!?#$%^&.+,\/\\©^]/gi) : '#'
        } else {
            if (xinz.nopref){
                prefix = ''
            } else {
                prefix = xinz.prefa
            }
        }

        const isCmd = command.startsWith(prefix)
        const q = chats.slice(command.length + 1, chats.length)
        const body = chats.startsWith(prefix) ? chats : ''


        const botNumber = xinz.user.jid
        const groupMetadata = isGroup ? await xinz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false

        const isOwner = ownerNumber.includes(sender)
        const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
	    const isBan = cekBannedUser(sender, ban)
         const isClaimOn = _claim.includes(sender)
        const isBlocked = blocked.includes(sender)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isBanGroup = isGroup ? bangrup.includes(from) : false
        const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
        const isWelcome = isGroup ? welcome.includes(from) : false
        const isAutoSticker = isGroup ? autosticker.includes(from) : false
        const isNsfw = isGroup ? nsfw.includes(from) : false
        const isAntiNsfw = isGroup ? antinsfw.includes(from) : false
        const isBadword = isGroup ? grupbadword.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isUser = pendaftar.includes(sender)
        
        const gcounti = setting.gcount
        const gcount = isPremium ? gcounti.prem : gcounti.user

        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
        const reply = (teks) => {
            return xinz.sendMessage(from, teks, text, {quoted:msg})
        }
        const listmsgSimple = (from, title, desc, judul, list) => { // ngeread nya pake rows
            let po = xinz.prepareMessageFromContent(from, { "listMessage": { "title": title, "description": desc, "buttonText": "Choose in Here", "listType": "SINGLE_SELECT", "sections": [{ "title": judul, "rows": list }]}}, {})
            return xinz.relayWAMessage(po, {waitForAck: true})
        }
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = xinz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Choose in Here","listType": "SINGLE_SELECT","sections": list}}, {})
            return xinz.relayWAMessage(po, {waitForAck: true})
        }
        const imagenya = (pepe) => {
            return {"url": "https://mmg.whatsapp.net/d/f/AvShvkA6_c8hy1RQ53q6v5VrwRTt42w86-mPgJjhvq82.enc","mimetype": "image/jpeg","caption": pepe,"fileSha256": "D65lTtjrlbs07j/jBzXJtcCDqOjtm94BX48BMEOYnhU=","fileLength": "97283","mediaKey": "Yvg8d/SOthdJAdFp1+hviAXXuH241Vf/yL5h1lEYPY4=","fileEncSha256": "V9qHGQmLw8dJNzJVyX4K6EusxvVY6Fna5Q+zIj5OniM=","jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAABAAAAAQAAAAEAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAwADADAREAAhEBAxEB/8QBogAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foBAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKCxEAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+N/SopYtQsRCXTbcSRblG3dvt7mGSPqDtkRpEbnlWJ5A5+KxyXtMS+6d7PVe/Fa9NvRaO/c/QK/N9am07/v09bWuk3FO/VWe+q1SVztLPTdT1G9VLG0uLq5nljhhht4JJpZ5HcQxpHHGhkmeRiqKqoWdiFHJ54oUZSjGnGE5X91KKbd3sla7bb0Vru+iKWIjH2sp1Ixip395pJJLf3tkkk3e1tDpdd8I+LvC1wdI8TaT4o8MzTPHqM2i6vDrGjJcSwrmC8uNIuhaQ3BijQEXE1sxCxJhv3aY19njMPzYZ0q1Gco8kqMqUoVXCSvbllBT5Wui0s3pZmFSeW4lxxcqmHrqhNSp1VOM6dOcHF814ycYtNKz06dlbGu5p4oW2yK2xCOpIJQAgDIBPrhSB35zz56hHn5XCUZ3a5WrOOrT5kvhs7xadmrWtex23VSjJxalCULxcWmmtXdO/zTu/I1vh/wDEPwz8Ov2gvAvjXxhdpp/hWbRfE+j6vfSWNxqIggfSrtrF3tbK2urmdm1CaxjkMFqxQOZSgjR9v2nBtaGFnWVbWnGo5SvHnVqlOcdIq73j0TfV9D5LipYpxoywdSpSrzoqKnSnKjJ8tSMpJTTi0nGT05vJ30v9R+MP2qvgPP4s0y88OfEi3TRb/wAO6rpGtRJ4Q8S29tY3Vvd2ep6XfM1x4blnNxevDJpaSWWl3z2sLPctJaGOMXP0deWBp5hPE5fHCUI4rC+zxVWnQVGoqlCqpUbr2PNLnjUqKVTVxcFpeVz5ONLG1sDGjjfb161HF+0oqpX9pF0qtNqpeUqm8akItpv3uZK9os/ZD9mH/gnT8FvgxBY6z4r02w+K3xJz9sl1rxJYRXHhnw9O24n/AIR/wzc+dZM8G/8AcapqwvtQ81BdWjaYshtU+xyjhLK8HfFV4QxuLnrz14qdKle7tToyXI2pfbnGU7pNclrHHnPFOOzCdSFCUsHhZSv7OlJqrPezq1klJJpv3IcqabT59z6h+MvxY+H3wC0b+27+PRLffZO6xzNHZR23kSJbW7z/AGZPOitrqeby1jhid5XhnjtImmLAe5j8dQyuh7WUaUI235VBJ6WTmovlWt91ZRb0tIOH+EOIOJ8Nj8wwlJQwOAq4fD1sZi6yw+DlicXJQo4ZYrEOGFWIk3C/tKtOMFUhKrKEJJv85/GH7Q+ufEfwV4g8SfE39nDS9N8LaxvW6TW57XxR4b1NtPtY7O5kupo9NvtU8Ny6jFbQtaalqvh/VdD0y6i8rU7xAU1BfxbOs/wGY5pOpRqqhiZQpX5G3TnONNWnRrxXxTp8vu+9a/vfE2fscuCcJw1l9HKsfmkKub0J82Kw840quV+yr2r0Z0sXh5V+ajOE5OnW5JxclTlUjh1V5Yfz2/FaTUvBfiHUJNC0jxVpfhi+1G7vdC/t5bOIvpkszmK1hGlS32i3NtaBjaLJZX15ZyLEjo0LkRpqqWFrwlCrHDVask41ZLknNvVKTqL3ufRNyVveV4to+JxtDG5XmOJwrlVw/wBTxMqaowrUKtGM4N80IVMLWr4SrSTuk6NWpTnHVOx4r4s8Xp4os9JWW2Nvd2E0iS7SCksdwqqzoCS0ZyqhkJdMEMJDyE4sJl0sDVrOnUcqNfkUb6ShZtcrtpb3nZpa26GuMzBY2hhlOChWoSak18E4OKtJJ/C047bXejtouUc6XuIiW58ssdpeSPftJO3eACAwUjKqW5zgnANdro1ObSdOzeie+i1Vu/z6rY5fa0GvgqJ6/aT72/q33n94mq/EpNM0DU9ZsHsNJ8M6NYXOoaz468VXTaN4Y02xs4nmub83M2261GGCAF1ktY4tNlKsjarauc1+vrGqNGXsuSFOEZOeIrS5KUbXblFayqeXLFRb050fnHsueai4tzcrRhT1k5N6RSV0te+vZdT+bP4+ftn6T8cf2jvBD/a73xJ8LPCfjmxVLzUNI0/TV8Q2dpqunzWepW2kXcsraTYJfwTS2CalfxX72Ny51a5t1ubiytfyvifH1c0pY2nRnKS9hVp0qrTg5pr337O7VOLSagrubu3OS+FfsmCzXC4DhrL8ly7C4zA+3rxr8SUa+PljsBmGOpOisDjMNhasFSwWJoRpzhKth6VLEeyrVcLLEVsNNxf7geD/AB54Z8d6drfh7RdW0tdb0zTEa/8ADyX+k3l7ZGaE7bG6msZNQs7SWWNx8snmKygyRrJEvmV+V4SEKNOq+V87hKeH9tBwhUcfdajJws49Hy31sn0OydZVOSEeaMlJKtyzVScYvdqKk3F3T366WfX5X1T9kXWfFdj4k1lPCPgvw0smozSR/D+/1XV/F3hrxlaJCrx3vi06nZwWum63fXLTww3fh+xFzpUZjkGqanGpsz3xqVpxpuM21GEVzxjKjVpT3fsqkZzcoJ6Wk+WV9otJvglS5eZKlKLcpP3pRqU6kFpepFpRc2tfdSkt73Pxg+N3wD+E3hbTvjFqM2oSfD3xh4T1rTX0X4eapqMFxqCNqKSx3miWVsrSS65aR37W0ltrFiI7W20e60++mfy7lo4/awWOzGtWwtFx+sUW3CpXs1dK9qjlooTjGNpxcVed0rtpnBWo4WNKpUs4VOZOEb7d4qNveTltK9kt0tl8ExCNmkjlhto2jAIaVroFhjHy7bgJnpzgAjkZ5r6Ccailb941fTlV0v7zdt+7vfyOOm6U01KFFP8AmnKrF3s7/DNJu610su2tj+ln/gqh8X7zR/2erfwxe3bQar8S/E2naTpnh+0uAsGl+HtCkTW9X1W9ZHDahqE1xa6TpJBT7BaRandRWiTSRHUJvtc+ry+p2m0nWlaFJN2jTg1KU5tfFNvlj0ivsptcx8jksYyx3Pb3afNJysm5Sd+WKu9Fa701fKr2vY+Ivgp+zD8J7v8AZRk+J3ifxtpumfEDX7mW/l0yfE9zZeG4NRiWztlgLY33Gnwtq7iIq8seoQpL5htkji+SWEw88K8RLFRjVi7Kir3S1V20tJaX3e6PaxOOqxxEqNOknFtJpLVvV720inbTyeutz9V/2B9J8LfErwlq3h/4fX/gfT/GXww8P3dx4li8S63Y+G5Nc0iK5XTNPv7JruRWvL/U4PLhtFm8nTba7gngu7q0g8t5fyniTMcLkOJ9vjZVJwrQxtWi3CrOEaGEorEYm8vhj7KinVULpuEZVOV06dWcP0HhvA43N+WjgsJVq1oypOr7GjKt7ONSXL7arGlGc1Rg4N1q048kNOeScoJ/T3gfx3PrWkXNz/YV/pujQxSPJc6zfRG9YjqEtIYnhit0UFtzXMSIuzy4mGRH6ODxEnTlGnTfsZRTlKc7yUnqlGLguW29m4WX2eh1cQ5dDLatKMsxweNrTj71PBJyp0Ukl71a0aVSUmt6blHR3adr/wA9n7dvxX8HW/7ScHi608G6f4q0mCy09Y/tkgtV1I20MdpLq1h59lfWF7CsUAtdOn1jTNY0G7ktzLJpOp2kKeZ9Vw5ZKrWaUoe1t7NvS1l2uoy3kvdlo1da6/EZlerCNKMnBtc11dNaq17Wlyu28XFtdUfH37Tn7Qsf7RPiHwtf6Z4H8NeBtJ8D+F7Pwpo0ek6fHa6pqOm2cduIW1s2h/s1YbORJo9JsNPtbe10q0ne2jeUEMv1WJxH1j2dqUKcaMFCPKrNx/vW03vZJaX0PKweFeFhJOpOpKcnOTk20n/dvrrvJvWT1P6S/GnwX+FXxrSO++InhTQ/FN/LZTWWh6nq9jb3l3oekXsdxFBHpzzA+Q08ko1Fpwv2mO9unKSr9mthD9BKlQxSSqJScrRhK692LukkntupNW+JvVnydPE18M3GjUlBJ3ko3Sclu31dtlfotVvfh7z9kX4P3XhJNGsPC62+mf2VHYQQwX14t7pslnA9hMkF8souJTGscYg8/wAxC0RZ1zy3JVyfCukpQoxacfed7TjON1JJ3XVJrR3+dzojmWKhPmdVttpya2a3T5WrX1d9Fppoa37P/wAGfh74InXTX8IaVbaz9gljudXMI+3a5pC3HktO2slTebvM8s3to7fZLW/HmJBbLPHKhgMuwLvRr4OjUjKLuqkYzVSDvBtuV2tNGr2i09k7mtXMswUva0sZXp+64fuas6fuzj78bQcf3covllF3U4tqd7tHuesfCfXrqG7tF8U69r/hSWR3PhYy2MTpbFhMlhqIsLe2vdd0lFAjRWvpvttoBb6gmrK0lzN8rnnA+LjOeIyRwqYaa5p4GT5K1N7tU5NuNWD3UeaEo7R9omnH3sv4ljKlCjmEp+0h7sK/xQkujqR3jJd0pRb19w/n/wD2zv2Z/wBoqb4reLPiFc+DdV8a+F9fvJh4a1bwXpd9qtnZ6HZQwiy0u60qzW61LQ5dLtAkMpuIIrO7uhezWNzdqt0U0yrLsTQy+i54Kvh+bn5lOnyylUT96bjfmSe0eeMXZWWiu9K+OovESisRSqbbTVoxeyUtnvd6ux+eiaJdWJe3vLG4gvGeaCS2uLeWKeKREkJV45AjxtHIgaQEb16HHzCuzk0td7bO+j/ryJlWvL3Je7pqluuu6d/Lb0Z/WjpmuJBDCoP33idCT0hgdp0X13EAqSMHGBjAAr3YzcbO73vfWzitUuvbfS2x8pOmpSc7t6bb3aVt7+VrdzudE1Lzri5sXlZI5nN0mxgHjmJeO5CsQVIa4TdtcEHzMMpVyp7KFVXdNt2nLmW2kveUrO2iv3W+/cwnGyWlrXjfvbrb8L7aX2JfD2lWnh7xK0rXV5dm+im+wzXsyOLJJJ47q7sLaCCK3toVluIo53dYhNNhVklZIolXWhGFHEJc3MppKMn73LrzSilaKTbWrsum6tck+eF9E1Kzta7SVk3101Wt1d+Vj2i0/su+c+daxiZyUYpJJCWLYyH+zsiyK2TgPlj0IIUV60Y05auMb91Jpu+7bjy7t/otiO9tu9vu72+/7zofM063iMUNva26oMMfKjMpwTgKXQtnjguxOFzjsNUorRJLbp93rt66E/f+X+R8ieL/ANlD4ReO/ilc/GPxN4WtNT186N/Z8djeQ282jO+nLLdWmsXmntb+Td6tBIsEVveTbvLjjhXZmGFo/Mr5bRq1qmInFuTg0oWjy3UXyzfeSfLZ9La7HVDFVqdP2UZvk5r6aOz3jfdJ9vU//9k=",}
        }
        const buttonmsg = (from, caption, button) => { // button nya ga pake image
            let po = xinz.prepareMessageFromContent(from, { "templateMessage": { "hydratedTemplate": {"hydratedContentText": caption, "hydratedButtons": button }, "hydratedFourRowTemplate": { "hydratedContentText": caption, "hydratedButtons": button }}}, {})
            return xinz.relayWAMessage(po, {waitForAck: true})
        }
        const buttonimg = (from, caption, button) => {// button nya pake image, tapi edit dulu jpegThumbnail lu di * const imagenya*
            let po = xinz.prepareMessageFromContent(from, { "templateMessage": { "hydratedTemplate": {"imageMessage": imagenya(caption), "hydratedContentText": caption, "hydratedButtons": button }, "hydratedFourRowTemplate": {"imageMessage": imagenya(caption), "hydratedContentText": caption, "hydratedButtons": button }}}, {})
            return xinz.relayWAMessage(po, {waitForAck: true})
        }
        const sendMess = (hehe, teks) => {
            return xinz.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            let ai = (id == null || id == undefined || id == false) ? xinz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : xinz.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
            return ai
        }
        async function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return xinz.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: msg, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return xinz.sendMessage(from, teks, text, {quoted: msg, contextInfo: {"mentionedJid": [sender, "0@s.whatsapp.net"]},thumbnail: fs.readFileSync(setting.pathImg)})
        }
        async function uptotele(path){
            var linknya = await tele.uploadByBuffer(fs.readFileSync(path))
            return linknya.link
         }

        const isImage = (type === 'imageMessage')
        const isVideo = (type === 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isListMsg = (type == 'listResponseMessage')
        const isQuotedImage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
        const isQuotedAudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
        const isQuotedVideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
        const isQuotedSticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false

        // Mode
        if (xinz.mode === 'self'){
            if (!isOwner && !fromMe) return
        }

        // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                xinz.groupRemove(from, [sender])
            }
        }

        if (isGroup && isAntiVirtex && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.length >= 7000) {
                reply(`*「 ANTI VIRTEX DETECTOR 」*\n\nSepertinya kamu mengirimkan Virtex, maaf kamu akan di kick`)
                xinz.groupRemove(from, [sender])
            }
        }

        if (isGroup && isAntiNsfw && !isOwner && !isGroupAdmins && isBotGroupAdmins) {
                if (isImage) {
                        var filePath = await xinz.downloadAndSaveMediaMessage(msg);
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        var get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${lolkey}`, {...options })
                        fs.unlinkSync(filePath)
                        var get_resulttt = get_result.result
                        var is_nsfw = "No"
                        if (Number(get_resulttt.replace("%", "")) >= 60) var is_nsfw = "Yes"
                        if (is_nsfw === "Yes") {
		        reply(`Gambar NSFW Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
                xinz.groupRemove(from, [sender])
              }
                }
          }

         if (isGroup && !isCmd) {
                    const autoresp = getRespon(chats.toLowerCase())
                    if (autoresp !== null && autoresp !== undefined) return reply(autoresp)
                if (_stick.includes(chats.toLowerCase())) {
                    xinz.sendMessage(from, fs.readFileSync(`./media/sticker/${chats}.webp`), sticker, { quoted: msg })
                }
               if (_vn.includes(chats.toLowerCase())) {
                    xinz.sendMessage(from, fs.readFileSync(`./media/audio/${chats}.mp3`), audio, { quoted: msg, ptt: true})
                }
                }

        if (isGroup && isAutoSticker) {
                if (isImage) {
                    let media = await xinz.downloadAndSaveMediaMessage(msg, `./sticker/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if (isVideo) {
                    let media = await xinz.downloadAndSaveMediaMessage(msg, `./sticker/${sender}`)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } 
             }

//function leveling
                        if (isGroup && isLevelingOn && isUser && xinz.mode !== 'self' && !isMuted && !isGained(sender)) {
                                const currentLevel = getLevelingLevel(sender)
                                const checkId = getLevelingId(sender)
                                try {
                                        addCooldown(sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 150
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(sender)
                                        addLevelingXp(sender, amountXp)
                                        if (requiredXp <= getLevelingXp(sender)) {
                                        addLevelingLevel(sender, 1)
                                        await textImg(`*──「 LEVEL UP 」──*\n\n❑ *Name*: @${sender.split('@')[0]}\n❑ *XP*: ${getLevelingXp(sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n❑ *Role*: ${role} \n\nCongrats!! 🎉`)
                                }
                        } catch (err) {
                                console.error(err)
                        }
                }
        // Badword
        if (isGroup && isBadword && !isOwner && !isGroupAdmins && !fromMe){
            for (let kasar of badword){
                if (chats.toLowerCase().includes(kasar)){
                    if (isCountKasar(sender, senbadword)){
                        if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
                        reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
                        xinz.groupRemove(from, [sender])
                        delCountKasar(sender, senbadword)
                    } else {
                        addCountKasar(sender, senbadword)
                        reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
                    }
                }
            }
        }

        // Banned 
        if (isBlocked && isCmd && command.split(prefix)[1] !== 'unban')textImg(ind.BlockBan(ownerNumber.split('@')[0], prefix))
        if (isBan && isCmd && command.split(prefix)[1] !== 'unban') return textImg(ind.BlockBan(ownerNumber.split('@')[0], prefix))
        if (isBan) return
        if (isBlocked) return 
        if (isCmd && isGroup && bancmd.includes(command.split(prefix)[1] + from)) return reply('Command itu di lock di group ini')
        BannedExpired(ban)

        // MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner) return
            }

        // TicTacToe
        if (isTicTacToe(from, tictactoe)) tictac(xinz, chats, prefix, tictactoe, from, sender, reply, mentions, addBalance, balance)

            function ramadhan(kapan){
                var ibadah = ms(kapan - Date.now())
                return `${ibadah.days} Hari ${ibadah.hours} Jam ${ibadah.minutes} Menit`
            }
                var waktunya = 1626713999602
                const cekRamadhan = ramadhan(waktunya)

        // GAME 
        game.cekWaktuFam(xinz, family100)
        game.cekWaktuTG(xinz, tebakgambar)
        game.cekWaktuK(xinz, kuis)
        game.cekWaktuTB(xinz, tebakbendera)
        game.cekWaktuTL(xinz, tebaklirik)
        game.cekWaktuSA(xinz, siapaaku)
        game.cekWaktuKK(xinz, kimiakuis)
        game.cekWaktuMK(xinz, mathkuis)
        game.cekWaktuSimih(simi)


        // GAME 
        if (game.isTebakGambar(from, tebakgambar) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
                var htgm = randomNomor(100)
                addBalance(sender, htgm, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n*Hadiah :* $${htgm}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
            }
        }
        if (game.isKuis(from, kuis) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanKuis(from, kuis))){
                var htgmk = randomNomor(100)
                addBalance(sender, htgmk, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanKuis(from, kuis)}\n*Hadiah :* $${htgmk}\n\nIngin bermain lagi? kirim *${prefix}kuis*`)
                kuis.splice(game.getKuisPosi(from, kuis), 1)
            }
        }
        if (game.isTebakBendera(from, tebakbendera) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
                var htgmkq = randomNomor(100)
                addBalance(sender, htgmkq, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}\n*Hadiah :* $${htgmkq}\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
            }
        }
        if (game.isTebakLirik(from, tebaklirik) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))){
                var htgmkw = randomNomor(100)
                addBalance(sender, htgmkw, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTL(from, tebaklirik)}\n*Hadiah :* $${htgmkw}\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
            }
        }
        if (game.isSiapaAku(from, siapaaku) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
                var htgmke = randomNomor(100)
                addBalance(sender, htgmke, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanSA(from, siapaaku)}\n*Hadiah :* $${htgmke}\n\nIngin bermain lagi? kirim *${prefix}siapaaku*`)
                siapaaku.splice(game.getSAPosi(from, siapaaaku), 1)
            }
        }
        if (game.isKimiaKuis(from, kimiakuis) && isUser){
            if (chats.includes(game.getJawabanKK(from, kimiakuis))){
                var htgmkr = randomNomor(100)
                addBalance(sender, htgmkr, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanKK(from, kimiakuis)}\n*Hadiah :* $${htgmkr}\n\nIngin bermain lagi? kirim *${prefix}kimiakuis*`)
                kimiakuis.splice(game.getKKPosi(from, kimiakuis), 1)
            }
        }
        if (game.isMathKuis(from, mathkuis) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanMK(from, mathkuis))){
                var htgmkt = randomNomor(100)
                addBalance(sender, htgmkt, balance)
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanMK(from, mathkuis)}\n*Hadiah :* $${htgmkt}\n\nIngin bermain lagi? kirim *${prefix}mathkuis*`)
                mathkuis.splice(game.getMKPosi(from, mathkuis), 1)
            }
        }
        if (game.isfam(from, family100) && isUser){
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (chats.toLowerCase().includes(i)){
                    var htgmi = Math.floor(Math.random() * 20) + 1
                    addBalance(sender, htgmi, balance)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmi}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                xinz.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
        }
        // Premium
        _prem.expiredCheck(premium)


        if (isCmd && !isUser){
			pendaftar.push(sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar))
        } 

        // Add hit
        if (isCmd) {
            axios.get('https://api.countapi.xyz/hit/ChikaBot/visits').then(({data}) => hit.all = data.value)
            axios.get(`https://api.countapi.xyz/hit/ChikaBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({data}) => hit.today = data.value)
        }

        // Sewa
        _sewa.expiredCheck(global.xinz, sewa)


        // AFK
        if (isGroup) {
            if (mentioned.length !== 0){
                for (let ment of mentioned) {
                    if (afk.checkAfkUser(ment, _afk)) {
                        const getId = afk.getAfkId(ment, _afk)
                        const getReason = afk.getAfkReason(getId, _afk)
                        const getTime = Date.now() - afk.getAfkTime(getId, _afk)
                        const heheh = ms(getTime)
                        await mentions(`@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`, [ment], true)
                        sendMess(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nIn Group : ${groupName}\nPesan : ${chats}`)
                    }
                }
            }
                if (afk.checkAfkUser(sender, _afk)) {
                    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
                    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
                    await mentions(`@${sender.split('@')[0]} telah kembali`, [sender], true)
                }
            }

        // Auto Read
        xinz.chatRead(from, "read")

        // CMD
        if (isCmd && !isGroup) {
			//xinz.updatePresence(from, Presence.composing)
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`))
        }
        if (isCmd && isGroup) {
			//xinz.updatePresence(from, Presence.composing)
            addBalance(sender, randomNomor(20), balance)
			console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }

        if (isOwner){
            if (chats.startsWith("> ")){
                console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                    let evaled = await eval(chats.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    textImg(`${evaled}`)
                } catch (err) {
                    textImg(`${err}`)
                }
            } else if (chats.startsWith("$ ")){
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(chats.slice(2), (err, stdout) => {
					if (err) return textImg(`${err}`)
					if (stdout) textImg(`${stdout}`)
				})
            }
        }

        switch(command){
            case 'prefix': case 'cekprefix':{
                textImg(`${prefix}`)
            }
                break
            case prefix+'infobot':
                let yyy = [
                    {
                        "quickReplyButton": {
                        "displayText": "Contact Owner",
                        "id": "#owner"
                         }
                     },{
                         "quickReplyButton": {
                         "displayText": "Official Group",
                         "id": "#chikagroup"
                          }
                     },{
                         "quickReplyButton": {
                         "displayText": "Total Bot Aktif",
                         "id": "#listbot"
                         }
                      }
                  ]
                buttonmsg(from, `Hai Kak ${pushname}, saya adalah ChikaBot, Bot yang akan membantu kamu memudahkan segala hal, mau dapet info apa ya kak dari aku?`, yyy)
                break
            case prefix+'inpobot':{
                let yyy = [
                    {
                        "quickReplyButton": {
                        "displayText": "Contact Owner",
                        "id": "#owner"
                         }
                     },{
                         "quickReplyButton": {
                         "displayText": "Official Group",
                         "id": "#chikagroup"
                          }
                     },{
                         "quickReplyButton": {
                         "displayText": "Total Bot Aktif",
                         "id": "#listbot"
                         }
                      }
                  ]
                buttonimg(from, `Hai Kak ${pushname}, saya adalah ChikaBot, Bot yang akan membantu kamu memudahkan segala hal, mau dapet info apa ya kak dari aku?`, yyy)
                }
                break
            case prefix+'pantun':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`)
                .then((kontlo)=>{
                    textImg(kontlo.result)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
            }
                break
            case prefix+'help': case prefix+'menu':{
                    try {
                        var pic = await xinz.getProfilePicture(sender)
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                    const jumlahCommand = require('util').inspect(hit.all)
                    const jumlahHarian = require('util').inspect(hit.today)
                    const jumlahUser = pendaftar.length
                    const levelMenu = getLevelingLevel(sender)
                    const xpMenu = getLevelingXp(sender)
                    const reqXp  = 200 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			        const uangku = getBalance(sender, balance)
                    const Limitnya = isPremium ? `UNLIMITED*\n*Expire : ${ms(_prem.getPremiumExpired(sender, premium) - Date.now()).days} day(s) ${ms(_prem.getPremiumExpired(sender, premium) - Date.now()).hours} hour(s) ${ms(_prem.getPremiumExpired(sender, premium) - Date.now()).minutes} minute(s)` : `${getLimit(sender, limitCount, limit)}`
                    var b = xinz.mode
                    xinz.sendImage(from, await getBuffer(pic), ind.menu(prefix, ucap, pushname, jumlahUser, runtime(process.uptime()), ownerNumber.split("@")[0], 'Rashidsiregar28', jumlahHarian, jumlahCommand, sender, time, cekRamadhan, `*${b.toUpperCase()}*`, levelMenu, xpMenu, reqXp, uangku, role, Limitnya), msg, [sender,"0@s.whatsapp.net"]).then((res) =>{
                    let list = []
                    let listmenu = [`groupmenu`,`menupremi`,`textmenu`,`imagemaker`, `sessionmenu`,`kerangmenu`,`praymenu`,`ownermenu`,`funmenu`,`mediamenu`,`weebsmenu`,`downloader`,`stickermenu`,`primbonmenu`,`levelingmenu`,`about`,`18`,`owner`,`sewabot`,`chikagroup`]
                    let listmenuu = [`Menu Group`,`Premium Menu`,`TextMaker`,`Image Effect`,`Multi and Baileys Feature`,`Kerang Menu`,`PrayMenu`,`Owner Command`,`For Fun Menu`,`Misc and Media`,`Weebs Zone`,`Downloader`,`Stickercmd`,`Primbon`,`Leveling Xp and Balance`,`About Bot`,`Nsfw Command`,`OwnerBot`,`Rent this Bot`,`Official Group`]
                    let nombor = 1
                    let startnum = 0
                    for (let x of listmenu) {
                        const yy = {title: 'Sub-Menu Ke-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `\n\n*I want to use the ${x} command*`,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
                    }
                    listmsg(from, `List Menu`, `Hai kak ${pushname}, pilih Menu ChikaBot disini`, list)
                })
            }
                break
//------------------< PRAY Command >-------------------
                case prefix+'listsurah':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`).then((res) =>{
                    let ini_txt = 'List Surah:\n'
                    for (var x in res.result) {
                        ini_txt += `${x}. ${res.result[x]}\n`
                    }
                    textImg(ini_txt)
                     })
                    break
//------------------< NSFW Command >-------------------
            case prefix+'lewd': case prefix+'lewds': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                   var tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
                   var randTag = tag[Math.floor(Math.random() * tag.length)]
                   console.log(`Searching lewd from ${randTag} subreddit...`)
                    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/`)
                    .then((data) => {
                    sendFileFromUrl(from, data.url, data.title, msg)
                    limitAdd(sender, limit)
                    })
                 .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                break
                case prefix+'fetish': case prefix+'fetis': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (!q) return reply(`Contoh penggunaan ${command} pussy`)
                var listfet = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao', 'hentaianal', 'anal', 'pussy', 'animepussy', 'yaoi', 'yuri', 'hentaiblowjob', 'blowjob', 'futanari', 'kitsunehentai', 'midriffhentai', 'erohentai', 'cumhentai', 'paizuri']
                var anu = q.toLowerCase()
                if (!listfet.includes(q)) {
                let teks = `List Fetish :\n\n`
                for (let x of listfet) {
                teks += `${x}\n`
                }
                teks += `\nContoh penggunaan : ${command} pussy`
                reply(teks)
                }
                console.log(`Searching fetish from ${anu} subreddit...`)
                fetchJson(`https://meme-api.herokuapp.com/gimme/${anu}/`)
                .then((data) => {
                    sendFileFromUrl(from, data.url, data.title, msg)
                    limitAdd(sender, limit)
                    })
                 .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                    break
            case prefix+'nh': case prefix+'nhentai': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                nhentai.exists(args[1]).then((validate) => {
                if (validate === true) {
                nhentai.getDoujin(args[1]).then((yooi) => {
                var pepe = `*NHENTAI INFO*\n\n*Title:* ${yooi.title}\n*Japanese Title:* ${yooi.nativeTitle}\n*Parody:* ${yooi.details.parodies[0]}\n*Pages:* ${yooi.details.pages[0]}\n*Artist:* ${yooi.details.artists[0]}\n*Uploaded:* ${yooi.details.uploaded[0]}`
                sendFileFromUrl(from, yooi.pages[0], pepe, msg)
                limitAdd(sender, limit)
                   })
                } else {
                  reply(`Code tidak valid`)
                }
              })
            }
                     break
                case prefix+'xnxxdl':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _link xnxx_`)
                if (!isUrl(args[1]) && !args[1].includes('xnxx.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                    fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${args[1]}`)
                    .then((data) => {
                    var get_result = data.result
                    var ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    var ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    sendFileFromUrl(from, get_result.thumbnail, ini_txt, msg)
                    limitAdd(sender, limit)
                   })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                  }
                    break

                case prefix+'xhamsterdl':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _link nekopoi_`)
                if (!isUrl(args[1]) && !args[1].includes('xhamster.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                 fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${lolkey}&url=${args[1]}`)
                    .then((data) => {
                    var get_result = data.result
                    let ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n\n"
                    sendFileFromUrl(from, get_result.thumbnail, ini_txt, msg)
                    limitAdd(sender, limit)
                   })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                  }
                    break
                case prefix+'nekopoi': case prefix+'nekoinfo':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _link nekopoi_`)
                if (!isUrl(args[1]) && !args[1].includes('nekopoi.care')) return reply(mess.error.Iv)
                reply(mess.wait)
                    fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${args[1]}`)
                    .then((data) => {
                    var get_result = data.result
                    let ini_txt = `*Title* : ${get_result.anime}\n`
                    ini_txt += `*Porducers* : ${get_result.producers}\n`
                    ini_txt += `*Duration* : ${get_result.duration}\n`
                    ini_txt += `*Size* : ${get_result.size}\n`
                    ini_txt += `*Sinopsis* : ${get_result.sinopsis}\n`
                    var link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        var link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                   sendFileFromUrl(from, get_result.thumb, ini_txt, msg)
                    limitAdd(sender, limit)
                   })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                   }
                    break
                case prefix+'xnxxsearch':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _query_`)
                reply(mess.wait)
                    fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${q}`)
                    .then((data) =>{
                    var get_result = data.result
                     var ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `*Title* : ${x.title}\n`
                        ini_txt += `*Views* : ${x.views}\n`
                        ini_txt += `*Duration* : ${x.duration}\n`
                        ini_txt += `*Uploader* : ${x.uploader}\n`
                        ini_txt += `*Link* : ${x.link}\n\n`
                    }
                    sendFileFromUrl(from, get_result[0].thumbnail, ini_txt, msg)
                     limitAdd(sender, limit)
                   })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'xhamstersearch':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (args.length < 2) return reply(`Penggunaan ${command} _query_`)
                reply(mess.wait)
                    fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolkey}&query=${q}`)
                    .then((data) =>{
                    var get_result = data.result
                     var ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `*Title* : ${x.title}\n`
                        ini_txt += `*Views* : ${x.views}\n`
                        ini_txt += `*Duration* : ${x.duration}\n`
                        ini_txt += `*Link* : ${x.link}\n\n`
                    }
                    textImg(ini_txt)
                    limitAdd(sender, limit)
                   })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'waifu18': case prefix+'w18':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                     fetchJson('https://waifu.pics/api/nsfw/waifu').then((data) => {
                     sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                  break
                case prefix+'ceritasex': case prefix+'cersex':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    googleimg.scrape("cewek seksi", 25).then((yoi) =>{
                        var bokepp = JSON.parse(JSON.stringify(yoi))
                        var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
axios.get('http://162.213.249.120/').then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data)
  var d = '', c;
  $('.post-title A').each((i, el) => {
  d += $(el).attr('href') + "\n";
});
  c = d.split("\n");
  var url = c[Math.floor(Math.random() * c.length)];
  axios.get(url).then((response) => {
    const $ = cheerio.load(response.data)
    var o, m
    sendFileFromUrl(from, bokep2.url, $('.post-content').text().replace(/“/g, '').replace(/  /g, ' ').replace("                                                     ", ''), msg)
  })
});
})
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'lewdavatar':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    neko.nsfw.avatar()
                     .then((data) =>{
                    sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'femdom':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    neko.nsfw.femdom()
                     .then((data) =>{
                    sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'chiisaihentai': case prefix+'trap': case prefix+'ecchi':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/nsfw/${command.split(prefix)[1]}?apikey=${lolkey}`, 'ini', msg)
                    limitAdd(sender, limit)
                    break
                case prefix+'hololewd': case prefix+'lewdholo':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=${lolkey}`, 'ini', msg)
                    limitAdd(sender, limit)
                    break
//------------------< Weebs Command >-------------------
                case prefix+'neko':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    neko.sfw.neko()
                     .then((data) =>{
                    sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
                case prefix+'wp': case prefix+'wallnime': case prefix+'wallpaper':
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    neko.sfw.wallpaper()
                     .then((data) =>{
                    sendFileFromUrl(from, data.url, 'Ini', msg)
                    limitAdd(sender, limit)
                    })
              .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    break
            case prefix+'ytdl':{
                if (args.length === 1) return reply(`Kirim perintah *${prefix}ytdl [linkYt]*`)
                let isLinks2 = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks2) return reply(mess.error.Iv)
                let list = [{title: `Mau dikirim Audio Apa Video bang`,
                    rows: [
                       {
                        title: `Audio/Mp3`,
                        description: `\n\n*Bot akan mengirimkan dalam bentuk ekstensi .mp3*`,
                        rowId: `#ytmp3 ${args[1]}`
                      },{
                        title: `Video/Mp4`,
                        description: `\n\n*Bot akan mengirimkan dalam bentuk ekstensi .mp4 (video)*`,
                        rowId: `#ytmp4 ${args[1]}`
                      }
                    ]
                   }]
               listmsg(from, `Youtube Downloader`, `Pilih Ekstensi Anda Disini👇👇`, list)
               }
               break
//------------------< Premium Command >-------------------
            case prefix+'ytmp4':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length === 1) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
                let isLinks2 = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks2) return reply(mess.error.Iv)
                try {
                    reply(mess.wait)
                    ytv(args[1])
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
                        const captionsYtmp4 = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionsYtmp4, msg)
                            sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'Ytmp4 Error : ' + err)
                    console.log(color('[Ytmp4]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'ytmp3':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length === 1) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
                let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
                if (!isLinks) return reply(mess.error.Iv)
                try {
                    reply(mess.wait)
                    yta(args[1])
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}
\`\`\`▢ Ext : MP3
\`\`\`▢ Filesize : ${filesizeF}
\`\`\`▢ Link : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
                        const captions = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captions, msg)
                            sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'Ytmp3 Error : ' + err)
                    console.log(color('[Ytmp3]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'tiktoknowm': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Penggunaan ${command} _link tiktok_`)
                if (!isUrl(args[1]) && !args[1].includes('tiktok.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${args[1]}`)
                .then(({data}) => {
                    let { title, description, duration, link } = data.result
                    let capt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK NOWM DOWNLOADER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Username / Nickname : ${data.result.author.username} / ${data.result.author.nickname}\`\`\`
\`\`\`▢ Duration : ${duration}\`\`\`
\`\`\`▢ LikeCount : ${data.result.statistic.diggCount}\`\`\`
\`\`\`▢ ShareCount : ${data.result.statistic.shareCount}\`\`\`
\`\`\`▢ CommentCount : ${data.result.statistic.commentCount}\`\`\`
\`\`\`▢ PlayCount : ${data.result.statistic.playCount}\`\`\`
\`\`\`▢ Descripttion : ${description}\`\`\`
`
                    getBuffer(link).then((yoi) => {
xinz.sendVideo(from, yoi, capt, msg)
})
                })
                .catch(() => {
                    axios.get(`https://api.lolhuman.xyz/api/tiktok2?apikey=${lolkey}&url=${args[1]}`)
                    .then(({data}) => {
                        sendFileFromUrl(from, data.result, '', msg)
                        limitAdd(sender, limit)
                    })
                    .catch(() => {
                        axios.get(`https://api.lolhuman.xyz/api/tiktok3?apikey=${lolkey}&url=${args[1]}`)
                        .then(({data}) => {
                            sendFileFromUrl(from, data.result, '', msg)
                            limitAdd(sender, limit)
                        })
                        .catch((err) => {
                            sendMess(ownerNumber, 'Tiktok Error : ' + err)
                            console.log(color('[Tiktok]', 'red'), err)
                            reply(mess.error.api)
                        })
                    })
                })
            }
                break
            case prefix+'stickerwm': case prefix+'swm': case prefix+'take': case prefix+'takesticker': case prefix+'takestick':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                let packname1 = q.split('|')[0] ? q.split('|')[0] : q
                let author1 = q.split('|')[1] ? q.split('|')[1] : ''
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await WSF.createExif(packname1, author1, `./sticker/stickwm_${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await WSF.createExif(packname1, author1, `./sticker/stickwm_${sender}`)
                    reply(mess.wait)
						await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if (isQuotedSticker) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					await WSF.createExif(packname1, author1, `./sticker/takestick_${sender}`)
                    exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                        if (error) return reply(mess.error.api)
                        xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                        fs.unlinkSync(media)
                        fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
                    })
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break
            case prefix+'asupan': case prefix+'ptl': case prefix+'ptlvid':{
                if (!isPremium) return reply(mess.OnlyPrem)
                fetchText('http://sansekai.my.id/sansekai.txt').then((data) => {
                    var wifegerak = data.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                        sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${wifegerakx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.', msg)
                })
                }
                break
            case prefix+'bokep': case prefix+'bkp': case prefix+'randombokep':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                fetchJson(`https://pastebin.com/raw/k82VJzeP`).then((data) => {
                    var bokepp = JSON.parse(JSON.stringify(data))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    textImg(bokep2.teks)
                })
                }
                break
            case prefix+'pinterest': case prefix+'pinsearch': case prefix+'pinterestsearch':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} kucing`)
                fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=${zekskey}&q=${q}`).then((data) => {
                    var bokepp = JSON.parse(JSON.stringify(data.data))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    sendFileFromUrl(from, bokep2, `Hasil Pencarian Pinterest : ${q}`, msg)
                })
                }
                break
            case prefix+'gimg': case prefix+'googleimg': case prefix+'gimage': case prefix+'googleimage':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} kucing`)
                googleimg.scrape(q, 25).then((yoi) =>{
                    var bokepp = JSON.parse(JSON.stringify(yoi))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    sendFileFromUrl(from, bokep2.url, `Hasil Pencarian Google Image : ${q}\n\nTitle: ${bokep2.title}\nSource: ${bokep2.source}`, msg)
                })
                }
                break
            case prefix+'spamcall':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
                if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)
                fetchJson(`https://api.zeks.xyz/api/spamcall?apikey=${zekskey}&no=${args[1]}`)
                .then((data) => {
                    textImg(data.result.logs)
                    })
               .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                }
                break
            case prefix+'spamsms':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                try {
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${args[1]}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${args[1]}`)
                    reply("Success")
               } catch (err) {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
               }
                }
                break
            case prefix+'mlewd': case prefix+'mlewds': case prefix+'multilewd': case prefix+'multilewds': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                   var tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
                   var randTag = tag[Math.floor(Math.random() * tag.length)]
                   console.log(`Searching lewd from ${randTag} subreddit...`)
                    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}/5`)
                    .then((data) => {
                    for (var x of data.memes) {
                        sendFileFromUrl(from, x.url, 'ini', msg)
                    }
                    })
                 .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                break
                case prefix+'multifetish': case prefix+'mfetish': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (!q) return reply(`Contoh penggunaan ${command} pussy`)
                var listfet = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao', 'hentaianal', 'anal', 'pussy', 'animepussy', 'yaoi', 'yuri', 'hentaiblowjob', 'blowjob', 'futanari', 'kitsunehentai', 'midriffhentai', 'erohentai', 'cumhentai', 'paizuri']
                var anu = q.toLowerCase()
                if (!listfet.includes(q)) {
                let teks = `List Fetish :\n\n`
                for (let x of listfet) {
                teks += `${x}\n`
                }
                teks += `\nContoh penggunaan : ${command} pussy`
                reply(teks)
                }
                console.log(`Searching fetish from ${q} subreddit...`)
                fetchJson(`https://meme-api.herokuapp.com/gimme/${anu}/5`)
                .then((data) => {
                 for (var x of data.memes) {
                        sendFileFromUrl(from, x.url, 'ini', msg)
                    }
                    })
                 .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                 }
                    break
            case prefix+'nhdl': case prefix+'ncode': case prefix+'nhpdf': case prefix+'nhentaipdf': {
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                nhentai.exists(args[1]).then((validate) => {
                if (validate === true) {
                nhentai.getDoujin(args[1]).then((yooi) => {
                exec(`nhentai --id=${args[1]} --output=./media --format=${args[1]} --no-html --pdf --rm-origin-dir`, async (error) => {
                if (error) return reply(mess.error.api)
                await xinz.sendMessage(from, fs.readFileSync(`./media/${args[1]}.pdf`), document, { quoted: msg, mimetype: Mimetype.pdf, filename: yooi.nativeTitle })
                fs.unlinkSync(`./media/${args[1]}.pdf`)
                   })
                  })
                } else {
                  reply(`Code tidak valid`)
                }
              })
            }
                     break
           case prefix+'nekosearch': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (isGroup && !isNsfw) return reply(ind.notNsfw())
                if (!q) return reply(`Cara penggunaan : ${command} dropout`)
               fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${q}`)
               .then((data) =>{
               var ini_txt = `*Nekopoi Search:*\n\n`
                    for (var x of data.result) {
                        ini_txt += `*Title* : ${x.title}\n`
                        ini_txt += `*Link* : ${x.link}\n\n`
                    }
                    sendFileFromUrl(from, data.result[0].thumbnail, ini_txt, msg)
                 })
                 .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
}
                    break
            case prefix+'brainlysearch': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} apa itu bot`)
                fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${lolkey}&query=${q}`)
                .then((res) => {
                    var ini_txt = "Brainly Search Result : \n"
                    for (var x of res.result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    textImg(ini_txt)
                    })
                .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    }
                    break
            case prefix+'brainly': {
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} apa itu bot`)
                fetchJson(`https://api.lolhuman.xyz/api/brainly2?apikey=${lolkey}&query=${q}`)
                .then((res) => {
                    var ini_txt = "Brainly Result : \n"
                    for (var x of res.result) {
                        ini_txt += `*Question* :\n ${x.question.content}\n`
                        ini_txt += `*Answer* :\n ${x.answer[0].content}\n\n`
                    }
                    textImg(ini_txt)
                    })
                .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    }
                    break
                case prefix+'addrespon':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} textnya|autoresponnya`)
                    var textnya = q.split('|')[0]
                    var respnya = q.split('|')[1]
                    const checkdulu = checkText(textnya)
                    if (!checkdulu) {
                        addResponBot(textnya, respnya)
                        textImg(ind.respon(textnya, respnya))
                    } else {
                        reply(ind.responAlready(textnya))
                    }
                    }
                    break
                case prefix+'delrespon':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} textnya`)
                    _respon.splice(getResponPosition(q), 1)
                    fs.writeFileSync('./database/respon.json', JSON.stringify(_respon))
                    reply(ind.ok())
                  }
                    break
                case prefix+'listrespon':{
                    let listResponn = '*──「 AUTO-RESPON LIST 」──*\n\n'
                    let nomorListtt = 0
                    const derettt = getAllRespon()
                    for (let i = 0; i < derettt.length; i++) {
                        nomorListtt++
                        listResponn += `${nomorListtt}. ${derettt[i]}\n\n`
                    }
                    textImg(listResponn)
                    }
                    break
                case prefix+'delsticker':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} textnya`)
                    if (_stick.includes(q)) {
                    let anu = _stick.indexOf(q)
                    _stick.splice(anu, 1)
                    fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
                    fs.unlinkSync(`./media/sticker/${q}.webp`)
                    reply(ind.stickerDel())
                    } else {
                    reply(ind.stickerNotFound())
                    }
                   }
                    break              
                 case prefix+'addupdate':
                    if (!isOwner) return reply(mess.OnlyOwner)
                    if (!q) return reply(`Example: ${command} update fitur`)
                    _update.push(q)
                    fs.writeFileSync('./database/update.json', JSON.stringify(_update))
                    reply(ind.updateAdd())
                    break
                case prefix+'update':
                    let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
                    for (let i of _update) {
                          updateList += `࿃ *${i.replace(_update)}*\n\n`
                    }
                    textImg(updateList)
                    break
                case prefix+'addsticker':
                case prefix+'addstiker':{
                    if (!q || !isQuotedSticker) return reply(`Example: ${command} wibu dan tag stickernya`)
                    if (_stick.includes(q.toLowerCase())) {
                        reply(ind.stickerAddAlready(q))
                    } else {
                        _stick.push(q.toLowerCase())
                        fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
                        var mediaData = await xinz.downloadAndSaveMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo, `./media/sticker/${q}`)
                        reply(ind.stickerAdd())
                    }
                    }
                    break
                case prefix+'stickerlist':
                case prefix+'liststicker':
                case prefix+'stikerlist':
                case prefix+'liststiker':
                    if (!isGroup) return reply(ind.groupOnly())
                    let stickerList = `*── 「 STICKER DATABASE 」 ──*\n\nTotal: ${_stick.length}\n\n`
                    for (let i of _stick) {
                          stickerList += `➸ ${i.replace(_stick)}\n`
                    }
                    textImg(stickerList)
                    break
                 case prefix+'delvn':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} textnya`)
                    if (_vn.includes(q)) {
                    let anu = _vn.indexOf(q)
                    _vn.splice(anu, 1)
                    fs.writeFileSync('./database/vn.json', JSON.stringify(_vn))
                    fs.unlinkSync(`./media/audio/${q}.mp3`)
                    reply(ind.vnDel())
                    } else {
                    reply(ind.vnNotFound())
                    }
                    }
                    break              
                case prefix+'addvn':{
                    if (!q || !isQuotedAudio) return reply(`Example: ${command} wibu dan tag vn nya`)
                    if (_vn.includes(q.toLowerCase())) {
                        reply(ind.vnAddAlready(q))
                    } else {
                        _vn.push(q.toLowerCase())
                        fs.writeFileSync('./database/vn.json', JSON.stringify(_vn))
                        var mediaData = await xinz.downloadMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                        fs.writeFileSync(`./media/audio/${q}.mp3`, mediaData)
                        reply(ind.vnAdd())
                    }
                    }
                    break
                case prefix+'vnlist':
                case prefix+'listvn':
                    if (!isGroup) return reply(ind.groupOnly())
                    let vnList = `*── 「 VN DATABASE 」 ──*\n\nTotal: ${_vn.length}\n\n`
                    for (let i of _vn) {
                          vnList += `➸ ${i.replace(_vn)}\n`
                    }
                    textImg(vnList)
                    break
                case prefix+'delimg':
                case prefix+'delimage':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} nama file`)
                    if (_image.includes(q)) {
                    let anu = _image.indexOf(q)
                    _image.splice(q, 1)
                    fs.writeFileSync('./database/image.json', JSON.stringify(_image))
                    fs.unlinkSync(`./media/image/${q}.jpeg`)
                    reply(ind.imageDel())
                    } else {
                    reply(ind.imageNotFound())
                    }
                    }
                    break              
                case prefix+'addimage':
                case prefix+'addimg':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (!q) return reply(`Cara penggunaan : ${command} nama file`)
                if (!isImage || !isQuotedImage) return reply('kirim atau Reply gambar nya')
                    if (_image.includes(q)) {
                        reply(ind.imageAddAlready(q))
                    } else {
                        _image.push(q)
                        fs.writeFileSync('./database/image.json', JSON.stringify(_image))
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                        fs.writeFileSync(`./media/image/${q}.jpeg`, mediaData)
                        reply(ind.imageAdd())
                    }
                  }
                    break
                case prefix+'imglist':
                case prefix+'listimg':
                case prefix+'imagelist':
                case prefix+'listimage':
                    if (!isGroup) return reply(ind.groupOnly())
                    let imageList = `*── 「 IMAGE DATABASE 」 ──*\n\nTotal: ${_image.length}\n\n`
                    for (let i of _image) {
                          imageList += `➸ ${i.replace(_image)}\n`
                    }
                    textImg(imageList)
                    break
                case prefix+'getimage':
                case prefix+'getimg':
                if (!q) return reply(`Cara penggunaan : ${command} nama file`)
                    if (_image.includes(q)) {
                        xinz.sendImage(from, fs.readFileSync(`./media/image/${q}.jpeg`), '', msg)
                    } else {
                    reply(ind.imageNotFound())
                    }
                    break    
//------------------< Sticker / Tools >-------------------
            case prefix+'exif':{
				if (!isOwner) return
				const namaPack = q.split('|')[0] ? q.split('|')[0] : q
				const authorPack = q.split('|')[1] ? q.split('|')[1] : ''
				await WSF.createExif(namaPack, authorPack, `./sticker/data`)
				await reply('Done gan')
            }
				break
                case prefix+'waifusticker':
                case prefix+'waifustick':
                case prefix+'animesticker':
                case prefix+'nimesticker':
                case prefix+'nimestick': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
                case prefix+'patrik':
                case prefix+'patrick': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
                case prefix+'esticker': case prefix+'estik': case prefix+'estick': case prefix+'estiker': case prefix+'emojisticker': case prefix+'emojistiker': case prefix+'emoji': case prefix+'semoji': {
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (args.length < 2) return reply(`Penggunaan ${command} emoji`)
                    if (args.length === 2) {
                    fetchJson(`https://api.lolhuman.xyz/api/smoji3/${encodeURIComponent(args[1])}?apikey=${lolkey}`)
                    .then((res) =>{
                        let list = []
                        let startnum = 1
                        for (var x in res.result.emoji) {
                        let yy = {title: 'Model ke-' + startnum++,
                        rows: [
                           {
                            title: `${x}`,
                            description: `*Saya ingin sticker model ${x}*`,
                            rowId: `${prefix}esticker ${args[1]} ${res.result.emoji[x]}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    listmsg(from, `List Sticker`, `Kan model stickernya banyak tu kak, kaka mau model sticker yg mana ya? Pilih dibawah ya kak`, list)
                    })
                   .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
                    } else if (args.length === 3) {
                    var sticknye = await getBuffer(args[2])
                    let ran = getRandom('.png')
                    fs.writeFileSync(ran, sticknye)
                        await ffmpeg(ran)
							.input(ran)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(ran)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(ran)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
                case prefix+'gura':
                case prefix+'gurastick':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
                case prefix+'doge':
                case prefix+'dogestick':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
                case prefix+'bucinstick':
                case prefix+'bucinsticker':{
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
                    var isGif = wifegerakx.endsWith('.gif') ? true : false
                    if (!isGif) {
                    var ngebuff = await getBuffer(wifegerakx)
                    var media = getRandom('.png')
                    fs.writeFileSync(media, ngebuff)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else {
                     var ngebuff = await getBuffer(wifegerakx)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    }
                    break
            case prefix+'ttp':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                fs.writeFileSync("./sticker/" + sender + "ttp.png", text2png(q, {
                    color: 'white',
                    font: '200px futura',
                    padding: 20,
                    lineSpacing: 60,
                    textAlign: 'center',
                    strokeWidth: 15
                }))
                await ffmpeg("./sticker/" + sender + "ttp.png")
                .input("./sticker/" + sender + "ttp.png")
                .on('start', function (cmd) {
                    console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                    console.log(`Error : ${err}`)
                    fs.unlinkSync("./sticker/" + sender + "ttp.png")
                    reply(mess.error.api)
                })
                .on('end', function () {
                    console.log('Finish')
                    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                        if (error) return reply(mess.error.api)
                        xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                        limitAdd(sender, limit)
                        fs.unlinkSync("./sticker/" + sender + "ttp.png")	
                        fs.unlinkSync(`./sticker/${sender}.webp`)	
                    })
                })
                .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(`./sticker/${sender}.webp`)
                break
                case prefix+'ttp2': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                    var ttp = await fetchJson(`http://api.areltiyan.xyz/sticker_maker?text=${encodeURIComponent(q)}`)
                    var bufferttp = await Buffer.from(ttp.base64.split('data:image/png;base64,')[1], 'base64')
                    let ran = getRandom('.png')
                    fs.writeFileSync(ran, bufferttp, 'base64')
                        await ffmpeg(ran)
							.input(ran)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(ran)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(ran)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    break
                case prefix+'ttp4': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                    var ttp = await fetchJson(`https://api.xteam.xyz/ttp?text=${encodeURIComponent(q)}`)
                    var bufferttp = await Buffer.from(ttp.result.split('data:image/png;base64,')[1], 'base64')
                    let ran = getRandom('.png')
                    fs.writeFileSync(ran, bufferttp, 'base64')
                        await ffmpeg(ran)
							.input(ran)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(ran)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(ran)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    }
                    break
            case prefix+'sfire':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    var firenya = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, firenya)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                        } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    var firenya = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, firenya)
                    fs.unlinkSync(ran)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
            case prefix+'pet':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var link = await uptotele(yoooo)
                    var firenya = await getBuffer(`https://api-gdr2.herokuapp.com/api/petpet?url=${link}`)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, firenya)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                        } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
						fs.unlinkSync(yoooo)
						if (err) return reply('Gagal :V')   
                    var link = await uptotele(ran)
                    var firenya = await getBuffer(`https://api-gdr2.herokuapp.com/api/petpet?url=${link}`)
                 	let media = `./sticker/${sender}.gif`
                    fs.writeFileSync(media, firenya)
                    fs.unlinkSync(ran)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
                                })
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
               })
                 } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
                    break
            case prefix+'sticker':
            case prefix+'stiker':
            case prefix+'s':
            case prefix+'stickergif':
            case prefix+'stickerp':
            case prefix+'stikerp':
            case prefix+'stikerp':
            case prefix+'sgif':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					reply(mess.wait)
                        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break
            case prefix+'toimg':
            case prefix+'stickertoimg':
            case prefix+'stoimg':
            case prefix+'stikertoimg':
            case prefix+'togif':
            case prefix+'tovid':
            case prefix+'tovideo':
            case prefix+'tomedia':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
				if (!isQuotedSticker) return reply('Reply stiker nya')
                let encmedia = isSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.stickerMessage.contextInfo : JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				let media = await xinz.downloadAndSaveMediaMessage(encmedia)
				if (quotedMsg.stickerMessage.isAnimated === true){
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(media),
                            }
                        }, function(error, response, body) {
				    		if (error) return reply('Gagal :V')
                            fs.unlinkSync(media)
                            let get_result = JSON.parse(body)
                            sendFileFromUrl(from, get_result.result, 'Nih', msg)
                            limitAdd(sender,  limit)
                        });
					} else {
                    reply(mess.wait)
					let ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal :V')
						xinz.sendMessage(from, fs.readFileSync(ran), image, {quoted: msg, caption: 'NIH'})
                        limitAdd(sender,  limit)
						fs.unlinkSync(ran)
					})
					}
                }
				break
                case prefix+'stickernobg': case prefix+'stikernobg': case prefix+'snobg': case prefix+'removebg': case prefix+'nobg':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                        var file_name = getRandom('.png')
                         var file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(media)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(media)
                            fs.writeFileSync(file_name, body, "binary")
                            await ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('start', function (cmd) {
							    	console.log(`Started : ${cmd}`)
				    			})
                                .on('error', function(err) {
                                    console.log(err)
                                    reply(mess.error.api)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(file_name)
									fs.unlinkSync(file_name2)
                                })
							})
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                    } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                  var ran = getRandom('.png')
				  exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
						fs.unlinkSync(media)
                       if (err) return reply('Gagal :V')   
                        var file_name = getRandom('.png')
                         var file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${lolkey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(ran)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(ran)
                            fs.writeFileSync(file_name, body, "binary")
                            await ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('start', function (cmd) {
							    	console.log(`Started : ${cmd}`)
				    			})
                                .on('error', function(err) {
                                    console.log(err)
                                    reply(mess.error.api)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
								console.log('Finish')
                                    exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(file_name)
									fs.unlinkSync(file_name2)
                                })
							})
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}snobg atau tag gambar yang sudah dikirim`)
                    }
                    limitAdd(sender, limit)
                    break
            case prefix+'attp':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}attp* teks`)
                let ane = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
                fs.writeFileSync('./sticker/attp.webp', ane)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/attp.webp -o ./sticker/attp.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/attp.webp`), sticker, {quoted: msg})
                    limitAdd(sender, limit)
                    fs.unlinkSync(`./sticker/attp.webp`)	
                })
            }
                break
           case prefix+'ttg':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ttg* teks`)
                let ane = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${encodeURIComponent(q)}`)
                fs.writeFileSync('./sticker/ttg.webp', ane)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/ttg.webp -o ./sticker/ttg.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/ttg.webp`), sticker, {quoted: msg})
                    limitAdd(sender, limit)
                    fs.unlinkSync(`./sticker/ttg.webp`)	
                })
            }
              break
           case prefix+'ttp3':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ttp3* teks`)
                let ane = await getBuffer(`https://api.lolhuman.xyz/api/ttp3?apikey=${lolkey}&text=${encodeURIComponent(q)}`)
                fs.writeFileSync('./sticker/ttp3.webp', ane)
                exec(`webpmux -set exif ./sticker/data.exif ./sticker/ttp3.webp -o ./sticker/ttp3.webp`, async (error) => {
                    if (error) return reply(mess.error.api)
                    xinz.sendMessage(from, fs.readFileSync(`./sticker/ttp3.webp`), sticker, {quoted: msg})
                    limitAdd(sender, limit)
                    fs.unlinkSync(`./sticker/ttp3.webp`)	
                })
            }
                break
            case prefix+'findsticker': case prefix+'findstiker': case prefix+'stickerwa':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return reply(`Cara penggunaan : ${command} kucing`)
                fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${q}`).then(async(data) => {
                    var bokepp = JSON.parse(JSON.stringify(data.result))
                    var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]
                    for (var x of bokep2.stickers) {
                            xinz.sendMessage(from, await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`), sticker)
                    }
                    limitAdd(sender, limit)
                })
                }
                break
                case prefix+'stickermeme': case prefix+'memesticker': case prefix+'memestick': case prefix+'stickmeme': case prefix+'stcmeme': case prefix+'textmaker':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                    if (!q) return reply('Textnya bang')
                    var text1 = q.split('|')[0] ? q.split('|')[0] : (q.includes("|") ? '' : q)
			     	var text2 = q.split('|')[1] ? q.split('|')[1] : ''
                    var atas = text1.replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
                    var bawah = text2.replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    var tolink = await uptotele(media)
                    var sticknye = await getBuffer(`https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${tolink}`)
                    fs.unlinkSync(media)
                    let ran = getRandom('.png')
                    fs.writeFileSync(ran, sticknye)
                        await ffmpeg(ran)
							.input(ran)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(ran)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(ran)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated){
                    reply(mess.wait)
                    let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    let media = await xinz.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
			        fs.unlinkSync(media)
				    if (err) return reply('Gagal :V')   
                    var tolink = await uptotele(ran)
                    var sticknye = await getBuffer(`https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${tolink}`)
                    fs.unlinkSync(ran)
                    let rann = getRandom('.png')
                    fs.writeFileSync(rann, sticknye)
                        await ffmpeg(rann)
							.input(rann)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(rann)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                                    if (error) return reply(mess.error.api)
									xinz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
									limitAdd(sender, limit)
                                    fs.unlinkSync(rann)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                })
                } else {
                   reply(`Kirim/reply gambar atau sticker dengan caption ${command} text atas|text bawah`)
                }
               }
                    break
            case prefix+'translate': case prefix+'tr':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}translate* kodebahasa teks\n*${prefix}translate* kodebahasa <reply message>`)
                if (isQuotedMsg){
                    let bahasanya = args[1].toString()
                    const trans = await translate(quotedMsg.chats, {
                        to: bahasanya
                    })
                    .then((res) => reply(res.text))
                    .catch((err) => {
                        reply(bahasalist(prefix))
                    })
                    trans
                    limitAdd(sender, limit)
                } else {
                    if (args.length < 3) return reply(`Penggunaan :\n*${prefix}translate* kodebahasa teks\n*${prefix}translate* kodebahasa <reply message>`)
                    let bahasanya = args[1].toString()
                    let textnya = q.slice(args[1].length + 1, q.length)
                    const trans = await translate(textnya, {
                        to: bahasanya
                    })
                    .then((res) => reply(res.text))
                    .catch((err) => {
                        reply(bahasalist(prefix))
                    })
                    trans
                    limitAdd(sender, limit)
                }
            }
                break
            case prefix+'tinyurl':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}tinyurl link`)
                if (!isUrl(args[1])) return reply(`Masukkan link yang benar`)
                axios.get(`https://tinyurl.com/api-create.php?url=${args[1]}`)
                .then((a) => reply(`Nih ${a.data}`))
                .catch(() => reply(`Error, harap masukkan link dengan benar`))
                break
//------------------< Canvas  >-------------------
   //GK WORK DI TELMUK
//------------------< NULIS >---------------------
            case prefix+'nulis':
                reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
                break
            case prefix+'nuliskiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
            case prefix+'nuliskanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
            case prefix+'foliokiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
            case prefix+'foliokanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    xinz.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})
                    limitAdd(sender, limit)
                })
            }
                break
//------------------< Text Marker >-------------------
            case prefix+'blackpink': case prefix+'bp':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                reply(mess.wait)
                sendFileFromUrl(from, `https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lolkey}&text=${q}`, '', msg).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'glitch': case prefix+'glitchtext':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text1|text2`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} text1|text2`)
                reply(mess.wait)
                sendFileFromUrl(from, `https://api.lolhuman.xyz/api/textprome2/glitch?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`, '', msg).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'neon': case prefix+'neontext':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                reply(mess.wait)
                sendFileFromUrl(from, `https://api.lolhuman.xyz/api/textprome/neon?apikey=${lolkey}&text=${q}`, '', msg).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
            case prefix+'harta': case prefix+'hartatahta': case prefix+'tahta':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} text`)
                reply(mess.wait)
                xinz.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
                limitAdd(sender, limit)
                break
//------------------< Math Random >-------------------

				case prefix+'ganteng':
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let tejs = `Cowok paling ganteng di group ini adalah\n*@${aku.jid.split('@')[0]}*`
					mentions(tejs, [aku.jid, cintax.jid], true)
					break
				case prefix+'cantik':
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let gejs = `Cewek️ paling cantik di group ini adalah\n*@${cintax.jid.split('@')[0]}*`
					mentions(gejs, [aku.jid, cintax.jid], true)
					break
					case prefix+'jadian':
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let vejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ♥️ @${cintax.jid.split('@')[0]}\nSemoga Langgeng Hii`
					mentions(vejs, [aku.jid, cintax.jid], true)
					break
				case prefix+'seberapagay':
				axios.get(`https://arugaz.herokuapp.com/api/howgay`).then(res => res.data).then(res =>
				textImg(`Nih Liat Data Gay Si ${q}

Persentase Gay : ${res.persen}%
Alert!!! : ${res.desc}`))
				break
				case prefix+'bisakah':
					const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					xinz.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + keh, text, { quoted: msg })
					break
					case prefix+'kapankah':
					const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					xinz.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + koh, text, { quoted: msg })
					break
				case prefix+'apakah':
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					xinz.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + kah, text, { quoted: msg })
					break
				case prefix+'rate':
					const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					xinz.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%', text, { quoted: msg })
					break
				case prefix+'hobby':
					const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					xinz.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + by, text, { quoted: msg })
					break
				case prefix+'truth':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					xinz.sendImage(from, await getBuffer(`https://blog.elevenia.co.id/wp-content/uploads/2020/04/27420-truth-or-dare.jpg`), 'Truth\n\n' + ttrth, msg)
					break
				case prefix+'dare':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					xinz.sendImage(from, await getBuffer(`https://blog.elevenia.co.id/wp-content/uploads/2020/04/27420-truth-or-dare.jpg`), 'Dare\n\n' + der , msg)
					break
				case prefix+'cekbapak': // By Ramlan ID
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					xinz.sendMessage(from, cek, text, { quoted: msg })
					break
//------------------< Baileys >---------------------
            case prefix+'getpp':
            case prefix+'getpic':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} @tag atau 'group'`)
                if (args[1] === 'group'){
                    reply(mess.wait)
                    try {
                        var pic = await xinz.getProfilePicture(from)
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                    xinz.sendImage(from, await getBuffer(pic), 'Nih bang', msg)
                    limitAdd(sender, limit)
                } else if (mentioned.length !== 0){
                    reply(mess.wait)
                    try {
                        var pic = await xinz.getProfilePicture(mentioned[0])
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                    xinz.sendImage(from, await getBuffer(pic), 'Nih bang', msg)
                    limitAdd(sender, limit)
                } else {
                    reply(`Penggunaan ${command} @tag atau 'group'`)
                }
                break
            case prefix+'tagme':
                mentions(`@${sender.split("@")[0]}`, [sender], true)
                break
            case prefix+'kontak':
                if (args.length < 2) return reply(`Penggunaan ${command} nomor|nama`)
                if (!q.includes("|")) return reply(`Penggunaan ${command} nomor|nama`)
                if (isNaN(q.split("|")[0])) return reply(`Penggunaan ${command} nomor|nama`)
                xinz.sendContact(from, q.split("|")[0], q.split("|")[1], msg)
                break
            case prefix+'hidetag':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Masukkan text`)
                let arr = [];
                for (let i of groupMembers){
                    arr.push(i.jid)
                }
                mentions(q, arr, false)
            }
                break
//------------------< ANTI DELETE >------------------- 
            case prefix+'antidelete':
                if (!isOwner && !fromMe && !isGroupAdmins) return reply(mess.GrupAdmin)
				const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				if (args.length === 1) return reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
				if (args[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return reply(`Antidelete telah diaktifkan di grup ini sebelumnya!`)
						dataRevoke.push(from)
						fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete diaktifkan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctaktif*`)
					}
				} else if (args[1] == 'ctaktif') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						if (isCtRevoke) return reply(`Antidelete telah diaktifkan di semua kontak sebelumnya!`)
						dataCtRevoke.data = true
						fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete diaktifkan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete aktif*`)
					}
				} else if (args[1] == 'banct') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (isBanCtRevoke) return reply(`kontak ini telah ada di database banlist!`)
					if (args.length === 2 || args[2].startsWith('0')) return reply(`Masukan nomer diawali dengan 62! contoh 62859289xxxxx`)
					dataBanCtRevoke.push(args[2] + '@s.whatsapp.net')
					fs.writeFileSync('./database/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					reply(`Kontak ${args[2]} telah dimasukan ke banlist antidelete secara permanen!`)
				} else if (args[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						reply(`Antidelete dimatikan di grup ini!`)
					} else if (!isGroup) {
						reply(`Untuk kontak penggunaan *${prefix}antidelete ctmati*`)
					}
				} else if (args[1] == 'ctmati') {
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						reply(`Antidelete dimatikan disemua kontak!`)
					} else if (isGroup) {
						reply(`Untuk grup penggunaan *${prefix}antidelete mati*`)
					}
				} else {
                  reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)
               }
				break
//------------------< Media, Misc, and Fun >-------------------
            case prefix+'lirik': case prefix+'lyrics': case prefix+'lyric':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                Ra.Musikmatch(q)
                .then((kontlo)=>{
                    sendFileFromUrl(from, kontlo.result.thumb, kontlo.result.judul + '\n' + kontlo.result.penyanyi + '\n\n' + kontlo.result.lirik, msg)
                    limitAdd(sender, limit)
                })
                 .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(mess.error.api)
                        })
            }
                break
//------------------< INFO >-------------------
            case prefix+'limit': case prefix+'ceklimit': case prefix+'balance': case prefix+'glimit': case prefix+'uangku': case prefix+'bal':
                if (mentioned.length !== 0){
                    textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : `${getLimit(mentioned[0], limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(mentioned[0], gcount, glimit)}/${gcount}\nBalance : $${getBalance(mentioned[0], balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    textImg(`Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : ${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
                break
            case prefix+'owner':
            case prefix+'creator':
                xinz.sendContact(from, ownerNumber.split("@")[0], 'UwU', msg)
                .then((res) => xinz.sendMessage(from, 'Nih kontak ownerku', text, {quoted: res}))
                break
            case prefix+'sourcecode': case prefix+'sc': case prefix+'src':
                textImg(`Bot ini menggunakan sc : https://github.com/Xinz-Team/XinzBot`)
                break
            case prefix+'donate':
            case prefix+'donasi':
            case prefix+'tos':
            case prefix+'sumbang':
                 xinz.sendImage(from, await getBuffer(qris), ind.tos(ownerNumber.split("@")[0], prefix), msg)
                break
            case prefix+'runtime':
                textImg(`${runtime(process.uptime())}`)
                break
            case prefix+'ping':
            case prefix+'speed':{
                let timestamp = speed();
				let latensi = speed() - timestamp
                textImg(`${latensi.toFixed(4)} Second`)
            }
                break
                case prefix+'report':
                    if (!q) return textImg('mau lapor apa pak')
                    if (isGroup) {
                        sendMess(ownerNumber, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender}\n*Group*: ${groupName}\n*Message*: ${q}`)
                        reply(ind.received(pushname))
                    } else {
                        sendMess(ownerNumber, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender}\n*Message*: ${q}`)
                        reply(ind.received(pushname))
                    }
                    break
                case prefix+'botgroup':
                case prefix+'chikagroup':
                case prefix+'botgrup':
                case prefix+'chikagrup':
                    mentions(ind.groupBot(sender), [sender], true)
                    break
                case prefix+'ownergroup':
                case prefix+'ownergrup': {
                    if (!isGroup) return reply(ind.groupOnly())
                    var teks = `Owner Group : @${from.split('-')[0]}`
                    mentions(teks, [`${from.split('-')[0]}@s.whatsapp.net`], true)
}
                    break
                case prefix+'rules':
                case prefix+'rule':
                    textImg(ind.rules(prefix))
                    break
                case prefix+'downloader':
                    textImg(ind.menuDownloader(prefix))
                    break
                case prefix+'textmenu':
                    textImg(ind.menuText(prefix))
                    break
                case prefix+'menupremi':
                    textImg(ind.menuPremi(prefix))
                    break
                case prefix+'stickermenu':
                    textImg(ind.menuSticker(prefix))
                    break 
                case prefix+'weebsmenu':
                    textImg(ind.menuWeeaboo(prefix))
                    break 
                case prefix+'funmenu':
                    textImg(ind.menuFun(prefix))
                    break 
                case prefix+'imagemaker':
                    textImg(ind.menuImage(prefix))
                    break 
                case prefix+'kerangmenu':
                    if (!isGroup) return reply(ind.groupOnly())
                    textImg(ind.menuKerang(prefix))
                    break 
                case prefix+'groupmenu':
                    if (!isGroup) return reply(ind.groupOnly())
                    textImg(ind.menuModeration(prefix))
                    break 
                case prefix+'18':
                case prefix+'18+':
                case prefix+'nsfwmenu':
                    if (isGroup && !isNsfw) return reply(ind.notNsfw())
                    textImg(ind.menuNsfw(prefix))
                    break 
                case prefix+'ownermenu':
                    if (!isOwner) return reply(ind.ownerOnly())
                    textImg(ind.menuOwner(prefix))
                    break 
                case prefix+'levelingmenu':
                    if (!isGroup) return reply(ind.groupOnly())
                    if (!isLevelingOn) return reply(ind.levelingNotOn())
                    textImg(ind.menuLeveling(prefix))
                    break 
                case prefix+'praymenu':
                    textImg(ind.menuPray(prefix))
                    break 
                case prefix+'mediamenu':
                    textImg(ind.menuMisc(prefix))
                    break 
                case prefix+'about':
                    textImg(ind.menuBot(prefix))
                    break 
                case prefix+'listgrup': case prefix+'listgroup':{
                let totalchat = await xinz.chats.all()
				let i = []
				let giid = []
                let grupp = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
              for (let e of giid){
	         	let ingfo = await xinz.groupMetadata(e)
	        	grupp.push(ingfo)
	        }
			    	let txt = `*List Group*\n\*Total* : *${grupp.length}*\n\n`
				    for (let i = 0; i < grupp.length; i++){
					    txt += `*Nama grup : ${grupp[i].subject}*\n*ID grup : ${grupp[i].id}*\n*Dibuat : ${moment(`${grupp[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}*\n*Jumlah Peserta : ${grupp[i].participants.length}*\n\n`
			    	}
				    await textImg(txt)
                  }
                    break
                case prefix+'leaveall':{
                let totalchat = await xinz.chats.all()
				let i = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
                    sendMess(id, 'Bot sedang pembersihan, total chat:' + i.length)
                   .then(() => xinz.groupLeave(id))
					}
				}
                  }
                    break
                case prefix+'status': 
                case prefix+'stats': 
                case prefix+'stat': 
                case prefix+'botstat': {
                let totalchat = await xinz.chats.all()
				let i = []
				let giid = []
				for (let mem of totalchat){
					i.push(mem.jid)
				}
				for (let id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xinz.user.phone
                let anu = process.uptime()
                let teskny = `*V. Whatsapp :* ${wa_version}
*Baterai :* ${xinz.baterai.baterai}%
*Charge :* ${xinz.baterai.cas === 'true' ? 'Ya' : 'Tidak'}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}
*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${runtime(anu)}`
				reply(teskny)
            }
				break
//------------------< Downloader >-------------------
            case prefix+'playmp4': case prefix+'playvideo': case prefix+'playvid': case prefix+'plav': case prefix+'playvidio':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
                        const captionisu = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionisu, msg)
                            sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
                    console.log(color('[PlayMp4]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'play': case prefix+'playmp3':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length === 1) return reply(`Kirim perintah *${prefix}play query*`)
                try {
                    reply(mess.wait)
                    let yut = await yts(q)
                    yta(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 30000) return sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
                        const captionis = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionis, msg)
                            sendFileFromUrl(from, dl_link, '', msg)
                            limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                    sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
                    console.log(color('[PlayMp3]', 'red'), err)
                    reply(mess.error.api)
                }
            }
                break
            case prefix+'ig':
            case prefix+'igdl':
            case prefix+'instagram':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ig* link ig`)
                if (!isUrl(args[1]) && !args[1].includes('instagram.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                getPost(args[1].split('/')[4])
                .then((res) => {
                    let { owner_user, post, date, capt } = res
                    let caption = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Owner : ${owner_user}\`\`\`
\`\`\`▢ Jumlah Media : ${post.length}\`\`\`
\`\`\`▢ Caption :${capt}\`\`\`

_Harap tunggu sebentar, media akan segera dikirim_`
                    sendMess(from, caption)
                    for (let i = 0; i < post.length; i++){
                        sendFileFromUrl(from, post[i].url)
                    }
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'IG Download Error : ' + err)
                    console.log(color('[IG Download]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'fb':
            case prefix+'fbdl':
            case prefix+'facebook':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}fb* url`)
                if (!isUrl(args[1]) && !args[1].includes('facebook.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                fbdl(args[1])
                .then((res) => {
                    sendFileFromUrl(from, res.result.links[0].url)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'FB Error : ' + err)
                    console.log(color('[FB]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'tiktokmusic': case prefix+'tiktokaudio':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} _link tiktok_`)
                if (!isUrl(args[1]) && !args[1].includes('tiktok.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                sendFileFromUrl(from, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${args[1]}`, '', msg)
                    limitAdd(sender, limit)
                break
            case prefix+'tiktok': case prefix+'tik': case prefix+'tiktokwm': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan ${command} _link tiktok_`)
                if (!isUrl(args[1]) && !args[1].includes('tiktok.com')) return reply(mess.error.Iv)
                reply(mess.wait)
                axios.get(`https://api.vhtear.com/tiktokdl?link=${args[1]}&apikey=${vhkey}`)
                .then(({data}) => {
                    let { video } = data.result
                    sendFileFromUrl(from, video, 'ini', msg)
                    limitAdd(sender, limit)
                })
                .catch(() => {
                        getBuffer(`https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${args[1]}`).then((vid) => {
                        xinz.sendVideo(from, vid, '', msg)
                        limitAdd(sender, limit)
                        })
                    })
                    .catch((err) => {
                        sendMess(ownerNumber, 'TiktokWM Error : ' + err)
                        console.log(color('[TiktokWM]', 'red'), err)
                        reply(mess.error.api)
                    })
            }
                break
            case prefix+'video': case prefix+'videos': case prefix+'vidio': case prefix+'vidios':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Kirim perintah *${command}* _query_`)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                        let list = []
                        let startnum = 1
                        for (var x of yt) {
                        let yy = { title: 'Data ke-'+ startnum++,
                        rows: [
                           {
                            title: `${x.title}`,
                            description: `\n\n*Viewers: ${x.views}*\n*Duration: ${x.timestamp}*\n*Upload: ${x.ago}*\n*Url: ${x.url}*`,
                            rowId: `${prefix}ytmp4 ${x.url}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    listmsg(from, `Video Search`, `Pilih disini, Hasil Pencarian "${q}", Hanya untuk Premium User`, list)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'YT SEARCH Error : ' + err)
                    console.log(color('[YT SEARCH]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'music': case prefix+'musik':{
                if (!isPremium) return reply(mess.OnlyPrem)
                if (args.length < 2) return reply(`Kirim perintah *${command}* _query_`)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                        let list = []
                        let startnum = 1
                        for (var x of yt) {
                        let yy = { title: 'Data ke-'+ startnum++,
                        rows: [
                           {
                            title: `${x.title}`,
                            description: `\n\n*Viewers: ${x.views}*\n*Duration: ${x.timestamp}*\n*Upload: ${x.ago}*\n*Url: ${x.url}*`,
                            rowId: `${prefix}ytmp3 ${x.url}`
                          }
                        ]
                        }
                        list.push(yy)
                    }
                    listmsg(from, `Music Search`, `Pilih disini, Hasil Pencarian "${q}", Hanya untuk Premium User`, list)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'YT SEARCH Error : ' + err)
                    console.log(color('[YT SEARCH]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break
            case prefix+'yts':
            case prefix+'ytsearch':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ytsearch* _query_`)
                reply(mess.wait)
                yts(q)
                .then((res) => {
                    let yt = res.videos
                    let txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
*Hasil Pencarian : ${q}*\n`
                    for (let i = 0; i < 10; i++){
                        txt += `\n─────────────────\n\n\`\`\`▢ Judul : ${yt[i].title}\n\`\`\`▢ ID : ${yt[i].videoId}\n\`\`\`▢ Upload : ${yt[i].ago}\n\`\`\`▢ Ditonton : ${yt[i].views}\n\`\`\`▢ Duration : ${yt[i].timestamp}\n\`\`\`▢ URL : ${yt[i].url}\n`
                    }
                    sendFileFromUrl(from, yt[0].image, txt, msg)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'YT SEARCH Error : ' + err)
                    console.log(color('[YT SEARCH]', 'red'), err)
                    reply(mess.error.api)
                })
            }
                break


//------------------< Stalker >-------------------
            case prefix+'igstalk': case prefix+'stalkig':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}igstalk* _username_`)
                reply(mess.wait)
                getUser(args[1].replace('@', ''))
                .then((res) => {
                    let { username, biography, fullName, subscribersCount, subscribtions, highlightCount, isBusinessAccount, isPrivate, isVerified, profilePicHD, postsCount } = res
                    let caption = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${username}\`\`\`
\`\`\`▢ Fullname : ${fullName}\`\`\`
\`\`\`▢ Followers : ${subscribersCount}\`\`\`
\`\`\`▢ Following : ${subscribtions}\`\`\`
\`\`\`▢ Post Count : ${postsCount}\`\`\`
\`\`\`▢ HighlightCount : ${highlightCount}\`\`\`
\`\`\`▢ PrivateAccount : ${isPrivate ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ VerifiedAccount : ${isVerified ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ BusinessAccount : ${isBusinessAccount ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ Biography :\`\`\` \n${biography}`
                    sendFileFromUrl(from, profilePicHD, caption, msg)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'IG Stalk Error : ' + err)
                    console.log(color('[IG Stalk]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
            case prefix+'ghstalk': case prefix+'githubstalk': case prefix+'ghuser':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(mess.wait)
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${login}\`\`\`
\`\`\`▢ Name : ${name}\`\`\`
\`\`\`▢ Followers : ${followers}\`\`\`
\`\`\`▢ Following : ${following}\`\`\`
\`\`\`▢ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\`\`\`
\`\`\`▢ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\`\`\`
\`\`\`▢ Public Gists : ${public_gists}\`\`\`
\`\`\`▢ Public Repos : ${public_repos}\`\`\`
\`\`\`▢ Twitter : ${twitter_username}\`\`\`
\`\`\`▢ Email : ${email}\`\`\`
\`\`\`▢ Location : ${location}\`\`\`
\`\`\`▢ Blog : ${blog}\`\`\`
\`\`\`▢ Link : ${html_url}\`\`\`
\`\`\`▢ Bio :\`\`\`\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, msg)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'GH Stalk Error : ' + err)
                    console.log(color('[GH Stalk]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
//------------------< Sewa >-------------------
            case prefix+'sewa':
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}+sewa* add/del waktu`)
                if (args[1].toLowerCase() === 'add'){
                        _sewa.addSewaGroup(from, args[2], sewa)
                        reply(`Success`)
                } else if (args[1].toLowerCase() === 'del'){
                    sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
                fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
                } else {
                   reply(`Penggunaan :\n*${prefix}+sewa* add/del waktu`)
                }
                break
//------------------< Premium >-------------------
            case prefix+'sewabot': case prefix+'uptopremium':{
                 if (command.split(prefix)[1] === 'sewabot') return xinz.sendImage(from, await getBuffer(qris), ind.menuPrice(ownerNumber.split("@")[0], pushname), msg)
                xinz.sendImage(from, await getBuffer(qris), ind.UpToPremi(ownerNumber.split("@")[0], prefix), msg)
            }
                break
            case prefix+'reset':{
                if (!isOwner) return reply(mess.OnlyOwner)
                    var reset = []
                     _claim = reset
                     glimit = reset
                     limit = reset
                     console.log('Hang tight, it\'s time to reset')
                     fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                     fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
                     fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
                     textImg(ind.doneOwner())
             }
                break
            case prefix+'premium': case prefix+'prem':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}premium* add/del @tag waktu\natau *${prefix}premium* add/del nomor waktu`)
                if (args[1].toLowerCase() === 'add'){
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    _prem.addPremiumUser(mentioned[0], args[3], premium)
                    }
                    reply('Sukses')
                } else {
                    _prem.addPremiumUser(args[2] + '@s.whatsapp.net', args[2], premium)
                    reply('Sukses')
                }
                } else if (args[1].toLowerCase() === 'del'){
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        premium.splice(_prem.getPremiumPosition(mentioned[i], premium), 1)
                        fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                    }
                    reply('Sukses')
                } else {
                    premium.splice(_prem.getPremiumPosition(args[2] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
                }
                } else {
                reply(`Penggunaan :\n*${prefix}premium* add/del @tag waktu\natau *${prefix}premium* add/del nomor waktu`)
                }
                break
            case prefix+'addcmd': case prefix+'setcmd':{
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}uptopremium* untuk membeli premium`)
                  if (isQuotedSticker) {
                  if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = quotedMsg.stickerMessage.fileSha256.toString('hex')
                  addCmd(kodenya, q)
                  textImg("Done Bwang")
                  } else {
                    reply('tag stickenya')
                  }
                 }
                 break
            case prefix+'delcmd':{
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}uptopremium* untuk membeli premium`)
                if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = quotedMsg.stickerMessage.fileSha256.toString('hex')
                _scommand.splice(getCommandPosition(kodenya), 1)
                fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  textImg("Done Bwang")
                }
                break
            case prefix+'premiumcheck':
            case prefix+'cekpremium':
                if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}uptopremium* untuk membeli premium`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'sewacheck':
            case prefix+'ceksewa': {
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
                let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                }
                break
            case prefix+'listprem':
            case prefix+'premiumlist':{
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium){
                    men.push(i.id)
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*ID :* @${i.id.split("@")[0]}\n*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                }
                mentions(txt, men, true)
                }
                break
            case prefix+'sewalist': case prefix+'listsewa':
                let txt = `List Sewa\nJumlah : ${sewa.length}\n\n`
                for (let i of sewa){
                    let cekvipp = ms(i.expired - Date.now())
                    txt += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
                }
                reply(txt)
                break
//------------------< BAN >-------------------
            case prefix+'ban':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args[1].toLowerCase() === 'add'){
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addBanned(mentioned[0], args[3], ban)
                    }
                    reply('Sukses')
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa ban Owner`)
                    addBanned(quotedMsg.sender, args[2], ban)
                    reply(`Sukses ban target`)
                } else if (!isNaN(args[2])) {
                    addBanned(args[2] + '@s.whatsapp.net', args[3], ban)
                    reply('Sukses')
                 }
                } else if (args[1].toLowerCase() === 'del'){
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        unBanned(mentioned[i], ban)
                    }
                    reply('Sukses')
                }if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    reply(`Sukses unban target`) 
                } else if (!isNaN(args[2])) {
                    unBanned(args[2] + '@s.whatsapp.net', ban)
                    reply('Sukses')
                }
                } else {
                    reply(`Kirim perintah ${prefix}ban add/del (@tag atau nomor atau reply pesan orang yang ingin di ban) masa_ban`)
                }
                break
            case prefix+'listblock':
            case prefix+'listban':
                let txtx = `List Banned\nJumlah : ${ban.length}\n\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `*ID :* @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENT'
                        txtx += `*Expire :* PERMANENT\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                    }
                 }
                 txtx += '\n\nThis is list of blocked number :\n\n'
					for (let block of blocked) {
                        menx.push(block)
						txtx += `~> @${block.split('@')[0]}\n`
					}
					txtx += `Total : ${blocked.length}\n\n`
                mentions(txtx, menx, true)
                break
            case prefix+'unblock':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${command} nomer`)
                await xinz.blockUser(args[1] + '@s.whatsapp.net', "remove")
                break
            case prefix+'bangroup':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${command} id-grup`)
                bangrup.push(args[1])
			    fs.writeFileSync('./database/bangrup.json', JSON.stringify(bangrup))
			    reply('sukses')
                break
            case prefix+'unbangroup':{
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${command} id-grup`)
                let anu = bangrup.indexOf(args[1])
                bangrup.splice(anu, 1)
                fs.writeFileSync('./database/bangrup.json', JSON.stringify(bangrup))
			    reply('sukses')
                }
                break
            case prefix+'bancmd':
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`Kirim perintah *${command} command`)
                if (!args[1].startsWith(prefix)) return reply(`Kirim perintah *${command} command`)
                bancmd.push(args[1].split(prefix)[1] + from)
			    fs.writeFileSync('./database/bancmd.json', JSON.stringify(bancmd))
			    reply('sukses')
                break
            case prefix+'unbancmd':{
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`Kirim perintah *${command} command`)
                if (!args[1].startsWith(prefix)) return reply(`Kirim perintah *${command} command`)
                let anu = bancmd.indexOf(args[1].split(prefix)[1] + from)
                bancmd.splice(anu, 1)
                fs.writeFileSync('./database/bancmd.json', JSON.stringify(bancmd))
			    reply('sukses')
                }
                break
//------------------< Game >-------------------
            case prefix+'lb': case prefix+'leaderboard':{
                    if (isGroup && !isLevelingOn) return reply(ind.levelingNotOn())
                let top = '*──「 LEADERBOARD LEVEL 」──*\n\n'
                let arrTop = []
                     var nom = 0
                     _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                    for (let i = 0; i < 10; i++) {
                        var roless = 'Copper V'
                        if (_level[i].level <= 5) {
                            roless = 'Copper IV'
                        } else if (_level[i].level <= 10) {
                            roless = 'Copper III'
                        } else if (_level[i].level <= 15) {
                            roless = 'Copper II'
                        } else if (_level[i].level <= 20) {
                            roless = 'Copper I'
                        } else if (_level[i].level <= 25) {
                            roles = 'Silver V'
                        } else if (_level[i].level <= 30) {
                            roless = 'Silver IV'
                        } else if (_level[i].level <= 35) {
                            roless = 'Silver III'
                        } else if (_level[i].level <= 40) {
                            roless = 'Silver II'
                        } else if (_level[i].level <= 45) {
                            roless = 'Silver I'
                        } else if (_level[i].level <= 50) {
                            roless = 'Gold V'
                        } else if (_level[i].level <= 55) {
                            roless = 'Gold IV'
                        } else if (_level[i].level <= 60) {
                            roless = 'Gold III'
                        } else if (_level[i].level <= 65) {
                            roless = 'Gold II'
                        } else if (_level[i].level <= 70) {
                            roless = 'Gold I'
                        } else if (_level[i].level <= 75) {
                            roless = 'Platinum V'
                        } else if (_level[i].level <= 80) {
                            roless = 'Platinum IV'
                        } else if (_level[i].level <= 85) {
                            roless = 'Platinum III'
                        } else if (_level[i].level <= 90) {
                            roless = 'Platinum II'
                        } else if (_level[i].level <= 95) {
                            roless = 'Platinum I'
                        } else if (_level[i].level < 100) {
                            roless = 'Exterminator'
                        }
                     arrTop.push(_level[i].jid)
                        nom++
                        top += `◪ *${nom}. @${_level[i].jid.replace('@s.whatsapp.net', '')}*\n├❑ *XP: ${_level[i].xp}*\n├❑ *Level: ${_level[i].level}*\n└❑ *Role: ${roless}*\n\n`
                    }
                       let topp = '*── 「 TOPGLOBAL BALANCE 」 ──*\n\n'
                   balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                for (let i = 0; i < 10; i ++){
                    topp += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let toppp = '*── 「 TOPLOCAL BALANCE 」 ──*\n\n'
                let anggroup = groupMembers.map(a => a.jid)
                for (let i = 0; i < balance.length; i ++){
                    if (anggroup.includes(balance[i].id)) {
                        toppp += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                        arrTop.push(balance[i].id)
                    }
                }
                mentions(top + '\n\n' + topp + '\n\n' + toppp, arrTop, true)
            }
                break
                case prefix+'level':
                case prefix+'xp':{
                if (isGroup && !isLevelingOn) return reply(ind.levelingNotOn())
                    try {
                        var pic = await xinz.getProfilePicture(from)
                    } catch {
                        var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                   var tolink = await fetchText('https://tinyurl.com/api-create.php?url=' + pic)
                    const userLevel = getLevelingLevel(sender)
                    const userXp = getLevelingXp(sender)
                    const requiredXp = 200 * (Math.pow(2, getLevelingLevel(sender)) - 1)
                     var link = `https://api.lolhuman.xyz/api/rank?apikey=${lolkey}&img=${tolink}&background=${bgbot}&username=${encodeURIComponent(pushname)}&level=${userLevel}&ranking=${roles}&currxp=${userXp}&xpneed=${requiredXp}`
                    const levelnya = `*──「 LEVEL INFO 」──*\n\n❑ *Name: @${sender.split('@')[0]}*\n❑ *XP: ${userXp} / ${requiredXp}*\n❑ *Level: ${userLevel}*\n❑ *Role: ${role}*`
                    xinz.sendImage(from, await getBuffer(link), levelnya, msg, [sender])
              }
                    break
            case prefix+'buylimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $25 balance`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                let ane = Number(nebal(args[1]) * 25)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, nebal(args[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $20 balance\nPajak $1 / $10`)
                if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args[1])) return reply(`Harus berupa angka`)
                let ane = Number(nebal(args[1]) * 20)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, nebal(args[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
                case prefix+'claim':
                case prefix+'klaim':
                    if (isClaimOn) return reply(ind.claimOnAlready())
                    addLevelingXp(sender, 10000)
                    let hadippp = randomNomor(1000)
                    addBalance(sender, hadippp, balance)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    reply(ind.claimOn(hadippp))
                    break
            case prefix+'suit':
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (args.length < 2) return reply(`Penggunaan ${command} gunting/kertas/batu`)
                let suit = ["gunting", "batu", "kertas"];
                let isSuit = suit.includes(q)
                if (isSuit){
                    let suit1 = suit[Math.floor(Math.random() * (suit.length))]
                    let hadi = randomNomor(30)
                    if (q === suit[0]){
                        if (suit1 === "gunting"){
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nseri`)
                        } else if (suit1 === "batu"){
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu kalah`)
                        } else {
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu menang\nHadiah : ${hadi} balance`)
                            addBalance(sender, hadi, balance)
                        }
                    } else if (q === suit[1]){
                        if (suit1 === "batu"){
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nSeri`)
                        } else if (suit1 === "kertas"){
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu kalah`)
                        } else {
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu menang\nHadiah : ${hadi} balance`)
                            addBalance(sender, hadi, balance)
                        }
                    } else if (q === suit[2]){
                        if (suit1 === "kertas"){
                            reply('seri')
                        } else if (suit1 === "gunting"){
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu kalah`)
                        } else {
                            reply(`Kamu ${q}\nKomputer  ${suit1}\nKamu menang\nHadiah : ${hadi} balance`)
                            addBalance(sender, hadi, balance)
                        }
                    }
                    gameAdd(sender, glimit)
                } else {
                    reply(`Penggunaan ${command} gunting/kertas/batu`)
                }
                break
                case prefix+'slot':
                    if (isGroup && !isLevelingOn) return reply(ind.levelingNotOn())
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                    const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
                    const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    if (somtoyy  == '🍌 : 🍌 : 🍌') {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *5000Xp*`)
                    addLevelingXp(sender, 5000)
	     	        } else if (somtoyy == '🍒 : 🍒 : 🍒') {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *5000Xp*`)
                    addLevelingXp(sender, 5000)
	     	        } else if (somtoyy == '🔔 : 🔔 : 🔔') {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *5000Xp*`)
                    addLevelingXp(sender, 5000)
	     	        } else if (somtoyy == '🍐 : 🍐 : 🍐') {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *5000Xp*`)
                    addLevelingXp(sender, 5000)
	     	        } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *5000Xp*`)
                    addLevelingXp(sender, 5000)
	     	        } else {
	     	        textImg(`[  🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | *LOST @${sender.split('@')[0]}* ]\n\n Xp mu berkurang 750`)
                    addLevelingXp(sender, -750)
	     	        }
                    gameAdd(sender, glimit)
                    break
            case prefix+'dadu':
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (args.length > 2) return reply(`Penggunaan ${command} angka atau ${command} (Jika mendapat angka 6 akan mendapatkan sejumlah balance)`)
                let dadu = ["1", "2", "3", "4", "5", "6"];
                let isDadu = dadu.includes(q)
                let hadiaq = randomNomor(30)
                let rend = randomNomor(6)
                if (isDadu){
                    if (q === rend){
                    await xinz.sendMessage(from, fs.readFileSync(`./media/filebot/${rend}.webp`), sticker, { quoted: msg })
                    textImg(`Selamat ${pushname} tebakanmu benar dan dapat ${hadiaq} balance`)
                    addBalance(sender, hadiaq, balance)
                    gameAdd(sender, glimit)
                    } else {
                    await xinz.sendMessage(from, fs.readFileSync(`./media/filebot/${rend}.webp`), sticker, { quoted: msg })
                    gameAdd(sender, glimit)
                    }
                } else {
                    await xinz.sendMessage(from, fs.readFileSync(`./media/filebot/${rend}.webp`), sticker, { quoted: msg })
                    gameAdd(sender, glimit)
                    if (rend === "6"){
                    textImg(`Selamat ${pushname}, mendapatkan angka 6 dan dapat ${hadiaq} balance`)
                    addBalance(sender, hadiaq, balance)
                   }
                }
                break
            case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentioned.length !== 0){
						if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                        let h = randomNomor(100)
                        mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/T) untuk bermain\n\nHadiah : ${h} balance`), [sender, mentioned[0]], false)
                        tictactoe.push({
                            id: from,
                            status: null,
                            hadiah: h,
                            penantang: sender,
                            ditantang: mentioned[0],
                            TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                        })
                        gameAdd(sender, glimit)
                } else {
                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
            case prefix+'delttt':
            case prefix+'delttc':
                if (!isGroup)return reply(mess.OnlyGrup)
                if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                tictactoe.splice(getPosTic(from, tictactoe), 1)
                reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                break
            case prefix+'tebakgambar':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
                let anih = anu.result.answer.toLowerCase()
                game.addgambar(from, anih, gamewaktu, tebakgambar)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                sendFileFromUrl(from, anu.result.image, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`), msg)
                gameAdd(sender, glimit)
            }
                break
            case prefix+'kuis':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isKuis(from, kuis)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lolkey}`)
                let anih = anu.result.answer.toLowerCase()
                game.addkuis(from, anih, gamewaktu, kuis)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                textImg(monospace(`${anu.result.question}\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`))
                gameAdd(sender, glimit)
            }
                break
            case prefix+'kimiakuis':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isKimiaKuis(from, kimiakuis)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolkey}`)
                let anih = anu.result.lambang
                game.addkimiakuis(from, anih, gamewaktu, kimiakuis)
                textImg(monospace(`Tebak Sebutan Atau Lambang Kimia dari Unsur ${anu.result.nama}\n\nPetunjuk : -\nWaktu : ${gamewaktu}s`))
                gameAdd(sender, glimit)
            }
                break
            case prefix+'siapaaku':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isSiapaAku(from, siapaaku)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)
                let anih = anu.result.answer.toLowerCase()
                game.addsiapaaku(from, anih, gamewaktu, siapaaku)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                textImg(monospace(`${anu.result.question}\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`))
                gameAdd(sender, glimit)
            }
                break
            case prefix+'tebaklirik':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`)
                let anih = anu.result.answer.toLowerCase()
                game.addtebaklirik(from, anih, gamewaktu, tebaklirik)
                const petunjuk = anu.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                textImg(monospace(`${anu.result.question}\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`))
                gameAdd(sender, glimit)
            }
                break
            case prefix+'mathkuis':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isMathKuis(from, mathkuis)) return reply(`Masih ada soal yang belum di selesaikan`)
                var angka1 = Math.ceil(Math.random() * 1000)
                var angka2 = Math.ceil(Math.random() * 1000)
                var format = ['/','*','+','-']
                var rendom = format[Math.floor(Math.random() * format.length)]
                var soal = angka1 + rendom + angka2
                let anih = `${mathjs.evaluate(soal)}`
                game.addmathkuis(from, anih, gamewaktu, mathkuis)
                const petunjuk = anih.replace(/[1|3|5|7|9]/gi, '_')
                textImg(monospace(`${angka1} ${rendom.replace('/', ':').replace('*', '×')} ${angka2}\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`))
                gameAdd(sender, glimit)
            }
                break
            case prefix+'tebakbendera':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolkey}`)
                let anih = anu.result.name.toLowerCase()
                game.addkuis(from, anih, gamewaktu, tebakbendera)
                const petunjuk = anu.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                textImg(monospace(`Nama Negara Dari Simbol ${anu.result.flag}\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`))
                gameAdd(sender, glimit)
            }
                break
            case prefix+'family100':{
                if (!isGroup)return reply(mess.OnlyGrup)
                if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
                if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`)
                reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
                let anoh = anu.data.result.aswer
                let rgfds = []
                for (let i of anoh){
                    let fefs = i.split('/') ? i.split('/')[0] : i
                    let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                    let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                    rgfds.push(axsf.toLowerCase())
                }
                game.addfam(from, rgfds, gamewaktu, family100)
                gameAdd(sender, glimit)
            }
                break
//------------------< Multi Session >-------------------
            case prefix+'listbot':{
                let arrayBot = [];
                let tmx = `*List ChikaBot*\n\n`
                tmx += `=> Nomor : @${global.xinz.user.jid.split("@")[0]}\n`
                tmx += `=> Prefix : ${global.xinz.multi ? 'MULTI PREFIX' : global.xinz.nopref ? 'NO PREFIX' : global.xinz.prefa}\n`
                tmx += `=> Status : ${global.xinz.mode.toUpperCase()}\n\n`
                arrayBot.push(global.xinz.user.jid)
                for (let i of conns){
                    tmx += `=> Nomor : @${i.user.jid.split("@")[0]}\n`
                    tmx += `=> Prefix : ${i.multi ? 'MULTI PREFIX' : i.nopref ? 'NO PREFIX' : i.prefa}\n`
                    tmx += `=> Status : ${i.mode.toUpperCase()}\n\n`
                    arrayBot.push(i.user.jid)
                }
                tmx += `Total : ${conns.length + 1}`
                mentions(tmx, arrayBot, true)
            }
                break
            case prefix+'stopjadibot':{
                if (global.xinz.user.jid == xinz.user.jid) xinz.reply(from, 'Kenapa nggk langsung ke terminalnya?', msg)
                else {
                    await xinz.reply(from, 'Bye...', msg).then(() => xinz.close())
                }
            }
                break
            case prefix+'getcode':{
                if (global.xinz.user.jid == xinz.user.jid) xinz.reply(from, 'Command ini hanya untuk yang jadi bot', msg)
                else global.xinz.reply(xinz.user.jid, `${prefix}jadibot ${Buffer.from(JSON.stringify(xinz.base64EncodedAuthInfo())).toString('base64')}`, msg)
            }
                break
            case prefix+'jadibot':{
               var lock = false
               const _0x554e=['blocklist','Maaf\x20maksimal\x20bot\x20adalah\x205,\x20coba\x20lain\x20kali','regenerateQRIntervalMs','key','connect','parse','CB:action,,battery','sendImage','add','multi','lastKnownPresence','loadAuthInfo','Tidak\x20bisa\x20membuat\x20bot\x20didalam\x20bot!\x0a\x0ahttps://wa.me/','mengetik','\x20berhenti\x20afk,\x20dia\x20sedang\x20','splice','all','1400853fDgExK','189217yvkyqD','logger','./antidelete','Berhasil\x20tersambung\x20dengan\x20WhatsApp\x20-\x20mu.\x0a','level','warn','getAfkPosition','Maaf\x20bot\x20tidak\x20menerima\x20call','base64EncodedAuthInfo','CB:Blocklist','sendMessage','remoteJid','push','840997FTgMAy','conns','toString','writeFileSync','cas','from','length','nopref','hasNewMessage','xinz','?text=#jadibot','presences','composing','recording','text','checkAfkUser','extendedText','baterai','version','stringify','blockUser','prefa','error','jid','1vbeZNq','1248085tECMkb','501625crOfKf','CB:action,,call','deleteMessage','message','status@broadcast','split','1828122vELgBT','./group','Kamu\x20bisa\x20login\x20tanpa\x20qr\x20dengan\x20pesan\x20dibawah\x20ini.\x20untuk\x20mendapatkan\x20kode\x20lengkapnya,\x20silahkan\x20kirim\x20*','user','301212RPLOom','./database/afk.json','close','2nimDLe','toDataURL','constructor','chat-update'];const _0x137544=_0x3944;(function(_0x290bf1,_0x812d06){const _0x2c609c=_0x3944;while(!![]){try{const _0xe88633=-parseInt(_0x2c609c(0x10f))+parseInt(_0x2c609c(0xe8))*-parseInt(_0x2c609c(0x10d))+-parseInt(_0x2c609c(0x10e))+parseInt(_0x2c609c(0xf5))+-parseInt(_0x2c609c(0x119))+-parseInt(_0x2c609c(0xe7))+parseInt(_0x2c609c(0x11c))*parseInt(_0x2c609c(0x115));if(_0xe88633===_0x812d06)break;else _0x290bf1['push'](_0x290bf1['shift']());}catch(_0x3c509f){_0x290bf1['push'](_0x290bf1['shift']());}}}(_0x554e,0xd10b9));if(lock&&!isOwner)return;let parent=args[0x1]&&args[0x1]=='plz'?xinz:global['xinz'],auth=![];function _0x3944(_0x5a90f0,_0x5b226c){return _0x3944=function(_0x554e05,_0x394470){_0x554e05=_0x554e05-0xe7;let _0x4a9814=_0x554e[_0x554e05];return _0x4a9814;},_0x3944(_0x5a90f0,_0x5b226c);}if(global[_0x137544(0xf6)][_0x137544(0xfb)]>=0x4)return reply(_0x137544(0x121));if(args[0x0]&&args[0x0]=='plz'||global[_0x137544(0xfe)][_0x137544(0x118)]['jid']==xinz[_0x137544(0x118)][_0x137544(0x10c)]){let id=global[_0x137544(0xf6)][_0x137544(0xfb)],blocked=[],conn=new global[(_0x137544(0xfe))][(_0x137544(0x11e))]();if(args[0x1]&&args[0x1]['length']>0xc8){let json=Buffer[_0x137544(0xfa)](args[0x1],'base64')[_0x137544(0xf7)]('utf-8'),obj=JSON[_0x137544(0x125)](json);await conn[_0x137544(0x12b)](obj),auth=!![];}conn['mode']='public',conn[_0x137544(0x129)]=!![],conn[_0x137544(0xfc)]=![],conn[_0x137544(0x10a)]='anjing',conn[_0x137544(0x107)]=[0x2,0x847,0x6],conn['baterai']={'baterai':0x0,'cas':![]},conn[_0x137544(0xe9)][_0x137544(0xec)]=_0x137544(0xed),conn['on']('qr',async _0x564021=>{const _0x5b15f4=_0x137544;qrcode[_0x5b15f4(0x11d)](_0x564021,{'scale':0x8},async(_0x2ea787,_0x51a4a7)=>{const _0x4fdcaa=_0x5b15f4,_0x8a89d7=_0x51a4a7['replace'](/^data:image\/png;base64,/,''),_0x1f10a4=new Buffer['from'](_0x8a89d7,'base64');let _0x3b52a2=await parent[_0x4fdcaa(0x127)](from,_0x1f10a4,'Scan\x20QR\x20ini\x20untuk\x20jadi\x20bot\x20sementara\x0a\x0a1.\x20Klik\x20titik\x20tiga\x20di\x20pojok\x20kanan\x20atas\x0a2.\x20Ketuk\x20WhatsApp\x20Web\x0a3.\x20Scan\x20QR\x20ini\x20\x0aQR\x20Expired\x20dalam\x2020\x20detik',msg);setTimeout(()=>{const _0x46522b=_0x4fdcaa;parent[_0x46522b(0x111)](from,_0x3b52a2[_0x46522b(0x123)]);},0x7530);});}),conn[_0x137544(0x124)]()['then'](async({user:_0x498d5d})=>{const _0x1b739b=_0x137544;parent['reply'](from,_0x1b739b(0xeb)+JSON[_0x1b739b(0x108)](_0x498d5d,null,0x2),msg);if(auth)return;await parent[_0x1b739b(0xf2)](_0x498d5d['jid'],_0x1b739b(0x117)+prefix+'getcode*\x20untuk\x20mendapatkan\x20kode\x20yang\x20akurat',MessageType['extendedText']),parent[_0x1b739b(0xf2)](_0x498d5d[_0x1b739b(0x10c)],command+'\x20'+Buffer['from'](JSON[_0x1b739b(0x108)](conn[_0x1b739b(0xf0)]()))[_0x1b739b(0xf7)]('base64'),MessageType[_0x1b739b(0x105)]);}),conn['on'](_0x137544(0x11f),async _0x5f0e8a=>{const _0x9d54fb=_0x137544;if(_0x5f0e8a[_0x9d54fb(0x100)])for(let _0x67664a in _0x5f0e8a[_0x9d54fb(0x100)]){(_0x5f0e8a['presences'][_0x67664a][_0x9d54fb(0x12a)]===_0x9d54fb(0x101)||_0x5f0e8a[_0x9d54fb(0x100)][_0x67664a]['lastKnownPresence']===_0x9d54fb(0x102))&&(afk[_0x9d54fb(0x104)](_0x67664a,_afk)&&(_afk[_0x9d54fb(0x12f)](afk[_0x9d54fb(0xee)](_0x67664a,_afk),0x1),fs[_0x9d54fb(0xf8)](_0x9d54fb(0x11a),JSON['stringify'](_afk)),conn[_0x9d54fb(0xf2)](_0x5f0e8a[_0x9d54fb(0x10c)],'@'+_0x67664a[_0x9d54fb(0x114)]('@')[0x0]+_0x9d54fb(0x12e)+(_0x5f0e8a[_0x9d54fb(0x100)][_0x67664a][_0x9d54fb(0x12a)]===_0x9d54fb(0x101)?_0x9d54fb(0x12d):'merekam'),MessageType[_0x9d54fb(0x105)],{'contextInfo':{'mentionedJid':[_0x67664a]}})));}if(!_0x5f0e8a[_0x9d54fb(0xfd)])return;_0x5f0e8a=_0x5f0e8a['messages'][_0x9d54fb(0x130)]()[0x0];if(!_0x5f0e8a[_0x9d54fb(0x112)])return;if(_0x5f0e8a[_0x9d54fb(0x123)]&&_0x5f0e8a[_0x9d54fb(0x123)][_0x9d54fb(0xf3)]==_0x9d54fb(0x113))return;let _0xb6ddd3=serialize(conn,_0x5f0e8a);module['exports'](conn,_0xb6ddd3,blocked,_afk,welcome,left);}),conn['on']('message-delete',async _0x179948=>{const _0x6993d=_0x137544;require(_0x6993d(0xea))(conn,_0x179948);}),conn['on']('group-participants-update',async _0x15e63c=>{const _0x23c45b=_0x137544;require(_0x23c45b(0x116))(conn,_0x15e63c,welcome,left);}),conn['on'](_0x137544(0x126),_0x20e168=>{const _0x3093c0=_0x137544,_0x152582=_0x20e168[0x2][0x0][0x1]['value'],_0x5b1e78=_0x20e168[0x2][0x0][0x1]['live'];conn[_0x3093c0(0x106)][_0x3093c0(0x106)]=_0x152582,conn[_0x3093c0(0x106)][_0x3093c0(0xf9)]=_0x5b1e78;}),conn['on'](_0x137544(0xf1),_0x1d7a1f=>{const _0x4b0286=_0x137544;if(blocked[_0x4b0286(0xfb)]>0x2)return;for(let _0x938d7a of _0x1d7a1f[0x1][_0x4b0286(0x120)]){blocked[_0x4b0286(0xf4)](_0x938d7a['replace']('c.us','s.whatsapp.net'));}}),conn['on'](_0x137544(0x110),async _0x288144=>{const _0x396d9e=_0x137544,_0xcafeb9=_0x288144[0x2][0x0][0x1]['from'];conn[_0x396d9e(0xf2)](_0xcafeb9,_0x396d9e(0xef),MessageType[_0x396d9e(0x103)]),await conn[_0x396d9e(0x109)](_0xcafeb9,_0x396d9e(0x128));}),conn[_0x137544(0x122)]=null,setTimeout(()=>{const _0x3e2568=_0x137544;if(conn[_0x3e2568(0x118)])return;conn[_0x3e2568(0x11b)]();let _0x824c61=global[_0x3e2568(0xf6)]['indexOf'](conn);if(_0x824c61<0x0)return;delete global[_0x3e2568(0xf6)][_0x824c61],global[_0x3e2568(0xf6)][_0x3e2568(0x12f)](_0x824c61,0x1);},0xea60),conn['on'](_0x137544(0x11b),()=>{setTimeout(async()=>{const _0x8f4e26=_0x3944;try{if(conn['state']!=_0x8f4e26(0x11b))return;if(conn['user']&&conn['user']['jid'])parent[_0x8f4e26(0xf2)](conn[_0x8f4e26(0x118)][_0x8f4e26(0x10c)],'Koneksi\x20terputus...',MessageType[_0x8f4e26(0x105)]);let _0x60f8a4=global[_0x8f4e26(0xf6)]['indexOf'](conn);if(_0x60f8a4<0x0)return;delete global[_0x8f4e26(0xf6)][_0x60f8a4],global[_0x8f4e26(0xf6)][_0x8f4e26(0x12f)](_0x60f8a4,0x1);}catch(_0x4ce47c){conn[_0x8f4e26(0xe9)][_0x8f4e26(0x10b)](_0x4ce47c);}},0x7530);}),global[_0x137544(0xf6)][_0x137544(0xf4)](conn);}else reply(_0x137544(0x12c)+global['xinz'][_0x137544(0x118)][_0x137544(0x10c)][_0x137544(0x114)]`@`[0x0]+_0x137544(0xff));
               }
                break
//------------------< Owner >-------------------
            case prefix+'sendbug':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Penggunaan ${command} idgroup`)
                xinz.sendBugGC(args[1], WA_DEFAULT_EPHEMERAL)
                xinz.sendBugGC(args[1], 0)
                xinz.sendBugGC(args[1], 999)
                textImg('done owner')
                break
            case prefix+'self':{
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                xinz.mode = 'self'
                textImg('Berhasil berubah ke mode self')
            }
                break
            case prefix+'publik': case prefix+'public':{
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                xinz.mode = 'public'
                textImg('Berhasil berubah ke mode public')
            }
                break
            case prefix+'clearall':{
                if (!isOwner) return reply(mess.OnlyOwner)
                let chiit = await xinz.chats.all()
                for (let i of chiit){
                    xinz.modifyChat(i.jid, 'clear', {
                        includeStarred: false
                    })
                }
                reply(`Selesai`)
            }
                break
               case prefix+'shutdown':
                    if (!isOwner) return reply(mess.OnlyOwner)
                    reply(`otsukaresama deshita ~👋`)
				    .then(() => xinz.close())
                    break
            case prefix+'setprefix':
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    xinz.multi = true
                    xinz.nopref = false
                    textImg(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    xinz.multi = false
                    xinz.nopref = true
                    textImg(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    xinz.multi = false
                    xinz.nopref = false
                    xinz.prefa = `${q}`
                    textImg(`Berhasil mengubah prefix ke ${q}`)
                }
                break
            case prefix+'setname':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
               await xinz.updateProfileName(q)
                    reply(`Success`)
	            break
            case prefix+'give':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`cara penggunaan : ${command} @tag/nomor jumlah_xp`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addLevelingXp(mentioned[0], args[2])
                    }
                    reply('Sukses')
                } else {
                   addLevelingXp(args[1] + '@s.whatsapp.net', args[2])
                await reply(`Success`)
                }
	      	break
                case prefix+'setstat': case prefix+'setstats': case prefix+'setstatus':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
                await xinz.setStatus(q)
                reply(`Success`)
		    break
            case prefix+'bc':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Masukkan text`)
                let chiit = await xinz.chats.all()
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    for (let i of chiit){
                        xinz.sendMessage(i.jid, media, image, {caption: q})
                    }
                    reply(`Sukses`)
                } else if (isVideo || isQuotedVideo) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    for (let i of chiit){
                        xinz.sendMessage(i.jid, media, video, {caption: q})
                    }
                    reply(`Sukses`)
                } else {
                    for (let i of chiit){
                        xinz.sendMessage(i.jid, q, text)
                    }
                    reply(`Sukses`)
                }
                break
//------------------< G R U P >-------------------
            case prefix+'delete':
			case prefix+'del':
			case prefix+'d':
            case prefix+'odel':
            case prefix+'odelete':
				if (!isGroup)return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'odelete' && !isPremium) return reply(mess.OnlyPrem)
                if (command.split(prefix)[1] === 'odel' && !isPremium) return reply(mess.OnlyPrem)
				if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isQuotedMsg) return reply(`Reply pesan dari bot`)
                if (!quotedMsg.fromMe) return reply(`Reply pesan dari bot`)
                if (isSticker) return xinz.deleteMessage(from, { id: msg.message.stickerMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				xinz.deleteMessage(from, { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break
            case prefix+'afk':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (isAfkOn) return reply('afk sudah diaktifkan sebelumnya')
                if (body.slice(150)) return reply('Alasanlu kepanjangan')
                let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
                afk.addAfkUser(sender, Date.now(), reason, _afk)
                mentions(`@${sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, [sender], true)
                break
            case prefix+'infogrup':
            case prefix+'infogroup':
            case prefix+'grupinfo':
            case prefix+'groupinfo':
                if (!isGroup) return reply(mess.OnlyGrup)
                try {
                    var pic = await xinz.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelcome ? 'Aktif' : 'Mati'}\n*AutoSticker :* ${isAutoSticker ? 'Aktif' : 'Mati'}\n*Anti Nsfw :* ${isAntiNsfw ? 'Aktif' : 'Mati'}\n*Nsfw :* ${isNsfw ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*AntiVirtex :* ${isAntiVirtex ? 'Aktif' : 'Mati'}\n*AntiBadword :* ${isBadword ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
                xinz.sendMessage(from, await getBuffer(pic), image, {quoted: msg, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
                break
           case prefix+'add': case prefix+'oadd':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'oadd' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (isBanGroup) return reply(`Group ini masuk dalam list banned, dilarang menggunakan fitur add/kick`)
				if (isQuotedMsg && args.length < 2) {
                    xinz.groupAdd(from, [quotedMsg.sender])
                    .then((res) => {
                        if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "403"){
                            let au = res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us']
                            xinz.sendGroupInvite(from, quotedMsg.sender, au.invite_code, au.invite_code_exp, groupName, `Join bang`)
                            reply(`Mengirimkan groupInvite kepada nomor tersebut`)
                        } else if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "408"){
                            reply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
                        } else if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "401"){
                            reply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
                        } else {
                            reply(jsonformat(res))
                        }
                    })
                    .catch((err) => reply(jsonformat(err)))
                } else if (args.length < 3 && !isNaN(args[1])){
					xinz.groupAdd(from, [args[1] + '@s.whatsapp.net'])
					.then((res) => {
                        if (res.participants[0][args[1] + '@c.us'].code === "403"){
                            let au = res.participants[0][args[1] + '@c.us']
                            xinz.sendGroupInvite(from, args[1] + '@s.whatsapp.net', au.invite_code, au.invite_code_exp, groupName, `Join bang`)
                            reply(`Mengirimkan groupInvite kepada nomor tersebut`)
                        } else if (res.participants[0][args[1] + '@c.us'].code === "408"){
                            reply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
                        } else if (res.participants[0][args[1] + '@c.us'].code === "401"){
                            reply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
                        } else {
                            reply(jsonformat(res))
                        }
                    })
					.catch((err) => reply(jsonformat(err)))
				} else {
                    reply(`Kirim perintah ${prefix}add nomor atau reply pesan orang yang ingin di add`)
                }
                break
            case prefix+'kick': case prefix+'okick':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'okick' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (isBanGroup) return reply(`Group ini masuk dalam list banned, dilarang menggunakan fitur add/kick`)
                if (mentioned.length !== 0){
                    if (mentioned.includes(ownerNumber)) return reply(`Tidak bisa kick Owner`)
                    if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return reply(`Tidak bisa kick owner group`)
                    xinz.groupRemove(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa kick Owner`)
                    if (quotedMsg.sender.split("@")[0] === from.split("-")[0]) return reply(`Tidak bisa kick owner group`)
                    xinz.groupRemove(from, [quotedMsg.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    if (args[1] === ownerNumber.split("@")[0]) return reply(`Tidak bisa kick Owner`)
                    if (args[1] === from.split("-")[0]) return reply(`Tidak bisa kick owner group`)
                    xinz.groupRemove(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick`)
                }
                break
            case prefix+'promote': case prefix+'opromote':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'opromote' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (mentioned.length !== 0){
                    xinz.groupMakeAdmin(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    xinz.groupMakeAdmin(from, [quotedMsg.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    xinz.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}promote @tag atau nomor atau reply pesan orang yang ingin di promote`)
                }
                break
            case prefix+'demote': case prefix+'odemote':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'odemote' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (mentioned.length !== 0){
                    xinz.groupDemoteAdmin(from, mentioned)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa kick Owner`)
                    xinz.groupDemoteAdmin(from, [quotedMsg.sender])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    xinz.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Kirim perintah ${prefix}demote @tag atau nomor atau reply pesan orang yang ingin di demote`)
                }
                break
            case prefix+'linkgc': case prefix+'linkgrup': case prefix+'linkgroup':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                xinz.groupInviteCode(from)
                .then((res) => reply('https://chat.whatsapp.com/' + res))
                break
            case prefix+'leave': case prefix+'oleave':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'oleave' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                reply('bye...')
                .then(() => xinz.groupLeave(from))
                break
            case prefix+'setdesc':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Penggunaan ${prefix}setdesc desc`)
                xinz.groupUpdateDescription(from, q)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
                case prefix+'revoke':
			    case prefix+'revokegroup':
				case prefix+'revokelink': {
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
		        var linkgc = await xinz.revokeInvite(from)
                mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)
            }
					break
            case prefix+'setgrupname':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Penggunaan ${prefix}setgrupname name`)
                xinz.groupUpdateSubject(from, q)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
            case prefix+'sider': case prefix+'chatinfo':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isQuotedMsg) return reply(`Reply pesan dari bot`)
                if (!quotedMsg.fromMe) return reply(`Reply pesan dari bot`)
                    xinz.messageInfo(from, msg.message.extendedTextMessage.contextInfo.stanzaId)
                    .then((res) => {
                        let anu = []
                        let txt = `*Info Chat*\n\n`
                        for (let i = 0; i < res.reads.length; i++){
                            anu.push(res.reads[i].jid)
                            txt += `@${res.reads[i].jid.split("@")[0]}\n`
                            txt += `Waktu membaca : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                        }
                        mentions(txt, anu, true)
                    })
                    .catch((err) => reply(jsonformat(err)))
                break
            case prefix+'group':
            case prefix+'grup':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                xinz.groupSettingChange(from, "announcement", false)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                } else if (args[1].toLowerCase() === 'disable'){
                xinz.groupSettingChange(from, "announcement", true)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                } else if (args[1].toLowerCase() === 'close'){
                xinz.groupSettingChange(from, "announcement", true)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                } else if (args[1].toLowerCase() === 'open'){
                xinz.groupSettingChange(from, "announcement", false)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                } else {
                reply(`Pilih enable atau disable`)
               }
                break
            case prefix+'setppgrup':
            case prefix+'groupicon':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner)return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await xinz.downloadMediaMessage(encmedia)
                    xinz.updateProfilePicture(from, media)
                    .then((res) => reply(jsonformat(res)))
                    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`*Kirim atau tag gambar dengan caption ${command}*`)
                }
                break
            case prefix+'join':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}join* link grup`)
                if (!isUrl(args[1]) && !args[1].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
                let code = args[1].replace('https://chat.whatsapp.com/', '')
                xinz.acceptInvite(code)
                .then((res) => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
                break
            case prefix+'tagall':
            case prefix+'otagall':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (command.split(prefix)[1] === 'otagall' && !isPremium) return reply(mess.OnlyPrem)
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                let arr = [];
                let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
                for (let i of groupMembers){
                    txti += `=> @${i.jid.split("@")[0]}\n`
                    arr.push(i.jid)
                }
                mentions(txti, arr, true)
                break
//------------------< Enable / Disable >-------------------
            case prefix+'antibadword':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isBadword) return reply(`Udah aktif`)
                    grupbadword.push(from)
					fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
					reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else if (args[1].toLowerCase() === 'disable'){
                    anu = grupbadword.indexOf(from)
                    grupbadword.splice(anu, 1)
                    fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
                    reply('antibadword grup nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'listbadword':
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                reply(bi)
                break
            case prefix+'addbadword':
                if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
                if (args.length < 2) return reply(`masukkan kata`)
                if (isKasar(args[1].toLowerCase(), badword)) return reply(`Udah ada`)
                addBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case prefix+'delbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`masukkan kata`)
                if (!isKasar(args[1].toLowerCase(), badword)) return reply(`Ga ada`)
                delBadword(args[1].toLowerCase(), badword)
                reply(`Sukses`)
                break
            case prefix+'clearbadword':
                if (!isOwner) return reply(mess.OnlyOwner)
                if (args.length < 2) return reply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    reply('Sukses')
                }
                break
            case prefix+'mute':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot berhasil dimute di chat ini`)
                } else if (args[1].toLowerCase() === 'disable'){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply(`Bot telah diunmute di group ini`)
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'antilink':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiLink) return reply(`Udah aktif`)
                    antilink.push(from)
					fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
					reply('Antilink grup aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antilink.indexOf(from)
                    antilink.splice(anu, 1)
                    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
                    reply('Antilink grup nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'antivirtex':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiVirtex) return reply(`Udah aktif`)
                    antivirtex.push(from)
					fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
					reply('Antilink grup aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antivirtex.indexOf(from)
                    antivirtex.splice(anu, 1)
                    fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
                    reply('antivirtex grup nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'welcome':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isWelcome) return reply(`Udah aktif`)
                    welcome.push(from)
					fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
					reply('Welcome aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = welcome.indexOf(from)
                    welcome.splice(anu, 1)
                    fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
                    reply('Welcome nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'autosticker':
            case prefix+'autostiker':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAutoSticker) return reply(`Udah aktif`)
                    autosticker.push(from)
					fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
					reply('autosticker aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = autosticker.indexOf(from)
                    autosticker.splice(anu, 1)
                    fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
                    reply('autosticker nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
            break
            case prefix+'antinsfw':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isAntiNsfw) return reply(`Udah aktif`)
                    antinsfw.push(from)
					fs.writeFileSync('./database/antinsfw.json', JSON.stringify(antinsfw))
					reply('antinsfw aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = antinsfw.indexOf(from)
                    antinsfw.splice(anu, 1)
                    fs.writeFileSync('./database/antinsfw.json', JSON.stringify(antinsfw))
                    reply('antinsfw nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'nsfw':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isNsfw) return reply(`Udah aktif`)
                    nsfw.push(from)
					fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
					reply('nsfw aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = nsfw.indexOf(from)
                    nsfw.splice(anu, 1)
                    fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
                    reply('nsfw nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'leveling':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                if (args.length === 1) return reply(`Pilih enable atau disable`)
                if (args[1].toLowerCase() === 'enable'){
                    if (isLevelingOn) return reply(`Udah aktif`)
                    _leveling.push(from)
					fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
					reply('leveling aktif')
                } else if (args[1].toLowerCase() === 'disable'){
                    let anu = _leveling.indexOf(from)
                    _leveling.splice(anu, 1)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                    reply('levelinh nonaktif')
                } else {
                    reply(`Pilih enable atau disable`)
                }
                break
            case prefix+'grupsetting':
            case prefix+'groupsetting':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                    let list = []
                    let com = [`group enable`,`leveling enable`,`nsfw enable`,`antinsfw enable`,`autosticker enable`,`welcome enable`,`antivirtex enable`,`antilink enable`,`mute enable`,`antibadword enable`]
                    let comm = [`group disable`,`leveling disable`,`nsfw disable`,`antinsfw disable`,`autosticker disable`,`welcome disable`,`antivirtex disable`,`antilink disable`,`mute disable`,`antibadword disable`]
                    let listnya = [`Group open/close`,`Leveling enable/disable`,`Nsfw enable/disable`,`AntiNsfw enable/disable`,`Auto-Sticker enable/disable`,`Welcome enable/disable`,`Antivirtex enable/disable`,`Antilink enable/disable`,`Mute enable/disable`,`AntiBadword enable/disable`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Leveling`,`Nsfw`,`AntiNsfw`,`AutoSticker`,`Welcome`,`AntiVirtex`,`Antilink`,`Mute`,`AntiBadword`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\n\n*Mengaktifkan ${fiturname[startnu++]}*`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\n\n*Menonaktifkan ${fiturname[startn++]}*`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
                    }
                    listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
                    break
                  default:
                      if(!isCmd && !isGroup && !game.isSimih(sender, simi) && !fromMe && xinz.mode !== 'self' && isUser && !global.xinz.user.jid.includes(sender) && !body.slice(150) && chats !== '') {
                          fetchJson('https://api.lolhuman.xyz/api/simi?apikey=' + lolkey + '&text=' + encodeURIComponent(chats))
                          .then((res) =>{
                             textImg(res.success)
                             game.addSimih(from, 7, simi)
                          })
                         .catch((err) => {
                            sendMess(ownerNumber, `${command} Error:` + err)
                            reply(`Simi ga ngerti kak`)
                             game.addSimih(from, 7, simi)
                        })
                       }
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}