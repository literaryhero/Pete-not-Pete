let openMenu = 0;
const AndroidMenu = [
    "1)  Play Store Page . . . . . . . . . . . . . . . . . . . .",
    "2)  PlusPlus Game . . . . . . . . . . . . . . . . . . . . .",
    "3)  Rock Scissor Paper Game . . . . . . . . . . . . . . . .",
    "4)  Bumbaroo's Puzzle Game. . . . . . . . . . . . . . . . .",
    "5)  Numble Jumber Game. . . . . . . . . . . . . . . . . . .",
    "6)  Gramma' Ma. . . . . . . . . . . . . . . . . . . . . . .",
    "7)  One Button Megaphone. . . . . . . . . . . . . . . . . .",
    "8)  Teacher's Soundboard. . . . . . . . . . . . . . . . . .",
    "9)  Teacher's Soundboard Premium. . . . . . . . . . . . . ."
];

const webMenu = [
    "1)  Snail Facts!. . . . . . . . . . . . . . . . . . . . . .",
    "2)  Story Maze Creator. . . . . . . . . . . . . . . . . . .",
    "3)  Classroom Spinner . . . . . . . . . . . . . . . . . . .",
    "4)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "5)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "6)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "7)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "8)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "9)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
];

const ItchMenu = [
    "1)  Itch.io Storefront. . . . . . . . . . . . . . . . . . .",
    "2)  Rock Scissor Paper Game . . . . . . . . . . . . . . . .",
    "3)  Hannah's Game. .  . . . . . . . . . . . . . . . . . . .",
    "4)  Numble Jumber . . . . . . . . . . . . . . . . . . . . .",
    "5)  PlusPlus. . . . . . . . . . . . . . . . . . . . . . . .",
    "6)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "7)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "8)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "9)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
];

const aboutMenu = [
    "1)  Who am I? . . . . . . . . . . . . . . . . . . . . . . .",
    "2)  Poetry - Down in the Dirt . . . . . . . . . . . . . . .",
    "3)  Poetry - Visual Verse . . . . . . . . . . . . . . . . .",
    "4)  Composition Lessons . . . . . . . . . . . . . . . . . .",
    "5)  Blog. . . . . . . . . . . . . . . . . . . . . . . . . .",
    "6)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "7)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "8)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
    "9)  . . . . . . . . . . . . . . . . . . . . . . . . . . . .",
];

document.addEventListener('keyup', function(event){
    if (event.key === 'A' || event.key === 'a') {
        printMenu("AndroidMenu", 1);
    } else if (event.key === 'W' || event.key === 'w') {
        printMenu("webMenu", 2);
    } else if (event.key === 'I' || event.key === 'i') {
        printMenu("ItchMenu", 3);
    } else if (event.key === 'B' || event.key === 'b') {
        printMenu("aboutMenu", 4);
    } else if (openMenu != 0) {
        secondMenu(event.key);
    }
  });

  function secondMenu(choice) {
    if (openMenu === 1) {
        switch(choice) {
            case '1': 
                window.location.href = "https://play.google.com/store/apps/dev?id=6113172479447825207";
                break;
            case '2':
                window.location.href = "https://play.google.com/store/apps/details?id=com.petenotpete.plusplus";
                break;
            case '3': 
                window.location.href = "https://play.google.com/store/apps/details?id=com.petenotpete.rockscissorspaper";
                break;
            case '4':
                window.location.href = "https://play.google.com/store/apps/details?id=com.petenotpete.clearsynthesis";
                break;
            case '5': 
                window.location.href = "https://play.google.com/store/apps/details?id=com.petenotpete.numblejumber.app";
                break;
            case '6':
                window.location.href = "https://play.google.com/store/apps/details?id=com.petenotpete.grammama";
                break;
            case '7': 
                window.location.href = "https://play.google.com/store/apps/details?id=com.petenotpete.myapplication";
                break;
            case '8':
                window.location.href = "https://play.google.com/store/apps/details?id=com.petenotpete.teacherssoundboard";
                break;
            case '9': 
                window.location.href = "https://play.google.com/store/apps/details?id=com.petenotpete.teacherssoundboardpremium";
                break;
        }
    } else if (openMenu === 2) {
        switch(choice) {
            case '1': 
                window.location.href = "https://literaryhero.github.io/snailfacts";
                break;
            case '2':
                window.location.href = "./storymaze/";
                break;
            case '3': 
                window.location.href = "./spinner/";
                break;
            case '4':

                break;
            case '5': 
            
                break;
            case '6':

                break;
            case '7': 
            
                break;
            case '8':

                break;
            case '9': 
            
                break;
        }
    } else if (openMenu === 3) {
        switch(choice) {
            case '1': 
                window.location.href = "https://petenotpete.itch.io/";
                break;
            case '2':
                window.location.href = "https://petenotpete.itch.io/rsp";
                break;
            case '3': 
                window.location.href = "https://petenotpete.itch.io/hannahsgame";
                break;
            case '4':
                window.location.href = "https://petenotpete.itch.io/numble-jumber";
                break;
            case '5': 
                window.location.href = "https://petenotpete.itch.io/plusplus";
                break;
            case '6':

                break;
            case '7': 
            
                break;
            case '8':

                break;
            case '9': 
            
                break;
        }
    } else if (openMenu === 4) {
        switch(choice) {
            case '1': 
                window.location.href = "https://www.youtube.com/watch?v=iXp4enP-jQY";
                break;
            case '2':
                window.location.href = "https://scars.tv/cgi-bin/writers.pl?ANDREWLASHER";
                break;
            case '3': 
                window.location.href = "https://visualverse.org/writers/andrew-lasher/";
                break;
            case '4':
                window.location.href = "https://www.youtube.com/playlist?list=PLB3XbxdV2MuJKiziyoVZ1aoESSF5xxQpk";
                break;
            case '5': 
                window.location.href = "https://petenotpete.blogspot.com/";
            break;
            case '6':

            break;
            case '7': 
            
            break;
            case '8':

            break;
            case '9': 
            
            break;
        }
    }
  }

  function printMenu(menuType, menuNo) {
    let i = 1;
    openMenu = menuNo;
    const menuArray = Function("return " + menuType)();
    printLines(("line" + i), menuArray[(i-1)], 10);
    let lineInterval = setInterval(function(){
        i++;
        printLines(("line" + i), menuArray[(i-1)], 10);
        if (i > (menuArray.length - 1)){
            clearInterval(lineInterval);
        }
    }, 100);
  }

  function printLines(destination, message, speed) {
    let i = 1;
    let newString = "1) . . . . . . . . . . . . . . . . . . . . . . . . . . . .";
    let replacement = "";
    replacement += message.charAt(0);
    let finishedString = replacement + newString.slice(0);
    document.getElementById(destination).innerHTML = newString;
    let interval = setInterval(function(){
        replacement += message.charAt(i);
        finishedString = replacement + newString.slice(i);
        document.getElementById(destination).innerHTML = finishedString;
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}