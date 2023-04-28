import { useEffect, useState } from "react";

const useFetch = <T>({ url }: { url: string }) => {
  const [dados, setDados] = useState<T | null>(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/${url}`)
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados))
      .catch((erro) => setErro(erro));
  }, [url]);

  return { dados, erro };
};

export default useFetch;
