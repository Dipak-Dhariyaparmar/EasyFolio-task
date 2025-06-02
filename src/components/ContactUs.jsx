import {
  Box,
  Flex,
  Text,
  Input,
  Textarea,
  Button,
  Icon,
} from "@chakra-ui/react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function ContactUs() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={"#faf9fb"}
      gap={{ base: 6, md: 8 }}
      py={{ base: 6, md: 10 }}
      px={{ base: "5%", sm: "10%", md: "15%" }}
    >
     
      <Box flex={1}>
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="bold"
          color="gray.600"
        >
          CONTACT
        </Text>
        <Text
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          fontWeight="bold"
          mt={2}
        >
          Nemo enim ipsam voluptatem quia voluptas aspernatur
        </Text>
        <Text
          fontSize={{ base: "lg", md: "2xl" }}
          color="gray.600"
          mt={{ base: 3, md: 4 }}
        >
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam.
        </Text>

        <Box mt={{ base: 4, md: 6 }}>
          <Flex align="center" mb={2}>
            <Icon as={MdEmail} color="orange.500" size={"lg"} mr={2} />
            <Text fontSize={{ base: "sm", md: "lg" }} color="gray.600">
              info@example.com
            </Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={MdPhone} color="orange.500" size={"lg"} mr={2} />
            <Text fontSize={{ base: "sm", md: "lg" }} color="gray.600">
              +1 5589 55488 558
            </Text>
          </Flex>
          <Flex align="center" mb={2}>
            <Icon as={MdLocationOn} size={"lg"} color="orange.500" mr={2} />
            <Text fontSize={{ base: "sm", md: "lg" }} color="gray.600">
              A108 Adam Street, New York, NY 535022
            </Text>
          </Flex>
          <Button
            variant="link"
            color="gray.600"
            mt={2}
            fontSize={{ base: "sm", md: "md" }}
          >
            Open Map →
          </Button>
        </Box>
      </Box>

      <Box
        flex={1}
        bg="white"
        p={{ base: 4, md: 6 }}
        borderRadius="md"
        shadow="md"
        display="flex" 
        flexDirection="column" 
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1, 
            height: "100%", 
          }}
        >
      
          <Input
            placeholder="Your Name"
            size={{ base: "md", md: "lg" }}
            mb={4}
            p={3}
            variant="outline"
            borderColor="gray.300"
            _focus={{ borderColor: "#e87532" }}
          />

          <Input
            placeholder="Your Email"
            size={{ base: "md", md: "lg" }}
            mb={4}
            p={3}
            variant="outline"
            borderColor="gray.300"
            _focus={{ borderColor: "#e87532" }}
          />

          <Input
            placeholder="Subject"
            size={{ base: "md", md: "lg" }}
            mb={4}
            p={3}
            variant="outline"
            borderColor="gray.300"
            _focus={{ borderColor: "#e87532" }}
          />

          <Textarea
            placeholder="Message"
            size={{ base: "md", md: "lg" }}
            mb={4}
            p={3}
            variant="outline"
            borderColor="gray.300"
            _focus={{ borderColor: "#e87532" }}
            resize="vertical"
            flex={1} 
          />

          <Button
            type="submit"
            bg={"#e87532"}
            w="full"
            size={{ base: "md", md: "lg" }}
            fontSize={{ base: "sm", md: "md" }}
          >
            Submit Message
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default ContactUs;
// this component is a contactus related
