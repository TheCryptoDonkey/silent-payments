import React from 'react';
import { Key, Lock, Unlock, Send, Search, Hash } from 'lucide-react';

export default function SilentPaymentsTechnicalSlide() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Silent Payments: Technical Overview</h1>

            <div className="flex flex-col space-y-4">
                {[
                    {
                        icon: <Key className="text-yellow-500" size={24} />,
                        title: "Key Generation",
                        description: "Recipient creates long-term scan and spend key pairs"
                    },
                    {
                        icon: <Hash className="text-orange-500" size={24} />,
                        title: "Tweak Value Creation",
                        description: "Sender generates a tweak value from transaction inputs and outputs"
                    },
                    {
                        icon: <Lock className="text-purple-500" size={24} />,
                        title: "Payment Creation",
                        description: "Sender uses recipient's public keys, their own public key, and the tweak value to create a unique output"
                    },
                    {
                        icon: <Send className="text-green-500" size={24} />,
                        title: "Transaction Broadcast",
                        description: "Sender broadcasts transaction with the unique output to the Bitcoin network"
                    },
                    {
                        icon: <Search className="text-blue-500" size={24} />,
                        title: "Payment Detection",
                        description: "Recipient calculates the tweak value from transaction data and uses it with their private scan key to find matching outputs"
                    },
                    {
                        icon: <Unlock className="text-red-500" size={24} />,
                        title: "Fund Spending",
                        description: "Recipient derives a unique private key for each output using their private spend key and the tweak value"
                    }
                ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">{step.icon}</div>
                        <div>
                            <h2 className="text-lg font-semibold">{step.title}</h2>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Note on Tweak Value:</h3>
                <p className="text-sm text-gray-700">
                    The tweak value is not directly shared between sender and recipient. Instead, it's independently calculated by both parties using the same transaction data. This ensures that the recipient can detect payments without any additional communication with the sender.
                </p>
            </div>
        </div>
    );
}