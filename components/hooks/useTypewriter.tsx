import { useState, useEffect } from "react";

export const useTypewriter = (
  texts: string[],
  speed = 200,
  deleteSpeed = 100,
  pause = 1500,
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length); // Move to the next word
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause); // Pause before deleting
        }
      }
    };

    const typingInterval = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(typingInterval);
  }, [texts, currentIndex, charIndex, isDeleting, speed, deleteSpeed, pause]);

  return displayText;
};
