import React from 'react';
import Button from 'antd/lib/button'
import Icon from 'antd/lib/icon'
import { Link } from 'react-router-dom'

/**
 * 
 * @param {object} props
 * @param {string} props.to - The href link
 * @param {label} props.label
 * @param {icon} props.icon - default 'right'
 * @param {string} props.type - default 'primary'
 * @param {string} props.backwards - default false
 * @param {object} props.style 
 * @param {string} props.mode - default 'link'
 * @param {function} props.onClick 
 */
const ButtonNextPage = props => {
    return props.mode !== 'onClick' ?
        (<Link to={props.to}>
            {props.backwards ?
                <Button aria-label="Go back" style={{ float: 'right', ...props.style }} type={props.type ? props.type : 'default'}>
                    <Icon type={props.icon ? props.icon : 'left'} />{props.label}
                </Button> :
                <Button aria-label="Go forward" style={{ float: 'right', ...props.style }} type={props.type ? props.type : 'default'}>
                    {props.label}<Icon type={props.icon ? props.icon : 'right'} />
                </Button>
            }
        </Link>)
        :
        (props.backwards ?
            <Button aria-label="Go left" onClick={() => { props.onClick() }} style={{ float: 'right', ...props.style }} type={props.type ? props.type : 'default'}>
                <Icon type={props.icon ? props.icon : 'left'} />{props.label}
            </Button> :
            <Button aria-label="Go right" onClick={() => { props.onClick() }} style={{ float: 'right', ...props.style }} type={props.type ? props.type : 'default'}>
                {props.label}<Icon type={props.icon ? props.icon : 'right'} />
            </Button>
        )
}

export default ButtonNextPage;
