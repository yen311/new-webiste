import { useTypewriter } from "./hooks/useTypewriter";

const Typewriter = ({ texts }) => {
  const displayText = useTypewriter(texts);

  return <p>{displayText}</p>;
};

export default Typewriter;
