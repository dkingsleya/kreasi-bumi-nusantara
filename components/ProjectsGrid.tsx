"use client";

import { ProjectsCards } from "././ProjectsCards";

const projects = [
    {
        id: 1,
        title: "Ground GYM Kedoya",
        description: "Ground Private Training - Kedoya, West Jakarta",
        modalContent: {
            thumbnail: "/assets/project-1/2.1-2.png",
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
            thumbnail: "/assets/project-2/episode-1.jpeg",
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
            thumbnail: "/assets/project-3/callia-1.jpeg",
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
            thumbnail: "/assets/project-4/bedroom-1.jpg",
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
            thumbnail: "/assets/project-5/metro-1.jpg",
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
    {
        id: 6,
        title: "J House",
        description: "Amaryllis Alam Sutera Residences",
        modalContent: {
            thumbnail: "/assets/project-6/JH-1.png",
            images: [
                "/assets/project-6/JH-1.png",
                "/assets/project-6/JH-2.png",
                "/assets/project-6/JH-3.png",
                "/assets/project-6/JH-4.png",
                "/assets/project-6/JH-5.png",
                "/assets/project-6/JH-6.png",
                "/assets/project-6/JH-7.png",
                "/assets/project-6/JH-8.png",
                "/assets/project-6/JH-9.png",
                "/assets/project-6/JH-10.png",
                "/assets/project-6/JH-11.png",
                "/assets/project-6/JH-12.png",
                "/assets/project-6/JH-13.png",
                "/assets/project-6/JH-14.png",
                "/assets/project-6/JH-15.png",
                "/assets/project-6/JH-16.jpg",
                "/assets/project-6/JH-17.jpg",
                "/assets/project-6/JH-18.jpg",
                "/assets/project-6/JH-19.jpg",
                "/assets/project-6/JH-20.jpg",
                "/assets/project-6/JH-21.jpg",
                "/assets/project-6/JH-22.jpg",
                "/assets/project-6/JH-23.jpg",
                "/assets/project-6/JH-24.jpg",
            ],
            fullDescription: "Interior Design Ground Floor J House - Amaryllis - Alam Sutera Residences"
        }
    },
    {
        id: 7,
        title: "Catriona",
        description: "Catriona - Suvarna Sutera Residence",
        modalContent: {
            thumbnail: "/assets/project-7/Catriona.jpg",
            images: [
                "/assets/project-7/Catriona.jpg",
            ],
            fullDescription: "Catriona - Suvarna Sutera Residence"
        }
    },
    {
        id: 8,
        title: "Urban Exchange",
        description: "Urban Exchange Fashion House",
        modalContent: {
            thumbnail: "/assets/project-8/UE-8.jpg",
            images: [
                "/assets/project-8/UE-1.jpg",
                "/assets/project-8/UE-2.jpg",
                "/assets/project-8/UE-3.jpg",
                "/assets/project-8/UE-4.jpg",
                "/assets/project-8/UE-5.jpg",
                "/assets/project-8/UE-6.jpg",
                "/assets/project-8/UE-7.jpg",
                "/assets/project-8/UE-8.jpg",
                "/assets/project-8/UE-9.jpg",
                "/assets/project-8/UE-10.jpg",
                "/assets/project-8/UE-11.jpg",
                "/assets/project-8/UE-12.jpg",
                "/assets/project-8/UE-13.jpg",
                "/assets/project-8/UE-14.jpg",
                "/assets/project-8/UE-15.jpg",
                "/assets/project-8/UE-16.jpg",
            ],
            fullDescription: "Urban Exchange is a chic design fashion house. We inovative in smart - casual styles that equips you . Our passion is to enable everyone to express their true personality through their true personallity trough their work wear with a casual twist."
        }
    },
    {
        id: 9,
        title: "Kopi Domu",
        description: "Kopi Domu - Tanjung Duren - West Jakarta",
        modalContent: {
            thumbnail: "/assets/project-9/KD-1.jpg",
            images: [
                "/assets/project-9/KD-1.jpg",
                "/assets/project-9/KD-2.jpg",
                "/assets/project-9/KD-3.jpg",
                "/assets/project-9/KD-4.jpg",
                "/assets/project-9/KD-5.jpg",
                "/assets/project-9/KD-6.jpg",
                "/assets/project-9/KD-7.jpg",
                "/assets/project-9/KD-8.jpg",
                "/assets/project-9/KD-9.jpg",
                "/assets/project-9/KD-10.jpg",
                "/assets/project-9/KD-11.jpg",
                "/assets/project-9/KD-12.jpg",
                "/assets/project-9/KD-13.jpg",
                "/assets/project-9/KD-14.jpg",
                "/assets/project-9/KD-15.jpg",
            ],
            fullDescription: "Kopi Domu - Tanjung Duren - West Jakarta"
        }
    },
    {
        id: 10,
        title: "Dragon Phoenix",
        description: "Dragon Phoenix E-Commerce Office - BSD - Tangerang",
        modalContent: {
            thumbnail: "/assets/project-10/DP-1.jpg",
            images: [
                "/assets/project-10/DP-1.jpg",
                "/assets/project-10/DP-2.jpg",
                "/assets/project-10/DP-3.jpg",
                "/assets/project-10/DP-4.jpg",
                "/assets/project-10/DP-5.jpg",
                "/assets/project-10/DP-6.jpg",
                "/assets/project-10/DP-7.jpg",
                "/assets/project-10/DP-8.jpg",
                "/assets/project-10/DP-9.png",
                "/assets/project-10/DP-10.png",
                "/assets/project-10/DP-11.png",
                "/assets/project-10/DP-12.jpg",
                "/assets/project-10/DP-13.jpg",
                "/assets/project-10/DP-14.jpg",
            ],
            fullDescription: "Dragon Phoenix E-Commerce Office - BSD - Tangerang"
        }
    },
];

export function ProjectsGrid() {
    return (
        <section id="projects" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectsCards key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}