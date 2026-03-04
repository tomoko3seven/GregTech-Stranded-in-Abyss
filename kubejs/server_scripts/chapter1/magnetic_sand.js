BlockEvents.rightClicked(event => {
    const { item, block, player, level, hand } = event;

    if (hand != 'MAIN_HAND') return;

    //Magnetic Sand interaction

    if (item.id == 'gtceu:magnetic_iron_rod' && block.id == 'minecraft:sand') {
        
        player.swing();

        let roll = Math.random();

        if (roll < 0.15) {
            let drops = [
                'gtceu:iron_dust',
                'gtceu:magnetite_dust',
                'gtceu:pyrite_dust',
                'gtceu:magnetite_dust'
            ];

            let randomDrop = drops[Math.floor(Math.random() * drops.length)];

            let itemEntity = block.createEntity('item');
            itemEntity.item = randomDrop;
            itemEntity.y += 1.1; 
            itemEntity.x += 0.5; 
            itemEntity.z += 0.5; 
            itemEntity.spawn();

        } else if (roll < 0.40) { 
            level.spawnParticles('minecraft:white_ash', true, block.x + 0.5, block.y + 1.1, block.z + 0.5, 0.1, 0.1, 0.1, 3, 0.02);
        }

        event.success();
    }
    //Sifting Sand interaction
    if (item.id == 'kubejs:primitive_sieve' && block.id == 'minecraft:sand') {
        
        player.swing();

        let roll = Math.random();

        if (roll < 0.15) {
            let drops = [
                'gtceu:copper_dust',
                'gtceu:chalcopyrite_dust',
                'gtceu:sulfur_dust',
                'gtceu:chalcocite_dust'
            ];

            let randomDrop = drops[Math.floor(Math.random() * drops.length)];

            let itemEntity = block.createEntity('item');
            itemEntity.item = randomDrop;
            itemEntity.y += 1.1; 
            itemEntity.x += 0.5; 
            itemEntity.z += 0.5; 
            itemEntity.spawn();

        } else if (roll < 0.40) { 
            level.spawnParticles('minecraft:white_ash', true, block.x + 0.5, block.y + 1.1, block.z + 0.5, 0.1, 0.1, 0.1, 3, 0.02);
        }

        event.success();
    }
});