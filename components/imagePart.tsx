import Image from "next/image";

export default function ImagePart() {
  return (
    <section className="w-full h-[100px] md:h-[480px]  relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image.png"
          alt="Section image"
          fill
          sizes="100vw"
          className="object-contain object-center"
          priority
          quality={100}
        />
      </div>
    </section>
  );
}
