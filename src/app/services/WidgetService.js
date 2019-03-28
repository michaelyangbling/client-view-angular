import port from "./port.js"
import { stringify } from "querystring";
export class WidgetService{ //singleton
    constructor(){
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }//singleton

        this.constructor.instance = this
        this.url=port
        this.findWidgetsForTopic=this.findWidgetsForTopic.bind(this)
        //this.url="https://still-basin-44392.herokuapp.com/api"
    }

    findWidgetsForTopic(topics,tid){ //arrow function bind this to original scope
        tid = parseInt(tid)
        // console.log(modules, mid, 'v')
        for(let index in topics){
            if (topics[index].id===tid){
                
                let widgets = topics[index].widgets
                // console.log(topics[index], topics[index].widgets, widgets)
                for (let j in widgets){
                    let widget = topics[index].widgets[j]
                    if ( widget.items ){
                        widget.items = widget.items.split('\n')
                    }
                }
                console.log(topics[index].widgets)
                return widgets
            }
        }

        alert("cannot find lesson")
        throw Error("cannot find lesson in module")

    }
}