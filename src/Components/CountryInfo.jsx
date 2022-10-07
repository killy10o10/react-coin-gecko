import { useLocation } from "react-router-dom";

const CountryInfo = () => {
  const location = useLocation();
  const { state } = location;
  const style = {
    backgroundImage: `url(${state.flag})`,
    height: '100vh',
  };

  return (
    <section className="details-section" style={style}>
      <div className="details">
        <h1>{`${state.name} (${state.alternateName[0]})`}</h1>
      </div>
      <div className="more-details">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">
                More details on
                {` ${state.name}`}
              </th>
              <th scope="col">Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Population</td>
              <td>{state.population.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Land Area</td>
              <td>{state.landMass.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Capital Town</td>
              <td>{state.capital}</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>{Object.values(state.language)[0]}</td>
            </tr>
            <tr>
              <td>Currency</td>
              <td>{`${Object.values(state.currency)[0].name} (${Object.values(state.currency)[0].symbol})`}</td>
            </tr>
            <tr>
              <td>Continent</td>
              <td>{state.continent}</td>
            </tr>
            <tr>
              <td>{state.timeZone.length === 1 ? "Time Zone" : "Time Zones"}</td>
              <td>{`${state.timeZone}`}</td>
            </tr>
            <tr>
              <td>Coat of Arms</td>
              <td><img src={state.coatOfArms} alt="coat os arms" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default CountryInfo;
