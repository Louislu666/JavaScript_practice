cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {
        cc.systemEvent.on
        (cc.SystemEvent.EventType.KEY_DOWN, 
        this.onKeyDown, this);
    },
    onKeyDown: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                console.log('Press a key');
                break;
        }
    },
    add (a, b) {
        return a + b;
    },
    // update (dt) {},
});
