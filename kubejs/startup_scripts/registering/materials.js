GTCEuStartupEvents.registry('gtceu:material', event => {

    //Cuanday
    event.create('cuanday')
        .ingot()
        .liquid()
        //.components('ahhhhh')
        .color(0xc14fe0).iconSet('noisy')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME)

    //Quasi-stable Spacetime
    event.create('quasi_stable_spacetime')
        .ingot()
        .liquid(65012937)
        .components('gtceu:spacetime')
        .color(0xffffff).iconSet('quasi_stable_spacetime')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME)

    event.create('logic_derived_paradoxium')
        .ingot()
        .liquid(0)
        .formula('§kl§rLoPx§kl§r')
        .color(0xffffff)

    event.create('information_derived_paradoxium')
        .ingot()
        .liquid(0)
        .formula('§kl§rIfPx§kl§r')
        .color(0xffffff)

    event.create('reality_derived_paradoxium')
        .ingot()
        .liquid(0)
        .formula('§kl§rRlPx§kl§r')
        .color(0xffffff)

    event.create('time_derived_paradoxium')
        .ingot()
        .liquid(0)
        .formula('§kl§rTmPx§kl§r')
        .color(0xffffff)

    event.create('antimatter')
        .ingot()
        .liquid(9182762)
        .formula('§kl§rAnMa§kl§r')
        .color(0xffffff)

    event.create('dark_matter')
        .ingot()
        .liquid(9182762)
        .formula('§kl§rDkMa§kl§r')
        .color(0xffffff)
    
    event.create('exotic_matter')
        .ingot()
        .liquid(9182762)
        .formula('§kl§rExMa§kl§r')
        .color(0xffffff)

    event.create('strange_matter')
        .ingot()
        .liquid(9182762)
        .formula('§kl§rStMa§kl§r')
        .color(0xffffff)
})