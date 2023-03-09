import tabla from "./tabla.js";
export default{
    name: document.querySelector("#myTabla"),
    frag: document.createDocumentFragment(),
    export(){
        let comport = tabla.rest[0];
        if(comport.eleccion === "Taditional"){
            tabla.data.Taditional.forEach((val,id)=>{
                if(comport.numero >= val[0] && comport.numero <= val[1]){
                    console.log(id)
                    tabla.Traditional(id);
                    tabla.PointRange(id);
                    tabla.Letter(id);
                    tabla.SBGRating(id);
                    tabla.ProficiencyLevelWithStandard(id);
                    this.createList(id);
                    // console.log(tabla.data.Taditional)
                }
            })
        }
        else if(comport.eleccion === "SBG-Rating"){
            tabla.data["SBG-Rating"].forEach((val,id)=>{
                if(comport.numero == val[0]){
                    console.log(comport.numero)
                    console.log(id);
                    tabla.Traditional(id);
                    tabla.PointRange(id);
                    tabla.Letter(id);
                    tabla.SBGRating(id);
                    tabla.ProficiencyLevelWithStandard(id);
                    this.createList(id);
                }
            })
        }
        tabla.rest = [];
    },
    createList(id){
        this.frag = document.createDocumentFragment();
            let tr = document.createElement("TR")
            let td1 = document.createElement("TD")
            td1.insertAdjacentText("beforeend", tabla.data.Taditional[id])
            let td2 = document.createElement("TD")
            td2.insertAdjacentText("beforeend", tabla.data["14-Point-Range"][id])
            let td3 = document.createElement("TD")
            td3.insertAdjacentText("beforeend", tabla.data.Letter[id])
            let td4 = document.createElement("TD")
            td4.insertAdjacentText("beforeend", tabla.data["SBG-Rating"][id])
            let td5 = document.createElement("TD")
            td5.insertAdjacentText("beforeend", tabla.data["Proficiency-Level-With-Standard"][id])
            tr.append(td1, td2, td3, td4, td5)
            this.frag.append(tr)
            console.log(this.frag)
            this.name.append(this.frag);
    }
    
}
