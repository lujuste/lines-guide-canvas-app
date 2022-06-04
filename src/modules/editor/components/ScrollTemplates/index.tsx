import { CarrouselMain, Heading, ItemCarrousel, Wrapper } from "./styles";
import { useState, useEffect, useRef, useCallback } from "react";
import ButtonArrowRight from "../ButtonArrowRight";
import ButtonArrowLeft from "../ButtonArrowLeft";
import api from "../../../../services/api";
import LoadingEditor from "../Canvas/LoadingEditor";
import { useMainHook } from "../../../../hooks/main";

interface ScrollTemplatesProps {
  image?: string;
  text: string;
}

interface ITemplatesData {
  bits_templates_category?: string;
  created_at?: string;
  creator_id?: string;
  description?: string;
  id?: string;
  key_words?: string;
  last_editor_id?: string;
  template?: any;
  thumbnail?: string;
  thumbnail_url?: string;
  title?: string;
  updated_at?: string;
  usage_counter?: number;
}

const ScrollTemplates: React.FC<ScrollTemplatesProps> = ({ image, text }) => {
  const [templatesBits, setTemplatesBits] = useState<ITemplatesData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [slideRight, setSlideRight] = useState(0);
  const carrousel = useRef<HTMLDivElement>(null);
  const [widthScroll, setWidthScroll] = useState(null);

  useEffect(() => {
    if (carrousel.current) {
      carrousel.current.addEventListener("scroll", () => {
        setSlideRight(carrousel.current.scrollLeft);
        setWidthScroll(carrousel.current.offsetWidth - 85);
      });
    }
  });

  const handleLeftClick = useCallback(
    e => {
      carrousel.current.scrollLeft += carrousel.current.offsetWidth;
      setSlideRight(prevState => {
        let clone = prevState;
        clone = carrousel.current.scrollLeft;
        return clone;
      });
    },
    [carrousel, slideRight]
  );

  const handleRightClick = useCallback(
    e => {
      setSlideRight(carrousel.current.scrollLeft);
      carrousel?.current?.click();
      carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
    },
    [carrousel, slideRight]
  );

  const { dragUrl } = useMainHook();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await api.get("bits-templates");
        setTemplatesBits(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingEditor />
      ) : (
        <Wrapper>
          <>
            <Heading> Templates Bits </Heading>
            <CarrouselMain ref={carrousel}>
              {slideRight !== 0 && (
                <ButtonArrowRight onClick={e => handleRightClick(e)} />
              )}

              {templatesBits.map(template => (
                <ItemCarrousel
                  key={template.id}
                  src={template.thumbnail_url}
                  style={{ cursor: "grab" }}
                  alt={`template#@@#${template.id}`}
                  draggable
                  onDragStart={(e: any) => {
                    dragUrl.current = e.target;
                  }}
                ></ItemCarrousel>
              ))}

              <ButtonArrowLeft onClick={e => handleLeftClick(e)} />
            </CarrouselMain>
          </>
        </Wrapper>
      )}
    </>
  );
};

export { ScrollTemplates };
