import React from 'react';
import { BookOpen, LinkIcon, Unlink } from 'lucide-react';

export default function OverviewComparisonSlide() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center text-purple-600">BIP 352 vs. BIP 47: Overview and Comparison</h1>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2 flex items-center">
                        <BookOpen className="text-blue-500 mr-2" size={24} />
                        BIP 352: Silent Payments
                    </h2>
                    <ul className="space-y-3">
                        {[
                            ["Privacy", "Uses unique outputs and keys for each transaction, combining public keys from sender and recipient to create stealth addresses."],
                            ["Address Reuse", "Eliminates address reuse by generating a new stealth address for each transaction."],
                            ["Payment Detection", "Recipients scan the blockchain silently without revealing their addresses publicly."],
                            ["Wallet Compatibility", "Requires specific wallet support to create and detect silent payments, including managing unique scan, spend, and ephemeral keys."],
                            ["On-chain Footprint", "No additional on-chain transactions required for setup."],
                            ["Multiple Recipients", "Allows for multiple recipients in a single transaction."]
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
                        <BookOpen className="text-green-500 mr-2" size={24} />
                        BIP 47: Reusable Payment Codes
                    </h2>
                    <ul className="space-y-3">
                        {[
                            ["Privacy", "Maintains privacy using reusable payment codes."],
                            ["Address Reuse", "Reduces exposure, but doesn't completely eliminate address reuse."],
                            ["Payment Detection", "Uses notification transactions for discovery."],
                            ["Wallet Compatibility", "Requires specific support for payment codes."],
                            ["On-chain Footprint", "Requires an on-chain notification transaction to initiate."],
                            ["Multiple Recipients", "Typically set up for one-to-one payments."]
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
                    <LinkIcon className="text-purple-500 mr-2" size={24} />
                    Key Feature Comparison
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold mb-1 flex items-center">
                            <Unlink className="text-red-500 mr-2" size={20} />
                            BIP 352 Features
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Enhanced privacy with unique stealth addresses for each transaction</li>
                            <li>No address reuse</li>
                            <li>Compatible with existing Bitcoin protocol, but requires wallet support</li>
                            <li>No on-chain notification transactions</li>
                            <li>Supports multiple recipients in a single transaction</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1 flex items-center">
                            <LinkIcon className="text-green-500 mr-2" size={20} />
                            BIP 47 Features
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Reusable payment codes for privacy</li>
                            <li>Notification transactions initiate payment channels</li>
                            <li>Requires updates to wallet software</li>
                            <li>On-chain setup transaction required</li>
                            <li>Typically used for one-to-one payments</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}