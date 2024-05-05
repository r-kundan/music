// "use client";
// import React from "react";
// import { StickyScroll } from "./ui/sticky-scroll-reveal";

// const musicSchoolContent = [
//     {
//       title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
//       description:
//         'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
//     },
//     {
//       title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
//       description:
//         'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
//     },
//     {
//       title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
//       description:
//         'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
//     },
//     {
//       title: 'Live Feedback & Engagement',
//       description:
//         'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
//     },
//     {
//       title: 'Cutting-Edge Curriculum',
//       description:
//         'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
//     },
//     {
//       title: 'Limitless Learning Opportunities',
//       description:
//         'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
//     },
//   ];

// function WhyChooseUS() {
//   return (
//     <div>
//     <StickyScroll content={musicSchoolContent} />
// </div>
//   )
// }

// export default WhyChooseUS

"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

function WhyChooseUS() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title=" A Personal Journey in Music Mastery"
        description='Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.'
      />
    </div>
  );
}
export default WhyChooseUS