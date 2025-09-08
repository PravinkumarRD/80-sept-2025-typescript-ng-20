var Menu;
(function (Menu) {
    Menu[Menu["Chinese"] = 1] = "Chinese";
    Menu[Menu["Italian"] = 2] = "Italian";
    Menu[Menu["Mexican"] = 3] = "Mexican";
    Menu[Menu["Indian"] = 4] = "Indian";
    Menu[Menu["Japanese"] = 5] = "Japanese";
})(Menu || (Menu = {}));
const customerChoice = Menu.Mexican;
switch (+customerChoice) {
    case Menu.Chinese:
        console.log("You selected Chinese cuisine.");
        break;
    case Menu.Italian:
        console.log("You selected Italian cuisine.");
        break;
    case Menu.Indian:
        console.log("You selected Indian cuisine.");
        break;
    case Menu.Mexican:
        console.log("You selected Mexican cuisine.");
        break;
    case Menu.Japanese:
        console.log("You selected Japanese cuisine.");
        break;
    default:
        console.log("Invalid selection.");
        break;
}
//# sourceMappingURL=named-constants.js.map