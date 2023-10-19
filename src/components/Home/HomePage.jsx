import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const naigate = useNavigate();
  useEffect(() => {
    if (!user && user?.access_token) {
      naigate("/login");
    }
  }, []);
  return <></>;
};
export default HomePage;
