import { Circle, Square } from "./Geo";
export const GeoForm = () =>{
    return(
        <div className=" gap-25">
            <h3 className="text-2xl font-bold ">Formas Geométricas</h3>
            <div className="flex gap-2 border-2 p-3 rounded-2xl">
                <Square/>
                <Circle/>
    
            </div>
            
        </div>
    )
}