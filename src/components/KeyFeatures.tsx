import { Gamepad2, Clock, Target, Building, TrendingUp } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Fun & intuitive financial learning",
      gradient: "from-primary to-accent"
    },
    {
      icon: Clock,
      title: "Time-based investment mechanics",
      gradient: "from-accent to-primary"
    },
    {
      icon: Target,
      title: "Strategic choices (risk, reward, liquidity)",
      gradient: "from-gold to-gold-light"
    },
    {
      icon: Building,
      title: "Village construction & progression",
      gradient: "from-primary to-gold"
    },
    {
      icon: TrendingUp,
      title: "Advisor upgrades for better investment outcomes",
      gradient: "from-accent to-gold"
    }
  ];

  return (
    <section className="py-24 px-4 hero-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Key Features
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Everything you need to master financial literacy while having fun
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
