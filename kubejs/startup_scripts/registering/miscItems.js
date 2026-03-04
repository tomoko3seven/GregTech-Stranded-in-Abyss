console.info('Hello, World! (Loaded startup scripts)')

//Decent electronc circuit components
StartupEvents.registry('item', event => {
    event.create('redstone_seed')
       .displayName("Redstone Seed")
       .texture("kubejs:item/redstone_seed")

    event.create('redstone_crystal')
       .displayName("Redstone Crystal")
       .texture("kubejs:item/redstone_crystal")
})