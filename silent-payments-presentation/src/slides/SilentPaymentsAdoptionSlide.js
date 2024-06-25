import React from 'react';
import {Briefcase, Users, Cog, AlertTriangle, Check} from 'lucide-react';

export default function SilentPaymentsAdoptionSlide() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center text-green-600">Silent Payments: Adoption and
                Integration</h1>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2 flex items-center">
                        <Briefcase className="text-blue-500 mr-2" size={24}/>
                        Implementation Steps
                    </h2>
                    <ul className="space-y-2">
                        {[
                            "Wallet software updates to support Silent Payments",
                            "Exchange and service provider adoption",
                            "User education and awareness",
                            "Development of user-friendly interfaces",
                            "Development of efficient scanning tools for recipients"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center">
                                <Cog className="text-gray-500 mr-2" size={16}/>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2 flex items-center">
                        <Check className="text-green-500 mr-2" size={24}/>
                        Adoption Advantages
                    </h2>
                    <ul className="space-y-2">
                        {[
                            "Compatible with existing Bitcoin infrastructure",
                            "No changes required to Bitcoin Core or consensus rules",
                            "Functions as regular transactions for miners and nodes",
                            "Can be gradually adopted without breaking changes",
                            "Improves privacy without compromising blockchain analysis for non-participants"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center">
                                <Check className="text-green-500 mr-2" size={16}/>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <Users className="text-purple-500 mr-2" size={24}/>
                    Key Players in Adoption
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        {
                            name: "Wallet Developers",
                            importance: "Must implement Silent Payments features in user-friendly interfaces, crucial for end-user adoption."
                        },
                        {
                            name: "Bitcoin Core Developers",
                            importance: "No changes required to Bitcoin Core, but may provide reference implementations or optimizations in Core wallet."
                        },
                        {
                            name: "Exchanges",
                            importance: "Play a vital role in supporting Silent Payments for deposits and withdrawals, increasing liquidity and usability."
                        },
                        {
                            name: "Payment Processors",
                            importance: "Essential for integrating Silent Payments into existing payment infrastructures, facilitating merchant adoption."
                        },
                        {
                            name: "Miners",
                            importance: "No changes required; Silent Payments appear as regular transactions."
                        },
                        {
                            name: "Regulators",
                            importance: "May require clarification on how Silent Payments affect AML/KYC/CTF compliance for regulated entities."
                        }
                    ].map((player, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded">
                            <h3 className="font-semibold text-lg mb-2">{player.name}</h3>
                            <p className="text-sm text-gray-700">{player.importance}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}