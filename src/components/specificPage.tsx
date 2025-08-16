import { useRecoilValueLoadable } from "recoil";
import { specificContent } from "../data";
import { Card } from "./Card";


export const SpecificPage = ({contains} : {contains : string})=>{
    const data = useRecoilValueLoadable(specificContent(contains));
        if(data.state === 'loading') {
            return <div>Loading......</div>
        }
        if(data.state === 'hasValue'){
            const array = data.contents.map((x:any)=>{
                return <Card url={x.link} title={x.title} id={x.id} onDelete={x.id}/>
            })
            return <div>{array}</div>
        }
}