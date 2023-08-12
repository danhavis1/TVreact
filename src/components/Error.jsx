import {Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Error() {
    const navigate =useNavigate()
  return (
  <div>
    <h1>Error pls go home</h1>
    <Button onClick={() => navigate ('/')}>GO BACK</Button>
  </div>
  )
}


