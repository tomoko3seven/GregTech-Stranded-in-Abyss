PlayerEvents.loggedIn(event => {
    const player = event.player;

    if (!player.persistentData.first_join_abydos) {
        player.persistentData.first_join_abydos = true;

        event.server.scheduleInTicks(60, () => {
            
            player.health = 6;

            //forge dimensions
            event.server.runCommandSilent(`execute in sgjourney:abydos run tp "${player.username}" 0 100 0`);
            
            event.server.runCommandSilent(`effect give "${player.username}" minecraft:resistance 15 4 true`);
            event.server.runCommandSilent(`effect give "${player.username}" minecraft:slow_falling 15 0 true`);
            
            player.tell("§bCondition: Critical! Get to the medical center immediately!");
        });
    }
});