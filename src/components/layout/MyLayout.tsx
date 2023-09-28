import { Layout } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";

import { CustomMenu } from "../menu/CustomMenu";
import CustomAppbar from "./CustomAppbar";
import { ConnectionWatcher } from "./ConnectionWatcher";
import { AppLocationContext } from "@react-admin/ra-navigation";

export const MyLayout = (props: any) => (
  <>
    <AppLocationContext>
      <Layout {...props} menu={CustomMenu} appBar={CustomAppbar} />
      <ConnectionWatcher />
      <ReactQueryDevtools initialIsOpen={false} />
    </AppLocationContext>
  </>
);
