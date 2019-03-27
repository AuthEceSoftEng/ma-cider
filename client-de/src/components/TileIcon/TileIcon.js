import React from 'react';
import { Icon } from 'antd';
import { BannerArrow } from '../_index'
import './TileIcon.css';

/**
 * 
 * @param {object} props
 * @param {object} props.containerStyle
 * @param {string} props.contentStyle
 * @param {string} props.bgColor 
 * @param {string} props.icon 
 * @param {string} props.icon.type
 * @param {string} props.icon.theme
 * @param {string} props.icon.color
 * @param {object} props.icon.style
 * @param {object} props.image
 * @param {string} props.image.src
 * @param {object} props.image.style
 * @param {any} props.children
 * @param {function} props.onClick
 * @param {boolean} props.withBannerArrow
 * @param {function} props.upperChildren
 */
const TileIcon = props => {
    const { containerStyle, contentStyle, bgColor, icon, image, children, withBannerArrow, upperChildren, onClick } = props;
    return (
        <div className='tile-icon-container'
            style={{
                backgroundColor: bgColor ? bgColor : 'white',
                cursor: onClick ? 'pointer' : 'default',
                ...containerStyle
            }}
            onClick={() => {
                if (onClick) {
                    onClick()
                } else {
                    return false;
                }
            }}
        >
            {upperChildren && upperChildren()}
            {icon ?
                <Icon className='tile-icon-icon' theme={icon.theme ? icon.theme : 'outlined'} type={icon.type} style={{ color: icon.color ? icon.color : '#2c3e50', ...icon.style }} />
                :
                <img alt='a-tile-icon' className='tile-icon-icon' style={image.style} src={image.src} />
            }
            <div className='tile-icon-content' style={contentStyle}>
                {children}
            </div>
            {withBannerArrow && <BannerArrow />}
        </div>
    )
}

export default TileIcon;
