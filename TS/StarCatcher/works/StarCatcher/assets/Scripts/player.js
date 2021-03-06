// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        // 主角跳跃高度
        jumpHeight : 0,
        // 主角跳跃持续时间
        jumpDuration : 0,
        // 最大移动速度
        maxMoveSpeed : 0,
        // 加速度
        accel : 0,
    },

    
    // LIFE-CYCLE CALLBACKS:
    keyDown (event) {
        console.log('keyDown(' + event.keyCode + ')');
        switch (event) {
            case cc.KEY.a:
                this.speed = -100;
                break;
            case cc.KEY.d:
                this.speed = 100;
                break;
            case cc.KEY.space:
                this.speed = 0;
                break;
        }
    },

    keyUp (event) {
        console.log('keyUp(' + event.keyCode + ')');
        
    },

    onLoad () {
        var jumpUp = cc.moveBy(this.jumpDuration,cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        var jumpDown = cc.moveBy(this.jumpDuration,cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
        var jumpAction = cc.repeatForever(cc.sequence(jumpUp, jumpDown));
        this.node.runAction(jumpAction);

        // 用户按键 → cc检测 →发消息给用户函数
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyUp, this);
    },


    start () {

    },

    update (dt) {
        var d = this.speed * dt;
        this.node.x += d;
    },
});
