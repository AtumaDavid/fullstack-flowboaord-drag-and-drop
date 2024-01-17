import { Navigate } from "react-router-dom";
import useStore from "../../store";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ Component }) {
  const { isLoggedIn } = useStore();

  return !isLoggedIn ? <Navigate to="/" replace /> : <Component />;
}
