const stories_data = [
  {
    img:"./assets/img/9gag.svg",
    user:"9gag"
  },
  {
    img:"./assets/img/meowed.svg",
    user:"meowed"
  },
  {
    img:"./assets/img/barked.svg",
    user:"barked"
  },
  {
    img:"./assets/img/nathanwpylestrangeplanet.svg",
    user:"nathanwpylestrangeplanet"
  },
  {
    img:"./assets/img/wawawicomics.svg",
    user:"wawawicomics"
  },
  {
    img:"./assets/img/respondeai.svg",
    user:"respondeai"
  },
  {
    img:"./assets/img/filomoderna.svg",
    user:"filomoderna"
  },
  {
    img:"./assets/img/memeriagourmet.svg",
    user:"memeriagourmet"
  }
];

const Storie = (props) => {
  return(
    <div className="story">
        <div className="imagem">
          <img src={props.img} />
        </div>
        <div className="usuario">
          {props.user}
        </div>
      </div>
  );
}

export default function Stories(){
    return (
        <div className="stories">
            {stories_data.map((storie_data, index) => <Storie
              key = {index}
              img = {storie_data.img} 
              user = {storie_data.user}
            />)}
            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}