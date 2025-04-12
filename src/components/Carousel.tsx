
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  const tabMenu = [
    {
      id: 0,
      label: "Custom storefront",
      content:
        "Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional",
      image: "https://1mdm.com/about/assets/slider-1.webp",
    },
    {
      id: 1,
      label: "Advertising tools",
      content:
        "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
      image: "https://1mdm.com/about/assets/slider-2.webp",
    },
    {
      id: 2,
      label: "Data and analytics",
      content:
        "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
      image: "https://1mdm.com/about/assets/slider-3.webp",
    },
    {
      id: 3,
      label: "Customers support",
      content:
        "LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.",
      image: "https://1mdm.com/about/assets/slider-4.webp",
    },
  ]

  return (
    <div className="bg-gray-100 h-fit py-10">
        <div className=" text-center p-10">
            <h1 className="text-red-800 text-3xl font-bold">Success stories from 1mdm.com sellers</h1>
        </div>
      <Carousel className="w-full max-w-7xl mx-auto h-[600px]">
        <CarouselContent>
          {tabMenu.map((data) => (
            <CarouselItem key={data.id}>
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 h-full bg-white">
                {/* Left Section: Data */}
                <div className="flex-1 p-4 flex flex-col justify-center items-center   h-[600px]">
                  {/* ::before element */}
                  

                  {/* Content */}
                  <p className="text-lg text-black mt-2 ">
                  <h1 className="italic text-red-600 text-5xl md:text-5xl font-extrabold opacity-20">
                            II
                    </h1>
                    {data.content}
                  </p>
                </div>

                {/* Right Section: Image */}
                <div className="flex-1  h-[600px] w-[75%]">
                  <img
                    src={data.image}
                    alt={data.label}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
              <CarouselPrevious className="  bg-red-600 text-white scale-125" />
              <CarouselNext className=" bg-red-600 ml-20 text-white scale-125"/>
        
      </Carousel>
    </div>
  )
}