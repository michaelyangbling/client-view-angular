import port from "./port.js"
import { stringify } from "querystring";
export class TopicService{ //singleton
    constructor(){
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }//singleton

        this.constructor.instance = this
        this.url=port
        this.findTopicsForLesson=this.findTopicsForLesson.bind(this)
        //this.url="https://still-basin-44392.herokuapp.com/api"
    }

    findTopicsForLesson(lessons,lid){ //arrow function bind this to original scope
        lid = parseInt(lid)
        // console.log(modules, mid, 'v')
        for(let index in lessons){
            if (lessons[index].id===lid){
                return lessons[index].topics
            }
        }
        alert("cannot find lesson")
        throw Error("cannot find lesson in module")

    }
}