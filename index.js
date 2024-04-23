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

document.addEventListener('keyup', function(event){
    if (event.key === 'A' || event.key === 'a') {
        printMenu("AndroidMenu");
    } else if (event.key === 'W' || event.key === 'w') {
        printMenu("webMenu");
    } else if (event.key === 'I' || event.key === 'i') {
        printMenu("ItchMenu");
    }
  });

  function printMenu(menuType) {
    let i = 1;
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