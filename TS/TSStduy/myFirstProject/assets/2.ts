const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // 定义数据类型
        // 字符串
        let o : string = '你好';

        // 数字
        let a : number = 22;
        a = 11;
        // a = '111';
        let b : any = 12;
        b = '123';

        // 布尔值
        let p : boolean = true;

        // 数组
        let x : number[] = [1,2,3];
        // let y : number[] = [1,2,3,'a'];
        // let y : number[] = [1,2,3,[5,6,7]];
        // let y : number[] = [1,2,3,{x:1,y:2}];

        // 元组
        let q : [string, number];
        q = ['再见', 22];
        // q = [22, '再见'];

        // 枚举
        

    }

    // update (dt) {}
}
