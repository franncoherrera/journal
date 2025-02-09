import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useMediaQuery } from "@mui/system";

export const ImageGallery = ({ images }) => {
  const isMediumScreen = useMediaQuery("(max-width:960px)");
  return (
    <ImageList
      sx={{ width: "100%", height: 500 }}
      cols={isMediumScreen ? 2 : 3}
      rowHeight={200}
    >
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            srcSet={`${image}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=200&h=200&fit=crop&auto=format`}
            alt="Imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
