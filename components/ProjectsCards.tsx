"use client";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel";
import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    modalContent: {
        thumbnail: string;
        images: string[];
        fullDescription: string;
    };
}

// ─── Zoomable Image ───────────────────────────────────────────────────────────
function ZoomableImage({ src, alt }: { src: string; alt: string }) {
    const [zoomed, setZoomed] = useState(false);
    const [origin, setOrigin] = useState("50% 50%");
    const containerRef = useRef<HTMLDivElement>(null);
    const readyRef = useRef(false); // guard: ignore first touch after mount

    // Give the modal a moment to settle before accepting touch-to-zoom
    useEffect(() => {
        const timer = setTimeout(() => { readyRef.current = true; }, 300);
        return () => {
            clearTimeout(timer);
            readyRef.current = false;
        };
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setOrigin(`${x}% ${y}%`);
    }, []);

    const handleTap = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        if (!readyRef.current) return; // drop the first tap that opened the modal
        if (zoomed) { setZoomed(false); return; }
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const touch = e.touches[0];
        const x = ((touch.clientX - rect.left) / rect.width) * 100;
        const y = ((touch.clientY - rect.top) / rect.height) * 100;
        setOrigin(`${x}% ${y}%`);
        setZoomed(true);
    }, [zoomed]);

    return (
        <div
            ref={containerRef}
            className="relative h-80 bg-gray-50 rounded-md overflow-hidden cursor-zoom-in select-none"
            onMouseEnter={() => setZoomed(true)}
            onMouseLeave={() => setZoomed(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTap}
            style={{ touchAction: zoomed ? "none" : "pan-y" }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                draggable={false}
                className="object-contain transition-transform duration-300 ease-out will-change-transform"
                style={{
                    transformOrigin: origin,
                    transform: zoomed ? "scale(2)" : "scale(1)",
                }}
            />
            <span className="absolute bottom-2 right-2 text-[10px] text-white bg-black/40 px-2 py-0.5 rounded-full pointer-events-none sm:hidden">
                Tap to zoom
            </span>
        </div>
    );
}

// ─── Projects Card ────────────────────────────────────────────────────────────
export function ProjectsCards({ project }: { project: ProjectProps }) {
    const [isOpen, setIsOpen] = useState(false);

    // Carousel API via setApi prop — the official shadcn pattern
    const [api, setApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    // Mobile arrow idle fade
    const [arrowsVisible, setArrowsVisible] = useState(true);
    const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const resetArrowTimer = useCallback(() => {
        setArrowsVisible(true);
        if (idleTimer.current) clearTimeout(idleTimer.current);
        idleTimer.current = setTimeout(() => setArrowsVisible(false), 2000);
    }, []);

    // Wire up scroll-state whenever the API becomes available
    useEffect(() => {
        if (!api) return;
        const update = () => {
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        };
        update();
        api.on("select", update);
        api.on("reInit", update);
        return () => { api.off("select", update); api.off("reInit", update); };
    }, [api]);

    // Kick off idle timer when modal opens
    useEffect(() => {
        if (isOpen) resetArrowTimer();
        return () => { if (idleTimer.current) clearTimeout(idleTimer.current); };
    }, [isOpen, resetArrowTimer]);

    const descriptionBody = project.modalContent.fullDescription
        .replace(/^Scope of Work:\s*/i, "")
        .trim();

    return (
        <>
            <Card
                className="cursor-pointer hover:shadow-md transition-shadow duration-200 overflow-hidden group"
                onClick={() => setIsOpen(true)}
            >
                <div className="h-48 overflow-hidden">
                    <Image
                        src={project.modalContent.thumbnail}
                        alt={project.title}
                        width={400}
                        height={192}
                        className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <CardHeader className="px-4 pt-3.5 pb-4">
                    <CardTitle className="text-[15px] font-medium tracking-tight leading-snug">
                        {project.title}
                    </CardTitle>
                    <CardDescription className="text-[13px] leading-relaxed mt-0.5">
                        {project.description}
                    </CardDescription>
                </CardHeader>
            </Card>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col overflow-hidden p-0">

                    <DialogHeader className="px-6 pt-6 pb-3 shrink-0">
                        <DialogTitle className="text-xl font-medium tracking-tight">
                            {project.title}
                        </DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col gap-5 overflow-y-auto px-6 pb-6">

                        {/* sm:px-10 leaves room for flanking desktop arrows */}
                        <div
                            className="relative sm:px-10"
                            onTouchStart={resetArrowTimer}
                            onTouchMove={resetArrowTimer}
                        >
                            <Carousel className="w-full" setApi={setApi}>
                                <CarouselContent>
                                    {project.modalContent.images.map((image, index) => (
                                        <CarouselItem key={index}>
                                            {image.includes(".mp4") ? (
                                                <video
                                                    key={`video-${index}`}
                                                    controls
                                                    className="object-contain mx-auto rounded-xl"
                                                >
                                                    <source src={image} />
                                                </video>
                                            ) : <ZoomableImage
                                                src={image}
                                                alt={`${project.title} — ${index + 1}`}
                                            />}
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>

                            {/* Desktop arrows — outside image, always visible */}
                            <button
                                onClick={() => api?.scrollPrev()}
                                disabled={!canScrollPrev}
                                aria-label="Previous image"
                                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm text-gray-600 hover:bg-gray-50 disabled:opacity-30 transition"
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => api?.scrollNext()}
                                disabled={!canScrollNext}
                                aria-label="Next image"
                                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm text-gray-600 hover:bg-gray-50 disabled:opacity-30 transition"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>

                            {/* Mobile arrows — bottom corners, fade on idle */}
                            <button
                                onClick={() => { api?.scrollPrev(); resetArrowTimer(); }}
                                disabled={!canScrollPrev}
                                aria-label="Previous image"
                                className={`sm:hidden absolute bottom-2 left-2 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-black/40 text-white disabled:opacity-20 transition-opacity duration-300 ${arrowsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => { api?.scrollNext(); resetArrowTimer(); }}
                                disabled={!canScrollNext}
                                aria-label="Next image"
                                className={`sm:hidden absolute bottom-2 right-2 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-black/40 text-white disabled:opacity-20 transition-opacity duration-300 ${arrowsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>

                        <div>
                            <p className="text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-1.5">
                                Scope of Work
                            </p>
                            <p className="text-sm text-gray-500 leading-[1.75]">
                                {descriptionBody}
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}