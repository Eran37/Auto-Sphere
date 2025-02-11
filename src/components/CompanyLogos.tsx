import { useEffect, useState } from "react";
import { getDb, collections } from "../lib/mongodb";
import type { CompanyLogo } from "../types/mongodb";

export default function CompanyLogos() {
  const [logos, setLogos] = useState<CompanyLogo[]>([]);

  useEffect(() => {
    async function fetchLogos() {
      try {
        const db = await getDb();
        const logos = await db
          .collection<CompanyLogo>(collections.companyLogos)
          .find({})
          .sort({ display_order: 1 })
          .toArray();

        setLogos(logos);
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    }

    fetchLogos();
  }, []);

  return (
    <div className="w-full bg-white py-8">
      <div className="relative overflow-hidden mx-auto max-w-7xl">
        <div className="flex animate-scroll gap-12 items-center">
          {/* Double the logos for seamless scrolling */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo._id}-${index}`} className="flex-shrink-0 px-4">
              <img
                src={logo.logo_url}
                alt={logo.name}
                className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
