import { data } from "@/data/galleryImages";
import SectionTitle from "./SectionTitle";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <section id="gallery" className="wrapper section-padding">
      <SectionTitle title="Memorabilia archives" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {data.map((image: any, index: number) => (
          <GalleryItem
            key={image.id}
            src={image.src}
            alt={image.alt}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
