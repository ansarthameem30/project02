import { useEffect } from "react"

const UseeffectA = () => {

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
    })
  return (
    <div>UseeffectA</div>
  )
}

export default UseeffectA