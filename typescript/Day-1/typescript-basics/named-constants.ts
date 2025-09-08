enum Menu {
    Chinese = 1,
    Italian,
    Mexican,
    Indian,
    Japanese
}

const customerChoice: Menu = Menu.Mexican;

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