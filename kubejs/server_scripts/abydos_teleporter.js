PlayerEvents.loggedIn(event => {
    const { player, server } = event;

    if (!player.persistentData.first_join_abydos) {
        player.persistentData.first_join_abydos = true;

        server.scheduleInTicks(60, () => {
            const dim = 'sgjourney:abydos';
            const shipX = -22; 
            const shipY = 75;
            const shipZ = -22;

            server.runCommandSilent(`execute in ${dim} run tp "${player.username}" 16 83 10`);
            server.runCommandSilent(`execute in ${dim} run setworldspawn 16 83 10`);
            
            player.health = 6;
            let suit = Item.of('ad_astra:netherite_space_suit', '{BotariumData:{StoredFluids:[{Amount:10000L,Fluid:"ad_astra:oxygen"}]}}');
            player.setChestArmorItem(suit);
            player.setHeadArmorItem('ad_astra:netherite_space_helmet');
            player.setLegsArmorItem('ad_astra:netherite_space_pants');
            player.setFeetArmorItem('ad_astra:netherite_space_boots');

            player.tell("§bCondition: Critical! Get to the medical center immediately!");

            server.scheduleInTicks(20, () => {
                server.runCommandSilent(`execute in ${dim} run forceload add ${shipX} ${shipZ}`);
                
                server.runCommandSilent(`execute in ${dim} run place template abydos:broken_ship ${shipX} ${shipY} ${shipZ} none none`);
                
                server.runCommandSilent(`execute in ${dim} run forceload remove ${shipX} ${shipZ}`);
                player.tell("§eLife support system activated. Oxygen supply: 100%.");
                
                server.runCommandSilent(`execute in ${dim} at "${player.username}" run playsound minecraft:entity.iron_golem.damage ambient @a ~ ~ ~ 1 0.5`);
            });
        });
    }
});