export default function PageBanner({ title }: { title: string }) {
  return (
    <div className="banner-bg relative">
      <div className="banner-overlay py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide uppercase">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
