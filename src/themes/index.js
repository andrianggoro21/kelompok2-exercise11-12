import { extendTheme } from "@chakra-ui/react";
import breakpoints from "./breakpoint";
import formFloating from "./formFloating";

const theme = extendTheme({breakpoints, formFloating});

export default theme;