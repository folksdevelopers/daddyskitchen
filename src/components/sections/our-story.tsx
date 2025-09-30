const storyData = [
  {
    year: '2015',
    description: "DaddysKitchen is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    year: '2017',
    description: "DaddysKitchen is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    year: '2019',
    description: "DaddysKitchen is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    year: '2022',
    description: "DaddysKitchen is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

export function OurStory() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Our Story</h2>
          <p className="mt-2 text-lg font-semibold text-accent">Taste the real Spice of Kerala</p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />

          {storyData.map((item, index) => (
            <div key={item.year} className="relative mb-12">
              <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="w-5/12">
                  <div className={`text-xl font-bold text-accent mb-2 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>{item.year}</div>
                  <p className={`text-muted-foreground ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>{item.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
