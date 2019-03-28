import port from "./port.js"
import { stringify } from "querystring";
export class ModuleService{ //singleton
    constructor(){
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }//singleton

        this.constructor.instance = this
        this.modules=[]
        this.url=port
        this.findModulesForCourse=this.findModulesForCourse.bind(this)
        //this.url="https://still-basin-44392.herokuapp.com/api"
    }

    findModulesForCourse(cid){ //arrow function bind this to original scope
        
        return fetch(this.url+"/client/course/" +String(cid), {credentials: 'include'}).then(function(res){
            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(function(response){
            return response.json() //res: [ course ]
        }).catch(function(error){alert("error check connection/ or cannot find course")}).then(
            course=>course.modules

        )

    }
}