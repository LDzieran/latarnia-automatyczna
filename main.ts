input.onButtonPressed(Button.A, function () {
    i += 1
})
input.onButtonPressed(Button.B, function () {
    i = 0
})
let i = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
i = 0
basic.forever(function () {
    if (i == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (i == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (i == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (i == 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (i == 5) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (i == 6) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (i == 7) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (i == 8) {
        i = 0
    } else if (i == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
