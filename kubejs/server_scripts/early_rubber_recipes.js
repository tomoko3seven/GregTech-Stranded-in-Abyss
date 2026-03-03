ServerEvents.recipes(event => {
    event.remove(
        {input: 'gtceu:sticky_resin', type: 'gtceu:extractor'}
    )
    const cable_materials = ['tin', 'red_alloy']
    const cable_sizes = ['single', 'double', 'quadruple', 'octal', 'hex']
    const sizeToRubberMap = new Map([
        ['single', 2],
        ['double', 4],
        ['quadruple', 6],
        ['octal', 7],
        ['hex', 8]])


    cable_materials.forEach(mat => {
        cable_sizes.forEach(size => {
            event.shapeless(
                `gtceu:${mat}_${size}_cable`,
                [`gtceu:${mat}_${size}_wire`, `${sizeToRubberMap.get(size)}x gtceu:makeshift_rubber_plate`]
            )
        })
    })

    event.shaped('gtceu:makeshift_rubber_plate', [
        'H ',
        'RR',
        'RR'
    ], {
        H: '#forge:tools/hammers',
        R: 'gtceu:sticky_resin'
    })

    event.shaped('gtceu:coagulation_tank', [
        'RGR',
        'MHM',
        'CPC'
    ], {
        R: 'gtceu:steel_rotor',
        G: 'minecraft:glass',
        M: 'gtceu:lv_electric_motor',
        H: 'gtceu:lv_machine_hull',
        C: '#gtceu:circuits/lv',
        P: 'gtceu:steel_plate'
    })

    event.recipes.gtceu.extractor('latex')
    .itemInputs('gtceu:sticky_resin')
    .outputFluids('gtceu:latex 250')
    .duration(5*20)
    .EUt(12)

    event.recipes.gtceu.mixer('preserved_latex')
    .inputFluids('gtceu:latex 750', 'gtceu:ammonia 7')
    .outputFluids('gtceu:preserved_latex 757')
    .duration(7*20)
    .EUt(30)

    event.recipes.gtceu.coagulation_tank('raw_rubber_pulp_coag')
    .notConsumable('gtceu:iron_rod')
    .inputFluids('gtceu:preserved_latex 1000', 'gtceu:formic_acid 75', 'minecraft:water 100')
    .itemOutputs('7x gtceu:raw_rubber_dust')
    .duration(24*20)
    .EUt(30)

    event.recipes.gtceu.mixer('rubber_compound')
    .itemInputs('2x gtceu:raw_rubber_dust', 'gtceu:sulfur_dust')
    .itemOutputs('3x gtceu:rubber_compound_dust')
    .duration(8*20)
    .EUt(24)

    event.recipes.gtceu.autoclave('vulcanization')
    .itemInputs('4x gtceu:rubber_compound_dust')
    .itemOutputs('3x gtceu:rubber_dust')
    .duration(17*20)
    .EUt(32)
})