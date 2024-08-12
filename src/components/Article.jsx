import React from 'react'
import './Article.css'
import house1 from "../images/House1.jpg"
import house2 from "../images/House2.jpg"
import house3 from "../images/House3.jpg"

export default function Article() {
  return (
    <>
            <div className='card-1'>
        <article className="article-wrapper">
        <div className="rounded-lg container-project">
            <img className="card__image" src={house2} alt="Card image cap"/>
            </div>
            <div className="project-info">
            <div className="flex-pr">
                <div className="project-title text-nowrap">Project</div>
                <div className="project-hover">
                    <svg style={{color:' black'}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </div>
        </article>
        <article className="article-wrapper">
        <div className="rounded-lg container-project">
            <img className="card__image" src={house3} alt="Card image cap"/>
            </div>
            <div className="project-info">
            <div className="flex-pr">
                <div className="project-title text-nowrap">Project</div>
                <div className="project-hover">
                    <svg style={{color:' black'}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </div>
        </article>
        <article className="article-wrapper">
        <div className="rounded-lg container-project">
            <img className="card__image" src={house1} alt="Card image cap"/>
            </div>
            <div className="project-info">
            <div className="flex-pr">
                <div className="project-title text-nowrap">Project</div>
                <div className="project-hover">
                    <svg style={{color:' black'}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </div>
        </article>
        <article className="article-wrapper">
        <div className="rounded-lg container-project">
            <img className="card__image" src={house3} alt="Card image cap"/>
            </div>
            <div className="project-info">
            <div className="flex-pr">
                <div className="project-title text-nowrap">Project</div>
                <div className="project-hover">
                    <svg style={{color:' black'}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            </div>
        </article>
    </div>
        <div className='btn'>
            <button className="button type1">
              <span className="btn-txt">See More</span>
            </button>
          </div> 
    </>

  )
}
