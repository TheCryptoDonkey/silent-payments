import React from 'react';
import { CheckCircle, Shield, Lightbulb, TrendingUp } from 'lucide-react';

export default function WrapUpSlide() {
    const keyPoints = [
        {
            icon: <Shield className="text-blue-500" size={24} />,
            title: "Enhanced Privacy",
            description: "Silent Payments significantly improve transaction privacy in Bitcoin by using unique outputs for each payment."
        },
        {
            icon: <CheckCircle className="text-green-500" size={24} />,
            title: "Compatibility",
            description: "Works with existing Bitcoin infrastructure, requiring only wallet-level changes for implementation."
        },
        {
            icon: <Lightbulb className="text-yellow-500" size={24} />,
            title: "Key Innovations",
            description: "Utilizes scan and spend keys, ephemeral keys, and tweak values to create one-time addresses for each transaction."
        },
        {
            icon: <TrendingUp className="text-purple-500" size={24} />,
            title: "Future Impact",
            description: "Has the potential to improve Bitcoin's fungibility and make it more attractive for privacy-conscious users and merchants."
        }
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">Silent Payments: What We've Learned</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyPoints.map((point, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                            {point.icon}
                            <h2 className="text-xl font-semibold ml-2">{point.title}</h2>
                        </div>
                        <p className="text-gray-700">{point.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Looking Ahead</h2>
                <p className="text-gray-800">
                    As Silent Payments continue to develop and gain adoption, they have the potential to become a
                    fundamental privacy feature in Bitcoin wallets. While challenges remain in terms of implementation
                    and user education, the benefits of increased transaction privacy and improved fungibility make
                    Silent Payments a promising advancement for the Bitcoin ecosystem.
                </p>
            </div>
        </div>
    );
}