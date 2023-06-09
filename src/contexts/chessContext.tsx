import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";
import { PieceType } from "../interfaces/piece";
import { ChessContextData } from "../interfaces/chessContextData";

const ChessContext = createContext<ChessContextData>({} as ChessContextData);

export const ChessProvider = ({ children }: { children: ReactNode }) => {
  const [chessBoard, setChessBoard] = useState<PieceType[]>([]);
  const [totalPieces, setTotalPieces] = useState(0);
  const [quantityPieces, setQuantityPieces] = useState(0);

  useEffect(() => {
    async function loadStorageData() {
      const items = localStorage.getItem("@chess:chessBoard");
      if (items) {
        setChessBoard(JSON.parse(items));
      }
    }
    loadStorageData();
  }, []);

  useEffect(() => {
    localStorage.setItem("@chess:chessBoard", JSON.stringify(chessBoard));
  }, [chessBoard]);

  const addPiece = (piece: PieceType) => {
    setChessBoard([piece, ...chessBoard]);

    setTotalPieces(totalPieces + piece.value );
    setQuantityPieces(quantityPieces + 1);
  };

  const removePiece = (selectedPiece: PieceType) => {
    setChessBoard([...chessBoard.filter((piece) => piece !== selectedPiece)]);
    setTotalPieces(totalPieces - selectedPiece.value);
    setQuantityPieces(quantityPieces - 1);
  };

  const resetPieces = () => {
    setChessBoard([]);
    setTotalPieces(0);
    setQuantityPieces(0);
  }

  return (
    <ChessContext.Provider
      value={{
        chessBoard,
        totalPieces,
        quantityPieces,
        addPiece,
        removePiece,
        resetPieces,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useChessBoard(): ChessContextData {
  const context = useContext(ChessContext);

  return context;
}
