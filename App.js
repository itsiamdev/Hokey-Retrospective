const { useState } = React;

const teamInfo = {
    name: "Ice Warriors",
    city: "Bucharest",
    founded: "2015",
    logo: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=100&h=100&fit=crop&crop=center",
    stadium: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
    facilities: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop"
};

const sponsors = [
    { name: "Energy Drink Co", logo: "https://via.placeholder.com/150x80?text=Energy+Drink" },
    { name: "Sport Equipment Inc", logo: "https://via.placeholder.com/150x80?text=Sport+Equip" },
    { name: "Local Bank", logo: "https://via.placeholder.com/150x80?text=Local+Bank" },
    { name: "Tech Solutions", logo: "https://via.placeholder.com/150x80?text=Tech+Sol" }
];

const merchandise = [
    { name: "Team Jersey", price: "€45", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop" },
    { name: "Hockey Stick", price: "€89", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop" },
    { name: "Team Cap", price: "€25", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&h=200&fit=crop" },
    { name: "Water Bottle", price: "€15", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&h=200&fit=crop" }
];

const standings = [
    { position: 1, team: "Ice Warriors", points: 45, games: 20 },
    { position: 2, team: "Frost Giants", points: 42, games: 20 },
    { position: 3, team: "Polar Bears", points: 38, games: 20 },
    { position: 4, team: "Snow Leopards", points: 35, games: 20 },
    { position: 5, team: "Arctic Wolves", points: 32, games: 20 }
];

const news = [
    { title: "New Player Acquisition", date: "2024-01-15", content: "We welcome our new forward from Canada!" },
    { title: "Championship Victory", date: "2024-01-10", content: "Ice Warriors win the winter championship!" },
    { title: "Youth Academy Success", date: "2024-01-05", content: "Our U18 team reaches finals!" }
];

const players = [
    { name: "Alex Johnson", position: "Forward", number: 10, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", goals: 25, assists: 15 },
    { name: "Mike Smith", position: "Defense", number: 5, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", goals: 5, assists: 20 },
    { name: "Chris Brown", position: "Goalie", number: 1, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", saves: 95.2 },
    { name: "David Wilson", position: "Forward", number: 12, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", goals: 18, assists: 22 },
    { name: "Tom Davis", position: "Defense", number: 8, image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face", goals: 3, assists: 18 },
    { name: "John Miller", position: "Forward", number: 15, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", goals: 20, assists: 12 },
    { name: "Sarah Lee", position: "Forward", number: 7, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", goals: 22, assists: 16 },
    { name: "Robert Taylor", position: "Defense", number: 3, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", goals: 4, assists: 15 },
    { name: "Emma Garcia", position: "Goalie", number: 30, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face", saves: 92.8 }
];

function PlayerCard({ player }) {
    return (
        <div className="player-card">
            <img src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
            <p>Position: {player.position}</p>
            <p>Number: {player.number}</p>
            <div className="stats">
                {player.position === 'Goalie' ? (
                    <p>Save %: {player.saves}%</p>
                ) : (
                    <>
                        <p>Goals: {player.goals}</p>
                        <p>Assists: {player.assists}</p>
                    </>
                )}
            </div>
        </div>
    );
}

function Navigation({ activeSection, setActiveSection }) {
    const sections = ['home', 'players', 'stadium', 'sponsors', 'store', 'standings', 'news'];
    
    return (
        <nav className="navigation">
            {sections.map(section => (
                <button
                    key={section}
                    className={activeSection === section ? 'nav-button active' : 'nav-button'}
                    onClick={() => setActiveSection(section)}
                >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
            ))}
        </nav>
    );
}

function HomeSection() {
    return (
        <div className="section">
            <h2>Welcome to {teamInfo.name}</h2>
            <p>Champions of the ice, leaders on and off the rink.</p>
            <div className="hero-images">
                <div className="image-card">
                    <img src={teamInfo.stadium} alt="Our Stadium" className="hero-image" />
                    <h3>Ice Arena Bucharest</h3>
                    <p>State-of-the-art facility with capacity for 8,000 fans</p>
                </div>
                <div className="image-card">
                    <img src={teamInfo.facilities} alt="Club Facilities" className="hero-image" />
                    <h3>Training Complex</h3>
                    <p>Modern training facilities and youth academy</p>
                </div>
            </div>
            <div className="stats-overview">
                <div className="stat-card">
                    <h3>15</h3>
                    <p>League Titles</p>
                </div>
                <div className="stat-card">
                    <h3>500+</h3>
                    <p>Games Played</p>
                </div>
                <div className="stat-card">
                    <h3>50K</h3>
                    <p>Fans Worldwide</p>
                </div>
            </div>
        </div>
    );
}

function PlayersSection() {
    return (
        <div className="section">
            <h2>Our Team</h2>
            <div className="team-grid">
                {players.map((player, index) => (
                    <PlayerCard key={index} player={player} />
                ))}
            </div>
        </div>
    );
}

function SponsorsSection() {
    return (
        <div className="section">
            <h2>Our Sponsors</h2>
            <p>Thank you to our valued partners who make our success possible</p>
            <div className="sponsors-grid">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="sponsor-card">
                        <img src={sponsor.logo} alt={sponsor.name} />
                        <h3>{sponsor.name}</h3>
                        <p>Official Partner</p>
                    </div>
                ))}
            </div>
            <div className="sponsor-showcase">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop" alt="Sponsor Event" className="showcase-image" />
                <div className="showcase-text">
                    <h3>Partnership Highlights</h3>
                    <p>Our sponsors join us for exclusive events and team activities throughout the season.</p>
                </div>
            </div>
        </div>
    );
}

function StoreSection() {
    return (
        <div className="section">
            <h2>Official Merchandise</h2>
            <div className="store-grid">
                {merchandise.map((item, index) => (
                    <div key={index} className="store-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p className="price">{item.price}</p>
                        <button className="buy-button">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function StandingsSection() {
    return (
        <div className="section">
            <h2>League Standings</h2>
            <table className="standings-table">
                <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Team</th>
                        <th>Points</th>
                        <th>Games</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((team, index) => (
                        <tr key={index} className={team.team === teamInfo.name ? 'highlight' : ''}>
                            <td>{team.position}</td>
                            <td>{team.team}</td>
                            <td>{team.points}</td>
                            <td>{team.games}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function NewsSection() {
    return (
        <div className="section">
            <h2>Latest News & Transfers</h2>
            <div className="news-grid">
                {news.map((item, index) => (
                    <div key={index} className="news-item">
                        <img src={`https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop&crop=center`} alt="News" className="news-image" />
                        <div className="news-content">
                            <h3>{item.title}</h3>
                            <p className="date">{item.date}</p>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="transfer-highlights">
                <h3>Transfer Window Updates</h3>
                <div className="transfer-cards">
                    <div className="transfer-card incoming">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="New Player" />
                        <div>
                            <h4>John Anderson</h4>
                            <p>Incoming • Forward</p>
                        </div>
                    </div>
                    <div className="transfer-card outgoing">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="Departing Player" />
                        <div>
                            <h4>Mike Johnson</h4>
                            <p>Outgoing • Defense</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    const [activeSection, setActiveSection] = useState('home');
    
    const renderSection = () => {
        switch(activeSection) {
            case 'home': return <HomeSection />;
            case 'players': return <PlayersSection />;
            case 'stadium': return <HomeSection />; // Reuse for now
            case 'sponsors': return <SponsorsSection />;
            case 'store': return <StoreSection />;
            case 'standings': return <StandingsSection />;
            case 'news': return <NewsSection />;
            default: return <HomeSection />;
        }
    };
    
    return (
        <div className="app">
            <header className="header">
                <div className="team-info">
                    <img src={teamInfo.logo} alt={teamInfo.name} className="team-logo" />
                    <div>
                        <h1>{teamInfo.name}</h1>
                        <p>{teamInfo.city} • Founded {teamInfo.founded}</p>
                    </div>
                </div>
                <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
            </header>
            {renderSection()}
            <footer className="footer">
                <p>Contact us: info@icewarriors.com | Phone: +40 123 456 789</p>
                <p>&copy; 2024 {teamInfo.name}. All rights reserved.</p>
            </footer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));