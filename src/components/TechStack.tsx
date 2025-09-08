import { Button } from "@/types/types";
import StackButton from "./StackButton";

const buttons : Button[] = [
    {
        name : "Typescript"
    },
    {
        name : "Reactjs"
    },
    {
        name : "Expressjs"
    },
    {
        name : "MongoDB"
    },
    {
        name : "Postgres"
    },
    {
        name : "WebSockets"
    },
    {
        name : "Docker"
    },
]

export default function TechStack() {
  return (
    <div className='grid grid-cols-3 grid-rows-3 gap-4'>
            {buttons.map((button)=> {
                  return  (
                    <StackButton button={button}/>
                  )
            })}
    </div>
  )
}
