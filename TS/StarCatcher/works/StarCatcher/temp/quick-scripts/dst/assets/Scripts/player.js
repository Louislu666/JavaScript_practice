
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '478a26zBhNOcZ8voCAl1QuA', 'player');
// Scripts/player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
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
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
    var jumpAction = cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    this.node.runAction(jumpAction); // 用户按键 → cc检测 →发消息给用户函数

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, keyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, keyUp, this);
  },
  keyDown: function keyDown() {},
  keyUp: function keyUp() {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwib25Mb2FkIiwianVtcFVwIiwibW92ZUJ5IiwidjIiLCJlYXNpbmciLCJlYXNlQ3ViaWNBY3Rpb25PdXQiLCJqdW1wRG93biIsImVhc2VDdWJpY0FjdGlvbkluIiwianVtcEFjdGlvbiIsInJlcGVhdEZvcmV2ZXIiLCJzZXF1ZW5jZSIsIm5vZGUiLCJydW5BY3Rpb24iLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsImtleURvd24iLCJLRVlfVVAiLCJrZXlVcCIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxVQUFVLEVBQUcsQ0FqQkw7QUFrQlI7QUFDQUMsSUFBQUEsWUFBWSxFQUFHLENBbkJQO0FBb0JSO0FBQ0FDLElBQUFBLFlBQVksRUFBRyxDQXJCUDtBQXNCUjtBQUNBQyxJQUFBQSxLQUFLLEVBQUc7QUF2QkEsR0FIUDtBQThCTDtBQUVBQyxFQUFBQSxNQWhDSyxvQkFnQ0s7QUFDTixRQUFJQyxNQUFNLEdBQUdULEVBQUUsQ0FBQ1UsTUFBSCxDQUFVLEtBQUtMLFlBQWYsRUFBNEJMLEVBQUUsQ0FBQ1csRUFBSCxDQUFNLENBQU4sRUFBUyxLQUFLUCxVQUFkLENBQTVCLEVBQXVEUSxNQUF2RCxDQUE4RFosRUFBRSxDQUFDYSxrQkFBSCxFQUE5RCxDQUFiO0FBQ0EsUUFBSUMsUUFBUSxHQUFHZCxFQUFFLENBQUNVLE1BQUgsQ0FBVSxLQUFLTCxZQUFmLEVBQTRCTCxFQUFFLENBQUNXLEVBQUgsQ0FBTSxDQUFOLEVBQVMsQ0FBQyxLQUFLUCxVQUFmLENBQTVCLEVBQXdEUSxNQUF4RCxDQUErRFosRUFBRSxDQUFDZSxpQkFBSCxFQUEvRCxDQUFmO0FBQ0EsUUFBSUMsVUFBVSxHQUFHaEIsRUFBRSxDQUFDaUIsYUFBSCxDQUFpQmpCLEVBQUUsQ0FBQ2tCLFFBQUgsQ0FBWVQsTUFBWixFQUFvQkssUUFBcEIsQ0FBakIsQ0FBakI7QUFDQSxTQUFLSyxJQUFMLENBQVVDLFNBQVYsQ0FBb0JKLFVBQXBCLEVBSk0sQ0FNTjs7QUFDQWhCLElBQUFBLEVBQUUsQ0FBQ3FCLFdBQUgsQ0FBZUMsRUFBZixDQUFrQnRCLEVBQUUsQ0FBQ3VCLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBM0MsRUFBcURDLE9BQXJELEVBQThELElBQTlEO0FBQ0ExQixJQUFBQSxFQUFFLENBQUNxQixXQUFILENBQWVDLEVBQWYsQ0FBa0J0QixFQUFFLENBQUN1QixXQUFILENBQWVDLFNBQWYsQ0FBeUJHLE1BQTNDLEVBQW1EQyxLQUFuRCxFQUEwRCxJQUExRDtBQUNILEdBekNJO0FBMkNMRixFQUFBQSxPQTNDSyxxQkEyQ00sQ0FFVixDQTdDSTtBQStDTEUsRUFBQUEsS0EvQ0ssbUJBK0NJLENBRVIsQ0FqREk7QUFtRExDLEVBQUFBLEtBbkRLLG1CQW1ESSxDQUVSLENBckRJLENBdURMOztBQXZESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD6auY5bqmXHJcbiAgICAgICAganVtcEhlaWdodCA6IDAsXHJcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD5oyB57ut5pe26Ze0XHJcbiAgICAgICAganVtcER1cmF0aW9uIDogMCxcclxuICAgICAgICAvLyDmnIDlpKfnp7vliqjpgJ/luqZcclxuICAgICAgICBtYXhNb3ZlU3BlZWQgOiAwLFxyXG4gICAgICAgIC8vIOWKoOmAn+W6plxyXG4gICAgICAgIGFjY2VsIDogMCxcclxuICAgIH0sXHJcblxyXG4gICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHZhciBqdW1wVXAgPSBjYy5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sY2MudjIoMCwgdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcclxuICAgICAgICB2YXIganVtcERvd24gPSBjYy5tb3ZlQnkodGhpcy5qdW1wRHVyYXRpb24sY2MudjIoMCwgLXRoaXMuanVtcEhlaWdodCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcclxuICAgICAgICB2YXIganVtcEFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bikpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oanVtcEFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vIOeUqOaIt+aMiemUriDihpIgY2Pmo4DmtYsg4oaS5Y+R5raI5oGv57uZ55So5oi35Ye95pWwXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCBrZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCBrZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGtleURvd24gKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAga2V5VXAgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==