let mySprite = sprites.create(img`
    . . . . . . . f f f f f f f . . . c c f f f . . . . . . . . . . . . . . 
    . . . . . . f b b b b b b b f f c b b b b f . . . . . . . . . . . . . . 
    . . . . . . f b b 1 1 1 b b b b b f f b f . . . . . . . . . . . . . . . 
    . . . . . . f b 1 1 1 1 1 f f b b b b f f . . . . . . . . . . . . . . . 
    . . . . . . f 1 c c c c 1 f f b b b b b c f f . . . . . . . . . . . . . 
    . . . . . . f f c 1 c 1 c 1 b b c b c b c c c f . . . . . . . . . . . . 
    . . . . . . . f c c 3 3 3 1 b b b c b c b c c c f . . c c c c c . . . . 
    . . . . . . . . c 3 3 3 c 1 b b b c b c b c c c c f c d d b b c . . . . 
    . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c d d b c c . . . . . 
    . . . . . . . . c 3 3 3 c 1 1 b b b b b c c c c c c b b c c . . . . . . 
    . . . . . . . c c 3 3 1 c 1 1 b b b b c c c c c c f b c c f . . . . . . 
    . . . . . . . c c 1 3 c 1 1 c b b b c c c c c b b c f c c f . . . . . . 
    . . . . . . . c 1 1 1 1 1 1 c b b b f d d d d d c . f b b c f . . . . . 
    . . . . . . . . c c 1 1 1 1 f b d b b f d d d c . . . f b b f . . . . . 
    . . . . . . . . . . c c c f f f b d b b f c c . . . . . f b b f . . . . 
    . . . . . . . . . . . . . . . . f f f f f . . . . . . . . f f f . . . . 
    `, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite)
