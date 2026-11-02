import pharmaWatercolor from "@/assets/taniv-pharma-watercolor.png";

interface EditorialHeaderProps {
  title: string;
  description: string;
  label: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

const EditorialHeader = ({ title, description, label, image = pharmaWatercolor, imageAlt = "Watercolor pharmaceutical illustration", children }: EditorialHeaderProps) => (
  <section className="bg-background border-b border-border overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-8">
        <p className="text-xs uppercase text-business-blue font-semibold mb-6">{label}</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-business-navy leading-tight mb-6">{title}</h1>
        <div className="w-16 h-px bg-accent mb-6" />
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
      <div className="md:col-span-4 flex justify-end">
        <img src={image} alt={imageAlt} width={1024} height={1024} className="w-44 md:w-64 h-auto object-contain" />
      </div>
    </div>
  </section>
);

export default EditorialHeader;