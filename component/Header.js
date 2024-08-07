// import React from "react";
// import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
// import { Notifications, Mail } from "@mui/icons-material";

// const Header = () => {
//   return (
//     <AppBar position="static" sx={{ background: "#333" }}>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Dashboard
//         </Typography>
//         <IconButton color="inherit">
//           <Mail />
//         </IconButton>
//         <IconButton color="inherit">
//           <Notifications />
//         </IconButton>
//         <Avatar alt="User" src="/path/to/avatar.jpg" />
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>FitFeo</div>
      <input type="text" className={styles.searchBar} placeholder="Search..." />
      <div className={styles.userProfile}>
        <div>User</div>
        <img src="https://via.placeholder.com/40" alt="User" />
      </div>
    </div>
  );
};

export default Header;

