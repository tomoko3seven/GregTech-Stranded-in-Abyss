StartupEvents.registry('block', event => {
    event.create('simple_mesh')
            .displayName("Simple Mesh")
            .textureAll("kubejs:block/mesh_block")
            .woodSoundType()
            .hardness(0.5)
            .resistance(0.5)
            .requiresTool('axe', 0)
            .transparent()
            .defaultTranslucent()

});