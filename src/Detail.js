import { useState, useEffect } from "react"
import { SimpleGrid, Box, Image, Link, Heading, Center, Button, Text, HStack, Container } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"

function Detail() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()

  const getData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      const data = await response.json()
      setData(data.data)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [id])

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      {data.map((element, index) => (
        <Box key={index} p={30}>
          <Button colorScheme='yellow' onClick={() => navigate('/')} >{"< Back"}</Button>
          <Center>
            <HStack>
              <Image key={index} src={element.card_images[0].image_url} w={200} />

              <Box p={20} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Heading as="h2" size="sm">{element.name}</Heading>
                <Text className="test-text" fontWeight="bold">Level: {element.level}</Text>
                <Text className="test-text" fontWeight="bold">{element.attribute}</Text>
                <Text className="test-text" fontWeight="bold">ATK/{element.atk} DEF/{element.def}</Text>
                <Text className="test-text">{`[ ${element.type} / ${element.race} ]`}</Text>
                <Text className="test-text">Description: {element.desc}</Text>
              </Box>
            </HStack>
          </Center>

          <Center>
            <SimpleGrid columns={[1, 2, 4]} spacing="5" p={30}>
                {element.card_sets.map((c, index) => (
                  <Container key={index} bg="#FFFACD" borderRadius='lg' p={5}>
                    <Text>Name: {c.set_name}</Text>
                    <Text>Code: {c.set_code}</Text>
                    <Text>Rarity: {c.set_rarity}</Text>
                    <Text>Price: {c.set_price}</Text>
                  </Container>
                ))}
              </SimpleGrid>
          </Center>


        </Box>


      ))}
    </>
  )
}

export default Detail;
