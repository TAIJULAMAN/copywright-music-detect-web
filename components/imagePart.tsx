import Image from "next/image";

export default function ImagePart() {
  return (
    <div className="w-full bg-white">
      <div className="w-full relative">
        <Image
          src="/image.png"
          alt="Section image"
          width={1920}
          height={500}
          sizes="100vw"
          className="w-full h-auto object-cover"
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
