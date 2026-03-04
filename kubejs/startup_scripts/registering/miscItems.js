console.info('Hello, GTSiA! (Loaded startup scripts)')

//Decent electronc circuit components
StartupEvents.registry('item', event => {
    event.create('torchflower_stem');
    event.create('plant_fiber');
    event.create('plant_fiber_mesh');
    event.create('primitive_sieve');

    event.create('hot_glass');

    event.create('redstone_seed')
       .displayName("Redstone Seed")
       .texture("kubejs:item/redstone_seed")

    event.create('redstone_crystal')
       .displayName("Redstone Crystal")
       .texture("kubejs:item/redstone_crystal")
})