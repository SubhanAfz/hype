const HypixelAPI = require('hypixel-api');
const Discord = require('discord.js');
const client = new Discord.Client();
const key = process.env.key;
const clientHyp = new HypixelAPI(key);
const discordReciepient = "289120054174416897"

var alreadySent = false;


client.on("ready",()=>{
    console.log("ready");
});



setInterval(function(){
    clientHyp.getStatus("uuid", "b36bf49f-8ba4-4e77-9e07-1971a534f9af").then((sess)=>{
        var online = sess.session.online
        if(online){
            if(!alreadySent){
                const user = client.users.cache.get(discordReciepient);
                user.send(user.toString() + "You are now on!eeee");
                alreadySent= true
            }

        }else{
            if(alreadySent){
                const user = client.users.cache.get(discordReciepient);
                user.send(user.toString() + "You are now offline!eee");
                alreadySent= false
            }
        }

    }).catch((err) =>{
        console.log(err);
    });
}, 2000);


client.login(process.env.token);
    

