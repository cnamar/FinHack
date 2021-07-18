// material
import { Box, Container, Typography } from "@material-ui/core";
// components
import { Routes, Route } from "react-router-dom";
import Page from "../../../Page";
import Ownerscomponent from "../../../subscriptionowners/OwnersComponent";
import Usercomponent from "../../../users/Usercomponent";
import Navselect from "./Navselect.js";
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">
            <Navselect />
          </Typography>
          <Routes>
            <Route path="/">
              <Usercomponent />
            </Route>
            <Route path="/owner">
              <Ownerscomponent />
            </Route>
          </Routes>
        </Box>
      </Container>
    </Page>
  );
  /*return (
    <div>
      <Navselect />
      <Routes>
        <Route path="/">
          <Usercomponent />
        </Route>
        <Route path="/owner">
          <Eventstable />
        </Route>
      </Routes>
    </div>
  );*/
}
