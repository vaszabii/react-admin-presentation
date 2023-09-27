import { Layout } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";

import { CustomMenu } from "../menu/CustomMenu";
import CustomAppbar from "./CustomAppbar";
import { ConnectionWatcher } from "./ConnectionWatcher";

export const MyLayout = (props: any) => (
  <>
    <Layout {...props} menu={CustomMenu} appBar={CustomAppbar} />
    <ConnectionWatcher />
    <ReactQueryDevtools initialIsOpen={false} />
  </>
);
