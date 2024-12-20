import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeesSlice";
import { Box, Button, FormControl, TextField } from "@mui/material";
import { validateForm } from "../utils";

const AddEmployeeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    position?: string;
  }>({});
  
  const dispatch = useDispatch();



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm(name,email,position,setErrors)) return;

    const newEmployee = { id: Date.now(), name, email, position };
    fetch("/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    })
      .then((response) => response.json())
      .then((data) => dispatch(addEmployee(data.employee)))
      .catch((error) => console.error(error));

    setName("");
    setEmail("");
    setPosition("");
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ m: 2 }}>
        <FormControl fullWidth>
          <TextField
            color="primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            label="Name"
            error={errors.name ? true : false}
            helperText={errors.name ?? ""}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            error={errors.email ? true : false}
            helperText={errors.email ?? ""}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            fullWidth
            margin="normal"
            error={errors.position ? true : false}
            helperText={errors.position ?? ""}
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Employee
        </Button>
      </Box>
    </>
  );
};

export default AddEmployeeForm;
