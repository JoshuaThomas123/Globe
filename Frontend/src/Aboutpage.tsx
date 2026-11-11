import { useEffect, useState } from "react";
import Globe from "react-globe.gl";

export default function App() {
  const [countries, setCountries] = useState<object[]>([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson")
      .then((r) => r.json())
      .then((d) => setCountries(d.features));
  }, []);

  return (
    <Globe
      globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      polygonsData={countries}
      polygonCapColor={() => "rgba(0,0,0,0)"}
      polygonStrokeColor={() => "#fff"}
      polygonLabel={(d: any) => d.properties.NAME}
      onPolygonClick={(d) => console.log(d)}
    />
  );
}
