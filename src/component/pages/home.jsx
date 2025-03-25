import { useRef } from "react";
import Carousel from "../Hero/Hero";
import Collection from "../sections/programs";
import Service from "../sections/contactForm";
import Featuring from "../sections/featuring";

export default function Home() {
  const contactRef = useRef(null);

  return (
    <div>
      <Carousel contactRef={contactRef} />
      <Collection />
      <Featuring />
      <div ref={contactRef}>
        <Service />
      </div>
    </div>
  );
}
