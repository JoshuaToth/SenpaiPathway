import * as React from 'react';
import Link from 'gatsby-link';


export const SectionTile = (props: any) => {
    return (
        <div className='col-lg-4 col-md-6'>
            <Link to={ props.link }>
                <img src={ props.image } />
                <h3>
                    {props.title}
                </h3>
            </Link>
        </div>
    );
}

export default SectionTile;