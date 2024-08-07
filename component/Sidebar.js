// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import {
//   Home,
//   Dashboard,
//   ListAlt,
//   BarChart,
//   Settings,
// } from "@mui/icons-material";

// const Sidebar = () => {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: {
//           width: 240,
//           boxSizing: "border-box",
//           background: "#2c2c2c",
//           color: "#fff",
//         },
//       }}
//     >
//       <List>
//         <ListItem button>
//           <ListItemIcon>
//             <Home sx={{ color: "#fff" }} />
//           </ListItemIcon>
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <Dashboard sx={{ color: "#fff" }} />
//           </ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <ListAlt sx={{ color: "#fff" }} />
//           </ListItemIcon>
//           <ListItemText primary="Orders" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <BarChart sx={{ color: "#fff" }} />
//           </ListItemIcon>
//           <ListItemText primary="Reports" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <Settings sx={{ color: "#fff" }} />
//           </ListItemIcon>
//           <ListItemText primary="Settings" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faTruck,
  faTimes,
  faChartLine,
  faBox,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Dashboard</h2>
      <ul className={styles.navLinks}>
        <li>
          <a href="#totalOrders">
            <FontAwesomeIcon icon={faClipboardList} />
          </a>
        </li>
        <li>
          <a href="#totalDelivered">
            <FontAwesomeIcon icon={faTruck} />
          </a>
        </li>
        <li>
          <a href="#totalCancelled">
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </li>
        <li>
          <a href="#netProfit">
            <FontAwesomeIcon icon={faChartLine} />
          </a>
        </li>
        <li>
          <a href="#activity">
            <FontAwesomeIcon icon={faBox} />
          </a>
        </li>
        <li>
          <a href="#recentOrders">
            <FontAwesomeIcon icon={faClipboardList} />
          </a>
        </li>
        <li>
          <a href="#customerFeedback">
            <FontAwesomeIcon icon={faComments} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

