import { useLocation } from "react-router-dom";

const CountryInfo = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <>
      <h1>{state.name}</h1>
      <img src={state.flag} alt={state.name} />
    </>
  );
};
export default CountryInfo;
