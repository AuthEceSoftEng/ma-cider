import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'antd/lib/breadcrumb';
import Icon from 'antd/lib/icon';
import { removeBaseHref } from '../../utilities/helpers';

/**
 * The last item is the current router
 * @param {object} props
 * @param {string} props.base - e.g guidebook/case-studies
 * @param {[object]} props.items
 * @param {string} props.items[].title
 * @param {string} props.items[].icon - optional
 * @param {boolean} props.removeBaseHref 
 */
const BreadcrumbRouter = (props) => {
    return (
        <Breadcrumb>
            {
                props.items.map((item, i) => {
                    if (i < props.items.length - 1) {
                        return (
                            <Breadcrumb.Item key={i}>
                                <Link className='more-contrast' to={getLink(props.removeBaseHref === true ? removeBaseHref(window.location.pathname) : window.location.pathname, i, props.base)}>
                                    {item.icon ? <Icon type={item.icon} style={{ marginRight: '4px', color: 'inherit' }} /> : null}
                                    <span style={{ color: 'inherit' }}>{item.title}</span>
                                </Link>
                            </Breadcrumb.Item>
                        )
                    } else {
                        return (
                            <Breadcrumb.Item key={i}>
                                {item.icon ? <Icon type={item.icon} style={{ marginRight: '4px' }} /> : null}
                                <span>{item.title}</span>
                            </Breadcrumb.Item>)
                    }

                })
            }
        </Breadcrumb>
    )
}

const getLink = (path, index, base) => {
    let spl = path.split('/').splice(1);
    return index === 0 ? `/${base}` : `/${base}/${spl[base.split('/').length + index - 1]}`;
}

export default BreadcrumbRouter
