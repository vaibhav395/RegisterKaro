/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
//New updation (deploy)
import React from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaSmile,
  FaUserTie,
  FaLock,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

// TestimonialCard Component
const TestimonialCard = React.memo(({ title, text, image }) => {
  return (
    <div className="flex flex-col md:flex-row p-6 shadow-md rounded-lg mb-6">
      <div className="md:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">
            <span>{title.split(" ")[0]} </span>
            <span className="text-orange-500">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </h3>
          <p className="text-lg mb-4 text-gray-700 whitespace-pre-line">
            {text}
          </p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 transition duration-300 ease-in-out self-start">
          Learn More
        </button>
      </div>
      <div className="md:w-1/3 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
});

// FeatureCard Component
const FeatureCard = React.memo(({ icon, title, text, bgColor }) => {
  return (
    <div
      className="flex flex-row items-center p-4 shadow-md rounded-lg mb-6"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex-1 pr-4">
        <h4 className="text-lg font-semibold mb-2 text-black">{title}</h4>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
      <div className="flex-shrink-0 text-xl bg-white p-2 rounded-full">
        {icon}
      </div>
    </div>
  );
});

// VideoIntroductionCard Component
const VideoIntroductionCard = React.memo(
  ({ title, text, ideasText, ideasIcon, lifeText, lifeIcon, videoUrl }) => {
    return (
      <div className="flex flex-col md:flex-row p-6 shadow-md rounded-lg mb-6 bg-blue-100">
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
            <p className="text-lg mb-4 text-gray-700">{text}</p>
            <div className="flex items-start mb-4">
              <div className="mr-2 text-xl text-orange-500">{ideasIcon}</div>
              <div>
                <h4 className="font-semibold text-black">{ideasText}</h4>
                <p className="text-sm text-gray-700">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-2 text-xl text-orange-500">{lifeIcon}</div>
              <div>
                <h4 className="font-semibold text-black">{lifeText}</h4>
                <p className="text-sm text-gray-700">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex items-center justify-center mt-6 md:mt-0">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    );
  }
);

// About Component
const About = () => {
  const testimonial1 = {
    title: "About Register Karo",
    text: `We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years, and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever-changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently delivered on projects, thereby exceeding everyone’s expectations.

I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.`,
    image: "/card.jpeg", // Ensure the image is optimized and in the right path
  };

  const features = [
    {
      icon: <FaShieldAlt className="text-orange-500" />,
      title: "Confidential & Safe",
      text: "All your private information is safe with us.",
      bgColor: "#FFEBE5",
    },
    {
      icon: <FaCheckCircle className="text-green-500" />,
      title: "No Hidden Fee",
      text: "Everything is put before you with no hidden charges or conditions.",
      bgColor: "#E6F4E6",
    },
    {
      icon: <FaSmile className="text-blue-500" />,
      title: "Guaranteed Satisfaction",
      text: "We ensure that you stay 100% satisfied with our offered services.",
      bgColor: "#E0F2FF",
    },
    {
      icon: <FaUserTie className="text-red-500" />,
      title: "Expert CA/CS Assistance",
      text: "Prompt support from our in-house expert professionals.",
      bgColor: "#FFE6E6",
    },
    {
      icon: <FaLock className="text-orange-500" />,
      title: "Secure Service",
      text: "Your data is secure with us.",
      bgColor: "#FFEBE5",
    },
  ];

  const videoIntro = {
    title: "Our Video Introductions",
    text: "Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.",
    ideasText: "Explore ideas together",
    ideasIcon: <FaLightbulb />,
    lifeText: "Bring those ideas to life",
    lifeIcon: <FaRocket />,
    videoUrl: "https://www.youtube.com/embed/YDuVz10Z7xU?si=YRuc2XDF06uJW4n7", // YouTube video URL
  };

  return (
    <section className="mt-10 p-6 rounded-lg shadow-md">
      <TestimonialCard
        title={testimonial1.title}
        text={testimonial1.text}
        image={testimonial1.image}
      />
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-6 text-center text-black">
          WHY <span className="text-orange-500">REGISTERKARO.IN</span>
        </h3>
        <h4 className="text-xl mb-6 text-center">
          It is with consistent services and results that build trust with the
          people and that in turn help us to serve the business better.
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
        <VideoIntroductionCard
          title={videoIntro.title}
          text={videoIntro.text}
          ideasText={videoIntro.ideasText}
          ideasIcon={videoIntro.ideasIcon}
          lifeText={videoIntro.lifeText}
          lifeIcon={videoIntro.lifeIcon}
          videoUrl={videoIntro.videoUrl}
        />
      </div>
    </section>
  );
};

export default About;
