import { Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Flex
      w="100%"
      h="100vh"
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
      color={"white"}
      bg="blue.500"
      p={"20px"}
    >
      {children}
    </Flex>
  );
}

export default Layout;
