import React from'react';
import './App.css';

const products = [
  {
    id: 1,
    name: 'App Creation',
    description: 'Get a professional app created for your agency',
    image: 'https://via.placeholder.com/150x150',
    plans: [
      {
        name: 'Starter',
        price: '$299',
        features: [
          '1 Page App',
          'Includes code only',
          'Marketing video',
          'Documentation for the app',
        ],
      },
      {
        name: 'Helping Hand',
        price: '$499',
        features: [
          'Everything from Starter plus:',
          'Hosting and configuration of the app',
          'Github Repository creation',
          'Netify App Hosting',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Knowledge Base Bots',
    description: 'Fine-tune AI models for your agency\'s systems and resources documentation',
    image: 'https://via.placeholder.com/150x150',
    pricing: [
      {
        name: 'Setup Fee',
        price: '$999',
        features: [
          'Onboarding and consulting sessions',
        ],
      },
      {
        name: 'Monthly Fee',
        price: '$49',
        features: [
          'Per Knowledge Base Bot',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Synthetic Data Creation',
    description: 'Get high-quality synthetic data for any topic',
    image: 'https://via.placeholder.com/150x150',
    pricing: [
      {
        name: 'Per 500 Rows of Data',
        price: '$99',
        features: [
          'Quality testing and benchmarks included',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'AI Related Technology Consulting',
    description: 'Get expert consulting services for your agency',
    image: 'https://via.placeholder.com/150x150',
    pricing: [
      {
        name: 'Agency Rate',
        price: '$50',
        features: [
          'Per hour',
          'Client facing experience',
          'Fortune 500 experience',
          'Solution Architect experience',
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="nes-container">
      <header>
        <h1>Applicable Grounded Innovations</h1>
        <h2>AI For Agencies</h2>
      </header>
      <main>
        <section className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              {product.plans && (
                <div className="plans">
                  {product.plans.map((plan) => (
                    <div key={plan.name} className="plan">
                      <h3>{plan.name}</h3>
                      <p>{plan.price}</p>
                      <ul>
                        {plan.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {product.pricing && (
                <div className="pricing">
                  {product.pricing.map((price) => (
                    <div key={price.name} className="price">
                      <h3>{price.name}</h3>
                      <p>{price.price}</p>
                      <ul>
                        {price.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Applicable Grounded Innovations</p>
      </footer>
    </div>
  );
}

export default App;
