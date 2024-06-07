import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box, Flex, Switch, useColorMode } from "@chakra-ui/react";

function App({ colorMode, setColorMode }) {
  const { toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <Router>
      <Box>
        <Flex justify="flex-end" p={4}>
          <Switch isChecked={colorMode === "dark"} onChange={handleToggle} />
        </Flex>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;