import port from "./port.js"
export class CourseService{ //singleton
    constructor(){
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }//singleton

        this.constructor.instance = this
        this.courses=[]
        this.url=port
        this.findAllCourses=this.findAllCourses.bind(this)
        //this.url="https://still-basin-44392.herokuapp.com/api"
    }

    findAllCourses(){ //arrow function bind this to original scope
        
        return fetch(this.url+"/client/courses", {credentials: 'include'}).then(function(res){
            if( !(res.ok) ){
                throw Error(res.statusText)
            }
            return res
        }).then(function(response){
            return response.json() //res: [ course ]
        }).catch(function(error){alert("error check connection/ try refresh")})

    }
}