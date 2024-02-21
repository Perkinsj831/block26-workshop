import ContactList from './components/ContactList'
import './App.css'
import { useState } from 'react'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContanctId, setSelectedContanctId] = useState(null)

  return (
    <>
      {selectedContanctId ? (<div>Selected Contact View</div>) : (<ContactList setSelectedContactId={setSelectedContanctId}/> )}
    </>
  )
}

export default App
