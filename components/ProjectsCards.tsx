"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useState } from "react";
import Image from "next/image";

interface Service {
    id: number;
    title: string;
    description: string;
    modalContent: {
        images: string[];
        fullDescription: string;
    };
}

export function ProjectsCards({ service }: { service: Service }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setIsOpen(true)}>
                <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
                        <Image
                            src={service.modalContent.images[0]}
                            alt={service.title}
                            width={200}
                            height={160}
                            className="object-cover h-full w-full rounded-md"
                        />
                    </div>
                </CardContent>
            </Card>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>{service.title}</DialogTitle>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {service.modalContent.images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative h-96">
                                            <Image
                                                src={image}
                                                alt={`${service.title} - Image ${index + 1}`}
                                                fill
                                                className="object-cover rounded-md"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                        <p className="text-gray-700">
                            {service.modalContent.fullDescription}
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}