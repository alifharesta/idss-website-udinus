import { useLocation } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { nameMap } from "../../pathMap";

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  console.log("Current pathnames:", pathnames); // Debug log

  const getBreadcrumbName = (path) => {
    if (path.match(/^\/dashboard\/manage-news\/edit\/\d+$/)) {
      return "Edit News";
    }
    console.log("Checking path:", path); // Debug log
    for (let pattern in nameMap) {
      const regexPattern = pattern.replace(/:[^\s/]+/g, "([^/]+)");
      const regex = new RegExp(`^${regexPattern}$`);
      console.log("Regex pattern:", regexPattern); // Debug log
      if (regex.test(path)) {
        console.log("Match found:", pattern); // Debug log
        return nameMap[pattern]; 
      }
    }
    console.log("No match found for:", path); // Debug log
    return "Page Not Found";
  };

  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›">
      <LinkRouter underline="hover" color="inherit" to="/dashboard">
        Dashboard
      </LinkRouter>
      {pathnames.slice(1).map((value, index) => {
        const last = index === pathnames.length - 2;
        const to = `/${pathnames.slice(0, index + 2).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {getBreadcrumbName(to)}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {getBreadcrumbName(to)}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}