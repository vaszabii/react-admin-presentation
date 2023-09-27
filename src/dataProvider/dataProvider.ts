import restProvider from "ra-data-simple-rest";
import { addRealTimeMethodsInLocalBrowser } from "@react-admin/ra-realtime";
import { simulateRealtime } from "./simulateRealtime";

const baseApiUrl = "http://localhost:5000";

const baseDataProvider = restProvider(baseApiUrl);

export const dataProviderWithRealtime =
  addRealTimeMethodsInLocalBrowser(baseDataProvider);

simulateRealtime(dataProviderWithRealtime);
