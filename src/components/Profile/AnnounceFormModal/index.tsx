import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { AnnounceFormModalStyled } from "./styles";
import { useAuth } from "../../../providers/Authentication";

interface AnnounceFormModalData {
  closeWindow: () => void;
}

interface PropertyFormData {
  title: string;
  street: string;
  state: string;
  city: string;
  district: string;
  number: number;
  type: string;
  goal: string;
  dorms: number;
  parking: number;
  bathrooms: number;
  houseArea: number;
  landArea: number;
  description: string;
  mainImage: string;
  images: string[];
  price: number;
}

function AnnounceFormModal({ closeWindow }: AnnounceFormModalData) {
  const { userInfo } = useAuth();

  const formSchema = yup.object().shape({
    title: yup.string().required("Dê um título ao seu anúncio"),
    street: yup.string().required("Informe sua rua"),
    state: yup.string().required("Informe seu estado"),
    city: yup.string().required("Informe sua cidade"),
    district: yup.string().required("Informe seu bairro"),
    number: yup.number().required("Informe seu número"),
    type: yup.string().required("informe o tipo de imóvel"),
    goal: yup.string().required("Venda ou compra?"),
    dorms: yup.number().required("número de dormitórios"),
    parking: yup.number().required("número de vagas"),
    bathrooms: yup.number().required("número de banheiros"),
    houseArea: yup.number().required("Informe a área"),
    landArea: yup.number().required("Informe a área"),
    description: yup.string().required("Descreva seu imóvel"),
    mainImage: yup.string().required("Mande uma imagem"),
    images: yup.string(),
    price: yup.number().required("Informe o preço"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleForm = (announcingData: PropertyFormData) => {
    const newProperty = {
      announcerId: userInfo.id,
      consultantStatus: "em aberto",
      announcerStatus: "ativo",
      viewsCount: 0,
      bookmarkCount: 0,
      title: announcingData.title,
      street: announcingData.street,
      state: announcingData.state,
      city: announcingData.city,
      district: announcingData.district,
      number: announcingData.number,
      type: announcingData.type,
      goal: announcingData.goal,
      dorms: announcingData.dorms,
      parking: announcingData.parking,
      bathrooms: announcingData.bathrooms,
      houseArea: announcingData.houseArea,
      landArea: announcingData.landArea,
      description: announcingData.description,
      mainImage: announcingData.mainImage,
      images: announcingData.images,
      price: announcingData.price,
    };
    console.log(newProperty);
  };

  return (
    <AnnounceFormModalStyled>
      <div className="modal-card">
        <header>
          <h4>Anunciar Imóvel</h4>

          <button className="close-button" onClick={() => closeWindow()}>
            X
          </button>
        </header>
        <form className="form-container" onSubmit={handleSubmit(handleForm)}>
          <div className="input-container">
            <label htmlFor="input-name">Título</label>
            <input placeholder="Casa em florestal..." {...register("title")} />
          </div>
          <div className="input-container number price">
            <label>Preço</label>
            <input placeholder="R$ ..." {...register("price")} />
          </div>
          <div className="input-container">
            <label htmlFor="input-email">Rua</label>
            <input
              id="input-email"
              placeholder="Rua..."
              {...register("street")}
            />
          </div>
          <div className="input-container select">
            <label>Estado</label>
            <select id="estados" {...register("state")}>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </select>
          </div>
          <div className="input-container">
            <label>Cidade</label>
            <input placeholder="Laejado" {...register("city")} />
          </div>
          <div className="input-container">
            <label>Bairro</label>
            <input placeholder="Florestal" {...register("district")} />
          </div>
          <div className="input-container number house-number">
            <label>Número</label>
            <input placeholder="745" type="number" {...register("number")} />
          </div>
          <div className="input-container radio type">
            <div className="radio-option">
              <input
                type="radio"
                value="Casa"
                id="type-house"
                {...register("type")}
              />
              <label htmlFor="type-house">Casa</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                value="Apartamento"
                id="type-apartment"
                {...register("type")}
              />
              <label htmlFor="type-apartment">Apartamento</label>
            </div>
          </div>
          <div className="input-container radio goal">
            <div className="radio-option">
              <input
                type="radio"
                value="Alugar"
                id="goal-rent"
                {...register("goal")}
              />
              <label htmlFor="goal-rent">Alugar</label>
            </div>

            <div className="radio-option">
              <input
                type="radio"
                value="Vender"
                id="goal-sell"
                {...register("goal")}
              />
              <label htmlFor="goal-sell">Vender</label>
            </div>
          </div>
          <div className="input-container number house-area">
            <label>Área Construída</label>
            <input placeholder="Digite uma área" {...register("houseArea")} />
          </div>
          <div className="input-container number land-area">
            <label>Área do Terreno</label>
            <input placeholder="Digite uma área" {...register("landArea")} />
          </div>
          <div className="input-container number dorms">
            <label>Dormitórios</label>
            <input
              placeholder="nº dorms"
              type="number"
              {...register("dorms")}
            />
          </div>
          <div className="input-container number parking">
            <label>Vagas</label>
            <input placeholder="nº vagas" {...register("parking")} />
          </div>
          <div className="input-container number bathroom">
            <label>Banheiros</label>
            <input placeholder="nº banheiros" {...register("bathrooms")} />
          </div>

          <div className="input-container textarea">
            <label>Descrição</label>
            <textarea
              rows={3}
              placeholder="Linda casa para venda em Florestal, possui ..."
              {...register("description")}
            />
          </div>
          <div className="input-container">
            <label>Imagem Principal</label>
            <input
              placeholder="URL da imagem principal"
              {...register("mainImage")}
            />
          </div>
          <div className="input-container">
            <label>Imagens do imóvel</label>
            <input placeholder="URL de imagem" {...register("images")} />
          </div>
          <div className="buttons-container">
            <button className="confirm-button" type="submit">
              Anunciar
            </button>
            <button className="cancel-button" onClick={() => closeWindow()}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </AnnounceFormModalStyled>
  );
}

export default AnnounceFormModal;
