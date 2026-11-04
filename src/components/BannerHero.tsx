interface BannerHeroProps {
  title: React.ReactNode;
  description: string;
  label: string;
  image: string;
  imageAlt: string;
  heightClass?: string;
  children?: React.ReactNode;
}

const BannerHero = ({ title, description, label, image, imageAlt, heightClass = "h-[200px] md:h-[320px]", children }: BannerHeroProps) => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    {/* Full-width watercolor banner, ~320px desktop / 200px mobile */}
    <div className="absolute inset-0">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        loading="lazy"
        className="w-full h-full object-cover object-right"
      />
      {/* Subtle off-white gradient so the text stays readable over the empty left side */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 md:via-background/70 to-transparent" />
    </div>

    {/* Page heading and subline placed over the empty left side of the illustration */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`${heightClass} flex flex-col justify-center max-w-xl md:max-w-2xl`}>
        <p className="text-xs uppercase text-business-blue font-semibold mb-3 md:mb-4">{label}</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-business-navy leading-tight mb-3 md:mb-5">{title}</h1>
        <p className="hidden md:block text-lg text-muted-foreground leading-relaxed">{description}</p>
        {children && <div className="mt-5 md:mt-6">{children}</div>}
      </div>
    </div>
  </section>
);

export default BannerHero;
