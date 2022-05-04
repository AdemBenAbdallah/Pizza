import MenuList from "../helpers/MenuList";
import { list } from "../assets.js/list";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Menu() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <Typography
        variant="h4"
        align="center"
        style={{ margin: "20px" }}
        fontFamily="BlinkMacSystemFont"
      >
        Our Menu
      </Typography>
      <Container
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {list.map((item, key) => {
          return (
            <MenuList
              name={item.name}
              desc={item.desc}
              img={item.img}
              price={item.price}
              key={key}
            />
          );
        })}
      </Container>
    </div>
  );
}
