import { useMediaQuery } from "@mui/material";

const MediaQuery = () => {
  const isHeightBelow1001x1100 = useMediaQuery(
    "(min-height: 1020px) and (max-height: 1120px)"
  );
  const isHeightBelow900x1000 = useMediaQuery(
    "(min-height: 850px) and (max-height: 1020px)"
  );
  const isHeightBelow770x899 = useMediaQuery(
    "(min-height: 780px) and (max-height: 849px)"
  );
  const isHeightBelow680x769 = useMediaQuery(
    "(min-height: 700px) and (max-height: 779px)"
  );
  const isHeightBelow550x679 = useMediaQuery(
    "(min-height: 599px) and (max-height: 699px)"
  );
  const isHeightBelow549 = useMediaQuery("max-height: 599px)");

  const isScreenWide4 = useMediaQuery(
    "(min-width: 1851px) and (max-width: 2000px)"
  );
  const isScreenWide3 = useMediaQuery(
    "(min-width: 1650px) and (max-width: 1850px)"
  );
  const isScreenWide2 = useMediaQuery(
    "(min-width: 1501px) and (max-width: 1649px)"
  );
  const isScreenWide1 = useMediaQuery(
    "(min-width: 1400px) and (max-width: 1500px)"
  );
  const isScreenWide = useMediaQuery(
    "(min-width: 1250px) and (max-width: 1399px)"
  );
  const isMediumScreen1 = useMediaQuery(
    "(min-width: 1050px) and (max-width: 1249px)"
  );
  const isMediumScreen2 = useMediaQuery(
    "(min-width: 950px) and (max-width: 1049px)"
  );
  const isMediumScreen3 = useMediaQuery(
    "(min-width: 850px) and (max-width: 949px)"
  );
  const isMediumScreen4 = useMediaQuery(
    "(min-width: 700px) and (max-width: 849px)"
  );
  const isMediumScreen5 = useMediaQuery(
    "(min-width: 600px) and (max-width: 699px)"
  );

  return {
    isHeightBelow1001x1100,
    isHeightBelow900x1000,
    isHeightBelow770x899,
    isHeightBelow680x769,
    isHeightBelow550x679,
    isHeightBelow549,
    isScreenWide4,
    isScreenWide3,
    isScreenWide2,
    isScreenWide1,
    isScreenWide,
    isMediumScreen1,
    isMediumScreen2,
    isMediumScreen3,
    isMediumScreen4,
    isMediumScreen5,
  };
};

export default MediaQuery;
