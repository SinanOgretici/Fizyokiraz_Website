import React from 'react';

const Services = () => {
    const servicesList = [
        'Fizyoterapi',
        'Reformer Pilates',
        'Spor Rehabilitasyonu',
        'Ağrı Yönetimi',
        'Postür Düzeltme',
        'Kişiye Özel Egzersiz Programları'
    ];

    return (
        <div className="services">
            <h2>Hizmetlerimiz</h2>
            <ul>
                {servicesList.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
        </div>
    );
};

export default Services;