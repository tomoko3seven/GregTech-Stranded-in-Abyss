// priority: 10
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('spacetime')
    .protons(1000)
    .neutrons(6767)
    .halfLifeSeconds(-1)
    .decayTo(null)
    .symbol('SpT')
})