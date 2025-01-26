import { Star } from 'lucide-react'
import Image from "next/image"

interface Review {
  id: number
  name: string
  position: string
  company: string
  date: string
  rating: number
  content: string
  image: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Stanton",
    position: "CEO",
    company: "Bukalapak",
    date: "21 July 2022",
    rating: 4,
    content: "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    image: "/assets/userAdminImg.png"
  },
  {
    id: 2,
    name: "Skylar Dias",
    position: "CEO",
    company: "Amazon",
    date: "20 July 2022",
    rating: 4,
    content: "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    image: "/assets/userAdminImg.png"
  }
]

export default function ReviewsSection() {
  return (
    <div className="p-4 md:p-6 text-black ">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-semibold">Reviews</h2>
          <span className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
            13
          </span>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 bg-white rounded-xl shadow-sm md:p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-500">
                      {review.position} at {review.company}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 line-clamp-3 md:line-clamp-none">
                {review.content}
              </p>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-3 text-gray-500 text-sm font-medium hover:text-gray-700 transition-colors">
          Show All
        </button>
      </div>
    </div>
  )
}