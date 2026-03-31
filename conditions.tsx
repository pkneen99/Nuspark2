import { Check } from "lucide-react";

const conditions = [
  "Back Pain",
  "Neck Pain",
  "Headaches & Migraines",
  "Sciatica",
  "Whiplash",
  "Herniated Discs",
  "Shoulder Pain",
  "Hip Pain",
  "Knee Pain",
  "Sports Injuries",
  "Carpal Tunnel",
  "TMJ Disorders",
  "Arthritis",
  "Scoliosis",
  "Posture Problems",
  "Muscle Spasms",
];

export function Conditions() {
  return (
    <section id="conditions" className="py-16 lg:py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Conditions We Treat
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
              Comprehensive Care for a Wide Range of Conditions
            </h2>
            <p className="text-muted-foreground mb-8">
              Our experienced team provides effective treatment for various 
              musculoskeletal conditions. Whether you&apos;re dealing with acute pain 
              from a recent injury or chronic discomfort that&apos;s been affecting your 
              quality of life, we can help.
            </p>
            <p className="text-muted-foreground">
              Don&apos;t see your condition listed? Contact us to discuss how 
              chiropractic care may benefit you. Many patients find relief from 
              conditions they didn&apos;t even realize were treatable.
            </p>
          </div>

          {/* Conditions Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {conditions.map((condition) => (
              <div
                key={condition}
                className="flex items-center gap-3 p-4 rounded-lg bg-white border border-gray-200"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
