import port from "./port.js"
import { stringify } from "querystring";
export class LessonService{ //singleton
    constructor(){
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }//singleton

        this.constructor.instance = this
        this.modules=[]
        this.url=port
        this.findLessonsForModule=this.findLessonsForModule.bind(this)
        //this.url="https://still-basin-44392.herokuapp.com/api"
    }

    findLessonsForModule(modules,mid){ //arrow function bind this to original scope
        mid = parseInt(mid)
        console.log(modules, mid, 'v')
        for(let index in modules){
            if (modules[index].id===mid){
                return modules[index].lessons
            }
        }
        alert("cannot find module")
        throw Error("cannot find module in course")

    }
}