import { HiCalendar } from "react-icons/hi";
import { Box, Flex, Text, Spacer, Tag, Icon, Button } from "@chakra-ui/react";
import { format } from "date-fns";

export function LaunchItem(launch) {
  return (
    <>
      <Box bg="gray.100" p={4} m={4} borderRadius="lg">
        <Flex display="flex">
          <Text fontSize="2xl">
            Mission <strong> {launch.mission_name}</strong> (
            {launch.launch_year})
          </Text>
          <Spacer />
          <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
            {launch.launch_success ? "Success" : "Failure"}
          </Tag>
        </Flex>
        <Flex>
          <Icon as={HiCalendar} color="gray.500" />
          <Text fontSize="sm" ml={1} color="gray.500">
            {format(
              new Date(launch.launch_date_local),
              "dd MMMM yyyy HH:mm:ss"
            )}
          </Text>
        </Flex>
        <Button mt={2} colorScheme="purple">
          More Details
        </Button>
      </Box>
    </>
  );
}
