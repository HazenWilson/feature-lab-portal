
const Legal = () => {
  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="max-w-4xl mx-auto prose animate-fade-in">
        <h1 className="text-4xl font-bold mb-8">Legal Disclaimer</h1>
        <div className="p-6 border-2 border-black rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Important Notice</h2>
          <p className="mb-4">
            The information provided on this platform is for general informational purposes only. 
            It should not be considered as financial advice or a recommendation to buy or sell any 
            investment or security.
          </p>
          <p className="mb-4">
            Investment involves risk. The value of investments can go up as well as down and you 
            may receive back less than your original investment.
          </p>
          <p className="mb-4">
            Past performance is not indicative of future results. Before making any investment 
            decisions, you should seek advice from an independent financial advisor.
          </p>
          <h3 className="text-xl font-bold mb-3">Use of Platform</h3>
          <p>
            By using this platform, you acknowledge and agree to these terms and conditions. 
            We reserve the right to modify these terms at any time without prior notice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal;
