input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Square,
    5000,
    0,
    255,
    0,
    9999,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.setBuiltInSpeakerEnabled(true)
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.setBuiltInSpeakerEnabled(false)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.pause(1000)
basic.showLeds(`
    # # # . .
    # . . # .
    # . . # .
    # . . # .
    # # # . .
    `)
basic.pause(1000)
basic.clearScreen()
