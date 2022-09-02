import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionA from "../../components/molecules/Home/SectionA";
import SectionB from "../../components/molecules/Home/SectionB";
import SectionC from "../../components/molecules/Home/SectionC";
import SectionD from "../../components/molecules/Home/SectionD";
import SectionE from "../../components/molecules/Home/SectionE";
import SectionF from "../../components/molecules/Home/SectionF";
import SectionG from "../../components/molecules/Home/SectionG";
import SectionH from "../../components/molecules/Home/SectionH";
import { getServices } from "../../redux/action/service";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices("", true));
  }, []);

  const { services } = useSelector((state) => state.services);

  return (
    <>
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <SectionG />
      <SectionH />
    </>
  );
};

export default Home;
