console.info('Hello, World! (Loaded startup scripts)')

GTCEuStartupEvents.registry('gtceu:material', event => {

    //Cuanday
    event.create('cuanday')
        .ingot()
        .liquid()
        //.components('ahhhhh')
        .color(0xc14fe0).iconSet('noisy')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME)
})