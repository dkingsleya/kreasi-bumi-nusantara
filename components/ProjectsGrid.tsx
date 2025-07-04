"use client";

import { ProjectsCards } from "././ProjectsCards";

const services = [
    {
        id: 1,
        title: "Ground GYM Kedoya",
        description: "Ground Private Training - Kedoya, West Jakarta",
        modalContent: {
            images: [
                "/assets/project-1/2.1-2.png",
                "/assets/project-1/2.2-1.png",
                "/assets/project-1/2.3-1.png",
                "/assets/project-1/2.4-1.png",
                "/assets/project-1/3.1.png",
                "/assets/project-1/3.2.png",
                "/assets/project-1/3.3.png",
                "/assets/project-1/3.4.png",
                "/assets/project-1/GYM1 signane nyala.png",
                "/assets/project-1/GYM1.png",
                "/assets/project-1/GYM2.png",
                "/assets/project-1/GYM3.png",
                "/assets/project-1/GYM4.png",
            ],
            fullDescription: "Ground Private Training - Kedoya, West Jakarta"
        }
    },
    {
        id: 2,
        title: "Episode Store",
        description: "Episode Store (Toko Oleh Oleh)  - Siliwangi Bandung",
        modalContent: {
            images: [
                "/assets/project-2/episode-1.jpeg",
                "/assets/project-2/episode-2.jpeg",
                "/assets/project-2/episode-3.jpeg",
                "/assets/project-2/episode-4.jpeg",
                "/assets/project-2/episode-5.jpeg",
                "/assets/project-2/episode-6.jpeg",
                "/assets/project-2/episode-7.jpeg",
                "/assets/project-2/episode-8.jpeg",
            ],
            fullDescription: "Episode Store (Toko Oleh Oleh)  - Siliwangi Bandung"
        }
    },
    {
        id: 3,
        title: "Callia Office",
        description: "Callia Office - Kelapa Gading - North Jakarta",
        modalContent: {
            images: [
                "/assets/project-3/callia-1.jpeg",
                "/assets/project-3/callia-2.jpeg",
                "/assets/project-3/callia-3.jpeg",
                "/assets/project-3/callia-4.jpeg",
                "/assets/project-3/callia-5.jpeg",
                "/assets/project-3/callia-6.jpeg",
                "/assets/project-3/callia-7.jpeg",
                "/assets/project-3/callia-8.jpeg",
                "/assets/project-3/callia-9.jpeg",
                "/assets/project-3/callia-10.jpeg",
            ],
            fullDescription: "Callia Office - Kelapa Gading - North Jakarta"
        }
    },
    {
        id: 4,
        title: "Master Bedroom",
        description: "Master Bedroom - Michellia - Puri Botanical Residences",
        modalContent: {
            images: [
                "/assets/project-4/bedroom-1.jpg",
                "/assets/project-4/bedroom-2.jpg",
                "/assets/project-4/bedroom-3.png",
                "/assets/project-4/bedroom-4.jpg",
            ],
            fullDescription: "Master Bedroom - Michellia - Puri Botanical Residences"
        }
    },
    {
        id: 5,
        title: "Metro Permata Utama Residences",
        description: "Metro Permata Utama Residences",
        modalContent: {
            images: [
                "/assets/project-5/metro-1.jpg",
                "/assets/project-5/metro-2.jpg",
                "/assets/project-5/metro-3.jpg",
                "/assets/project-5/metro-4.jpg",
                "/assets/project-5/metro-5.jpg",
                "/assets/project-5/metro-6.jpg",
                "/assets/project-5/metro-7.jpg",
                "/assets/project-5/metro-8.jpg",
                "/assets/project-5/metro-9.jpg",
                "/assets/project-5/metro-10.jpg",
            ],
            fullDescription: "Metro Permata Utama Residences"
        }
    },
];

export function ProjectsGrid() {
    return (
        <section id="services" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ProjectsCards key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}