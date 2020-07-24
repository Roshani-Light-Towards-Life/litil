import React, { Component } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'
import { buildImageUri } from "../util"
class SchoolDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedYear: 'Year'
        }
    }
    handleYearChange = (event) => {
        this.setState({ selectedYear: event.target.value })
    }
    yearDropdown = () => {
        let yearChoices = []
        for (const year of Object.keys(this.props.school.yearsWiseScholarships)) {
            yearChoices.push(<option value={year} key={year}>{year}</option>)
        }
        return (
            <div className="form-shared">
                <form action="#">
                    <div className="form-group">
                        <div className="select-group">
                            <select className="select-option" value={this.selectedYear} onChange={this.handleYearChange}>
                                <option value="Year">Select Year</option>
                                {yearChoices}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
    renderScholarships = () => {
        if (this.state.selectedYear != 'Year') {
            let scholarships = []
            for (const scholarship of this.props.school.yearsWiseScholarships[this.state.selectedYear]) {
                scholarships.push(<div className="author-box recent-donate-item">
                    <div className="author__detail">
                        <h4 className="author__title author__title2">
                            <Link href="/scholarship?id=[id][schoolId]" as={`/scholarship/${scholarship.id}/${this.props.school.id}`}><a>{scholarship.name}</a></Link>
                        </h4>
                    </div>
                </div>)
            }
            return scholarships;
        }
        return null;
    }
    render() {
        const { school } = this.props;

        return (
            <section className="causes-detail-area">
                <div className="container">
                    <div className="row blog-content-wrap">
                        <div className="col-lg-8">
                            <div className="blog-content">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        {school.image?<img src={buildImageUri(school.image.url)} alt="" />: null}
                                    </div>
                                    <div className="blog-inner-content">
                                        <div className="inner-causes-box">
                                            <ul className="blog__list">
                                                <li><i className="fa fa-user"></i> Principal: <span>{school.principalName}</span></li>
                                                <li><i className="fa fa-user"></i> Contact Person: <span>{school.pocName}</span></li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="blog-inner-content-2">
                                        {school.article?<ReactMarkdown source={school.article.content} className="causes__text" />:null}
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
                                            <h4 className="author__title">Contact Person: <a href="#">{school.pocName}</a></h4>
                                            <ul className="author__list">
                                                <li><i className="fa fa-map-marker"></i> {school.address}</li>
                                                <li><i className="fa fa-phone"></i> {school.phoneNumber}</li>
                                                <li><i className="fa fa-envelope"></i> {school.email}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-widget">
                                    <h2 className="widget__title">Scholarships</h2>
                                    {this.yearDropdown()}
                                    {this.renderScholarships()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

};

export default SchoolDetail;
