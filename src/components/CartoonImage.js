import { useState,useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import DevImage from "../../public/images/profile/cartoonImage.png";
import styled from "styled-components";
import Image from "next/image";

const TypewriterText = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);
  // const imageAnimation = useAnimation();
  const bubbleAnimation = useAnimation();
  const [text, count] = useTypewriter({
    words: ["Hi, The name is Avni Piro", "Welcome to my Portfolio", "I have a real passion for code"],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    // const animateImage = async () => {
    //   await imageAnimation.start({ opacity: 1, transition: { duration: 0.5 } });
    // };

    const animateBubble = async () => {
      await bubbleAnimation.start({
        scale: [0, 1],
        opacity: [0, 1],
        transition: { duration: 1, delay: 1 },
      });
    };

    // animateImage();
    animateBubble();
  }, [bubbleAnimation]);

  return (
    <>
      <Container>
        <motion.div
          className="bubble-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={bubbleAnimation}
        >
          <Bubble >
            <motion.p className="text-xl font-bold text-dark">
              {text}
              <Cursor />
            </motion.p>
          </Bubble>
        </motion.div>
      </Container>
      <Cartoon >
        <motion.div 
        initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                transition={{ duration:3, ease: "easeInOut" }}>
          <Image
            src={DevImage}
            alt="Cartoon Image"
            width='100px'
            height='100px'
            className="cartoon-image w-full h-auto "
            placeholder="blur"
            onLoad={() => setImageLoaded(true)}
            
          /></motion.div>
        </Cartoon>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 90px;
  right: 120px;
 /* transform: translate(-50%, -50%);  */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Bubble = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  border-color: black;
  border: 1px solid;
  width: fit-content;


  p {
    margin: 0;
  }
`;
const Cartoon = styled.div`
  position: fixed;
  bottom: 0px;
  right: 2rem;
 /* transform: translate(-50%, -50%);  */
  display: inline-block;
  width:10rem;

`;

export default TypewriterText;
