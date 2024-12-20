import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees, deleteEmployee } from "../redux/employeesSlice";
import { RootState } from "../redux/store";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );

  useEffect(() => {
    fetch("/api/employees")
      .then((response) => response.json())
      .then((data) => dispatch(setEmployees(data)));
  }, [dispatch]);

  const handleDelete = (id: number) => {
    fetch(`/api/employees/${id}`, { method: "DELETE" }).then(() =>
      dispatch(deleteEmployee(id))
    );
  };

  return (
    <Grid container spacing={2}>
      {employees.map((employee) => (
        <Grid item key={employee.id} xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">{employee.name}</Typography>
              <Typography>Email: {employee.email}</Typography>
              <Typography>Position: {employee.position}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => {
                  handleDelete(employee.id);
                }}
                color="error"
              >
                Delete
              </Button>

              {/* Due to time limit not added FE logic */}
              <Button color="success">Edit</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EmployeeList;
