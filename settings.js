//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05KVXJ1VVcwaTByRGs0OG5FWUNLTEx5QytDK2VVU0wxUlpTVm1IUnAxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlltWnU1c1AzVE9wY1h3aklvNFMzdk1JSENEZU5IdkV1M0N1dFdRdTUwUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTUFaYUJhS3hQbFBkbkpCYW0wakQ0MjZyOGZGSVpwMnNBUkRXMDBiN0VRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvNDcyOHlpckY2QlRtWDNsWHFEM1RhdkppY2JQYTd1TmdJeEdIR0dBaG1NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PdUJMWWpMb0ZEZnVlMmkyVERnbDdmVC9NMndjaU5sWUljSHZFdnc2SG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwwZkNjY2I3bU85RG02QnBQR0hpYWxzTHQ1bktSNjM0ZDEvcXRCdXBZeDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNSYjJoenJ2OXh0QXBkTlBkWnBoc2dWbWZsVFdYUVdHUEcyTGRxM1VtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUy9pTWJVRGNWMHF3cnFFVmd3UXJKRlI2M2V2MVBMeW1HWFl6b0g3TDl5Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkwrZGcvYU1PR1JzamFPVjNmMVU2Ulk5VUEyTUhpTkwwcXBWakFiMU5STS9BZWVPTFFKcE43SXpTdXh2ZG80N0tmR3dRWGdNaDh6REQxbS9vVUUxUUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJrbk82cmwwb0djK2l6bk81VjFoMm9lUFNjZ1ZaUlc4a1NlNFQxbXdwK1AwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrQmhXdmxZZlI2cXVRRmgzOTZTOTBRIiwicGhvbmVJZCI6IjNhNzg0MzdlLTFhYjktNDQ4Yi1iMmU1LWQyYzlmYjZhOWViNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVOGJlM2hQbVZpY0p4TmY4UDhGdllrODZaRzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnRMTmVaU0hJUGNXRzhSREtLNjlnb3NUMFJzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlaNDRCWlFaIiwibWUiOnsiaWQiOiIyNTQ3NDI5MDY4MDk6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHltdHhnUW0vYU13UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicURESFFBa3hDNVdkUHNDTDZuZ0NkRFlWNEZrYklQZDVyUWROLzJETmlRaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ3l6YXd1Z2c2NVhxOTdrcDZOdm9SR0J0RmoyVkJKQ0RqTjltL0lFM0UxSldrcC9MYXo3ZmJXR1RkbytBaHBsU1RkU3hITzBWK1hEVHV3d1hrWkl2Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlYwR0IwWEZ5RTcreFpJNW5Vb0JBdlAyQUdHYVU3OHpLQjZMTTNaZGJLdmd5OURPL3JBdi9JclY4UEtrMDduZVUrSU1FbkROSjExd1kwWWQvVkZmMEFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzQyOTA2ODA5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWd3eDBBSk1RdVZuVDdBaStwNEFuUTJGZUJaR3lEM2VhMEhUZjlnellrSiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NzEzOTM2OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFES2QifQ=='; 


const session = sessionId.replace('NEIMAN-TECH-SESSION-ID;;;=>.','');
const prefix = process.env.PREFIX || '%';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || '𝐍ᴇɪᴍᴀɴ 𝐌ᴀʀᴄᴜs';
const packname = process.env.PACKNAME || 'Marcus';
const dev = process.env.OWNER_NUMBER || '254725693306';
const fridayActive = process.env.FRIDAY || "true"; //you can always deactivate by typing (friday off)
const DevMarcus = dev.split(",");
const botname = process.env.BOTNAME || 'Sᴛᴀʀᴋ-ᴍᴅ';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'typing';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://media-database-mcjv.onrender.com/media/images/a98e77ee75af1bf5d5d49fc6e840f123.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vb9EZIl60eBdl8fIY10p';
const reactemoji = process.env.EMOJI || '⚒️';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'false';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || '❌ This Residence Cannot Pick Your Call At This Time Please Leave A Message 😌';
const autobio = process.env.AUTOBIO || 'true';

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: true,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: true,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl, 
  antibad: groupControl, 
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevMarcus,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete,
  fridayActive
};
