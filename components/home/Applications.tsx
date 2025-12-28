import { Ambulance, Flame, Shield, Siren, Stethoscope, TrafficCone } from 'lucide-react';

export function Applications() {
    const apps = [
        { icon: <Ambulance className="text-alert-high" />, name: "Medical Emergencies" },
        { icon: <Flame className="text-alert-medium" />, name: "Fire Outbreaks" },
        { icon: <Shield className="text-primary" />, name: "Crime Reporting" },
        { icon: <TrafficCone className="text-alert-low" />, name: "Traffic Accidents" },
        { icon: <Siren className="text-alert-critical" />, name: "Disaster Relief" },
        { icon: <Stethoscope className="text-info" />, name: "Health Crises" },
    ];

    return (
        <section className="py-24 bg-bg-main">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Applications</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        PulstriX is designed to handle a wide range of critical situations.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {apps.map((app, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-bg-secondary rounded-xl border border-border-main hover:border-primary transition-colors group">
                            <div className="mb-4 p-3 bg-bg-main rounded-full group-hover:scale-110 transition-transform">
                                {app.icon}
                            </div>
                            <span className="text-white font-medium text-center text-sm">{app.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
