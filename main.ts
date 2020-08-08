controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log("Button A pressed")
    mySprite.x += 10
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f f f . . . . . . . . . . 
    . . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
    . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
    . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
    . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
    . . . . 7 . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
    . . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
    . . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
    . . . 7 . . f d d d 1 1 1 1 d d d f f . . . . . 
    . . . 7 7 . f b d b f d d f b d b f c f . . . . 
    . . . 7 7 7 f c d c f 1 1 f c d c f b f . . . . 
    . . . . 7 7 f f f b d b 1 b d f f c f . . . . . 
    . . . . f c b 1 b c f f f f f f . . . . . . . . 
    . . . . f 1 c 1 c 1 f f f f f f . . . . . . . . 
    . . . . f d f d f d f f f f f . . . . . . . . . 
    . . . . . f . f . f . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite)
