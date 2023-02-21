import { Flex, Box, Heading, Button, Input, Link } from "@chakra-ui/react";
import { LOGIN, REGISTER } from "../../lib/routes";
import { Link as RouterLink } from "react-router-dom";


function Home() {
   
  

  return (
    <>
     
    
    <Box
    bg="blue.500"
    backgroundImage="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm119batch3-ning-07e-olive-job597.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b117b98699671bb79488e05caa8aa41c"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    w="100%"
    h="100vh"
  >
     <Flex direction="column" align="center" justify="center" h="100%">
        <Box
          p={8}
          rounded="md"
          shadow="xl"
        >
      
        <Heading as="h4" size="2xl" float="left" mb="20px">
             Welcome to Connectify!🤩
        </Heading>
        <br />
       
        <Button colorScheme="teal" size="lg" mt={8} ml={40}>
        <Link
            as={RouterLink}
            to={REGISTER}
            color="teal.800"
            fontWeight="medium"
            textColor={"white.100"}
            _hover={{ background: "teal.100" }}
          >
            Register
          </Link>
        </Button>
        <Button colorScheme="teal" size="lg" mt={8} ml={30}>
        <Link
            as={RouterLink}
            to={LOGIN}
            color="teal.800"
            fontWeight="medium"
            textColor={"white.100"}
            _hover={{ background: "teal.100" }}
          >
            Log In
          </Link>
        </Button>
      </Box>
    </Flex>
    </Box>
    </>
    
  );
}

export default Home;

