ServerEvents.recipes(event => {
    event.recipes.gtceu.arc_furnace("copper_ingot")
.itemInputs("ad_astra:solar_panel")
.itemOutputs("7x minecraft:copper_ingot")
.itemOutputs("4x minecraft:redstone")
.itemOutputs("gtceu:steel_dust")

.duration(60)
event.recipes.gtceu.arc_furnace("solar_recycle")
.itemInputs("ad_astra:desh_cable")
.itemOutputs("6x minecraft:copper_ingot")
.itemOutputs("2x minecraft:redstone")

.duration(60)
event.recipes.gtceu.arc_furnace("cable_recycle")
.itemInputs("gtceu:steel_frame")
.itemOutputs("4x gtceu:steel_dust")

.duration(40)
})