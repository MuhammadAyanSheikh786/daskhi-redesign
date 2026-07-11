import Image from "next/image";

interface PhotoDisplayProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  overlay?: boolean;
}

export default function PhotoDisplay({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/3]",
  priority = false,
  overlay = true,
}: PhotoDisplayProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${aspectRatio} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      )}
    </div>
  );
}
