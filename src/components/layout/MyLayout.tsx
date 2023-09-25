import { Layout } from "react-admin";

import { CustomMenu } from "../menu/CustomMenu";

export const MyLayout = (props: any) => <Layout {...props} menu={CustomMenu} />;
