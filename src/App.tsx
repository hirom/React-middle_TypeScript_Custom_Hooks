import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, UserProfiles, loading, error } = useAllUsers();

  const onclickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onclickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: " red " }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {UserProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
