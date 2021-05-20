import React from 'react';
import Card from './Card.js';

import URA_photo from '../assets/URALogo.png';
import UoGLogo from '../assets/UoGLogo.png';
import NokiaLogo from '../assets/BlueNokiaLogo.jpg';

const Blog = () => {
    const blog_photos = [ URA_photo, UoGLogo, NokiaLogo ];
    const blog_titles = [ 'May 2019 - August 2019 (My Undergraduate Research Assistantship Experience)', 'September 2019 - December 2019 (First time as a Teaching Assistant)', 'May 2020 - December 2020 (My Co-op experience at Nokia)' ];
    const blog_descriptions = [ 'Working at the Institutional Analysis and Research department at the University with the head Statistician creating analytical reports', 'My first time as a Teaching Assistant for the CIS1300 Introduction to Programming course', 'My first co-op work terms at Nokia for my Summer and Fall 2020 semesters'];
    const blog_links = [ '/ura_blog', '/ta_blog', '/nokia_blog'];
    const target = '_self';

    return (
        <div className="flex flex-row flex-wrap py-14 justify-center">
            <Card photo={blog_photos[0]} title={blog_titles[0]} description={blog_descriptions[0]} link={blog_links[0]} target={target} />
            <Card photo={blog_photos[1]} title={blog_titles[1]} description={blog_descriptions[1]} link={blog_links[1]} target={target} />
            <Card photo={blog_photos[2]} title={blog_titles[2]} description={blog_descriptions[2]} link={blog_links[2]} target={target} />
        </div>
 
    );
};

export default Blog;

