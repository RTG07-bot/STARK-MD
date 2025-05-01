//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0F3NldiY29JR2JxYXdnVVg5VkFXZEVsVFpnMG5UQWc5NnVlZExESGwyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWRRWXlqNFhUQ3ZZRzJraHFSOXA1cjB3bUxxL0pIS2g5WHU5bFo1blNsdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TzNhN0JLeXAwS1pOajhXUjl2VXVmMmxnOVRaZFEyQlQzZ2ZhL0p3YzBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYSjZsTmZ4VjR1U3BuZjUvUmxnTUhQTFBUR1pXZ3FkeDdGVHhFTDVGelNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDZkVRaSs1VThwUTdGWlF0ZGhheDVyR1ZRRDk1VmtyUC9UYndQMjRqR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt6aGdmcDE0alNTZVJlQ3V2b0dkV1FEYTVZUHIrWnFxZTNNb05jejVxVGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pnUFhQTnNyOTg4MjdmMXpCVUtwOUUvYzhGb21WalpnS3Y5bFprMWlVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1hSNU1ySFcwTmtsaUk2VzBBKzdaaC9KWFFMZ0JseHNrWEVienhSaVFHWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVEYTQzSE1JQjAvcm9CWmY3S3RtNkVuNEdpdHQzMlVhdDhJQktaczcxeXJ4L3VvMXhQRzN5WGtTSVVmaXdkRFk0U3Y2RUZJaE4rbnEra20zSklxSmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJ1T2p4NFJSeDdvcThDM1lnY3p0cGtOSE9vUlB4d1MyN3dDUFZBb0lYZ2RZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1UWN2QjlTSVRfU2oxQnZ0WWdvQ3JRIiwicGhvbmVJZCI6ImRhZDIwNWQ1LWNlM2YtNDMwYS04MzMwLTk0OGZkYTFlM2Y1YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUUtVNXRrSkVjVFc2TjIwTENMSHJWZUlIdUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFhENDZIWVA5bzBsRHJFTGZuZStnVllKTlNRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJDNVY3VDc2IiwibWUiOnsiaWQiOiIyNTQ3MjU2OTMzMDY6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTmVpbWFuIE1hcmN1cyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEx4NGFNR0VMWGN6TUFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV2NIWHowbEYyR0lXR3g4T2EzZE9jNFpiKzExcHE2VFlQcDBiK282ZFdrZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQWgrTEtuajUybWg0Q2k2b1ZkajVwN2xocmtSYnhFS2k3RmhSbmhQVlJ2QjZMdjM0bUZFM2czWGl6M04zK2FESFM5Yk92K2dhK0dlY1d5MjFvT1NqQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjhaYWNVRzFSU2tTRGs3U1VUZUxxUHgyN1IvbVM3UHd3bXFQNFFCN0NtTUs4RlQxTjYwc1RNQ2hyR0ovenZiUzJ6ekZLQzRkT2xVMlVLVnZ1U3dLS2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzI1NjkzMzA2OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZuQjE4OUpSZGhpRmhzZkRtdDNUbk9HVy90ZGFhdWsyRDZkRy9xT25WcEkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDYwODc0OTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzE1In0='; 


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
const autolike = process.env.AUTOLIKE_STATUS || 'true';
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
