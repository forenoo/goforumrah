import "./trending-cities.scss";
import TrendingCityCard from "@/components/ui/trending-city-card";

const trendingCities = [
  {
    id: 1,
    title: "Madinah",
    description: "Flights from Jakarta",
    variant: "1",
  },
  {
    id: 2,
    title: "Madinah",
    description: "Flights from Jakarta",
    variant: "2",
  },
  {
    id: 3,
    title: "Jeddah",
    description: "Flights from Jakarta",
    variant: "3",
  },
];

export default function TrendingCitiesSection() {
  return (
    <section className="trending-cities-section">
      <div className="section-header">
        <h3 className="heading-3">Trending cities</h3>
        <p className="base base--regular">
          Book flights to a destination popular with travelers from Indonesia
        </p>
      </div>

      <div className="trending-city__content">
        {trendingCities.map((city) => (
          <TrendingCityCard
            key={city.id}
            title={city.title}
            description={city.description}
            variant={city.variant}
          />
        ))}
      </div>
    </section>
  );
}
