import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
 
type Country = {
  properties: { ADM0_A3: string; NAME: string };
};
 
export default function App() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [countries, setCountries] = useState<object[]>([]);
  const [selected, setSelected] = useState<Country | null>(null);
 
  // Load country shapes
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((r) => r.json())
      .then((d) => setCountries(d.features));
  }, []);
 
  // Make the globe fill the middle area
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
 
  const btn = "w-24 rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-400";
 
  return (
    <div className="grid h-screen grid-cols-[1fr_320px] bg-neutral-900">
      {/* Left: globe with the four buttons around it */}
      <div className="flex min-h-0 flex-col">
        <div className="flex justify-around p-6">
          <button className={btn}>Create</button>
          <button className={btn}>Edit</button>
        </div>
 
        <div ref={boxRef} className="min-h-0 flex-1 overflow-hidden">
          {size.width > 0 && size.height > 0 && (
            <Globe
              width={size.width}
              height={size.height}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              polygonsData={countries}
              polygonCapColor={() => "rgba(0,0,0,0)"}
              polygonStrokeColor={() => "rgba(255,255,255,0.4)"}
              polygonLabel={(d: any) => d.properties.NAME}
              onPolygonClick={(d: object) => setSelected(d as Country)}
            />
          )}
        </div>
 
        <div className="flex justify-around p-6">
          <button className={btn}>View</button>
          <button className={btn}>Delete</button>
        </div>
      </div>
 
      {/* Right: description panel */}
      <aside className="overflow-y-auto bg-black p-5 text-white">
        <h2 className="text-sm text-neutral-400">Description:</h2>
 
        {!selected ? (
          <p className="mt-6 text-sm text-neutral-500">Placeholder</p>
        ) : (
          <div className="mt-6">
            <p className="text-lg font-semibold">{selected.properties.NAME}</p>
            {selected.properties.ADM0_A3 === "GBR" && (
              <h1 className="mt-3 text-3xl font-bold">Hello</h1>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
 