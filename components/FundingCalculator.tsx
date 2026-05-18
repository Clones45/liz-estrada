"use client";

import { useState, useEffect } from "react";

export default function FundingCalculator() {
  const [amount, setAmount] = useState<number>(50000);
  const [rate, setRate] = useState<number>(8.5);
  const [term, setTerm] = useState<number>(24);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalRepayment, setTotalRepayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  useEffect(() => {
    // Basic amortized loan calculation
    const principal = amount;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
      setTotalRepayment(principal);
      setTotalInterest(0);
      return;
    }

    const payment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
    const totalPaid = payment * numberOfPayments;
    
    setMonthlyPayment(payment);
    setTotalRepayment(totalPaid);
    setTotalInterest(totalPaid - principal);
  }, [amount, rate, term]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#000000" }}>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        
        {/* Controls Section */}
        <div className="p-8 lg:p-10 lg:col-span-3 bg-white">
          <h3 className="font-serif font-bold text-2xl text-gray-900 mb-2">Estimate Your Payments</h3>
          <p className="text-gray-500 text-sm mb-8">Adjust the sliders to estimate your potential funding terms.</p>
          
          <div className="space-y-8">
            {/* Amount */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Funding Amount</label>
                <span className="text-lg font-bold" style={{ color: "#C9A84C" }}>{formatCurrency(amount)}</span>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="500000" 
                step="1000" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A84C]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>$5K</span>
                <span>$500K+</span>
              </div>
            </div>

            {/* Term */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Term Length (Months)</label>
                <span className="text-lg font-bold" style={{ color: "#C9A84C" }}>{term} Months</span>
              </div>
              <input 
                type="range" 
                min="6" 
                max="84" 
                step="6" 
                value={term} 
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A84C]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>6 mos</span>
                <span>84 mos</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Interest Rate</label>
                <span className="text-lg font-bold" style={{ color: "#C9A84C" }}>{rate.toFixed(1)}%</span>
              </div>
              <input 
                type="range" 
                min="4" 
                max="35" 
                step="0.5" 
                value={rate} 
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A84C]"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>4%</span>
                <span>35%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="p-8 lg:p-10 lg:col-span-2 flex flex-col justify-center" style={{ background: "linear-gradient(145deg, #111111 0%, #000000 100%)" }}>
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Estimated Monthly Payment</p>
            <p className="font-serif font-bold text-5xl" style={{ color: "#FFFFFF" }}>
              {formatCurrency(monthlyPayment)}
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Principal Amount</span>
              <span className="text-white font-medium">{formatCurrency(amount)}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Total Interest</span>
              <span className="text-white font-medium">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm font-semibold">Total Repayment</span>
              <span className="font-bold text-lg" style={{ color: "#C9A84C" }}>{formatCurrency(totalRepayment)}</span>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[10px] text-gray-500 leading-relaxed text-center">
              * This calculator provides estimates for informational purposes only. Actual rates, terms, and payments may vary based on credit history, business revenue, and underwriting approval.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
