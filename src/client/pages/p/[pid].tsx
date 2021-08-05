import { useRouter } from "next/router";
import App from "../../components/App/App";

const Profile = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <App>
      <p>Post: {pid}</p>
    </App>
  );
};

export default Profile;
