const posts_data = [
  {
    user_img:"./assets/img/meowed.svg",
    user:"meowed",
    content:"./assets/img/gato-telefone.svg",
    like_img: "./assets/img/respondeai.svg",
    like_user:"respondeai",
    other_likes: 101.523
  },
  {
    user_img:"./assets/img/barked.svg" ,
    user:"barked",
    content:"./assets/img/dog.svg",
    like_img: "./assets/img/adorable_animals.svg",
    like_user:"adorable_animals",
    other_likes: 99.159
  }
];

const Post = (props) => {
  return (
    <div className="post">
    <div className="topo">
      <div className="usuario">
        <img src={props.user_img} />
        {props.user}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div className="conteudo">
      <img src={props.content} />
    </div>

    <div className="fundo">
      <div className="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div className="curtidas">
        <img src={props.like_img} />
        <div className="texto">
          Curtido por <strong>{props.like_user}</strong> e <strong>outras {props.other_likes} pessoas</strong>
        </div>
      </div>
    </div>
  </div>
  );
}

export default function Posts(){
    return (
      <div className="posts">
          {posts_data.map((elem, index)=> <Post 
            key = {index}
            user_img = {elem.user_img} 
            user = {elem.user} 
            content = {elem.content} 
            like_img = {elem.like_img} 
            like_user = {elem.like_user} 
            other_likes = {elem.other_likes} 
          />)} 
      </div>
    );
}