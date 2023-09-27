import { useSubscribe } from "@react-admin/ra-realtime";
import { useNotify, useDataProvider } from "react-admin";

export const ConnectionWatcher = () => {
  const notify = useNotify();
  const dataProvider = useDataProvider();

  useSubscribe("connectedUsers", (event) => {
    if (event.type === "connected") {
      dataProvider
        .getOne("users", { id: event.payload.userId })
        .then(({ data }) => {
          notify(`User ${data.name} just logged in`, {
            type: "success",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          });
        });
    }
    if (event.type === "disconnected") {
      dataProvider
        .getOne("users", { id: event.payload.userId })
        .then(({ data }) => {
          notify(`User ${data.name} just logged out`, {
            type: "success",
            anchorOrigin: { vertical: "top", horizontal: "right" },
          });
        });
    }
  });

  return null;
};
