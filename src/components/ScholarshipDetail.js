import React from 'react';
import ReactMarkdown from 'react-markdown'
import GalleryCarousel from "./GalleryCarousel"
import { buildImageUri } from "../util"
const ScholarshipDetail = (props) => {
    const { scholarship } = props;
    const students = []
    for (const student of scholarship.students) {
        if (student.image) {
            students.push(
                <div className="col-lg-2 col-sm-6 col-half-offset">
                    <div className="team-item team-item1">
                        <div className="team__img">
                            <img src={buildImageUri(student.image.url)} alt="team image" />
                            <div className="team__img-links2">
                                <span className="team__title-meta">rank – {student.classRank}</span>
                            </div>
                        </div>
                        <div className="team__title">
                            <h3 className="team__title-title">{student.name}</h3>
                            <span className="team__title-meta">Class – {student.class}</span>
                        </div>
                    </div>
                </div>
            )
        } else {
            students.push(
                <div className="col-lg-2 col-sm-6 col-half-offset">
                    <div className="team-item team-item1">
                        <div className="team__title">
                            <h3 className="team__title-title">{student.name}</h3>
                            <span className="team__title-meta">Class – {student.class}</span>
                            <span className="team__title-meta">rank – {student.classRank}</span>

                        </div>
                    </div>
                </div>
            )
        }

    }
    return (
        <section className="event-detail-area no-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-content">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <GalleryCarousel images={scholarship.article.images}></GalleryCarousel>
                                    <span className="blog__tag">
                                        <span className="date__num-text">{scholarship.year}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="event-detail-content">
                            <div className="event-detail-item">
                                <ReactMarkdown source={scholarship.article.content} className="event__text" />
                            </div>
                            <div className="event-detail-item">
                                <h3 className="event__title event__title2">Students Benifited</h3>
                                <section className="team-area team-area2 text-center no-padding">
                                    <div className="container">
                                        <div className="row team-content-wrap">
                                            {students}
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
};

export default ScholarshipDetail;
