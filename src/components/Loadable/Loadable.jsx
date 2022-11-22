import Loading from "../Loading/Loading";

export default function Loadable({ isLoading, children }) {
  if (isLoading) return <Loading />;

  return children;
}
