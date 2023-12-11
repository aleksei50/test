basic.setLedColor(0x00ff00)
music.playMelody("C5 B A B A B A G ", 450)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . # # # .
            . # . # .
            `)
        basic.showString("mini peker", 200)
    }
})
