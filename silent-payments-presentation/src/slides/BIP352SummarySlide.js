import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

export default function BIP352SummarySlide() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">BIP 352: Silent Payments</h1>

            <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2">How it Works</h2>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Recipient generates scan and spend key pairs</li>
                        <li>Sender generates ephemeral key pair for each output</li>
                        <li>Sender creates payment using recipient's public keys and their own</li>
                        <li>Sender broadcasts transaction with unique output</li>
                        <li>Recipient scans blockchain for matching outputs</li>
                        <li>Recipient can spend detected payments</li>
                    </ol>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Key Components</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Scan keys (for detecting payments)</li>
                            <li>Spend keys (for using received funds)</li>
                            <li>Output keys (derived from scan and spend keys)</li>
                            <li>Ephemeral keys (for unique outputs)</li>
                            <li>Tagged hashes (for deriving shared secrets)</li>
                            <li>Tweak values (used in key derivation)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-green-600">Advantages</h2>
                    <ul className="space-y-2">
                        {[
                            "Enhanced privacy for recipients",
                            "No address reuse",
                            "Reduced blockchain bloat (no notification transactions)",
                            "Compatible with existing Bitcoin protocol",
                            "Suitable for donation addresses",
                            "Supports multiple recipients in a single transaction"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center">
                                <Check className="text-green-500 mr-2" size={20} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-red-600">Challenges</h2>
                    <ul className="space-y-2">
                        {[
                            "Increased computational load for scanning",
                            "Potential for missed payments if not scanned regularly",
                            "Requires specific wallet support for full benefits",
                            "Slightly larger transaction sizes (minimal)",
                            "Potential for reduced performance on low-powered devices"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center">
                                <X className="text-red-500 mr-2" size={20} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}