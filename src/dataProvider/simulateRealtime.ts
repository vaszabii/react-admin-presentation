import { DataProvider } from "react-admin";

export const simulateRealtime = async (dataProvider: DataProvider) => {
  await wait(3);
  dataProvider.publish("connectedUsers", {
    type: "connected",
    payload: { userId: 1 },
  });
  console.log("Simulated login realtime");
  await wait(3);

  await wait(15);
  dataProvider.publish("connectedUsers", {
    type: "disconnected",
    payload: { userId: 1 },
  });
  console.log("Simulated logout realtime");
};

export const wait = async (s: number) => {
  await new Promise((resolve) => setTimeout(resolve, s * 1000));
};
