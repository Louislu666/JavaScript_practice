import { MyProfile } from "./MyProfile";

const {ccclass, property} = cc._decorator;

// MyProfile = {
//     name : "Louis",
//     email : "balabala@gmail.com",
//     'zip code' : "12345",
//     isInvited : true
// }

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    profile : MyProfile;

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
        // enum Color {Red, Green, Blue};
        // let c : Color = Color.Green;

        enum Color {Red = 1, Green = 10, Blue = 100};
        let colorName : string = Color[100];
        console.log(colorName);
        
        // 任意值
        let notSure : any = 5;
        notSure = "maybe a string instead";
        notSure = false;
        
        let list : any[] = [10, true, "hello"];
        console.log(list);
        list[1] = 0.5;
        console.log(list);

        // 空值
        function warnUser() : void {
            alert("This is my warning message");
        }
        let unusable : void = undefined;

        //Null 和 undefined
        let u : undefined = undefined;
        let n : null = null;


        // 对象
        this.profile = new MyProfile("Louis", "balabala@gmail.com", "12345", true);
        console.log(this.profile);


        // 回调函数
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function () {
            console.log(this.profile);
        }.bind(this));
        

    }
    //函数
    add (a : number, b : number) : number {
        return a + b;
        // return "aaa"
    }
    // app (a : number, b : number) : any {
    //     return "hhh";      
    // }

    // update (dt) {}
}
