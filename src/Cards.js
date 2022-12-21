import { SimpleGrid, Box, Image, Link, Heading, Center } from "@chakra-ui/react"

function Card({ card }) {
  // console.log(card)
  return (
    <Center>
       <SimpleGrid columns={[1,2,4]}>
      {card.map((element, index) => (
        <a key={index} href={`/card/${element.id}`}>
          <Box className="yugioh-card" p={50}>
            <Image key={index} src={element.card_images[0].image_url} alt={element.name} w={200} />
            <Heading as="h2" size="sm">{element.name}</Heading>
            <Heading as="h3" size="xs">{element.type} / {element.race}</Heading>
            <Heading as="h3" size="xs">ATK: {element.atk} DEF: {element.def}</Heading>
          <p>Level: {element.level}</p>
          </Box>         
        </a>
      ))}
    </SimpleGrid>
    </Center>
   
  )
}

export default Card;
