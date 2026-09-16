import { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { conditions } from '../data/conditions';
import { WhatsAppCTA } from '../components/ui/WhatsAppCTA';
import FinalCTA from '../sections/FinalCTA';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

function ConditionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-brand-gray-light bg-white rounded-sm overflow-hidden mb-4">
      <button 
        className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-ivory transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-xl text-brand-navy">{item.name}</span>
        <span className="text-brand-teal ml-4 flex-shrink-0">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      {isOpen && (
        <div className="p-6 pt-0 bg-brand-ivory/50 border-t border-brand-gray-light">
          <p className="text-brand-slate mt-4 mb-6 leading-relaxed">
            {item.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-brand-slate/70 italic max-w-md">
              * This information is for educational purposes and does not replace an individual medical consultation.
            </span>
            <WhatsAppCTA size="sm" variant="outline" text="Enquire about this condition" message={`Hello, I would like to enquire about a consultation regarding ${item.name}.`} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Conditions() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic
  const filteredConditions = conditions.map(category => {
    const filteredItems = category.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, items: filteredItems };
  }).filter(category => category.items.length > 0);

  return (
    <>
      <section className="pt-20 pb-16 bg-brand-ivory border-b border-brand-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading 
            eyebrow="Clinical Focus"
            title="Conditions We Treat"
            description="Expert diagnosis and management across a wide spectrum of medical conditions."
            centered={true}
            className="mb-0"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Bar */}
          <div className="relative mb-16">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-slate">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search conditions (e.g. Hypertension, Fatigue)..."
              className="block w-full pl-12 pr-4 py-4 border-2 border-brand-gray-light rounded-sm focus:ring-0 focus:border-brand-teal transition-colors text-brand-navy placeholder-brand-slate/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Condition Lists */}
          {filteredConditions.length > 0 ? (
            <div className="space-y-16">
              {filteredConditions.map((category, idx) => (
                <div key={idx}>
                  <h3 className="font-serif text-2xl text-brand-navy mb-6 pb-2 border-b-2 border-brand-teal/20 inline-block">
                    {category.category}
                  </h3>
                  <div>
                    {category.items.map((item, itemIdx) => (
                      <ConditionItem key={itemIdx} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-brand-ivory border border-brand-gray-light rounded-sm">
              <p className="text-xl font-serif text-brand-navy mb-2">No conditions found matching "{searchTerm}"</p>
              <p className="text-brand-slate">Please adjust your search or contact the practice directly.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-6 text-brand-teal hover:text-brand-navy transition-colors font-medium"
              >
                Clear Search
              </button>
            </div>
          )}

        </div>
      </section>

      <FinalCTA />
    </>
  );
}
