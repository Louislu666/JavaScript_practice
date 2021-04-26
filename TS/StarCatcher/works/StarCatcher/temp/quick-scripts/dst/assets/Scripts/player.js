
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
  keyDown: function keyDown(event) {
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
  keyUp: function keyUp(event) {
    console.log('keyUp(' + event.keyCode + ')');
  },
  onLoad: function onLoad() {
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
    var jumpAction = cc.repeatForever(cc.sequence(jumpUp, jumpDown));
    this.node.runAction(jumpAction); // 用户按键 → cc检测 →发消息给用户函数

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    var d = this.speed * dt;
    this.node.x += d;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xccGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwia2V5RG93biIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleUNvZGUiLCJLRVkiLCJhIiwic3BlZWQiLCJkIiwic3BhY2UiLCJrZXlVcCIsIm9uTG9hZCIsImp1bXBVcCIsIm1vdmVCeSIsInYyIiwiZWFzaW5nIiwiZWFzZUN1YmljQWN0aW9uT3V0IiwianVtcERvd24iLCJlYXNlQ3ViaWNBY3Rpb25JbiIsImp1bXBBY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJub2RlIiwicnVuQWN0aW9uIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsVUFBVSxFQUFHLENBakJMO0FBa0JSO0FBQ0FDLElBQUFBLFlBQVksRUFBRyxDQW5CUDtBQW9CUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUcsQ0FyQlA7QUFzQlI7QUFDQUMsSUFBQUEsS0FBSyxFQUFHO0FBdkJBLEdBSFA7QUE4Qkw7QUFDQUMsRUFBQUEsT0EvQkssbUJBK0JJQyxLQS9CSixFQStCVztBQUNaQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhRixLQUFLLENBQUNHLE9BQW5CLEdBQTZCLEdBQXpDOztBQUNBLFlBQVFILEtBQVI7QUFDSSxXQUFLVCxFQUFFLENBQUNhLEdBQUgsQ0FBT0MsQ0FBWjtBQUNJLGFBQUtDLEtBQUwsR0FBYSxDQUFDLEdBQWQ7QUFDQTs7QUFDSixXQUFLZixFQUFFLENBQUNhLEdBQUgsQ0FBT0csQ0FBWjtBQUNJLGFBQUtELEtBQUwsR0FBYSxHQUFiO0FBQ0E7O0FBQ0osV0FBS2YsRUFBRSxDQUFDYSxHQUFILENBQU9JLEtBQVo7QUFDSSxhQUFLRixLQUFMLEdBQWEsQ0FBYjtBQUNBO0FBVFI7QUFXSCxHQTVDSTtBQThDTEcsRUFBQUEsS0E5Q0ssaUJBOENFVCxLQTlDRixFQThDUztBQUNWQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFXRixLQUFLLENBQUNHLE9BQWpCLEdBQTJCLEdBQXZDO0FBRUgsR0FqREk7QUFtRExPLEVBQUFBLE1BbkRLLG9CQW1ESztBQUNOLFFBQUlDLE1BQU0sR0FBR3BCLEVBQUUsQ0FBQ3FCLE1BQUgsQ0FBVSxLQUFLaEIsWUFBZixFQUE0QkwsRUFBRSxDQUFDc0IsRUFBSCxDQUFNLENBQU4sRUFBUyxLQUFLbEIsVUFBZCxDQUE1QixFQUF1RG1CLE1BQXZELENBQThEdkIsRUFBRSxDQUFDd0Isa0JBQUgsRUFBOUQsQ0FBYjtBQUNBLFFBQUlDLFFBQVEsR0FBR3pCLEVBQUUsQ0FBQ3FCLE1BQUgsQ0FBVSxLQUFLaEIsWUFBZixFQUE0QkwsRUFBRSxDQUFDc0IsRUFBSCxDQUFNLENBQU4sRUFBUyxDQUFDLEtBQUtsQixVQUFmLENBQTVCLEVBQXdEbUIsTUFBeEQsQ0FBK0R2QixFQUFFLENBQUMwQixpQkFBSCxFQUEvRCxDQUFmO0FBQ0EsUUFBSUMsVUFBVSxHQUFHM0IsRUFBRSxDQUFDNEIsYUFBSCxDQUFpQjVCLEVBQUUsQ0FBQzZCLFFBQUgsQ0FBWVQsTUFBWixFQUFvQkssUUFBcEIsQ0FBakIsQ0FBakI7QUFDQSxTQUFLSyxJQUFMLENBQVVDLFNBQVYsQ0FBb0JKLFVBQXBCLEVBSk0sQ0FNTjs7QUFDQTNCLElBQUFBLEVBQUUsQ0FBQ2dDLFdBQUgsQ0FBZUMsRUFBZixDQUFrQmpDLEVBQUUsQ0FBQ2tDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBM0MsRUFBcUQsS0FBSzVCLE9BQTFELEVBQW1FLElBQW5FO0FBQ0FSLElBQUFBLEVBQUUsQ0FBQ2dDLFdBQUgsQ0FBZUMsRUFBZixDQUFrQmpDLEVBQUUsQ0FBQ2tDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkUsTUFBM0MsRUFBbUQsS0FBS25CLEtBQXhELEVBQStELElBQS9EO0FBQ0gsR0E1REk7QUErRExvQixFQUFBQSxLQS9ESyxtQkErREksQ0FFUixDQWpFSTtBQW1FTEMsRUFBQUEsTUFuRUssa0JBbUVHQyxFQW5FSCxFQW1FTztBQUNSLFFBQUl4QixDQUFDLEdBQUcsS0FBS0QsS0FBTCxHQUFheUIsRUFBckI7QUFDQSxTQUFLVixJQUFMLENBQVVXLENBQVYsSUFBZXpCLENBQWY7QUFDSDtBQXRFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD6auY5bqmXHJcbiAgICAgICAganVtcEhlaWdodCA6IDAsXHJcbiAgICAgICAgLy8g5Li76KeS6Lez6LeD5oyB57ut5pe26Ze0XHJcbiAgICAgICAganVtcER1cmF0aW9uIDogMCxcclxuICAgICAgICAvLyDmnIDlpKfnp7vliqjpgJ/luqZcclxuICAgICAgICBtYXhNb3ZlU3BlZWQgOiAwLFxyXG4gICAgICAgIC8vIOWKoOmAn+W6plxyXG4gICAgICAgIGFjY2VsIDogMCxcclxuICAgIH0sXHJcblxyXG4gICAgXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIGtleURvd24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2tleURvd24oJyArIGV2ZW50LmtleUNvZGUgKyAnKScpO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAtMTAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuS0VZLnNwYWNlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGtleVVwIChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXlVcCgnICsgZXZlbnQua2V5Q29kZSArICcpJyk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdmFyIGp1bXBVcCA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbixjYy52MigwLCB0aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpO1xyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbixjYy52MigwLCAtdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluKCkpO1xyXG4gICAgICAgIHZhciBqdW1wQWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihqdW1wQWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy8g55So5oi35oyJ6ZSuIOKGkiBjY+ajgOa1iyDihpLlj5Hmtojmga/nu5nnlKjmiLflh73mlbBcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMua2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5rZXlVcCwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdmFyIGQgPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gZDtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=