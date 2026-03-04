ServerEvents.recipes(event => {
    //Primitive Sieve
    event.shapeless('kubejs:torchflower_stem', [
        'minecraft:torchflower'
    ])
    event.shapeless('kubejs:plant_fiber', [
        'kubejs:torchflower_stem', 
        'kubejs:torchflower_stem',
        'kubejs:torchflower_stem'
    ])
    event.shaped('kubejs:plant_fiber_mesh', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'kubejs:plant_fiber'
    });
    event.shaped('kubejs:primitive_sieve', [
        'SPS',
        'PMP',
        'SPS'
    ], {
        S: '#forge:rods/wood',
        M: 'kubejs:plant_fiber_mesh',
        P: '#minecraft:planks'
    });
    //Glass Tube
    event.smelting('kubejs:hot_glass', '#forge:dusts/glass').xp(0.1).id('kubejs:smelting_glass_dust_for_tube')
    
    event.shapeless('gtceu:glass_tube', [
        'gtceu:ball_casting_mold', 
        'kubejs:hot_glass' 
    ])
    .keepIngredient('gtceu:ball_casting_mold')
    .id('kubejs:shaping_glass_tube')
})