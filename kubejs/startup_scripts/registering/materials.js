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
        .liquid()
        //.components('ahhhhh')
        .color(0xffffff).iconSet('quasi_stable_spacetime')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME)
})