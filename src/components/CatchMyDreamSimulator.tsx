import React, { useState } from 'react';
import { 
  GraduationCap, 
  Building2, 
  Coins, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Search, 
  Sliders, 
  Home, 
  Briefcase, 
  Bus,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { UNIVERSITIES_DATA } from '../data/portfolioData';
import { UniversityOption } from '../types';

export const CatchMyDreamSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'universities' | 'housing' | 'jobs' | 'commute'>('universities');
  const [selectedCountry, setSelectedCountry] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [userIelts, setUserIelts] = useState<number>(7.0);
  const [selectedUni, setSelectedUni] = useState<UniversityOption>(UNIVERSITIES_DATA[0]);
  const [copiedClone, setCopiedClone] = useState(false);

  // Housing Calculator state
  const [housingType, setHousingType] = useState<'shared' | 'studio' | 'dorm'>('shared');
  const [includeUtilities, setIncludeUtilities] = useState(true);

  // Part-Time Job State
  const [weeklyHours, setWeeklyHours] = useState(20);
  const [hourlyWage, setHourlyWage] = useState(15);

  const countries = ['All', 'Germany', 'Canada', 'United States', 'Sweden', 'Singapore', 'Australia'];

  const filteredUniversities = UNIVERSITIES_DATA.filter((uni) => {
    const matchesCountry = selectedCountry === 'All' || uni.country === selectedCountry;
    const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          uni.popularPrograms.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCountry && matchesSearch;
  });

  const handleCopyClone = () => {
    navigator.clipboard.writeText('git clone https://github.com/Akashkeluth03/catchmydream1.git');
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2200);
  };

  // Calculate estimated monthly rent based on type
  const getEstimatedRent = (baseStr: string, type: 'shared' | 'studio' | 'dorm') => {
    if (type === 'shared') return '€550 - €750 / mo';
    if (type === 'studio') return '€850 - €1,200 / mo';
    return '€400 - €550 / mo (Subsidized)';
  };

  const monthlyJobEarnings = weeklyHours * hourlyWage * 4.2;

  return (
    <section id="catch-my-dream" className="py-16 md:py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Featured Flagship Project
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display flex items-center gap-3">
              <span>Catch My Dream</span>
              <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800">
                v1.2 Full-Stack
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-2xl">
              A comprehensive global portal assisting international study-abroad aspirants with university insights, verified housing accommodations, part-time jobs, and commute calculations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyClone}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-neutral-300 transition-colors"
              title="Copy Git Clone Command"
            >
              {copiedClone ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">git clone copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>git clone catchmydream1</span>
                </>
              )}
            </button>

            <a
              href="https://github.com/Akashkeluth03/catchmydream1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-sm shadow-blue-500/20"
            >
              <span>Explore Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Feature Nav Segmented Bar */}
        <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('universities')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'universities'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span>University Insights & Cutoffs</span>
          </button>

          <button
            onClick={() => setActiveTab('housing')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'housing'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Housing & Rent Estimator</span>
          </button>

          <button
            onClick={() => setActiveTab('jobs')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'jobs'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Student Wage & Budget Offset</span>
          </button>

          <button
            onClick={() => setActiveTab('commute')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              activeTab === 'commute'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Bus className="w-3.5 h-3.5 text-cyan-400" />
            <span>Commute & Transit Calculator</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 md:p-6">
          
          {/* TAB 1: University Explorer */}
          {activeTab === 'universities' && (
            <div>
              {/* Filter controls */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-6">
                <div className="md:col-span-5 relative">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search university or program (e.g. Robotics, CS)..."
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-4 flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                  <span className="text-xs text-neutral-400 shrink-0">Country:</span>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-neutral-200 focus:outline-none focus:border-blue-500"
                  >
                    {countries.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-3 flex items-center justify-end gap-2 text-xs text-neutral-400">
                  <span>Your IELTS:</span>
                  <input
                    type="number"
                    step="0.5"
                    min="5.0"
                    max="9.0"
                    value={userIelts}
                    onChange={(e) => setUserIelts(parseFloat(e.target.value) || 6.5)}
                    className="w-16 bg-neutral-950 border border-neutral-800 rounded-lg px-2 py-1 text-xs text-center font-mono text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Universities List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUniversities.map((uni) => {
                  const meetsIelts = userIelts >= uni.ieltsMin;
                  return (
                    <div
                      key={uni.id}
                      onClick={() => setSelectedUni(uni)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        selectedUni.id === uni.id 
                          ? 'bg-neutral-800/90 border-blue-500/60 shadow-md shadow-blue-500/10' 
                          : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-sm font-bold text-white flex items-center gap-1.5 truncate">
                            <span>{uni.flag}</span>
                            <span className="truncate">{uni.name}</span>
                          </span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono shrink-0 ${
                            meetsIelts 
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
                              : 'bg-amber-950 text-amber-300 border border-amber-800'
                          }`}>
                            {meetsIelts ? 'Eligible' : 'Reach'}
                          </span>
                        </div>

                        <div className="text-xs text-neutral-400 mb-3">
                          {uni.country} · Acceptance: <span className="text-neutral-200">{uni.acceptanceRate}</span>
                        </div>

                        <div className="space-y-1.5 text-xs">
                          <div className="flex justify-between text-neutral-400">
                            <span>Tuition:</span>
                            <span className="text-neutral-200 font-medium">{uni.tuitionPerYear}</span>
                          </div>
                          <div className="flex justify-between text-neutral-400">
                            <span>IELTS Requirement:</span>
                            <span className="font-mono text-neutral-200">{uni.ieltsMin} Min</span>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-neutral-800/80">
                          <span className="text-[11px] text-neutral-400 block mb-1">Key Programs:</span>
                          <div className="flex flex-wrap gap-1 text-[11px] text-neutral-400">
                            {uni.popularPrograms.map(p => (
                              <span key={p} className="text-neutral-300">
                                {p} <span className="text-neutral-600">·</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-2 text-[11px] text-blue-400 flex items-center justify-end gap-1 font-medium">
                        <span>Select for Housing & Wage Calc →</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: Housing & Rent Estimator */}
          {activeTab === 'housing' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    Verified Housing Simulator for {selectedUni.name}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Calculates average rental accommodations within 30 minutes commute radius of campus.
                  </p>
                </div>

                {/* Housing Type Selection */}
                <div>
                  <label className="text-xs text-neutral-300 block mb-2 font-medium">
                    Choose Accommodation Type:
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setHousingType('shared')}
                      className={`p-3 rounded-xl border text-left text-xs transition-colors ${
                        housingType === 'shared'
                          ? 'bg-neutral-800 border-emerald-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Home className="w-4 h-4 text-emerald-400 mb-1" />
                      <div className="font-semibold text-white">Shared Flat</div>
                      <div className="text-[11px] text-neutral-400">2-3 student flatmates</div>
                    </button>

                    <button
                      onClick={() => setHousingType('studio')}
                      className={`p-3 rounded-xl border text-left text-xs transition-colors ${
                        housingType === 'studio'
                          ? 'bg-neutral-800 border-emerald-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Building2 className="w-4 h-4 text-cyan-400 mb-1" />
                      <div className="font-semibold text-white">Private Studio</div>
                      <div className="text-[11px] text-neutral-400">Entire 1-room apartment</div>
                    </button>

                    <button
                      onClick={() => setHousingType('dorm')}
                      className={`p-3 rounded-xl border text-left text-xs transition-colors ${
                        housingType === 'dorm'
                          ? 'bg-neutral-800 border-emerald-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4 text-blue-400 mb-1" />
                      <div className="font-semibold text-white">Campus Dorm</div>
                      <div className="text-[11px] text-neutral-400">Subsidized student hall</div>
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Estimated Monthly Rent:</span>
                    <span className="text-white font-mono font-bold">
                      {getEstimatedRent(selectedUni.avgRent, housingType)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Utilities (Heating, Wi-Fi, Water):</span>
                    <span className="text-neutral-300 font-mono">~€120 / month</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Security Deposit (Refundable):</span>
                    <span className="text-neutral-300 font-mono">2 months base rent</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-800 text-emerald-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Catch My Dream Scam Verification:</span>
                    </span>
                    <span className="font-semibold">Passed (100% Verified)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-white mb-2">Housing Tips for {selectedUni.country}</div>
                  <ul className="text-xs text-neutral-400 space-y-2 list-disc list-inside">
                    <li>Apply to official student unions (e.g. Studentenwerk in Germany) 6 months prior to arrival.</li>
                    <li>Always check city registration eligibility (Anmeldung) before signing rental leases.</li>
                    <li>Catch My Dream provides real photos and video tours verified by local student ambassadors.</li>
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 text-xs text-neutral-400">
                  Target Destination: <span className="text-white font-medium">{selectedUni.name}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Student Wage & Budget Offset */}
          {activeTab === 'jobs' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  Student Visa Part-Time Wage Calculator ({selectedUni.country})
                </h3>
                <p className="text-xs text-neutral-400">
                  Calculate your legally permitted earnings to offset living costs according to student visa regulations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-neutral-300 mb-1">
                      <span>Weekly Working Hours (Legal Limit: 20 hrs):</span>
                      <span className="font-mono text-white font-bold">{weeklyHours} hrs/week</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="20"
                      step="1"
                      value={weeklyHours}
                      onChange={(e) => setWeeklyHours(parseInt(e.target.value))}
                      className="w-full accent-blue-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-neutral-300 mb-1">
                      <span>Hourly Wage ($ / €):</span>
                      <span className="font-mono text-white font-bold">${hourlyWage} / hr</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="35"
                      step="1"
                      value={hourlyWage}
                      onChange={(e) => setHourlyWage(parseInt(e.target.value))}
                      className="w-full accent-blue-500 cursor-pointer"
                    />
                  </div>

                  <div className="text-xs text-neutral-400 bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                    <span className="font-semibold text-white block mb-1">Legal Status for {selectedUni.name}:</span>
                    {selectedUni.partTimeMinWage}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                      Estimated Monthly Student Income
                    </div>
                    <div className="text-3xl font-extrabold text-emerald-400 font-mono">
                      ~${Math.round(monthlyJobEarnings)} / month
                    </div>
                    <p className="text-xs text-neutral-400 mt-2">
                      Covers approximately <span className="text-white font-semibold">80% - 100%</span> of typical monthly student food and housing in {selectedUni.country}.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                    <span>Common Roles:</span>
                    <span className="text-neutral-200">Campus TA, Library Staff, Cafes, Tech Internships</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Commute & Transit */}
          {activeTab === 'commute' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-white">
                  Student Commute & Metro Pass Integration
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Catch My Dream calculates route times between student housing districts and university lecture halls, integrating regional transit discounts.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white">Student Semester Ticket</div>
                      <div className="text-neutral-400 text-[11px]">Unlimited subway, bus, tram network</div>
                    </div>
                    <span className="font-mono text-emerald-400 font-bold">Included or ~€29-€50/mo</span>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white">Bicycle Sharing & Dedicated Lanes</div>
                      <div className="text-neutral-400 text-[11px]">Campus bike swap network</div>
                    </div>
                    <span className="font-mono text-cyan-400 font-bold">~€5 - €10/mo</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-neutral-400 mb-1">Architecture Preview</div>
                  <div className="text-sm font-semibold text-white mb-2">
                    Catch My Dream Technical Highlights
                  </div>
                  <div className="space-y-2 text-xs text-neutral-400">
                    <div><span className="text-blue-400 font-mono">React:</span> SPA interface with geo-filtering</div>
                    <div><span className="text-emerald-400 font-mono">Express & Node:</span> REST APIs for housing validation</div>
                    <div><span className="text-amber-400 font-mono">MongoDB:</span> Indexed university cutoffs and visa datasets</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800">
                  <a
                    href="https://github.com/Akashkeluth03/catchmydream1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1.5"
                  >
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
