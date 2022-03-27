import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "test",
  email: "123@gmail.com",
  address: "testaddress"
};
export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
