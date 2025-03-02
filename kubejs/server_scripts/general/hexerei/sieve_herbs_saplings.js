ServerEvents.recipes(event => {

    const herbs = ['mandrake_flower', 'belladonna_flower', 'mugwort_bush', 'yellow_dock_bush', 'sage_seed'];

    for (const herb of herbs) {
        event.recipes.exnihilosequentia.sieve('minecraft:grass_block', `hexerei:${herb}`)
        .addRoll(0.04, 'iron')
        .addRoll(0.06, 'diamond')
        .addRoll(0.10, 'emerald')
        .addRoll(0.15, 'netherite')
    }

    event.recipes.exnihilosequentia.sieve('#minecraft:leaves', 'hexerei:willow_sapling')
    .addRoll(0.05, 'iron')
    .addRoll(0.10, 'diamond')
    .addRoll(0.15, 'emerald')
    .addRoll(0.20, 'netherite')
    event.recipes.exnihilosequentia.sieve('#minecraft:leaves', 'hexerei:witch_hazel_sapling')
    .addRoll(0.05, 'iron')
    .addRoll(0.10, 'diamond')
    .addRoll(0.15, 'emerald')
    .addRoll(0.20, 'netherite')
    event.recipes.exnihilosequentia.sieve('#minecraft:leaves', 'hexerei:mahogany_sapling')
    .addRoll(0.10, 'emerald')
    .addRoll(0.20, 'netherite')

})