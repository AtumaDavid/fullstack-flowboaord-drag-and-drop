import { Navigate } from "react-router-dom";
import useStore from "../../store";

// eslint-disable-next-line react/prop-types
export default function PublicOnlyRoute({ Component }) {
  const { isLoggedIn } = useStore();
  return isLoggedIn ? <Navigate to="/boards" replace /> : <Component />;
}
