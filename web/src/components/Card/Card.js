import Header from "../Header";
import Preview from "./Preview";
import Form from "./Form/Form";
import Footer from "../Footer";
import '../../styles/layout/main-profile.scss';


function Card(props) {
  return (
    <>
      <Header />

      <main className="main-profile">
        <Preview dataCard={props.dataCard} setDataCard={props.setDataCard} palette={props.palette} handlePalette={props.handlePalette} />
        <Form
          handleCollapsed={props.handleCollapsed}
          dataCard={props.dataCard}
          setDataCard={props.setDataCard}
          resultCard={props.resultCard}
          setResultCard={props.setResultCard}
          handleInput={props.handleInput}
          handleCreateCard={props.handleCreateCard}
          collapsed={props.collapsed}
          handlePalette={props.handlePalette}
          rotate={props.rotate}
        />
      </main>
      <Footer />
    </>
  );
}

export default Card;
