import { useState, useEffect } from "react"
import { SimpleGrid, Select } from "@chakra-ui/react"
import Cards from "./Cards"

function Home() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(true)

  const getData = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
      const data = await response.json()
      setData(data.data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  // console.log(data)


  useEffect(() => {
    getData()
  }, [])


  const sortData = (type) => {
    if (type === "Name") {
      setData([...data].sort((a, b) => {
        return a.name.localeCompare(b.name)
      }))
    } else if (type === "Attack") {
      setData([...data].sort((a, b) => a.atk - b.atk))
    } else if (type === "Defence") {
      setData([...data].sort((a, b) => a.def - b.def))
    }
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Select p={10} name="sort" onChange={(e) => sortData(e.target.value)}>
        <option value="">Sort by</option>
        <option value="Name">Name</option>
        <option value="Attack">Attack</option>
        <option value="Defence">Defence</option>
      </Select>
      {/* <SimpleGrid> */}
        <Cards card={data} />
      {/* </SimpleGrid> */}
      {/* <p>{JSON.stringify(data)}</p> */}
    </>

  )
}

export default Home;
