// priority: 0
ServerEvents.recipes(event => {
    function fullReplace(replaced, replacer) {
        event.replaceInput(
        { input: replaced },
        replaced, replacer)

        event.replaceOutput(
        { output: replaced },
        replaced, replacer)
     }

     fullReplace('sgjourney:naquadah_alloy', 'gtceu:naquadah_alloy_ingot')
})