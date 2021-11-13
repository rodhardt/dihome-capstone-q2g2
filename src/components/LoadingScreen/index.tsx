import { LoadingScreenStyled } from "./styles";

import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

interface LoadingScreenProps {
  type: string;
  message?: string;
}

function LoadingScreen({ type, message }: LoadingScreenProps) {
  return (
    <LoadingScreenStyled>
      {type === "full" ? (
        <div className="full-container">
          <div className="full-card">
            <h3>{message}</h3>
            <Box sx={{ width: "260px" }}>
              <LinearProgress />
            </Box>
          </div>
        </div>
      ) : (
        <div className="partial-container">
          <div className="partial-card">
            <Box sx={{ display: "flex" }} className="loading">
              <CircularProgress />
            </Box>
            <h3>{message}</h3>
          </div>
        </div>
      )}
    </LoadingScreenStyled>
  );
}

export default LoadingScreen;
