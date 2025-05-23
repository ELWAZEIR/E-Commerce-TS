import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import styles from "./styles.module.css";
import Header from "@components/common/header/Header";
import Footer from "@components/common/footer/Footer";
const { container, wrapper } = styles;

const MainLayout = () => {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;