

// document.getElementById("button1").addEventListener("click", function(){
//     document.querySelector("#title").innerHTML = "Ice Ice Baby\nSexyBack (feat. Timbaland)\n\nAnaconda\nHot In Herre\nTemperature\nOne, Two Step (feat. Missy Elliott)\nSmack That\nBaby Got Back\nAnother One Bites The Dust - Remastered 2011\nHollaback Girl\nBillie Jean\nLow (feat. T-Pain)\n\nFancy\n\nFamily Affair\n\nLe Freak - 2018 Remaster\n\nLet Me Blow Ya Mind\n\nIn Da Club\n\nFunkytown\n\nYeah! (feat. Lil Jon & Ludacris)\n\nHotline Bling\n\nI Can't Go for That (No Can Do)\n\n  Here Comes the Hotstepper - Heartical Mix\n\nDrop It Like It's Hot\n\nFaith - Remastered\n\nWork It\n\nI'm an Albatraoz\n\nAsa Branca\n\nUpside Down\n\nWalking The Floor Over You\n\nThe Way You Move (feat. Sleepy Brown)\n";
                       
//     document.querySelector("#artist").innerHTML =  " Vanilla Ice\n\nJustin Timberlake\n\nNicki Minaj\n\nNelly\n\nSean Paul\n\nCiara\n\nAkon\n\nSir Mix-A-Lot\n\nQueen\n\nGwen Stefani\n\nMichael Jackson\n\nFlo Rida\n\nIggy Azalea\n\nMary J. Blige\n\nCHIC\n\nEve\n\n50 Cent\n\nVarious Artists\n\nUsher\n\nDrake\n\nDaryl Hall & John Oates\n\nIni Kamoze\n\nSnoop Dogg\n\nGeorge Michael\n\nMissy Elliott\n\nAronChupa\n\nVarious Artists\n\nDiana Ross\n\nVarious Artists\n\nOutKast\n</br>" ;
// })

 document.getElementById("button1").addEventListener("click", function(){
//     document.querySelector("#title").innerHTML = "
//     "
document.getElementById('playlist').innerHTML = "YOUR PLAYLIST: DANCEABILITY";
let myElement = document.getElementById('title');
let myString = "Ice Ice Baby\n\nSexyBack (feat. Timbaland)\n\nAnaconda\n\nHot In Herre\n\nTemperature\n\nOne, Two Step (feat. Missy Elliott)\n\nSmack That\n\nBaby Got Back\n\nAnother One Bites The Dust\n\nHollaback Girl\n\nBillie Jean\n\nLow (feat. T-Pain)\n\nFancy\n\nFamily Affair\n\nLe Freak - 2018 Remaster\n\nLet Me Blow Ya Mind\n\nIn Da Club\n\nFunkytown\n\nYeah! (feat. Lil Jon & Ludacris)\n\nHotline Bling\n\nI Can't Go for That (No Can Do)\n\n  Here Comes the Hotstepper\n\nDrop It Like It's Hot\n\nFaith - Remastered\n\nWork It\n\nI'm an Albatraoz\n\nAsa Branca\n\nUpside Down\n\nWalking The Floor Over You\n\nThe Way You Move (feat. Sleepy Brown)\n";

myElement.innerHTML = myString.replace(/\n/g, '<br><br>');

let element = document.getElementById('artist');
let string = "Vanilla Ice\n\n Justin Timberlake\n\n Nicki Minaj\n\n Nelly\n\n  Sean Paul\n\n  Ciara\n\n  Akon\n\nSir Mix-A-Lot\n\n    Queen\n\nGwen Stefani\n\nMichael Jackson\n\n    Flo Rida\n\nIggy Azalea\n\n  Mary J. Blige\n\n  CHIC\n\n Eve\n\n 50 Cent\n\nVarious Artists\n\n               Usher\n\n                   Drake\n\n Daryl Hall & John Oates\n\nIni Kamoze\n \nSnoop Dogg\n\nGeorge Michael\n \n      Missy Elliott\n \n AronChupa\n \nVarious Artists\n\nDiana Ross\n \n        Various Artists\n\nOutKast"
element.innerHTML = string.replace(/\n/g, '<br><br>');

 })


 document.getElementById("button2").addEventListener("click", function(){
    document.getElementById('playlist').innerHTML = "YOUR PLAYLIST: SLOWER TEMPO";
    let myElement = document.getElementById('title');
    let myString = "My Heart Has A Mind Of Its Own\n\nBody And Soul\n\nHello\n\nSomebody's Thinking Of You Tonight\n\nImage Of A Girl\n\nWithout You\n\nBump n' Grind\n\nMother's Children Have a Hard Time\n\nBlack Snake Moan\n\nI Will Always Love You\n\nDon't\n\nLes feuilles mortes\n\nYou Belong To Me\n\nHow Can You Mend A Broken Heart\n\nSee See Rider Blues - Remastered\n\nSt Louis Blues\n\nWhen The Moon Comes Over The Mountain\n\nIf\n\nWhen You Wish Upon A Star\n\nStardust - Remastered 2002\n\nKoko\n\nLittle Star\n\nBei Mir Bist Du Schoen\n\nSixteen Reasons\n\nWanted (with Henri René & His Orchestra and Ch...\n\nIt's Too Soon to Know\n\nWorried Life Blues\n\nAll Shook Up\n\nForever\n\nSincerely\n"
    myElement.innerHTML = myString.replace(/\n/g, '<br><br>');
    


    let element = document.getElementById('artist');
    let string = "Connie Francis\n\nVarious Artists\n\nLionel Richie\n\nVarious Artists\n\nVarious Artists\n\nHarry Nilsson\n\nR. Kelly\n\nBlind Willie Johnson\n\nBlind Lemon Jefferson\n\nWhitney Houston\n\nElvis Presley\n\nYves Montand\n\nJo Stafford\n\nBee Gees\n\nMa Rainey\n\nBessie Smith\n\nVarious Artists\n\nPerry Como\n\nVarious Artists\n\nHoagy Carmichael\n\nCharlie Parker\n\nThe Elegants\n\nVarious Artists\n\nConnie Stevens\n\nPerry Como\n\nVarious Artists\n\nVarious Artists\n\nElvis Presley\n\nVarious Artists\n\nThe McGuire Sisters\n"
    element.innerHTML = string.replace(/\n/g, '<br><br>');
    
     })