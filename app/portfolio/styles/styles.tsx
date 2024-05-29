export const headerStyle: React.CSSProperties = {
  color: "#66fcf1",
  height: 64,
  backgroundImage:
    "linear-gradient(45deg, rgba(41,72,112,1) 33%, rgba(11,12,16,1) 71%)",
  position: "sticky",
  top: "0px",
  fontSize: "2.5rem",
  zIndex: "999",
  justifyContent: "space-between",
  display: "flex",
  borderBottomLeftRadius: "25%",
  borderBottomRightRadius: "25%",
  fontFamily: "Lato, sans-serif",
  borderColor: "#000000",
};
export const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: "10vh",
  lineHeight: 1.6,
  color: "#fff",
  backgroundImage:
    "linear-gradient(230deg, rgba(41,72,112,1) 29%, rgba(11,12,16,1) 72%)",
  fontFamily: "Lato, sans-serif",
};

export const skillsStyle: React.CSSProperties = {
  ...contentStyle,
  padding: "1rem",
};

export const projectsStyle: React.CSSProperties = {
  ...contentStyle,
  padding: "1rem",
};

export const footerStyle: React.CSSProperties = {
  minHeight: "20vh",
  textAlign: "center",
  color: "#000000",
  backgroundImage:
    "linear-gradient(230deg, rgba(41,72,112,1) 29%, rgba(11,12,16,1) 72%)",
  fontSize: "20px",
};
