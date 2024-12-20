export const validateForm = (name:string, email:string, position:string,setErrors:(err:{ name?: string; email?: string; position?: string })=>void) => {
    const newErrors: { name?: string; email?: string; position?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) {
        newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Invalid email format.";
    }
    if (!position.trim()) newErrors.position = "Position is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};