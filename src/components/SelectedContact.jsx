import { useState } from "react"
import { useEffect } from "react"

function SelectedContact({SelectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState(null)

    useEffect(() => {
        async function fetchSingleContact() {
            try{
              const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${SelectedContactId}`)
              const json = await response.json()
              setContact(json)
            } catch(error){
                console.error(error)
            }
        }
        fetchSingleContact()
    }, [])

    return (
        <div>{`${contact}`}</div>
    )
}

export default SelectedContact