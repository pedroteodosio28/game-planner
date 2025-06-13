interface ButtonType {
  children: React.ReactNode;
  nome: string;
  idade: number;
  loading: boolean;
}

const ButtonComp = ({ children, nome }: ButtonType) => {
  return <button>
    {nome}
    </button>;
};
export default ButtonComp;
