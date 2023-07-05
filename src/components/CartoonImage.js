import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import DevImage from "../../public/images/profile/software dev image.jpg";
import styled from "styled-components";

const TypewriterText = () => {
  const imageAnimation = useAnimation();
  const bubbleAnimation = useAnimation();
  const [text, count] = useTypewriter({
    words: ["Hi, The name is Avni Piro", "Welcome to my Portfolio"],
    loop: true,
    delaySpeed: 2000,
  });

  useEffect(() => {
    const animateImage = async () => {
      await imageAnimation.start({ opacity: 1, transition: { duration: 0.5 } });
    };

    const animateBubble = async () => {
      await bubbleAnimation.start({
        scale: [0, 1],
        opacity: [0, 1],
        transition: { duration: 1, delay: 1 },
      });
    };

    animateImage();
    animateBubble();
  }, [imageAnimation, bubbleAnimation]);

  return (
    <>
      <Container>
      <motion.div
          className="image-container "
          initial={{ opacity: 0 }}
          animate={imageAnimation}
        >
          <div className="absolute bottom-0 right-0">
            <motion.Image
              src={DevImage}
              alt="Cartoon Image"
              className="cartoon-image "
            />
          </div>
       
        <motion.div
          className="bubble-container"
          initial={{ scale: 0, opacity: 0 }}
          animate={bubbleAnimation}
        >
          <Bubble>
            <motion.p className="text-xl font-bold text-dark">
              {text}
              <Cursor />
            </motion.p>
          </Bubble>
        </motion.div>
        </motion.div>
        
     
      
        </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);
  display: flex;
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
  border: 1px solid dark;
  width: fit-content;

  p {
    margin: 0;
  }
`;

export default TypewriterText;
