
 export default function PortfolioItem(props) {
   // Some items have a github link as well as an external link, and some do not.
   // For the ones that don't, we substitute the regular external link, and change the icon to
   // a link icon instead of the github icon.
    let gh=props.data.externalLink;
    let icon="fas fa-link";
    // If this item does have a github link, then we can use it and the github icon.
    if(props.data.github){
       gh=props.data.github;
       icon="fab fa-github";
      }
    return (
      <div  key={props.data.id} className="col" style={{margin:"auto"}}>
        <a rel="noreferrer" className="portfolio-item-link" target="_BLANK" href={props.data.externalLink}>
          <div className="portfolio-item" style={{backgroundImage:`url(${props.data.thumbnail})` }} />
        </a>
        <a rel="noreferrer" className="github-link" target="_BLANK" href={gh}>
            <span className="project-title">{props.data.displayName} 
              <i className={icon} />
            </span>
        </a>
       </div>
    );
 }
