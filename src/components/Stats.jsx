import './Stats.css';

export default function Stats() {
  const stats = [
    {
      number: '500+',
      label: 'Properties Listed',
      icon: '🏠',
    },
    {
      number: '10K+',
      label: 'Happy Clients',
      icon: '👥',
    },
    {
      number: '5-Star',
      label: 'Client Rating',
      icon: '⭐',
    },
    {
      number: '24/7',
      label: 'Customer Support',
      icon: '💬',
    },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}