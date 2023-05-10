import HeaderComponent from "../components/HeaderTabBar/HeaderComponent";
import TabBarComponent from "../components/HeaderTabBar/TabBarComponent";
import TabBarRoutes from "../routes/TabBarRoutes";

const MainPage = () => {
  return (
    <>
      <HeaderComponent />
      <TabBarRoutes />
      <TabBarComponent />
    </>
  )
}

export default MainPage;