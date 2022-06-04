import React, { useCallback, useEffect, useState } from "react";
import { useMainHook } from "../../../../hooks/main";
import { useAsidebarEditor } from "../../hooks/asidebarEditor";
import ButtonPrimary from "../ButtonPrimary";
import CardElements from "../Sidebar/components/CardElements";
import { ContainerSidebarNav } from "../Sidebar/components/ContainerSidebar/styles";
import GridElements from "../Sidebar/components/GridElements";
import GridItemElements from "../Sidebar/components/GridItemElements";
import ImageUploading from "react-images-uploading";
import { VStack } from "./styles";
import api from "../../../../services/api";

// import { Container } from './styles';

interface ImageUploaded {
  data_url: string;
  file: {
    lastModified: number;
    lastModifiedDate: string;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
  };
}

interface ImageType {
  dataURL?: string;
  file?: File;
  [key: string]: any;
}

interface imagePropsApi {
  id: string;
  user_id: string;
  name: string;
  created_at: string;
  updated_at: string;
  image_url: string;
}

const UploadImages: React.FC = () => {
  const { handleUploadImage } = useAsidebarEditor();
  const { dragUrl } = useMainHook();
  const maxNumber = 69;

  const [images, setImages] = React.useState<imagePropsApi[]>([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const fetchImages = await api.get("user-image-repository");

        const listOfImages = fetchImages.data as imagePropsApi[];

        setImages(listOfImages);
      } catch (error) {}
    })();
  }, []);

  const onChange = async (imageList: ImageType[], addUpdateIndex) => {
    // data for submit
    let myListOfImages: imagePropsApi[] = [];

    imageList.forEach(async (imageObject, index) => {
      const fetchNewImage = await api.post("user-image-repository");

      try {
        const { id, created_at, image_url, name, updated_at, user_id } =
          fetchNewImage.data as imagePropsApi;

        let formData = new FormData();

        formData.append("image", imageObject.file);
        const fetchUploadPicture = await api.patch(
          `user-image-repository/image-upload/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );

        myListOfImages.push({
          created_at: created_at,
          id: id,
          image_url: imageObject.data_url,
          name: name,
          updated_at: updated_at,
          user_id: user_id
        });

        setImages(prevState => {
          return [...prevState, ...myListOfImages];
        });
      } catch (error) {
        console.log("error on uploading images", error.response.data);
      }
    });
  };

  return (
    <ContainerSidebarNav>
      <VStack margin={"1.6rem 0 0 0"}>
        <div className="App">
          <ImageUploading
            multiple
            value={uploadedImages}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <ButtonPrimary
                  style={isDragging ? { color: "purple" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Clique ou arraste aqui
                </ButtonPrimary>
              </div>
            )}
          </ImageUploading>
        </div>
      </VStack>
      <GridElements marginTop="2rem 0 0 0" columns={4}>
        {images.map((image, index) => (
          <GridItemElements key={index}>
            <CardElements>
              <img
                draggable
                src={image.image_url}
                alt={`img#@@#${image.name}`}
                width="100"
                onDragStart={(e: any) => {
                  dragUrl.current = e.target;
                }}
              />
            </CardElements>
          </GridItemElements>
        ))}
      </GridElements>
    </ContainerSidebarNav>
  );
};

export default UploadImages;

