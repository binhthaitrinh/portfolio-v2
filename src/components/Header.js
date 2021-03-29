import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Wrapper } from "./Wrapper"
import { Box, VStack, Text, Button } from "@chakra-ui/react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

export default function Header() {
  return (
    <Box height={`calc(100vh - 72px)`} position="relative">
      <Wrapper
        position="absolute"
        top="40%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <VStack
          textAlign="center"
          mx="auto"
          w="100%"
          maxW="700px"
          spacing="16px"
          alignItems="center"
        >
          <Box>
            <StaticImage
              src="../assets/images/profile.png"
              alt="binh trinh"
              placeholder="blurred"
              layout="constrained"
              width={150}
              height={150}
              quality={100}
            />
          </Box>
          <Text fontSize="18px">Hi, I'm Binh</Text>
          <Box textStyle="h1" as="h1">
            A Full-stack Javascript <br></br> Web Developer
          </Box>
          <Box>
            <Text fontSize="18px">
              with an eye for clean aesthetics and optimal <br></br> User
              Experience via intuitive design.
            </Text>
            <Text fontSize="18px">
              I have experience in MongoDB, Express.js, React.js, Node.js (MERN)
              stack
            </Text>
          </Box>
          <Link to="/blog">
            <Button colorScheme="blue">Connect with me!</Button>
          </Link>
        </VStack>
      </Wrapper>
      <Box
        position="absolute"
        bottom={0}
        left="50%"
        transform="translateX(-50%)"
      >
        <Box
          height="60px"
          width="40px"
          border="4px solid #2B6CB0"
          mb="40px"
          borderRadius="40px"
          position="relative"
        >
          <MotionBox
            position="absolute"
            top="20%"
            left="45%"
            transform="translate(-60%, -50%)"
            height="14px"
            width="5px"
            borderRadius="20px"
            backgroundColor="#2B6CB0"
            animate={{ y: 10 }}
            transition={{ ease: "easeOut", repeat: "Infinity", duration: 1 }}
          ></MotionBox>
        </Box>
      </Box>
    </Box>
  )
}