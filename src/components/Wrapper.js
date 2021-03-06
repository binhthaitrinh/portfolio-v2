import { Box } from "@chakra-ui/react"
import React from "react"
//TODO: resize container
export const Wrapper = ({ children, ...props }) => {
  return (
    <Box
      w="100%"
      mx="auto"
      px="10px"
      overflow="hidden"
      sx={{
        "@media (min-width: 576px)": {
          maxW: "540px",
        },
        "@media (min-width: 768px)": {
          maxW: "720px",
        },
        "@media (min-width: 992px)": {
          maxW: "960px",
        },
        "@media (min-width: 1200px)": {
          maxW: "1140px",
        },
        "@media (min-width: 1400px)": {
          maxW: "1320px",
        },
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
