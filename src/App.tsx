import React from "react";
import { Route } from "react-router-dom";
import { Admin, Resource, CustomRoutes, memoryStore } from "react-admin";

import PersonIcon from "@mui/icons-material/Person";

import { MyLayout } from "./components/layout/MyLayout";
import PostList from "./components/posts/PostList";
import UserList from "./components/users/UserList";
import PostCreate from "./components/posts/PostCreate";
import PostEdit from "./components/posts/PostEdit";
import CustomerList from "./components/customers/CustomerList";
import CustomPage from "./components/custom/CustomPage";
import CalendarPage from "./components/calendar/CalendarPage";
import { dataProviderWithRealtime } from "./dataProvider/dataProvider";
import LivePage from "./components/live/LivePage";
import OtherPage from "./components/other/OtherPage";
import { darkTheme, lightTheme } from "./components/layout/themes";

function App() {
  return (
    <Admin
      layout={MyLayout}
      dataProvider={dataProviderWithRealtime}
      store={memoryStore({ countedNumber: 0 })}
      theme={lightTheme}
      darkTheme={darkTheme}
      defaultTheme="light"
    >
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource name="users" list={UserList} icon={PersonIcon} />
      <Resource name="customers" list={CustomerList} icon={PersonIcon} />
      <Resource name="events" list={CalendarPage} icon={PersonIcon} />
      <CustomRoutes>
        <Route path="custom" element={<CustomPage />} />
        <Route path="live" element={<LivePage />} />
        <Route path="other" element={<OtherPage />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
