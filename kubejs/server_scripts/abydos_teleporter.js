PlayerEvents.loggedIn(event => {
    const player = event.player;

    if (!player.persistentData.first_join_abydos) {
        player.persistentData.first_join_abydos = true;

        event.server.scheduleInTicks(60, () => {
    
    player.health = 6;

    const shipX = -5; 
    const shipY = 98;
    const shipZ = -5;

    event.server.runCommandSilent(`forceload add ${shipX} ${shipZ}`);

    event.server.runCommandSilent(`execute in sgjourney:abydos run tp "${player.username}" 0 100 0`);
    event.server.runCommandSilent(`execute in sgjourney:abydos run place template abydos:broken_spaceship ${shipX} ${shipY} ${shipZ} none none`);

    
    event.server.runCommandSilent(`execute in sgjourney:abydos run setworldspawn 0 100 0`);
    event.server.runCommandSilent(`forceload remove ${shipX} ${shipZ}`);

    let suit = Item.of('ad_astra:netherite_space_suit', '{BotariumData:{StoredFluids:[{Amount:10000L,Fluid:"ad_astra:oxygen"}]}}');
    
    player.setChestArmorItem(suit);
    player.setHeadArmorItem('ad_astra:netherite_space_helmet');
    player.setLegsArmorItem('ad_astra:netherite_space_pants');
    player.setFeetArmorItem('ad_astra:netherite_space_boots');

    player.tell("§bCondition: Critical! Get to the medical center immediately!");
    player.tell("§eLife support system activated. Oxygen supply: 100%.");
});
    }
});