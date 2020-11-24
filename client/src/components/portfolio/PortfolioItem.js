
 export default function PortfolioItem(props) {

    return (
      <div  key={props.data.id} className="col" style={{margin:"auto"}}>
        <a rel="noreferrer" className="portfolio-item-link" target="_BLANK" href={props.data.externalLink}>
          <div className="portfolio-item" style={{backgroundImage:`url(${props.data.thumbnail})` }} />
        </a>
        <a rel="noreferrer" className="github-link" target="_BLANK" href={props.data.github}>
            <span className="project-title">{props.data.displayName} <i className="fab fa-github" /></span>
        </a>
       </div>
    );
 }
