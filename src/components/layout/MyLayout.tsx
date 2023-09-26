import { Layout, RefreshIconButton } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";

import { CustomMenu } from "../menu/CustomMenu";
import { Box } from "@mui/material";
import CounterDisplay from "./CounterDisplay";

export const MyLayout = (props: any) => (
  <>
    <Layout
      {...props}
      menu={CustomMenu}
      toolbar={
        <Box display="flex" gap={1} mr={1}>
          <CounterDisplay />
          <RefreshIconButton />
        </Box>
      }
    />
    ;
    <ReactQueryDevtools initialIsOpen={false} />
  </>
);
