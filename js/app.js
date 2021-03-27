import dialogSystem from './modules/DialogSystem.js'


let dialogConent = [
    ['Anciano', '4 Que bueno ver un guerrero en nuestras tierras'],
    ['Anciano', '4 Necesitamos alguien que nos defienda'],
    ['Anciano', '3 Que bueno ver un guerrero en nuestras tierras'],
    ['Anciano', '3 Necesitamos alguien que nos defienda'],
    ['Anciano', '2 Que bueno ver un guerrero en nuestras tierras'],
    ['Anciano', '2 Necesitamos alguien que nos defienda'],
    ['Anciano', '1 Que bueno ver un guerrero en nuestras tierras'],
    ['Anciano', '1 Necesitamos alguien que nos defienda'],
]

dialogSystem.loadContent(dialogConent)

setTimeout(() => {
    dialogSystem.open()
}, 2 * 1000);

