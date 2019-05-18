import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
// import Link from '@material-ui/core/Link';
import Workspace from "./../workspace";
import Login from "./../login";
import Home from "./../home";
import Omoss from "./../omoss";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// Har forsøkt å få denne til å fungere men kan hende vi fjerner denne.
// Kan bli neklere å implementere Style på egenhånd
// -----------------------------------------------------------------------------------------------------

// function AppAppBar(props){
//     const { classes } = props;
//     return (
//         <AppBar position="fixed">
//             <Toolbar>
//                 <Router>
//                     <div>
//                         <nav>
//                             <ul>
//                                 <li>
//                                     <Link to="/">Home</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/workspace">Workspace</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/omoss">Om oss</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/dokumenter">Dokumenter</Link>
//                                 </li>
//                             </ul>
//                         </nav>
//                         <Route path="/" exact component={Home} />
//                         <Route path="/workspace" exact component={Workspace} />
//                         <Route path="/authentication" exact component={Login} />
//                         <Route path="/omoss"exact component={Omoss} />
//                         <Route path="/dokumenter" exact component={Dokumenter} />
//                     </div>
//                 </Router>
//             </Toolbar>
//         </AppBar>
//     )
// }

// const styles = theme => ({
//   title: {
//     fontSize: 24,
//   },
//   placeholder: toolbarStyles(theme).root,
//   toolbar: {
//     justifyContent: 'space-between',
//   },
//   left: {
//     flex: 1,
//   },
//   leftLinkActive: {
//     color: theme.palette.common.white,
//   },
//   right: {
//     flex: 1,
//     display: 'flex',
//     justifyContent: 'flex-end',
//   },
//   rightLink: {
//     fontSize: 16,
//     color: theme.palette.common.white,
//     // marginLeft: theme.spacing(8),
//   },
//   leftLink: {
//     fontSize: 16,
//     // color: theme.palette.common.white,
//     color: theme.palette.primary.light,
//     // marginLeft: theme.spacing(8),
//   },
//   linkSecondary: {
//     color: theme.palette.secondary.main,
//   },
// });

// function AppAppBar(props) {
//   const { classes } = props;
//
//   return (
//     <div>
//       <AppBar position="fixed">
//         <Toolbar className={classes.toolbar}>
//           <div className={classes.left} />
//           <Link
//             variant="h6"
//             underline="none"
//             color="inherit"
//             className={classes.title}
//             href="/premium-themes/onepirate"
//           >
//             {'onepirate'}
//           </Link>
//           <div className={classes.right}>
//             <Link
//               color="inherit"
//               variant="h6"
//               underline="none"
//               className={classes.rightLink}
//               href="../../Authentication"
//             >
//               {'Login'}
//             </Link>
//             <Link
//               variant="h6"
//               underline="none"
//               className={classes.leftLink}
//               href="../../workspace"
//             >
//               {'Workspace'}
//             </Link>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <div className={classes.placeholder} />
//     </div>
//   );
// }
//
// AppAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default AppAppBar;
