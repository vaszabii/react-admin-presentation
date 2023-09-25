import React from "react";
import { Route } from "react-router-dom";
import { Admin, Resource, defaultTheme, CustomRoutes } from "react-admin";
import restProvider from "ra-data-simple-rest";

import PersonIcon from "@mui/icons-material/Person";

import { MyLayout } from "./components/layout/MyLayout";
import PostList from "./components/posts/PostList";
import UserList from "./components/users/UserList";
import PostCreate from "./components/posts/PostCreate";
import PostEdit from "./components/posts/PostEdit";
import CustomerList from "./components/customers/CustomerList";
import CustomPage from "./components/custom/CustomPage";

const baseApiUrl = "http://localhost:5000";

function App() {
  return (
    <Admin
      layout={MyLayout}
      dataProvider={restProvider(baseApiUrl)}
      theme={{
        ...defaultTheme,
        palette: {
          background: {
            default: "#fafafb",
          },
        },
      }}
    >
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource name="users" list={UserList} icon={PersonIcon} />
      <Resource name="customers" list={CustomerList} icon={PersonIcon} />
      <CustomRoutes>
        <Route path="custom" element={<CustomPage />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
