import * as React from 'react';

export const Contributor = (props: any) => {
    return (
        <div className='col-md-4 contributor profile'>
            <img className='profile-image' src={`https://avatars2.githubusercontent.com/u/${props.userId}?s=160&v=4`} />
            <p>{ props.name }</p>
            <a target='blank' href={`https://www.twitter.com/${props.twitter}`}>
                <i className='fab fa-twitter fa-5 primary-text-color'></i>
            </a>
            <a target='blank' href={`https://github.com/${props.github}`}>
                <i className='fab fa-github fa-5 primary-text-color'></i>
            </a>
        </div>
    );
}

export default Contributor;