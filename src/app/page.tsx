
import Image from "next/image";
import HeroImage from "../../public/banner.png";
import SingleCardDetails from "@/components/SingleCard";
import { Iproducts } from "@/types/products.type";
import data from "../../public/data.json";
import Link from "next/link";

export default function Home() {
  const products: Iproducts[] = data;
  // console.log("Product",products)

  return (
    <>
      <div className="hero rounded-2xl my-15 bg-base-200 py-20">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <p className="py-6 uppercase text-primary">
              WORKOUTS Library
            </p>
            <h1 className="text-5xl font-bold">
              TRAIN WITH INTENT. LOG <br />
              EVERY SET.
            </h1>

            <p className="py-6">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today&apos;s plan, and watch the weeks work add up.
            </p>

            <button className="btn btn-primary">
              <Link href={`./products/`}>BROWSE WORKOUTS</Link>
              
            </button>
          </div>

          <Image
            src={HeroImage}
            width={600}
            height={600}
            alt="Hero Image"
          />
        </div>
      </div>

      <div className="my-20">
        <h1 className="uppercase text-5xl">Top 6 Exercise</h1>
        <p>Twelve lifts covering every major muscle group.</p>

        <div className="Cards my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.slice(0,6).map((product) => (
            <SingleCardDetails
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}
