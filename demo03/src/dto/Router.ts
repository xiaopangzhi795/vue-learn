import {Component} from "vue";

export class Router {
    /*路径*/
    path!: string;
    /*名字 唯一*/
    name!: string;
    /*元数据*/
    meta!: Meta;
    /*子节点*/
    children!: Router[];
    //引用位置
    component!: Component;

    //构造函数
    constructor(path: string, name: string, meta: Meta, component: string) {
        this.path = path;
        this.name = name;
        this.meta = meta;
        this.component = () => import(component);
        this.children = [];
    }

    //工厂
    static create(path: string, name: string, meta: Meta, component: string) {
        let route = new Router(path, name, meta, component);
        return route;
    }

    //添加子节点
    addChildren(path: string, name: string, meta: Meta, component: string) {
        let route = Router.create(path, name, meta, component);
        this.children.push(route);
    }

    //获取子节点
    getChildren(): Router[] {
        return this.children;
    }

    //根据名字获取子节点
    getChildrenByName(name: string): Router[] {
        return this.children.filter(x => x.name === name);
    }

    build() {
        let obj = {
            name: this.name,
            path: this.path,
            component: this.component,
            meta: {
                title: this.meta.title,
            },
            children: this.children.map(x => {
                return {
                    name: x.name,
                    path: x.path,
                    //todo 继续构建！！将这个数据构建完成
                }
            })
        }
    }
}

//元数据
class Meta{
    //标题
    title!:string;

    /*创建函数*/
    static create(title: string): Meta {
        let meta = new Meta();
        meta.title = title;
        return meta;
    }
}