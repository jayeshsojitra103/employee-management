import { Box, Container, Grid } from "@mui/material";
import AddEmployeeForm from "./components/AddEmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <Container maxWidth="sm">
      <h1 className="text-2xl font-semibold">Employee Management</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <AddEmployeeForm />
          </Grid>
          <Grid size={12}>
            <EmployeeList />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
