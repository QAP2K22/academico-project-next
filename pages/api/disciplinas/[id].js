import { db } from "@/services/firebase"
import { child, get, ref, remove, set } from "firebase/database"
import { v4 } from "uuid"


export default function handler(req, res) {
    const id = req.query.id



    if (req.method == "GET") {
        get(child(ref(db), "disciplinas")).then(
            snapshot => {
                const Return = []

                snapshot.forEach(element => {
                    Return.push(element.val())
                });
                
                res.status(200).json(Return)
            }
        )

    } else if (req.method == "PUT") {
        const uuid = v4()
        const dados = req.body
        dados.id = uuid

        set(ref(db, "disciplinas/" + uuid), dados)
        
        
    } else if(req.method == "DELETE") {
        
        remove(ref(db, "disciplinas/" + id))

        res.status(200).json(id)
    }


}

