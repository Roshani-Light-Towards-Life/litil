import React from 'react';

import ReactMarkdown from 'react-markdown'
import { buildImageUri } from "../util"

const TrainingCentreDetail = (props) => {
    const { trainingCenter } = props;
    return (
        <section className="causes-detail-area">
            <div className="container">
                <div className="row blog-content-wrap">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
    {trainingCenter.article.images.length>0 && <img src={buildImageUri(trainingCenter.article.images[0].url)} alt="" /> }
                                </div>
                                <div className="blog-inner-content">
                                    <div className="inner-causes-box">
                                        <h3 className="blog__title">{trainingCenter.name}
                                        </h3>
                                        <ul className="blog__list">
                                            <li><i className="fa fa-user"></i>Center Lead Manager: <span>{trainingCenter.leadManager}</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-inner-content-2">
                                    <ReactMarkdown source={trainingCenter.article.content} className="causes__text"/>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-shared">
                            <div className="side-widget">
                                <div className="author-box">
                                    <div className="author__avatar">
                                        <img src="/images/author-avatar.jpg" alt="" />
                                    </div>
                                    <div className="author__detail">
                                        <h4 className="author__title"> <a href="#">{trainingCenter.name}</a></h4>
                                        <ul className="author__list">
                                            <li><i className="fa fa-phone"></i> {trainingCenter.contactNumber}</li>
                                            <li><i className="fa fa-envelope"></i> {trainingCenter.email}</li>
                                            <li><i className="fa fa-map-marker"></i> {trainingCenter.address}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div><br/></div>
                                    <h2 className="widget__title">Centre Executives</h2>
                                    { trainingCenter.executives && trainingCenter.executives.map(executive => (
                                          <div className="author-box recent-donate-item">
                                              <div className="author__avatar">
                                                  <img src="/images/author-avatar2.jpg" alt="" />
                                              </div>
                                              <div className="author__detail">
                                                  <h4 className="author__title author__title2">{executive.name}</h4>
                                                  <ul className="author__list">
                                                  <li><i className="fa fa-phone"></i> {executive.contactNumber}</li>
                                                  <li><i className="fa fa-envelope"></i>{executive.email}</li>
                                                  </ul>
                                              </div>
                                          </div>
                                        ))
                                    }
                              </div>
                          </div>
                     </div>
                </div>
                <section className="causes-area upcoming-event-area upcoming-event-area2">
                    <div className="container">
                        <div className="row blog-content-wrap">
                        {
                            trainingCenter.activities && trainingCenter.activities.map(activity => (
                              <div className="col-lg-6">
                                  <div className="blog-content">
                                      <div className="blog-item blog-item1">
                                          <div className="blog-img">
                                              {activity.images.length>0 && <img src={buildImageUri(activity.images[0].url)} alt="" />}
                                          </div>

                                          <div className="blog-inner-content">
                                              <div className="blog-inner-content-2">
                                              <ul className="author__list">
                                                  <li><h4> {activity.name}</h4></li>
                                                  <li> Event date: {activity.eventDate}</li>
                                              </ul>
                                              <br/>
                                              {activity.POC.length>0 && 
                                              <ul className="author__list">
                                              <li><i className="fa fa-user"></i> {activity.POC[0].name}</li>
                                              <li><i className="fa fa-phone"></i> {activity.POC[0].phoneNumber}</li>
                                              <li><i className="fa fa-envelope"></i> {activity.POC[0].email}</li>
                                          </ul>}
                                                  
                                                <ReactMarkdown source={activity.Description} className="causes__text"/>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                            ))
                          }
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default TrainingCentreDetail;
