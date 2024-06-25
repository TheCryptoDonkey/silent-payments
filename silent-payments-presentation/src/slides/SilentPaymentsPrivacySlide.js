import React from 'react';
import { Shield, Eye, EyeOff, LinkIcon, Unlink, Search } from 'lucide-react';

export default function SilentPaymentsPrivacySlide() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center text-purple-600">Enhanced Privacy in Silent Payments</h1>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2 flex items-center">
                        <Shield className="text-green-500 mr-2" size={24} />
                        Key Privacy Features
                    </h2>
                    <ul className="space-y-3">
                        {[
                            ["No Address Reuse", "Each payment uses a unique output, preventing address clustering"],
                            ["Unlinkable Payments", "Transactions to the same recipient appear unrelated on the blockchain"],
                            ["Hidden Recipient", "Sender doesn't need to know recipient's actual address"],
                            ["Stealth Addresses", "Payments are sent to one-time addresses derived from recipient's public keys"]
                        ].map(([title, description], index) => (
                            <li key={index} className="flex flex-col">
                                <span className="font-semibold">{title}</span>
                                <span className="text-sm text-gray-600">{description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2 flex items-center">
                        <EyeOff className="text-blue-500 mr-2" size={24} />
                        What This Means
                    </h2>
                    <ul className="space-y-3">
                        {[
                            ["Improved Fungibility", "All bitcoins remain equally valuable, as their history is less traceable"],
                            ["Donation Privacy", "Public addresses can receive multiple payments without revealing total received"],
                            ["Reduced Surveillance", "Harder for third parties to track payment patterns and balances"],
                            ["Enhanced Security", "Lower risk of targeted attacks based on known balances or transaction history"]
                        ].map(([title, description], index) => (
                            <li key={index} className="flex flex-col">
                                <span className="font-semibold">{title}</span>
                                <span className="text-sm text-gray-600">{description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2 flex items-center">
                    <Search className="text-purple-500 mr-2" size={24} />
                    Comparison with Traditional Bitcoin Transactions
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold mb-1 flex items-center">
                            <Eye className="text-red-500 mr-2" size={20} />
                            Traditional
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Reusable addresses</li>
                            <li>Visible transaction patterns</li>
                            <li>Easy to track balances</li>
                            <li>Sender needs recipient's address</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1 flex items-center">
                            <EyeOff className="text-green-500 mr-2" size={20} />
                            Silent Payments
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>One-time addresses</li>
                            <li>Obfuscated transaction patterns</li>
                            <li>Difficult to track balances</li>
                            <li>Sender uses recipient's public keys</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}