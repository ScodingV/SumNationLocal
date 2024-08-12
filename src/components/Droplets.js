function Droplets(props) {
    return (
        <a href={props.link}>
            <img src={props.src} class={props.class} alt={props.alt}></img>
        </a>
    );
  }
  
export default Droplets;