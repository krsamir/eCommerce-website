import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Samir Kumar",
    email: "samir@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Ajay Kumar",
    email: "ajay@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
