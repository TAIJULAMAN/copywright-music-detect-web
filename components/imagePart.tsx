import Image from "next/image";

export default function ImagePart() {
  return (
    <section className="w-full bg-gradient-to-r from-[#ebe0df] to-[#faf9f7]">
      <div className="relative w-full h-[400px]">
        <Image
          src="/image.png"
          alt="Section image"
          fill
          sizes="100vw"
          className="object-contain object-center"
          priority
        />
      </div>
    </section>
  );
}
